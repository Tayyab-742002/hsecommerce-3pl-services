"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";
import { ContactCard } from "@/components/ui/contact-card";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "info@hsecommerce.co.uk",
    link: "mailto:info@hsecommerce.co.uk",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+447955426807",
    link: "tel:+447955426807",
  },
  {
    icon: MapPin,
    title: "Address",
    details:
      "Business Park, Unit 1 Carlinghurst Rd, George St W, Blackburn BB2 1PQ, United Kingdom",
    link: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Fri: 9:00 - 18:00\nSat: 10:00 - 14:00",
    link: null,
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size:[64px_64px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-8 leading-[1.1] font-heading">
              Let&apos;s talk
              <br />
              about your
              <br />
              growth
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
              Get in touch to discuss how we can streamline your fulfilment
              operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactCard
              title="Get in touch"
              description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
              contactInfo={contactInfo.map((item) => ({
                icon: item.icon,
                label: item.title,
                value: item.details,
              }))}
              className="bg-[#171717] rounded-lg shadow-2xl "
              formSectionClassName="bg-black rounded-r-lg shadow-2xl "
            >
              <form onSubmit={handleSubmit} className="space-y-6 w-full">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-white uppercase tracking-wider mb-3"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1D1D1D] border border-white/30 focus:border-0 focus:ring-0 outline-none transition-colors text-white placeholder:text-white/50 rounded-md"
                    placeholder="Your Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-white uppercase tracking-wider mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1D1D1D] border border-white/30 focus:border-0 focus:ring-0 outline-none transition-colors text-white placeholder:text-white/50 rounded-md"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-white uppercase tracking-wider mb-3"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1D1D1D] border border-white/30 focus:border-0 focus:ring-0 outline-none transition-colors text-white placeholder:text-white/50 rounded-md"
                    placeholder="+447955426807"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-white uppercase tracking-wider mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1D1D1D] border border-white/30 focus:border-0 focus:ring-0 outline-none transition-colors text-white placeholder:text-white/50 resize-none rounded-md"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gray-300 text-gray-900 font-bold rounded-md shadow-lg"
                    >
                      <CheckCircle className="w-5 h-5" strokeWidth={2.5} />
                      Message Sent Successfully
                    </motion.div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold transition-all duration-200 rounded-md shadow-lg"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </ContactCard>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] md:h-[600px] bg-surface">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-full"
        >
          <iframe
            src="https://www.google.com/maps?q=Business+Park,+Unit+1+Carlinghurst+Rd,+George+St+W,+Blackburn+BB2+1PQ,+United+Kingdom&hl=en&z=17&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="H&S Ecommerce Location"
          />
        </motion.div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
              Got questions?
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Check out our frequently asked questions or reach out directly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Link
                href="/faq"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black font-bold transition-all duration-200"
              >
                View FAQ
              </Link> */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-dark text-black font-bold transition-all duration-200"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
