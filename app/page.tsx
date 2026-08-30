'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Target, Users } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';
import { SectionHeading } from '@/components/section-heading';
import { Roadmap } from '@/components/roadmap';
import { WhyEtiquTimeline } from '@/components/why-etiqu-timeline';

const stats = [
  { value: '10+', label: 'Years of Excellence' },
  { value: '20+', label: 'National Awards' },
  { value: '60+', label: 'Business Associates' },
  { value: '2+', label: 'New Cities' },
];

const pillars = [
  {
    icon: Award,
    title: 'Performance-Based Growth',
    description:
      'At ETIQU, growth is driven by performance, consistency, and leadership potential. Individuals who demonstrate strong results are provided with faster career advancement opportunities.',
  },
  {
    icon: Target,
    title: 'Leadership Development',
    description:
      'We focus on building future leaders by developing communication, management, presentation, and decision-making skills through structured training programs.',
  },
  {
    icon: Users,
    title: 'Business Exposure',
    description:
      'Gain practical experience by working with dynamic teams, interacting with clients, and understanding real-world business operations and marketing strategies.',
  },
  {
    icon: Users,
    title: 'Travel & Networking Opportunities',
    description:
      'Get opportunities for professional travel, networking events, and business development programs that expand exposure and confidence.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg"
          style={{
              backgroundImage: "url('/hero.jpg')",
              
          }}

        />

        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="inline-block text-[var(--gold)] text-xs tracking-[0.4em] uppercase font-semibold mb-8">
              Since 2015
            </span>
          </motion.div>

          <motion.h1
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Build Your Career with
            <br />
            <span className="text-[var(--gold)]">ETIQU</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            ETIQU has flourished to being one of India&apos;s most
            unconventional, dynamic and spirited Marketing & Advertising
            Organization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/opportunity"
              className="inline-flex items-center gap-2 bg-[var(--gold)] text-white px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[var(--gold-light)] transition-all duration-300"
            >
              Explore the Program
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
            >
              Our Heritage
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[var(--gold)]" />
        </motion.div>
      </section>

{/* WHY ETIQU Section */}
<section className="bg-[var(--navy-dark)] py-28 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-20">
      <span className="text-[var(--gold)] uppercase tracking-[0.35em] text-sm font-semibold">
        Why Choose ETIQU
      </span>
      <h2 className="font-playfair text-4xl md:text-6xl text-white mt-5">
        Why Etiqu
      </h2>
    </div>

    {/* Timeline */}
    <WhyEtiquTimeline />
  </div>
</section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--navy)] mb-3 md:mb-4">
                    {stat.value}
                  </div>

                  <div className="text-xs md:text-sm text-gray-500 tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Pillars Section */}
      <section className="bg-[var(--off-white)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Foundation"
            title="Growth Opportunities"
            description="Four pillars define our approach to professional development and set ETIQU apart as a leader in entrepreneurial education."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;

              return (
                <FadeIn key={pillar.title} delay={i * 0.15}>
                  <div className="bg-white p-10 border border-gray-100 hover:border-[var(--gold)]/30 transition-all duration-500 group">
                    <div className="w-14 h-14 border border-[var(--gold)]/30 flex items-center justify-center mb-6 group-hover:bg-[var(--gold)]/10 transition-colors duration-500">
                      <Icon size={24} className="text-[var(--gold)]" />
                    </div>

                    <h3 className="font-playfair text-xl font-semibold text-[var(--navy)] mb-4">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-gray-500 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Roadmap Section */}
      <section className="bg-[var(--navy-dark)] py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            light
            label="The Path to Ownership"
            title="Your Seven-Level Roadmap"
            description="A structured progression from Business Associate to Business Head, designed to build competence, confidence, and independence at every stage."
          />

          <Roadmap />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--navy)] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="inline-block text-[var(--gold)] text-xs tracking-[0.4em] uppercase font-semibold mb-6">
              Begin Your Journey
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
              Accelerating Career Growth
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Take the first step toward business ownership. Connect with
              our team and discover how ETIQU can transform your
              professional future.
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