'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Handshake, ChartBar as BarChart3, Globe, Users, Shield } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/fade-in';
import { SectionHeading } from '@/components/section-heading';

const benefits = [
  {
    icon: BookOpen,
    title: 'ADVERTISING',
    description: 'Delivering creative advertising solutions for national and international brands through strategic planning, execution, and campaign management.',
  },
  {
    icon: Handshake,
    title: 'PROMOTIONS',
    description: 'Creating impactful promotional campaigns that build engagement, visibility, and strong customer connections.',
  },
  {
    icon: BarChart3,
    title: 'BRANDING',
    description: 'Building powerful brand identities that align with business goals and create lasting market presence.',
  },
  {
    icon: Globe,
    title: 'BUSINESS DEVELOPMENT',
    description: 'Supporting business growth through strategic expansion, leadership development, and market-driven opportunities.',
  },
  {
    icon: Users,
    title: 'CUSTOMER ACQUISITION',
    description: 'Helping businesses grow through targeted customer acquisition strategies designed to increase reach and conversions.',
  },
  {
    icon: Shield,
    title: 'EXPANSION',
    description: 'Driving sustainable expansion through innovative growth strategies, operational support, and business scalability.',
  },
];

const nationalClients = [
  { name: 'Child Rights and You', logo: '/clients/cry.png' },
  { name: 'HelpAge India', logo: '/clients/helpage.png' },
  { name: "SOS Children's Villages", logo: '/clients/sos.png' },
  { name: 'Save the Children', logo: '/clients/save-the-children.png' },
  { name: 'Global Cancer Concern India', logo: '/clients/gcci.png' },
  { name: 'Plan International', logo: '/clients/plan.png' },
  { name: 'Sightsavers', logo: '/clients/sightsavers.png' },
  { name: 'ICICI Bank Credit Cards', logo: '/clients/icici.png' },
  { name: 'Future Generali', logo: '/clients/future-generali.png' },
];

const internationalClients = [
  { name: 'Singapore Heart Foundation', logo: '/clients/singapore-heart.png' },
  { name: 'BMDP', logo: '/clients/bmdp.png' },
  { name: 'Special Olympics', logo: '/clients/special-olympics.png' },
  { name: 'Singtel', logo: '/clients/singtel.png' },
  { name: 'Telekom Malaysia', logo: '/clients/tm.png' },
  { name: 'AT&T', logo: '/clients/att.png' },
  { name: 'WWF', logo: '/clients/wwf.png' },
  { name: 'Red Cross', logo: '/clients/red-cross.png' },
  { name: 'UNICEF', logo: '/clients/unicef.png' },
  { name: 'Cancer Research', logo: '/clients/cancer-research.png' },
  { name: 'CPS', logo: '/clients/cps.png' },
  { name: 'MAKNA', logo: '/clients/makna.png' },
];

function ClientCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 hover:border-[var(--gold)]/40 hover:shadow-xl transition-all duration-300 flex items-center justify-center p-6 aspect-square hover:scale-105 cursor-pointer">
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={logo}
          alt={name}
          className="max-w-full max-h-full object-contain"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <div className="hidden w-16 h-16 rounded-full border-2 border-gray-200 items-center justify-center">
          <span className="font-playfair text-xl font-bold text-[var(--navy)]">
            {name.charAt(0)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function WhatWeDo() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: "url('/whatwedo.jpg')",
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn delay={0.1}>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
              Our Services
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              From advertising and branding to business development and
              expansion — ETIQU delivers end-to-end marketing solutions
              for brands that want to grow.
            </p>
          </FadeIn>
        </div>
      </section>

{/* What We Do */}
<section className="bg-[var(--off-white)] py-24">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <SectionHeading
      label="Our Services"
      title="What We Do"
      description="What distinguishes our program from conventional professional development offerings."
    />

    <div className="grid lg:grid-cols-2 gap-12 items-start">

      {/* Services */}
      <div>
        <StaggerContainer className="flex flex-col gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <StaggerItem key={benefit.title}>
                <div className="benefits-card bg-white px-10 py-8 border border-gray-100 hover:border-[var(--gold)]/30 transition-all duration-500 group overflow-hidden">

                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 border border-[var(--gold)]/30 flex items-center justify-center shrink-0 group-hover:bg-[var(--gold)]/10 transition-colors duration-500">
                      <Icon
                        size={24}
                        className="text-[var(--gold)]"
                      />
                    </div>

                    <h3 className="font-playfair text-xl font-semibold text-[var(--navy)]">
                      {benefit.title}
                    </h3>
                  </div>

                  <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <p className="text-sm text-gray-500 leading-relaxed mt-4 pl-20">
                      {benefit.description}
                    </p>
                  </div>

                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>

      {/* Right Side Images */}
      <div className="flex flex-col gap-6">

        {/* Image 1 */}
        <div className="group overflow-hidden rounded-2xl shadow-xl">
          <img
            src="/services/service-2.jpg"
            alt="Advertising & Branding"
            className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Image 2 */}
        <div className="group overflow-hidden rounded-2xl shadow-xl">
          <img
            src="/services/service-1.jpg"
            alt="Business Development"
            className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Image 3 */}
        <div className="group overflow-hidden rounded-2xl shadow-xl">
          <img
            src="/services/service-3.jpg"
            alt="Expansion"
            className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

      </div>

    </div>
  </div>
</section>

      <div className="section-divider" />
{/* National Clients */}
<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <SectionHeading
      label="Within India"
      title="National Clients"
      description="After establishing in India we have had a wide spread of clients. The most noticeable ones are."
    />
    <div className="flex flex-col lg:flex-row gap-10 items-center">
      {/* Map Image */}
      <div className="w-full lg:w-1/2 shrink-0">
        <img
          src="/clients/national.png"
          alt="National Map"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Logo Grid */}
      <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {nationalClients.map((client, i) => (
          <FadeIn key={client.name} delay={i * 0.05}>
            <ClientCard {...client} />
          </FadeIn>
        ))}
      </div>
    </div>
  </div>
</section>

<div className="section-divider" />

{/* International Clients */}
<section className="bg-[var(--off-white)] py-24">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <SectionHeading
      label="Around The World"
      title="International Clients"
      description="Since our roots are from an international base — here are a few clients that best showcase our work."
    />
    <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
      {/* Map Image — on the right for international */}
      <div className="w-full lg:w-1/2 shrink-0">
        <img
          src="/clients/international.png"
          alt="International Map"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Logo Grid */}
      <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {internationalClients.map((client, i) => (
          <FadeIn key={client.name} delay={i * 0.05}>
            <ClientCard {...client} />
          </FadeIn>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="bg-[var(--navy)] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="inline-block text-[var(--gold)] text-xs tracking-[0.4em] uppercase font-semibold mb-6">
              Begin Your Journey
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-white leading-tight mb-6">
              Ready to Work With Us?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Get in touch with our team to explore how ETIQU can drive
              growth for your brand.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--gold)] text-white px-10 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[var(--gold-light)] transition-all duration-300"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}