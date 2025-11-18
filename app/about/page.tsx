"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HeroScrollVideo } from "@/components/ui/hero-scroll-video";
import { StatsSection } from "@/components/ui/stats-section";

const values = [
  "Excellence in every order",
  "Technology-driven solutions",
  "Partnership over transactions",
  "Continuous innovation",
];

const members = [
  {
    name: "Qazi Haris",
    role: "Founder",
    avatar: "https://pub-20f982007aa54df4849bcd969b89a1bf.r2.dev/haris.png",
    link: "#",
  },
  {
    name: "Muhammad Raheel",
    role: "Founder",
    avatar: "https://pub-20f982007aa54df4849bcd969b89a1bf.r2.dev/raheel.png",
    link: "#",
  },
  {
    name: "Tayab Shakeel",
    role: "Founder",
    avatar: "https://pub-20f982007aa54df4849bcd969b89a1bf.r2.dev/Tee.PNG",
    link: "#",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Scroll Video Section */}
      <HeroScrollVideo
        title="About Us"
        subtitle="H&S E-commerce LTD"
        meta="Since 2015"
        backgroundImage="https://images.unsplash.com/photo-1727199079123-ba845d5ab4f6?w=2400&h=1600&fit=crop&q=90"
        media="https://pub-20f982007aa54df4849bcd969b89a1bf.r2.dev/about-section-video.mp4"
        mediaType="video"
        poster="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=2400&h=1600&fit=crop&q=90"
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
        initialBoxSize={400}
        scrollHeightVh={250}
        overlay={{
          caption: "OUR STORY",
          heading: "Building the future of fulfilment",
          paragraphs: [
            "Since 2015, we&apos;ve been on a mission to transform how e-commerce businesses handle fulfilment. What began as a single warehouse has evolved into a comprehensive logistics ecosystem.",
            "We combine cutting-edge technology with hands-on expertise to deliver fulfilment services that scale with your ambitions. Today, we&apos;re trusted by over 500 businesses, processing millions of orders with industry-leading accuracy.",
            "What drives us is the success of every business we partner with. Your growth is our mission.",
          ],
          extra: null,
        }}
        overlayBlur={15}
        overlayRevealDelay={0.3}
        smoothScroll={true}
      />

      {/* Stats Section with Bar Charts */}
      <StatsSection
        title="We don't believe in talk we Deliver Results"
        description="Our accuracy and performance metrics speak for themselves"
        stats={[
          { value: 78, label: "Industry Average", delay: 0.2 },
          { value: 85, label: "Top Competitors", delay: 0.4 },
          {
            value: 99.8,
            label: "H&S E-commerce",
            className: "bg-primary",
            showToolTip: true,
            delay: 0.6,
          },
          { value: 82, label: "Market Standard", delay: 0.8 },
        ]}
      />

      {/* Visual Break - Large Image */}

      {/* Values - Minimal List */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="w-20 h-px bg-primary mb-12"></div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black font-heading">
              What we stand for
            </h2>
          </motion.div>

          <div className="max-w-4xl space-y-8">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex items-center gap-8 py-8 border-b border-black/10 hover:border-primary/50 transition-colors duration-300"
              >
                <span className="text-2xl font-bold text-black/20 group-hover:text-primary transition-colors font-heading">
                  0{index + 1}
                </span>
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-black group-hover:text-primary transition-colors font-heading">
                  {value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-black py-32 md:py-40 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="w-20 h-px bg-primary mb-12"></div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-heading">
              Our dream team
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mt-6">
              Decades of combined experience in logistics, technology, and
              e-commerce. During the working process, we perform regular fitting
              with the client because he is the only person who can feel whether
              a new suit fits or not.
            </p>
          </motion.div>

          <div className="mt-12 md:mt-24">
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group overflow-hidden"
                >
                  <div className="relative h-96 w-full overflow-hidden rounded-md transition-all duration-500 group-hover:h-[22.5rem] group-hover:rounded-xl border border-white/10 group-hover:border-primary/50">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={826}
                      height={1239}
                      className="h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-2 pt-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-base font-medium text-white transition-all duration-500 group-hover:tracking-wider group-hover:text-primary font-heading">
                        {member.name}
                      </h3>
                      <span className="text-xs text-white/40 font-heading">
                        _0{index + 1}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="inline-block translate-y-6 text-sm text-white/70 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {member.role}
                      </span>
                      {/* <Link
                        href={member.link}
                        className="inline-block translate-y-8 text-sm tracking-wide text-primary opacity-0 transition-all duration-500 hover:text-primary-light group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        Linktree →
                      </Link> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Full Width */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=2000&h=1200&fit=crop&q=80"
            alt="Warehouse"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-heading">
              Let&apos;s grow together
            </h2>
            <p className="text-xl text-white/80 mb-12">
              Partner with a 3PL that&apos;s invested in your success
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary hover:bg-primary-dark text-black font-bold text-lg transition-all duration-200 group"
            >
              Start Your Journey
              <ArrowRight
                className="w-6 h-6 group-hover:translate-x-2 transition-transform"
                strokeWidth={2.5}
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
