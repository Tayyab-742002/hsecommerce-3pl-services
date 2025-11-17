"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileSignature,
  ShieldCheck,
  PackageCheck,
  CreditCard,
  Handshake,
  Building2,
} from "lucide-react";

const commitments = [
  {
    icon: ShieldCheck,
    title: "Service level focus",
    description:
      "99% pick accuracy target with proactive incident reporting and root-cause reviews.",
  },
  {
    icon: PackageCheck,
    title: "Transparent fulfilment",
    description:
      "Live dashboards, on-site inspections, and digital sign-offs keep every movement accountable.",
  },
  {
    icon: FileSignature,
    title: "Clear documentation",
    description:
      "Contracts, SLAs, and addendums are version controlled and easy to audit at any time.",
  },
];

const termSections = [
  {
    heading: "1. Scope & definitions",
    intro:
      "These Terms govern all fulfilment, warehousing, and related logistics offered by H&S E-commerce LTD (“we”, “us”, “our”). By onboarding, you (“Client”) agree to the latest version published on this page.",
    bullets: [
      "“Services” include receiving, storage, pick & pack, kitting, labelling, carrier hand-off, returns, and value-added projects agreed in writing.",
      "“Inventory” refers to any product, packaging, or branded material you place within our facilities.",
      "“Business Day” means Monday to Friday, excluding UK public holidays.",
    ],
  },
  {
    heading: "2. Client responsibilities",
    intro:
      "Partnerships thrive when both sides are aligned. To keep fulfilment predictable, we need timely information and compliant inventory.",
    bullets: [
      "Provide accurate SKUs, barcodes, and packaging instructions at least 48h before stock arrives.",
      "Maintain insurance coverage for your goods. Our insurance covers facilities, not product value unless agreed.",
      "Keep your payment methods up to date and pay undisputed invoices within the agreed terms.",
    ],
  },
  {
    heading: "3. Billing & payment",
    intro:
      "We issue invoices monthly in GBP. Custom payment schedules can be arranged for enterprise programs.",
    bullets: [
      "Storage, handling, courier labels, and professional services are itemised on every statement.",
      "Late payments accrue 4% above Bank of England base rate. Persistent non-payment may pause services.",
      "Disputes must be raised within 10 Business Days of invoice receipt with supporting evidence.",
    ],
  },
  {
    heading: "4. Liability & limitations",
    intro:
      "We operate under UKWA-style limitations unless a bespoke liability addendum is signed.",
    bullets: [
      "Our total liability for any claim is capped at the fees paid in the previous 3 months.",
      "We are not liable for consequential loss, lost profits, or carrier performance once handover is complete.",
      "Claims for damaged or missing goods must be logged within 7 days of occurrence.",
    ],
  },
  {
    heading: "5. Term, renewal & suspension",
    intro:
      "Unless stated otherwise, Services renew on a rolling 12-month basis with 90 days’ termination notice.",
    bullets: [
      "Either party may terminate for convenience with written notice and settlement of outstanding balances.",
      "We may suspend Services for material breach, fraudulent activity, or safety concerns.",
      "Upon termination we’ll coordinate exit-stock counts and courier collections within 10 Business Days.",
    ],
  },
];

const processSteps = [
  {
    title: "Kickoff",
    detail: "We align on SKUs, carrier rules, SLAs, and integrations.",
  },
  {
    title: "Operational handover",
    detail:
      "Inventory lands at our facility, QC is completed, and live dashboards go online.",
  },
  {
    title: "Performance monitoring",
    detail:
      "Joint reviews, KPI snapshots, and optimisation sprints every quarter.",
  },
  {
    title: "Change management",
    detail:
      "Scope tweaks, seasonal ramps, and new service lines follow a signed change order.",
  },
];

const contactBlocks = [
  {
    title: "Contract questions",
    value: "legal@hsecommerce.co.uk",
    description: "Use this email for addendums, DPA requests, or SLA tweaks.",
    icon: Handshake,
  },
  {
    title: "Accounts & billing",
    value: "+44 203 488 7000",
    description:
      "Finance desk available Mon–Fri 9am-6pm GMT for payment queries.",
    icon: CreditCard,
  },
];

