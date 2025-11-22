# Resend Email Integration Setup Guide

This document explains how to set up the Resend email integration for the contact form.

## Prerequisites

- Resend account with API key
- Domain `hsecommerce.co.uk` configured in Resend
- Email address `contact@hsecommerce.co.uk` verified in Resend

## Environment Variables

Create a `.env.local` file in the root of your project (it's already in `.gitignore`) and add your Resend API key:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

### Getting Your Resend API Key

1. Log in to [Resend](https://resend.com)
2. Go to **API Keys** in the dashboard
3. Create a new API key or use an existing one
4. Copy the API key (starts with `re_`)
5. Add it to your `.env.local` file

## Domain Configuration

The domain `hsecommerce.co.uk` should already be configured in Resend. If not:

1. Go to **Domains** in your Resend dashboard
2. Add `hsecommerce.co.uk`
3. Configure the DNS records as instructed by Resend
4. Wait for DNS verification (usually takes a few minutes)

## Sender Email

The contact form sends emails from `contact@hsecommerce.co.uk`. Make sure this email address is:

1. Verified in your Resend domain settings
2. Added as a sender email in Resend

## Recipient Email

Currently, all contact form submissions are sent to:

- `info@hsecommerce.co.uk`

You can change this in `app/api/contact/route.ts` on line 31.

## Testing

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/contact`

3. Fill out the contact form and submit

4. Check the console for any errors

5. Check the recipient email inbox (`info@hsecommerce.co.uk`)

## Email Template

The email template matches your website's design:

- Black background (`#000000`)
- Yellow accent color (`#fdb913`) for headings and links
- Professional layout with company branding
- All form fields displayed clearly
- Reply button for easy response

Template location: `components/emails/contact-form-email.tsx`

## Production Deployment

When deploying to Vercel:

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add `RESEND_API_KEY` with your API key value
4. Deploy or redeploy your project

The environment variable will be automatically available to your API routes.

## Troubleshooting

### Email not sending

1. **Check API key**: Ensure `RESEND_API_KEY` is set correctly
2. **Check domain**: Verify `hsecommerce.co.uk` is configured in Resend
3. **Check sender**: Ensure `contact@hsecommerce.co.uk` is verified
4. **Check logs**: Look at Vercel function logs or browser console

### Domain not verified

1. Go to Resend dashboard → Domains
2. Check DNS records are correctly configured
3. Wait for DNS propagation (can take up to 48 hours)

### API errors

1. Check Resend dashboard for error messages
2. Verify API key hasn't been revoked
3. Check rate limits in Resend dashboard

## API Route

The contact form API route is located at:

- **Path**: `app/api/contact/route.ts`
- **Method**: POST
- **Endpoint**: `/api/contact`

### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+447955426807",
  "message": "Hello, I'm interested in your services."
}
```

### Response

**Success (200)**:

```json
{
  "message": "Email sent successfully",
  "id": "email_id_from_resend"
}
```

**Error (400/500)**:

```json
{
  "error": "Error message here"
}
```
