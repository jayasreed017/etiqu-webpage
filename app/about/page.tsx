'use client';

import { FadeIn } from '@/components/fade-in';
import { SectionHeading } from '@/components/section-heading';

const timelineEvents = [
  {
    year: '2015',
    title: 'THE BEGINNING',
    description: 'ETIQU was established with a vision to create career opportunities through sales, marketing, and leadership development.',
  },
  {
    year: '2018',
    title: 'FIRST OWNER PROMOTION',
    description: "The organization achieved its first Owner Promotion, marking an important milestone in ETIQU's leadership and growth journey.",
  },
  {
    year: '2020',
    title: 'TELECALLING DIVISION LAUNCHED',
    description: 'Following the pandemic, ETIQU expanded its operations by launching the Telecalling Division, adapting to new business opportunities and market demands.',
  },
  {
    year: '2023',
    title: '5,000 Professionals Milestone',
    description: 'Surpassed 5,000 professionals trained through our programs, with over 200 successful business owners operating across 15 countries worldwide.',
  },
  {
    year: '2024',
    title: 'FIRST TELECALLING ASSISTANT OWNER PROMOTION',
    description: "The Telecalling Division achieved its first Assistant Owner Promotion, reflecting the success of ETIQU's training and leadership development system.",
  },
  {
    year: '2025',
    title: 'FIELD ASSISTANT OWNER PROMOTION',
    description: "ETIQU continued its growth momentum by achieving an Assistant Owner Promotion through the Field Division, strengthening the organization's expansion and leadership culture.",
  },
  {
    year: '2026',
    title: 'TWO OWNER PROMOTIONS ACHIEVED',
    description: "A major milestone was reached in 2026 with two successful Owner Promotions achieved within the same year through the Field Division, reinforcing ETIQU's commitment to building future entrepreneurs and leaders.",
  },
];

const values = [
  {
    title: 'OUR VISION',
    description:
      'Our vision is to inspire individuals to become the best version of themselves through leadership, growth, and continuous development. We aim to expand across new cities and divisions while creating greater career and growth opportunities for our people through strong client partnerships and business excellence.',
  },
  {
    title: 'OUR MISSION',
    description:
      'Our mission is to provide individuals with a unique platform for personal and professional growth through one of the most progressive development programs in the industry. We are committed to empowering people with the skills, experience, and opportunities needed to achieve success in both their careers and personal goals.',
  },
];

const team = [
  {
    image: '/team2.jpg',
    name: 'Mr. Bala Krishnan K',
    role: 'MD of Cameo Inc, Madurai',
  },
  {
    image: '/team1.jpg',
    name: 'Mr. Prem Kumar G',
    role: 'Asst. Owner of Etiqu',
  },
  {
    image: '/team3.jpg',
    name: 'Mr. Karthikeyan',
    role: 'Asst. Owner of Cameo Inc.',
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="inline-block text-[var(--gold)] text-xs tracking-[0.4em] uppercase font-semibold mb-6">
              Our Story
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
              BUILDING FUTURE LEADERS
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Since 2015, we have been empowering individuals to build careers in
              leadership, communication, management, and entrepreneurship while
              delivering quality marketing solutions for leading organizations
              across India.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Heritage Split Screen */}
      <section className="bg-white py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div
            className="relative order-2 lg:order-1 min-h-[400px] lg:min-h-0"
            style={{
              backgroundImage: "url('/md.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-[var(--navy)]/30" />
          </div>

          <div className="order-1 lg:order-2 flex items-center bg-[var(--off-white)]">
            <div className="px-8 py-16 lg:px-16 lg:py-20">
              <FadeIn>
                <span className="inline-block text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-semibold mb-4">
                  Our Heritage
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-[var(--navy)] leading-tight mb-6">
                  About MD
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Over the years, ETIQU has evolved into a dynamic and
                  growth-driven sales and marketing organization built on
                  leadership, opportunity, and performance excellence.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-gray-500 leading-relaxed mb-6">
                  With a team that brings strong industry expertise and real-world
                  business experience, ETIQU continues to empower individuals to
                  develop professionally while delivering quality marketing
                  solutions across industries.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="text-gray-500 leading-relaxed">
                  Driven by the visionary leadership of our Managing Director,
                  SARAVANA KUMAR, the organization continues to grow from strength
                  to strength, creating future leaders and entrepreneurs.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Timeline */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Journey"
            title="Milestones That Define Us"
            description="A decade of consistent growth, innovation, and impact in professional development."
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-px" />

            {timelineEvents.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <FadeIn key={event.year} delay={i * 0.1}>
                  <div
                    className={`relative flex items-start mb-16 last:mb-0 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-row`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 pl-12 md:pl-0 ${
                        isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                      }`}
                    >
                      <span className="font-playfair text-2xl font-bold text-[var(--gold)] mb-2 block">
                        {event.year}
                      </span>
                      <h3 className="font-playfair text-lg font-semibold text-[var(--navy)] mb-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* Node */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
                      <div className="w-8 h-8 rounded-full border-2 border-[var(--gold)] bg-white flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-[var(--gold)]" />
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Vision & Mission */}
      <section className="bg-[var(--navy)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            light
            label="What We Stand For"
            title="Our Vision & Mission"
            description="The direction and purpose that drive everything we do at ETIQU."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="border border-white/10 p-10 hover:border-[var(--gold)]/30 transition-colors duration-500 h-full">
                  <h3 className="font-playfair text-2xl font-semibold text-[var(--gold)] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Meet Our Team */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="About Us"
            title="MEET OUR TEAM"
            description="The passionate individuals driving ETIQU's vision forward."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.15}>
                <div className="group text-center">
                  <div className="overflow-hidden mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-[var(--navy)] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 tracking-wide">
                    {member.role}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}