const heroAnimation = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08 },
  }),
};

const TermsPage = () => {
  return (
    <div className="bg-white text-foreground">
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 md:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroAnimation}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="w-20 h-1 bg-primary" />
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-gray-500">
              <span className=" border border-gray-200 px-4 py-1">
                Effective · November 2025
              </span>
              <span className=" border border-gray-200 px-4 py-1">
                Version 3.2
              </span>
            </div>
            <h1 className="text-4xl font-bold text-black sm:text-5xl md:text-6xl lg:text-7xl font-heading leading-tight">
              Terms of Service
            </h1>
            <p className="max-w-3xl text-lg text-gray-600 md:text-xl">
              A practical, no-nonsense agreement that reflects how we deliver
              fulfilment, technology, and support for modern brands. Review the
              clauses below, and reach out if you need a custom schedule.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/privacy"
                className="inline-flex items-center gap-3  border border-black px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
              >
                View privacy policy
              </Link>
              <a
                href="mailto:legal@hsecommerce.co.uk"
                className="inline-flex items-center gap-2  bg-primary px-6 py-3 text-sm font-semibold text-black uppercase tracking-wide"
              >
                Email legal desk
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-black py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {commitments.map((card, index) => (
              <motion.div
                key={card.title}
                className=" border border-white/10 bg-[#0d0d0d] p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={reveal}
                custom={index}
              >
                <card.icon className="mb-6 h-10 w-10 text-primary" />
                <h3 className="text-2xl font-semibold text-white font-heading">
                  {card.title}
                </h3>
                <p className="mt-4 text-white/70">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="mb-16 space-y-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
              Read before onboarding
            </p>
            <h2 className="text-4xl font-bold text-black md:text-5xl font-heading">
              The clauses that keep operations smooth
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              We have removed jargon and added practical examples so teams can
              collaborate faster. Save or export this document for procurement
              reviews.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {termSections.map((section, index) => (
              <motion.div
                key={section.heading}
                className=" border border-neutral-500/30 bg-white/85 p-8 shadow-2xl backdrop-blur"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
                custom={index}
              >
                <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
                  <span className="h-1 w-8 bg-primary" />
                  {section.heading}
                </div>
                <p className="text-lg text-gray-700">{section.intro}</p>
                <ul className="mt-6 space-y-4 text-gray-600">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-3">
                      <div className="mt-1 h-2.5 w-2.5 bg-primary"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] py-20 md:py-28 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
                Engagement lifecycle
              </p>
              <h3 className="mt-4 text-4xl font-bold font-heading">
                How the partnership runs
              </h3>
              <p className="mt-4 max-w-2xl text-white/70">
                Four milestones keep both teams aligned and accountable. Each
                step is documented inside your client workspace.
              </p>
            </div>
            <div className="border border-white/20 px-4 py-2 text-sm text-white/70">
              Need a bespoke addendum? legal@hsecommerce.co.uk
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className=" border border-white/15 bg-white/5 p-6 backdrop-blur"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={reveal}
                custom={index}
              >
                <div className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  0{index + 1}
                </div>
                <h4 className="mt-4 text-2xl font-semibold font-heading">
                  {step.title}
                </h4>
                <p className="mt-3 text-white/70">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <div className="border border-neutral-500/30 bg-primary p-10 md:p-16 shadow-2xl">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                  Still reviewing?
                </p>
                <h3 className="text-4xl font-bold text-black font-heading">
                  Legal & operations teams ready to collaborate
                </h3>
                <p className="text-lg text-gray-600">
                  Need procurement wording, certificates of insurance, or a
                  clause review? We answer most requests within two business
                  days.
                </p>
              </div>
              <Building2 className="h-16 w-16 text-primary" />
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {contactBlocks.map((block) => (
                <div
                  key={block.title}
                  className=" border border-neutral-500/30 bg-white p-6 shadow-2xl"
                >
                  <block.icon className="h-8 w-8 text-primary" />
                  <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
                    {block.title}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-black font-heading">
                    {block.value}
                  </p>
                  <p className="mt-3 text-gray-600">{block.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
