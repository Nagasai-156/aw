import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, topic, message } = body;

        // Validate required fields
        if (!name || !email || !topic || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Email recipients
        const recipients = ['sainath@diigoo.com', 'nagasai@diigoo.com'];

        // Format the email content
        const emailContent = `
New Contact Form Submission from ArthaChain Website

Name: ${name}
Email: ${email}
Topic: ${topic}
Message:
${message}

---
This message was sent from the ArthaChain contact form.
        `.trim();

        // For now, log the submission (you can integrate with email service later)
        console.log('=== Contact Form Submission ===');
        console.log('To:', recipients.join(', '));
        console.log('From:', email);
        console.log('Subject:', `[ArthaChain Contact] ${topic} - ${name}`);
        console.log('Content:', emailContent);
        console.log('================================');

        // Option 1: Using fetch to send via an external email API
        // You can integrate with services like:
        // - Resend (https://resend.com)
        // - SendGrid (https://sendgrid.com)
        // - Mailgun (https://mailgun.com)
        // - AWS SES

        // Example with Resend (uncomment and add RESEND_API_KEY to .env):
        /*
        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'ArthaChain <noreply@arthachain.io>',
                to: recipients,
                subject: `[ArthaChain Contact] ${topic} - ${name}`,
                text: emailContent,
                reply_to: email,
            }),
        });

        if (!resendResponse.ok) {
            throw new Error('Failed to send email');
        }
        */

        // Option 2: Using mailto link (client-side fallback)
        // The form will also provide a mailto fallback

        return NextResponse.json(
            {
                success: true,
                message: 'Message received successfully! We will get back to you soon.',
                // Include mailto link as fallback
                mailtoLink: `mailto:${recipients.join(',')}?subject=${encodeURIComponent(`[ArthaChain Contact] ${topic} - ${name}`)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again.' },
            { status: 500 }
        );
    }
}
