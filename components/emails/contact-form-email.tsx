import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactFormEmail = ({
  name,
  email,
  phone,
  message,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Section style={logoContainer}>
              <Text style={logoText}>H&S E-COMMERCE</Text>
              <Text style={logoSubtext}>3PL Solutions</Text>
            </Section>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={heading}>New Contact Form Submission</Heading>
            <Text style={paragraph}>
              You have received a new message from your website contact form.
            </Text>

            <Section style={infoSection}>
              <Section style={infoRow}>
                <Text style={label}>Name:</Text>
                <Text style={value}>{name}</Text>
              </Section>

              <Section style={infoRow}>
                <Text style={label}>Email:</Text>
                <Link href={`mailto:${email}`} style={link}>
                  {email}
                </Link>
              </Section>

              <Section style={infoRow}>
                <Text style={label}>Phone:</Text>
                <Text style={value}>{phone}</Text>
              </Section>
            </Section>

            <Hr style={divider} />

            <Section style={messageSection}>
              <Text style={messageLabel}>Message:</Text>
              <Text style={messageText}>{message}</Text>
            </Section>

            <Section style={ctaSection}>
              <Link
                href={`mailto:${email}?subject=Re: Contact Form Inquiry`}
                style={ctaButton}
              >
                Reply to {name}
              </Link>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This email was sent from the H&S E-commerce website contact form.
            </Text>
            <Text style={footerText}>
              Business Park, Unit 1 Carlinghurst Rd, George St W, Blackburn BB2
              1PQ, United Kingdom
            </Text>
            <Text style={footerLink}>
              <Link href="https://hsecommerce.co.uk" style={link}>
                Visit our website
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles matching the website design (black/yellow theme)
const main = {
  backgroundColor: "#000000",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#000000",
  margin: "0 auto",
  padding: "0",
  maxWidth: "600px",
};

const header = {
  backgroundColor: "#000000",
  padding: "30px 40px",
  borderBottom: "2px solid #fdb913",
};

const logoContainer = {
  textAlign: "left" as const,
};

const logoText = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "700",
  margin: "0 0 5px 0",
  letterSpacing: "0.5px",
};

const logoSubtext = {
  color: "#fdb913",
  fontSize: "10px",
  fontWeight: "500",
  margin: "0",
  letterSpacing: "2px",
  textTransform: "uppercase" as const,
};

const content = {
  backgroundColor: "#000000",
  padding: "40px",
};

const heading = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "700",
  margin: "0 0 20px 0",
  letterSpacing: "-0.5px",
};

const paragraph = {
  color: "#ffffff",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 30px 0",
};

const infoSection = {
  backgroundColor: "#171717",
  borderRadius: "8px",
  padding: "25px",
  margin: "0 0 30px 0",
};

const infoRow = {
  margin: "0 0 15px 0",
};

const label = {
  color: "#fdb913",
  fontSize: "12px",
  fontWeight: "700",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  margin: "0 0 5px 0",
};

const value = {
  color: "#ffffff",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0",
};

const link = {
  color: "#fdb913",
  textDecoration: "underline",
  fontSize: "16px",
};

const divider = {
  borderColor: "#fdb913",
  borderWidth: "1px",
  margin: "30px 0",
};

const messageSection = {
  backgroundColor: "#171717",
  borderRadius: "8px",
  padding: "25px",
  margin: "0 0 30px 0",
};

const messageLabel = {
  color: "#fdb913",
  fontSize: "12px",
  fontWeight: "700",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  margin: "0 0 15px 0",
};

const messageText = {
  color: "#ffffff",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const ctaSection = {
  textAlign: "center" as const,
  margin: "30px 0",
};

const ctaButton = {
  backgroundColor: "#fdb913",
  color: "#000000",
  fontSize: "16px",
  fontWeight: "700",
  textDecoration: "none",
  padding: "14px 32px",
  borderRadius: "4px",
  display: "inline-block",
};

const footer = {
  backgroundColor: "#000000",
  padding: "30px 40px",
  borderTop: "1px solid #333333",
  textAlign: "center" as const,
};

const footerText = {
  color: "#999999",
  fontSize: "12px",
  lineHeight: "18px",
  margin: "0 0 10px 0",
};

const footerLink = {
  margin: "15px 0 0 0",
};

export default ContactFormEmail;

