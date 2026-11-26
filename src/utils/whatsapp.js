// WhatsApp customer acquisition helper
export const WHATSAPP_NUMBER = "918270374293";
export const DISPLAY_PHONE = "+91 8270374293";
export const BUSINESS_LOCATION = "Tiruchirappalli (Trichy), Tamil Nadu, India";

/**
 * Builds the official WhatsApp web/app link with a pre-filled, structured message
 */
export function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

/**
 * Formats a project enquiry into a crisp, high-converting WhatsApp message
 */
export function formatEnquiryMessage({
  fullName,
  businessName,
  whatsapp,
  email,
  location,
  service,
  budget,
  projectDetails
}) {
  return `*NEW PROJECT ENQUIRY — MR K*
────────────────────────
👤 *Client Name:* ${fullName || 'Not specified'}
🏢 *Business Name:* ${businessName || 'Not specified'}
📍 *Location:* ${location || 'Trichy, TN'}
📱 *WhatsApp:* ${whatsapp || 'Not specified'}
✉️ *Email:* ${email || 'Not specified'}

🎯 *Required Service:* ${service || 'General Consultation'}
💰 *Estimated Budget:* ${budget || 'To be discussed'}

📝 *Project Overview:*
${projectDetails || 'I would like to discuss a digital branding & growth project for my business.'}
────────────────────────
_Sent via MR K Official Website_`;
}

/**
 * Formats a quick package selection message
 */
export function formatPackageMessage(packageName, price) {
  return `*PACKAGE ENQUIRY — MR K*
────────────────────────
Hello MR K Team!
I am interested in getting started with the *${packageName}* (${price}).

Could you please share the next steps and onboarding details for my business?
────────────────────────
_Sent via MR K Website_`;
}

/**
 * Formats a quick service quote message
 */
export function formatServiceQuoteMessage(serviceTitle) {
  return `*SERVICE QUOTE REQUEST — MR K*
────────────────────────
Hello MR K Team!
I would like to request a quotation and details for:
🎯 *${serviceTitle}*

My business is located in Tamil Nadu/Trichy and we would like to discuss our requirements.
────────────────────────
_Sent via MR K Website_`;
}
