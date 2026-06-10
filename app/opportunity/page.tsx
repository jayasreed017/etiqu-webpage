'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  TrendingUp,
  Users,
  Shield,
  Crown,
  Building2,
} from 'lucide-react';

import { FadeIn } from '@/components/fade-in';

const programLevels = [
  {
    level: 1,
    title: 'Business Associate',
    icon: TrendingUp,
    duration: '3-4 Weeks',
    description:
      'The Business Associate role is the foundation of our development program, where individuals gain exposure to sales, marketing, customer interaction, and business operations through practical learning experiences.',
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
    title: 'Trainee',
    icon: Users,
    duration: '8-12 Weeks',
    description:
      'HRD Trainers focus on recruitment, people development, and conducting training sessions while building strong communication and leadership capabilities.',
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
    title: 'Trainer',
    icon: Shield,
    duration: '8-12 Weeks',
    description:
      'This role focuses on building and managing teams, motivating individuals, and developing leadership through practical team management experiences.',
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
    title: 'Executive Trainer',
    icon: Crown,
    duration: '8-12 Weeks',
    description:
      'Assistant Managers are responsible for planning, strategy implementation, people development, office administration, and overall performance management.',
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
    title: 'Team Leader',
    icon: Building2,
    duration: '8-12 Weeks',
    description:
      'Owner Partners lead and manage business operations while focusing on expansion, profitability, leadership, and strategic business planning.',
    outcomes: [
      'Organizational Management',
      'Business Planning',
      'Recruitment & Administration',
      'National & International Networking',
      'Customer Service Strategy',
    ],
  },
  {
    level: 6,
    title: 'Assistant Business Owner',
    icon: Crown,
    duration: '8-12 Weeks',
    description:
      'Assistant Business Owners work under the guidance of experienced owners, gaining hands-on experience in business management and strategic decision-making.',
    outcomes: [
      'Business Strategy',
      'Financial Management',
      'Team Leadership',
      'Market Expansion',
      'Sustainable Growth',
    ],
  },
  {
    level: 7,
    title: 'Business Head',
    icon: Building2,
    duration: '8-12 Weeks',
    description:
      'Business Heads lead and manage business units, focusing on strategic leadership, operational excellence, and business growth.',
    outcomes: [
      'Regional Strategy',
      'Operational Management',
      'Leadership Development',
      'Market Analysis',
      'Regional Expansion',
    ],
  },
];

export default function Opportunity() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />

        <div className="absolute inset-0 hero-overlay bg-black/60" />

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
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              A seven-level structured pathway designed to transform ambitious
              professionals into independent business owners through progressive
              skill development and real-world experience.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Program Overview */}
      <section className="bg-white py-24">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            {/* Left Content */}
            <div>
              <span className="text-[var(--gold)] uppercase tracking-[0.3em] text-sm font-semibold">
                Seven Levels to Ownership
              </span>

             <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-[var(--navy)] mt-4 mb-8 leading-none">
                Your Career Journey At Etiqu
              </h2>

              <p className="text-gray-500 text-lg leading-relaxed">
                At ETIQU, we provide a structured Business Development Program
                designed to help individuals grow through leadership,
                management, and entrepreneurial development. Our career path
                offers hands-on business exposure, practical training, and
                performance-driven growth opportunities at every stage.
              </p>
            </div>

            {/* Right Image */}
<div className="flex justify-center items-stretch h-full">
  <div className="group relative cursor-glow h-full w-full">

    
    {/* Glow Effect */}
    <div
      className="
        absolute
        -inset-4
        rounded-2xl
        bg-gradient-to-r
        from-yellow-400/20
        to-yellow-600/20
        blur-xl
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-700
      "
    />

<Image
  src="/pdp-logo.jpg"
  alt="PDP Program"
  width={700}
  height={700}
  priority
  className="
    w-full
    h-[600px]
    object-cover
    rounded-2xl
    shadow-2xl
  "
/>

    {/* Floating Badge */}
    <div
      className="
        absolute
        bottom-5
        right-5
        bg-white/95
        backdrop-blur-md
        px-5
        py-3
        rounded-full
        shadow-lg
        text-sm
        font-semibold
        text-[var(--navy)]
        opacity-0
        translate-y-4
        group-hover:opacity-100
        group-hover:translate-y-0
        transition-all
        duration-500
      "
    >
      Career Growth ↗
    </div>
  </div>
