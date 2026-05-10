'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Shield, Crown, Building2, BookOpen, Handshake, ChartBar as BarChart3, Globe } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/fade-in';
import { SectionHeading } from '@/components/section-heading';

const programLevels = [
  {
    level: 1,
    title: 'Business Associate',
    icon: TrendingUp,
    duration: '3-6 Months',
    description: 'The entry point into the ETIQU ecosystem. Develop foundational business skills, product expertise, and direct sales capabilities.',
    outcomes: [
      'Comprehensive product knowledge certification',
      'Direct sales and client relationship fundamentals',
      'Business communication and presentation skills',
      'Revenue generation and basic financial literacy',
    ],
  },
  {
    level: 2,
    title: 'Team Leader',
    icon: Users,
    duration: '6-12 Months',
    description: 'Transition from individual contributor to team builder. Learn to recruit, train, and motivate a team of Business Associates.',
    outcomes: [
      'Team recruitment and onboarding strategies',
      'Performance management and coaching techniques',
      'Conflict resolution and team dynamics',
      'Delegation and time management mastery',
    ],
  },
  {
    level: 3,
    title: 'Manager',
    icon: Shield,
    duration: '12-18 Months',
    description: 'Oversee multiple teams and operational functions. Develop strategic thinking and advanced management capabilities.',
    outcomes: [
      'Multi-team operations and resource allocation',
      'Financial planning and budget management',
      'Market analysis and competitive strategy',
      'Organizational behavior and change management',
    ],
  },
  {
    level: 4,
    title: 'Director',
    icon: Crown,
    duration: '18-24 Months',
    description: 'Shape organizational direction at the executive level. Lead large-scale initiatives and cultivate strategic partnerships.',
    outcomes: [
      'Executive leadership and vision development',
      'Strategic partnership and business development',
      'Corporate governance and compliance',
      'Innovation management and digital transformation',
    ],
  },
  {
    level: 5,
    title: 'Business Owner',
    icon: Building2,
    duration: 'Ongoing',
    description: 'The pinnacle of the program. Operate your own enterprise with the full support of ETIQU\'s network and resources.',
    outcomes: [
      'Independent business operations and ownership',
      'Full access to ETIQU\'s global network and resources',
      'Ongoing mentorship from established business owners',
      'Equity building and wealth generation pathways',
    ],
  },
];

const benefits = [
  {
    icon: BookOpen,
    title: 'Structured Curriculum',
    description: 'A meticulously designed five-level program that builds skills progressively, ensuring readiness at every stage of your journey.',
  },
  {
    icon: Handshake,
    title: 'Expert Mentorship',
    description: 'Learn directly from professionals who have successfully navigated every level of the program and built thriving businesses.',
  },
  {
    icon: BarChart3,
    title: 'Performance Tracking',
    description: 'Clear metrics and milestones at every level provide transparency and motivation as you progress toward business ownership.',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Join a community of over 5,000 professionals across 15 countries, creating opportunities for collaboration and growth.',
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
            title="Your Structured Pathway"
            description="Each level builds upon the last, creating a comprehensive foundation for business ownership that no other program offers."
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

      <div className="section-divider" />

      {/* Benefits */}
      <section className="bg-[var(--off-white)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Why ETIQU"
            title="The Competitive Advantage"
            description="What distinguishes our program from conventional professional development offerings."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <StaggerItem key={benefit.title}>
                  <div className="bg-white p-10 border border-gray-100 hover:border-[var(--gold)]/30 transition-all duration-500 group">
                    <div className="w-14 h-14 border border-[var(--gold)]/30 flex items-center justify-center mb-6 group-hover:bg-[var(--gold)]/10 transition-colors duration-500">
                      <Icon size={24} className="text-[var(--gold)]" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-[var(--navy)] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
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
