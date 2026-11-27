'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function GoldRibbonSculpture() {
  const containerRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080808, 0.035);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Create a high-contrast luxury studio environment map
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const envCanvas = document.createElement('canvas');
    envCanvas.width = 512;
    envCanvas.height = 256;
    const ctx = envCanvas.getContext('2d');
    if (ctx) {
      // Dark studio background
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, 512, 256);

      // Warm overhead softbox
      const grad1 = ctx.createRadialGradient(256, 40, 10, 256, 40, 180);
      grad1.addColorStop(0, '#FFF5D0');
      grad1.addColorStop(0.3, '#E5C068');
      grad1.addColorStop(1, '#0a0a0a');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, 512, 140);

      // Gold rim strip right
      const grad2 = ctx.createLinearGradient(400, 0, 512, 256);
      grad2.addColorStop(0, '#FFD700');
      grad2.addColorStop(0.5, '#D4AF37');
      grad2.addColorStop(1, '#0a0a0a');
      ctx.fillStyle = grad2;
      ctx.fillRect(380, 40, 132, 216);

      // Cool rim strip left
      const grad3 = ctx.createLinearGradient(0, 0, 120, 256);
      grad3.addColorStop(0, '#FFFFFF');
      grad3.addColorStop(0.5, '#A1A1A1');
      grad3.addColorStop(1, '#0a0a0a');
      ctx.fillStyle = grad3;
      ctx.fillRect(0, 40, 120, 216);
    }

    const envTexture = new THREE.CanvasTexture(envCanvas);
    envTexture.mapping = THREE.EquirectangularReflectionMapping;
    const envMap = pmremGenerator.fromEquirectangular(envTexture).texture;
    scene.environment = envMap;

    // Master Group for sculpture
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // Realistic Polished Metallic Gold Material
    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#E6C35C'),
      emissive: new THREE.Color('#1F1604'),
      metalness: 0.98,
      roughness: 0.14,
      clearcoat: 0.85,
      clearcoatRoughness: 0.1,
      reflectivity: 1.0,
      envMap: envMap,
      envMapIntensity: 1.8,
    });

    const champagneMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#F0D892'),
      emissive: new THREE.Color('#1A1303'),
      metalness: 0.96,
      roughness: 0.18,
      clearcoat: 0.7,
      clearcoatRoughness: 0.15,
      reflectivity: 0.9,
      envMap: envMap,
      envMapIntensity: 1.5,
    });

    // Helper to generate a parametric flat ribbon along a 3D curve
    function createRibbonGeometry(curveFunc, samples = 240, width = 0.42, thickness = 0.04) {
      const points = [];
      for (let i = 0; i <= samples; i++) {
        const t = (i / samples) * Math.PI * 2;
        points.push(curveFunc(t));
      }
      const curve = new THREE.CatmullRomCurve3(points, true, 'centripetal');

      // Generate ribbon vertices by tracking Frenet frames
      const geom = new THREE.BufferGeometry();
      const vertices = [];
      const normals = [];
      const uvs = [];
      const indices = [];

      const frames = curve.computeFrenetFrames(samples, true);

      for (let i = 0; i <= samples; i++) {
        const u = i / samples;
        const pt = curve.getPointAt(u);
        const normal = frames.normals[i];
        const binormal = frames.binormals[i];

        // Slight progressive twist for natural ribbon aesthetic
        const twistAngle = u * Math.PI * 2 * 1.5;
        const cosT = Math.cos(twistAngle);
        const sinT = Math.sin(twistAngle);

        const rotatedBinormal = new THREE.Vector3()
          .copy(binormal)
          .multiplyScalar(cosT)
          .addScaledVector(normal, sinT)
          .normalize();

        const rotatedNormal = new THREE.Vector3()
          .copy(normal)
          .multiplyScalar(cosT)
          .addScaledVector(binormal, -sinT)
          .normalize();

        // 4 corners of ribbon cross section
        const halfW = width * 0.5;
        const halfT = thickness * 0.5;

        const p1 = new THREE.Vector3().copy(pt).addScaledVector(rotatedBinormal, -halfW).addScaledVector(rotatedNormal, halfT);
        const p2 = new THREE.Vector3().copy(pt).addScaledVector(rotatedBinormal, halfW).addScaledVector(rotatedNormal, halfT);
        const p3 = new THREE.Vector3().copy(pt).addScaledVector(rotatedBinormal, halfW).addScaledVector(rotatedNormal, -halfT);
        const p4 = new THREE.Vector3().copy(pt).addScaledVector(rotatedBinormal, -halfW).addScaledVector(rotatedNormal, -halfT);

        // Push 4 vertices per slice
        vertices.push(p1.x, p1.y, p1.z);
        vertices.push(p2.x, p2.y, p2.z);
        vertices.push(p3.x, p3.y, p3.z);
        vertices.push(p4.x, p4.y, p4.z);

        // Approximate outward normals
        normals.push(rotatedNormal.x, rotatedNormal.y, rotatedNormal.z);
        normals.push(rotatedNormal.x, rotatedNormal.y, rotatedNormal.z);
        normals.push(-rotatedNormal.x, -rotatedNormal.y, -rotatedNormal.z);
        normals.push(-rotatedNormal.x, -rotatedNormal.y, -rotatedNormal.z);

        uvs.push(0, u, 1, u, 1, u, 0, u);
      }

      for (let i = 0; i < samples; i++) {
        const row1 = i * 4;
        const row2 = (i + 1) * 4;

        // Top face
        indices.push(row1, row1 + 1, row2 + 1);
        indices.push(row1, row2 + 1, row2);

        // Right side
        indices.push(row1 + 1, row1 + 2, row2 + 2);
        indices.push(row1 + 1, row2 + 2, row2 + 1);

        // Bottom face
        indices.push(row1 + 2, row1 + 3, row2 + 3);
        indices.push(row1 + 2, row2 + 3, row2 + 2);

        // Left side
        indices.push(row1 + 3, row1, row2);
        indices.push(row1 + 3, row2, row2 + 3);
      }

      geom.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      geom.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
      geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      geom.setIndex(indices);
      geom.computeVertexNormals();

      return geom;
    }

    // Curve 1: Majestic Primary Sweeping Ribbon (Mobius / Trefoil intertwined geometry)
    const ribbonGeom1 = createRibbonGeometry((t) => {
      const R = 2.0;
      const r = 0.7;
      const x = (R + r * Math.cos(3 * t)) * Math.cos(2 * t);
      const y = (R + r * Math.cos(3 * t)) * Math.sin(2 * t);
      const z = r * Math.sin(3 * t) * 1.8;
      return new THREE.Vector3(x, y, z);
    }, 280, 0.44, 0.045);

    const ribbonMesh1 = new THREE.Mesh(ribbonGeom1, goldMaterial);
    ribbonMesh1.castShadow = true;
    ribbonMesh1.receiveShadow = true;
    sculptureGroup.add(ribbonMesh1);

    // Curve 2: Intersecting Counter-Flowing Metallic Ribbon
    const ribbonGeom2 = createRibbonGeometry((t) => {
      const a = 1.9;
      const b = 1.3;
      const x = Math.sin(t) * (a + 0.5 * Math.cos(2 * t));
      const y = Math.cos(t) * (b + 0.4 * Math.sin(3 * t));
      const z = Math.sin(2 * t) * 1.2;
      return new THREE.Vector3(x, y, z);
    }, 240, 0.32, 0.038);

    const ribbonMesh2 = new THREE.Mesh(ribbonGeom2, champagneMaterial);
    ribbonMesh2.rotation.set(0.6, 0.4, 0.2);
    ribbonMesh2.castShadow = true;
    ribbonMesh2.receiveShadow = true;
    sculptureGroup.add(ribbonMesh2);

    // Curve 3: Deep Orbital Golden Ring Weaving Through Center
    const torusGeom = new THREE.TorusGeometry(1.6, 0.09, 24, 120);
    const torusMesh = new THREE.Mesh(torusGeom, goldMaterial);
    torusMesh.rotation.x = Math.PI / 2.3;
    torusMesh.rotation.y = Math.PI / 4;
    sculptureGroup.add(torusMesh);

    // Central Floating Brand Disc (Authentic uncropped MR K Emblem)
    const discRadius = 0.95;
    const discGeom = new THREE.CylinderGeometry(discRadius, discRadius, 0.08, 64);
    
    // Texture loader for logo face
    const textureLoader = new THREE.TextureLoader();
    const logoTexture = textureLoader.load('/logo/mrk-logo.png');
    logoTexture.colorSpace = THREE.SRGBColorSpace;
    logoTexture.generateMipmaps = true;
    logoTexture.minFilter = THREE.LinearMipmapLinearFilter;

    const logoMaterial = new THREE.MeshBasicMaterial({
      map: logoTexture,
      transparent: true,
    });

    const rimMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#FFD700'),
      metalness: 0.98,
      roughness: 0.12,
      clearcoat: 1.0,
      envMap: envMap,
    });

    const discMaterials = [
      rimMaterial,   // sides
      logoMaterial,  // top (front)
      rimMaterial,   // bottom (back)
    ];

    const logoDisc = new THREE.Mesh(discGeom, discMaterials);
    logoDisc.rotation.x = Math.PI / 2;
    sculptureGroup.add(logoDisc);

    // Surrounding Floating Gold Micro-Particles
    const particleCount = 45;
    const particleGeom = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePos[i * 3] = (Math.random() - 0.5) * 8.5;
      particlePos[i * 3 + 1] = (Math.random() - 0.5) * 6.5;
      particlePos[i * 3 + 2] = (Math.random() - 0.5) * 6.5;
      particleScales[i] = Math.random() * 0.05 + 0.02;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffd700,
      size: 0.05,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeom, particleMaterial);
    scene.add(particleSystem);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfff3d6, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5dd, 2.6);
    keyLight.position.set(5, 7, 6);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xd4af37, 1.8);
    fillLight.position.set(-6, -3, 4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 2.0);
    rimLight.position.set(0, -6, -4);
    scene.add(rimLight);

    const centerPointLight = new THREE.PointLight(0xffd700, 2.5, 12);
    centerPointLight.position.set(0, 1.5, 2.5);
    scene.add(centerPointLight);

    // Mouse & Pointer Parallax Tracking
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
      targetRotationY = x * 0.45;
      targetRotationX = -y * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;

      // Adjust camera distance for mobile vs desktop
      if (width < 640) {
        camera.position.z = 8.8;
      } else if (width < 1024) {
        camera.position.z = 8.2;
      } else {
        camera.position.z = 7.4;
      }

      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Render & Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Continuous slow majestic rotation
      sculptureGroup.rotation.y += 0.0035;
      sculptureGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.12;

      // Gentle floating levitation
      sculptureGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.14;

      // Smooth mouse lerp damping
      sculptureGroup.rotation.y += (targetRotationY - sculptureGroup.rotation.y * 0.05) * 0.04;
      sculptureGroup.rotation.x += (targetRotationX - sculptureGroup.rotation.x * 0.05) * 0.04;

      // Logo Disc facing front while gently undulating
      logoDisc.rotation.z = Math.sin(elapsedTime * 0.5) * 0.06;

      // Particle subtle drifting
      particleSystem.rotation.y = elapsedTime * 0.015;
      particleSystem.rotation.x = Math.sin(elapsedTime * 0.01) * 0.05;

      // Point light breathing specular glint
      centerPointLight.position.x = Math.sin(elapsedTime * 0.7) * 2.5;
      centerPointLight.position.y = Math.cos(elapsedTime * 0.5) * 1.5;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      pmremGenerator.dispose();
      renderer.dispose();
      ribbonGeom1.dispose();
      ribbonGeom2.dispose();
      torusGeom.dispose();
      discGeom.dispose();
      particleGeom.dispose();
      goldMaterial.dispose();
      champagneMaterial.dispose();
      rimMaterial.dispose();
      logoMaterial.dispose();
      particleMaterial.dispose();
      envTexture.dispose();
      envMap.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!webglSupported) {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-8">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#101010] border-2 border-[#FFD700] p-4 flex items-center justify-center shadow-[0_0_60px_rgba(255,215,0,0.3)]">
          <img
            src="/logo/mrk-logo.png"
            alt="MR K Studio Brand Identity"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[450px] sm:h-[550px] lg:h-[680px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      aria-label="Interactive 3D MR K Gold Ribbon Sculpture"
    >
      {/* Subtle Atmospheric Gold Core Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#FFD700]/[0.08] blur-[100px] pointer-events-none -z-10" />
    </div>
  );
}
