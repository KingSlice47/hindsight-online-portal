/**
 * POST /api/contact
 *
 * Receives contact form submissions and forwards them via Resend.
 *
 * Required environment variables (set in Cloudflare Pages → Settings → Environment variables):
 *   RESEND_API_KEY      — API key from resend.com
 *   CONTACT_TO_EMAIL    — destination inbox, e.g. info@hindsightonline.co.za
 *   CONTACT_FROM_EMAIL  — verified sender, e.g. noreply@hindsightonline.co.za
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function parseBody(request) {
  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return await request.json();
  }
  const form = await request.formData();
  const obj = {};
  for (const [key, value] of form.entries()) {
    obj[key] = typeof value === 'string' ? value : '';
  }
  return obj;
}

export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = await parseBody(request);
  } catch {
    return json({ success: false, error: 'Invalid request body.' }, 400);
  }

  if (data.honeypot && data.honeypot.trim() !== '') {
    return json({ success: true });
  }

  const name = (data.name || '').toString().trim();
  const email = (data.email || data._replyto || '').toString().trim();
  const subject = (data.subject || data._subject || '').toString().trim();
  const message = (data.message || '').toString().trim();

  const errors = [];
  if (!name) errors.push('Name is required.');
  if (!email || !EMAIL_REGEX.test(email)) errors.push('Valid email is required.');
  if (!subject) errors.push('Subject is required.');
  if (!message) errors.push('Message is required.');

  if (errors.length) {
    return json({ success: false, error: errors.join(' ') }, 400);
  }

  const apiKey = env.RESEND_API_KEY;
  const toEmail = env.CONTACT_TO_EMAIL || 'info@hindsightonline.co.za';
  const fromEmail = env.CONTACT_FROM_EMAIL || 'noreply@hindsightonline.co.za';

  if (!apiKey) {
    return json(
      { success: false, error: 'Email service is not configured. Please contact us directly.' },
      500,
    );
  }

  const submittedAt = new Date().toISOString();
  const textBody = [
    'New contact form submission from the Hindsight Consulting website:',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    '',
    'Message:',
    message,
    '',
    '---',
    `Submitted at: ${submittedAt}`,
  ].join('\n');

  const htmlBody = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    <hr>
    <p style="color:#888;font-size:12px;">Submitted at ${submittedAt}</p>
  `;

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Hindsight Website <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: `Contact Form: ${subject}`,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!resp.ok) {
      const detail = await resp.text();
      console.error('Resend API error', resp.status, detail);
      return json(
        { success: false, error: 'Failed to send message. Please try again later.' },
        502,
      );
    }
  } catch (err) {
    console.error('Resend request failed', err);
    return json(
      { success: false, error: 'Failed to send message. Please try again later.' },
      502,
    );
  }

  return json({ success: true });
}

export function onRequest() {
  return new Response('Method Not Allowed', {
    status: 405,
    headers: { Allow: 'POST' },
  });
}
