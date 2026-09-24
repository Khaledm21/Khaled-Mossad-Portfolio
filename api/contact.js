function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export default async function handler(req, res) {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    return res.status(200).end()
  }

  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Method Not Allowed. Please use POST.' })
  }

  // Verify server environment variable
  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) {
    console.error('Server Configuration Error: BREVO_API_KEY is missing from environment.')
    return res.status(500).json({
      error: 'Server configuration error: BREVO_API_KEY is not configured in Vercel.',
    })
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {})
    const { name, email, subject, message } = body

    // Validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'Please provide your name.' })
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      return res.status(400).json({ error: 'Please provide your email address.' })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ error: 'Please enter a valid email address.' })
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Please enter your message.' })
    }

    const cleanName = name.trim().slice(0, 100)
    const cleanEmail = email.trim().slice(0, 120)
    const cleanSubject = (subject && typeof subject === 'string' ? subject.trim() : '').slice(0, 150)
    const cleanMessage = message.trim().slice(0, 5000)

    // Brevo recipient and verified sender
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'khaledmossad221@gmail.com'
    const senderEmail = process.env.BREVO_SENDER_EMAIL || receiverEmail

    const emailSubject = cleanSubject
      ? `[Portfolio Contact] ${cleanSubject} — from ${cleanName}`
      : `[Portfolio Contact] New message from ${cleanName}`

    const safeName = escapeHtml(cleanName)
    const safeEmail = escapeHtml(cleanEmail)
    const safeSubject = escapeHtml(cleanSubject)
    const safeMessage = escapeHtml(cleanMessage)

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Portfolio Message</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #060611; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #e2e8f0;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #0c0c1e; border: 1px solid #1e1e38; border-radius: 16px; overflow: hidden; box-shadow: 0 15px 35px rgba(0,0,0,0.5);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%); padding: 28px 24px; text-align: left;">
      <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 800; letter-spacing: -0.02em;">New Portfolio Inquiry</h1>
      <p style="margin: 6px 0 0 0; color: rgba(255,255,255,0.85); font-size: 13px;">Sent from your portfolio contact form</p>
    </div>

    <!-- Body -->
    <div style="padding: 28px 24px;">
      
      <!-- Meta details table -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 22px;">
        <tr>
          <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; width: 90px; vertical-align: top; font-weight: 600;">Sender:</td>
          <td style="padding: 8px 0; color: #ffffff; font-size: 14px; font-weight: 700;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; vertical-align: top; font-weight: 600;">Email:</td>
          <td style="padding: 8px 0; color: #818cf8; font-size: 14px;">
            <a href="mailto:${safeEmail}" style="color: #818cf8; text-decoration: underline;">${safeEmail}</a>
          </td>
        </tr>
        ${safeSubject ? `
        <tr>
          <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; vertical-align: top; font-weight: 600;">Subject:</td>
          <td style="padding: 8px 0; color: #e2e8f0; font-size: 14px;">${safeSubject}</td>
        </tr>
        ` : ''}
      </table>

      <!-- Message box -->
      <div style="background-color: #060613; border: 1px solid #1a1a33; border-left: 4px solid #6366f1; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
        <p style="margin: 0 0 10px 0; color: #818cf8; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 700;">Message</p>
        <div style="color: #f1f5f9; font-size: 14px; line-height: 1.7; white-space: pre-wrap; word-break: break-word;">${safeMessage}</div>
      </div>

      <!-- Action Button -->
      <div style="text-align: center; padding-top: 12px; border-top: 1px solid #18182f;">
        <a href="mailto:${safeEmail}?subject=Re:%20${encodeURIComponent(cleanSubject || 'Your message via Portfolio')}"
           style="display: inline-block; background-color: #6366f1; color: #ffffff; padding: 12px 26px; border-radius: 10px; text-decoration: none; font-size: 13px; font-weight: 700; box-shadow: 0 4px 15px rgba(99,102,241,0.35);">
          Reply to ${safeName}
        </a>
      </div>

    </div>

    <!-- Footer -->
    <div style="background-color: #080816; padding: 14px 24px; text-align: center; border-top: 1px solid #16162c;">
      <p style="margin: 0; color: #64748b; font-size: 11.5px;">Khaled Mossad Portfolio • Brevo Transactional Service</p>
    </div>

  </div>
</body>
</html>`

    const textContent = `New Portfolio Contact Message
----------------------------------------
From: ${cleanName}
Email: ${cleanEmail}
Subject: ${cleanSubject || 'N/A'}

Message:
${cleanMessage}
----------------------------------------
Reply directly to: ${cleanEmail}`

    // Call Brevo Transactional Email API v3
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: `${cleanName} (via Portfolio)`,
          email: senderEmail,
        },
        to: [
          {
            email: receiverEmail,
            name: 'Khaled Mossad',
          },
        ],
        replyTo: {
          email: cleanEmail,
          name: cleanName,
        },
        subject: emailSubject,
        htmlContent,
        textContent,
      }),
    })

    const brevoData = await brevoResponse.json().catch(() => ({}))

    if (!brevoResponse.ok) {
      console.error('Brevo API Error:', brevoResponse.status, brevoData)
      return res.status(brevoResponse.status || 500).json({
        error: brevoData.message || 'Brevo was unable to deliver the email. Please try again.',
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!',
      messageId: brevoData.messageId,
    })
  } catch (error) {
    console.error('Contact handler unexpected error:', error)
    return res.status(500).json({
      error: 'An unexpected error occurred while processing your message. Please try again later.',
    })
  }
}