</div>
          </div>

          {/* Program Levels */}
          <div className="space-y-8">
            {programLevels.map((level, i) => {
              const Icon = level.icon;

              return (
                <FadeIn key={level.level} delay={i * 0.1}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 border border-gray-100 hover:border-[var(--gold)]/20 transition-colors duration-500">
                    {/* Level Number */}
                    <div className="lg:col-span-1 bg-[var(--navy)] flex items-center justify-center py-6 lg:py-0">
                      <span className="font-playfair text-3xl font-bold text-[var(--gold)]">
                        {level.level}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-7 p-8 lg:p-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 border border-[var(--gold)]/30 flex items-center justify-center">
                          <Icon
                            size={20}
                            className="text-[var(--gold)]"
                          />
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
                          <li
                            key={outcome}
                            className="flex items-start gap-2"
                          >
                            <div className="w-1 h-1 rounded-full bg-[var(--gold)] mt-2 shrink-0" />

                            <span className="text-xs text-gray-500 leading-relaxed">
                              {outcome}
                            </span>
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

{/* Etiqu Advantage Certification Program */}
<section className="bg-[var(--off-white)] py-24">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <FadeIn>
      <div className="text-center mb-12">
        <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-[var(--navy)]">
          Etiqu Advantage Certification Program
        </h2>
      </div>
    </FadeIn>

    <FadeIn delay={0.2}>

      {/* Gradient Border */}
      <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-[var(--gold)] via-[var(--navy)] to-[var(--gold)]">

        {/* Main Box */}
        <div
          className="
            group
            bg-white
            rounded-3xl
            p-10
            md:p-14
            shadow-xl
            transition-all
            duration-500
            hover:shadow-[0_20px_60px_rgba(212,175,55,0.25)]
          "
        >

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* First 30 Days */}
            <div className="text-center">

              <h3
                className="
                  text-3xl
                  font-bold
                  text-[var(--navy)]
                  mb-8
                  transition-all
                  duration-300
                  hover:text-[var(--gold)]
                "
              >
                First 30 Days in Business
              </h3>

              <div className="w-32 h-[2px] bg-[var(--gold)] mx-auto mb-8"></div>

              <ul className="space-y-5">

                {[
                  "Smart Selling",
                  "Business Communication",
                  "Brand Promotions",
                  "Confidence Enhancement",
                  "Time Management",
                  "Market Analysis",
                  "Customer Service",
                  "Quality Management",
                  "Public Speaking",
                  "Client Representation",
                ].map((item) => (
                  <li
                    key={item}
                    className="
                      text-lg
                      text-gray-700
                      cursor-pointer
                      transition-all
                      duration-300
                      hover:text-[var(--gold)]
                      hover:translate-x-2
                      hover:font-medium
                    "
                  >
                    › {item}
                  </li>
                ))}

              </ul>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/3 top-24 bottom-24 w-px bg-gray-200"></div>

            {/* First 75 Days */}
            <div className="text-center">

              <h3
                className="
                  text-3xl
                  font-bold
                  text-[var(--navy)]
                  mb-8
                  transition-all
                  duration-300
                  hover:text-[var(--gold)]
                "
              >
                First 75 Days in Business
              </h3>

              <div className="w-32 h-[2px] bg-[var(--gold)] mx-auto mb-8"></div>

              <ul className="space-y-5">

                {[
                  "Training and Development",
                  "Sales Analysis",
                  "Individual Financial Management",
                  "New Customer Acquisition",
                  "Self-Assessment",
                  "Facilitation Skills",
                  "Level-1 Recruitment",
                  "Brand Awareness",
                ].map((item) => (
                  <li
                    key={item}
                    className="
                      text-lg
                      text-gray-700
                      cursor-pointer
                      transition-all
                      duration-300
                      hover:text-[var(--gold)]
                      hover:translate-x-2
                      hover:font-medium
                    "
                  >
                    › {item}
                  </li>
                ))}

              </ul>
            </div>

            {/* First 120 Days */}
            <div className="text-center">

              <h3
                className="
                  text-3xl
                  font-bold
                  text-[var(--navy)]
                  mb-8
                  transition-all
                  duration-300
                  hover:text-[var(--gold)]
                "
              >
                First 120 Days in Business
              </h3>

              <div className="w-32 h-[2px] bg-[var(--gold)] mx-auto mb-8"></div>

              <ul className="space-y-5">

                {[
                  "Team Management",
                  "Performance Accountability",
                  "Sales Strategy",
                  "Team Profitability",
                  "Business Strategy Planning",
                  "Decision Making Skills",
                  "Comparative Analysis",
                ].map((item) => (
                  <li
                    key={item}
                    className="
                      text-lg
                      text-gray-700
                      cursor-pointer
                      transition-all
                      duration-300
                      hover:text-[var(--gold)]
                      hover:translate-x-2
                      hover:font-medium
                    "
                  >
                    › {item}
                  </li>
                ))}

              </ul>
            </div>

          </div>

        </div>
      </div>

    </FadeIn>

  </div>
</section>

      {/* CTA Section */}
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
              Connect with our admissions team to learn more about the
              Entrepreneurship Program and determine if you qualify for
              enrollment.
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