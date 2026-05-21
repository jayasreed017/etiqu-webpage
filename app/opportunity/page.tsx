'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Shield, Crown, Building2 } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';
import { SectionHeading } from '@/components/section-heading';

const programLevels = [
  {
    level: 1,
    title: 'Business Associate',
    icon: TrendingUp,
    duration: '3-4 Weeks',
    description: 'The Business Associate role is the foundation of our development program, where individuals gain exposure to sales, marketing, customer interaction, and business operations through practical learning experiences.',
    outcomes: [
      'Product & Client Training',
      'Quality Management',
      'Customer Interaction',
      'System Implementation',
      'Professional Development',
    ],
  },
  {
    level: 2,
    title: 'HDR Trainer',
    icon: Users,
    duration: '8-12 Weeks',
    description: 'HRD Trainers focus on recruitment, people development, and conducting training sessions while building strong communication and leadership capabilities.',
    outcomes: [
      'Training & Development',
      'Recruitment Process',
      'Team Building',
      'Corporate Presentations',
      'Administrative Understanding',
    ],
  },
  {
    level: 3,
    title: 'EXECUTIVE TRAINER',
    icon: Shield,
    duration: '8-12 Weeks',
    description: 'This role focuses on building and managing teams, motivating individuals, and developing leadership through practical team management experiences.',
    outcomes: [
      'Team Building',
      'Sales Management',
      'Networking',
      'Territory Management',
      'Goal Setting',
    ],
  },
  {
    level: 4,
    title: 'ASSISTANT MANAGER',
    icon: Crown,
    duration: '8-12 Weeks',
    description: 'Assistant Managers are responsible for planning, strategy implementation, people development, office administration, and overall performance management.',
    outcomes: [
      'Revenue Management',
      'Planning & Strategy',
      'Conducting Interviews',
      'Trainer Development',
      'Performance Monitoring',
    ],
  },
  {
    level: 5,
    title: 'OWNER PARTNER',
    icon: Building2,
    duration: 'Ongoing',
    description: 'Owner Partners lead and manage business operations while focusing on expansion, profitability, leadership, and strategic business planning.',
    outcomes: [
      'Organizational Management',
      'Business Planning',
      'Recruitment & Administration',
      'National & International Networking',
      'Customer Service Strategy',
    ],
  },
];

export default function Opportunity() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="inline-block text-[var(--gold)] text-xs tracking-[0.4em] uppercase font-semibold mb-6">
              The Program
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
              The Entrepreneurship Program
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              A five-level structured pathway designed to transform ambitious
              professionals into independent business owners through progressive
              skill development and real-world experience.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Program Levels */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Five Levels to Ownership"
            title="YOUR CAREER JOURNEY AT ETIQU"
            description="At ETIQU, we provide a structured Business Development Program designed to help individuals grow through leadership, management, and entrepreneurial development. Our career path offers hands-on business exposure, practical training, and performance-driven growth opportunities at every stage."
          />

          <div className="space-y-8">
            {programLevels.map((level, i) => {
              const Icon = level.icon;
              return (
                <FadeIn key={level.level} delay={i * 0.1}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-gray-100 hover:border-[var(--gold)]/20 transition-colors duration-500">
                    {/* Level indicator */}
                    <div className="lg:col-span-1 bg-[var(--navy)] flex items-center justify-center py-6 lg:py-0">
                      <span className="font-playfair text-3xl font-bold text-[var(--gold)]">
                        {level.level}
                      </span>
                    </div>

                    {/* Main content */}
                    <div className="lg:col-span-7 p-8 lg:p-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 border border-[var(--gold)]/30 flex items-center justify-center">
                          <Icon size={20} className="text-[var(--gold)]" />
                        </div>
                        <div>
                          <h3 className="font-playfair text-xl font-semibold text-[var(--navy)]">
                            {level.title}
                          </h3>
                          <span className="text-xs text-[var(--gold)] tracking-wider uppercase">
                            {level.duration}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {level.description}
                      </p>
                    </div>

                    {/* Outcomes */}
                    <div className="lg:col-span-4 bg-[var(--off-white)] p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-gray-100">
                      <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-[var(--navy)] mb-4">
                        Key Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {level.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
                            <span className="text-xs text-gray-500 leading-relaxed">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--navy)] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="inline-block text-[var(--gold)] text-xs tracking-[0.4em] uppercase font-semibold mb-6">
              Take the First Step
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-white leading-tight mb-6">
              Your Future in Business Starts Here
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Connect with our admissions team to learn more about the Entrepreneurship
              Program and determine if you qualify for enrollment.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--gold)] text-white px-10 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[var(--gold-light)] transition-all duration-300"
            >
              Apply Now
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}