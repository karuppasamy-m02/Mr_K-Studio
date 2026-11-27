import React from 'react';
import { Metadata } from 'next';
import LocalLandingPage from '@/components/LocalLandingPage';
import { localPagesData } from '@/data/landing-pages-data';
import { notFound } from 'next/navigation';

const slug = 'digital-marketing-madurai';
const data = localPagesData[slug];

export const metadata: Metadata = {
  title: data?.metaTitle,
  description: data?.metaDescription,
  alternates: {
    canonical: `https://mrkagency.com/${slug}`,
  },
  openGraph: {
    title: data?.metaTitle,
    description: data?.metaDescription,
    url: `https://mrkagency.com/${slug}`,
  },
};

export default function Page() {
  if (!data) notFound();
  return <LocalLandingPage data={data} />;
}
