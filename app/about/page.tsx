'use client';

import { FadeIn } from '@/components/fade-in';
import { SectionHeading } from '@/components/section-heading';

const timelineEvents = [
  {
    year: '2015',
    title: 'Foundation Established',
    description: 'ETIQU was founded with a singular vision: to create a structured pathway for ambitious individuals to achieve business ownership through professional development and mentorship.',
  },
  {
    year: '2017',
    title: 'First Cohort Graduates',
    description: 'Our inaugural class of 50 professionals completed the five-level program, with 12 advancing to Business Owner status within their first year of completion.',
  },
  {
    year: '2019',
    title: 'International Expansion',
    description: 'ETIQU expanded operations across three continents, establishing training centers in key markets and building a global network of entrepreneurial leaders.',
  },
  {
    year: '2021',
    title: 'Digital Transformation',
    description: 'Launched our comprehensive digital learning platform, enabling hybrid training models and expanding access to our programs regardless of geographic constraints.',
  },
  {
    year: '2023',
    title: '5,000 Professionals Milestone',
    description: 'Surpassed 5,000 professionals trained through our programs, with over 200 successful business owners operating across 15 countries worldwide.',
  },
  {
    year: '2025',
    title: 'The Next Chapter',
    description: 'Introducing advanced AI-driven mentorship tools and expanded program offerings, ETIQU continues to set the standard for entrepreneurial education and professional development.',
  },
];

const values = [
  {
    title: 'Discipline',
    description: 'The cornerstone of every successful enterprise. We cultivate the habits and mindset that transform ambition into achievement.',
  },
  {
    title: 'Mentorship',
    description: 'Every leader at ETIQU has walked the path before. Our mentorship model ensures knowledge is passed from experience to aspiration.',
  },
  {
    title: 'Innovation',
    description: 'We embrace forward-thinking strategies and modern methodologies, ensuring our professionals remain at the forefront of their industries.',
  },
  {
    title: 'Legacy',
    description: 'We build not just for today, but for generations. Every business owner we develop creates opportunities that extend far beyond themselves.',
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
            backgroundImage: "url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920')",
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
              A Legacy of Excellence
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Since 2015, ETIQU has been transforming ambitious professionals into
              confident business owners through a proven, structured approach to
              entrepreneurial development.
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
              backgroundImage: "url('https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1920')",
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
                  Where Tradition Meets Ambition
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-gray-500 leading-relaxed mb-6">
                  ETIQU was established on the belief that business ownership should be
                  accessible to those willing to earn it. Our founders, seasoned
                  entrepreneurs themselves, recognized a gap in the market: ambitious
                  professionals lacked a clear, structured pathway from employment to
                  ownership.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-gray-500 leading-relaxed mb-6">
                  What began as a small training initiative has grown into a
                  multinational institution, recognized for its rigorous standards and
                  exceptional outcomes. Our five-level program remains the gold standard
                  in entrepreneurial education, combining theoretical knowledge with
                  hands-on business experience.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="text-gray-500 leading-relaxed">
                  Today, ETIQU operates across 15 countries, with a network of over
                  200 business owners who started their journey exactly where you are
                  now. Our heritage is not just our history; it is the foundation upon
                  which your future will be built.
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
                  <div className={`relative flex items-start mb-16 last:mb-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                    {/* Content */}
                    <div className={`flex-1 pl-12 md:pl-0 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
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

      {/* Values */}
      <section className="bg-[var(--navy)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            light
            label="What We Stand For"
            title="Our Core Values"
            description="The principles that guide every decision, every program, and every professional relationship at ETIQU."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="border border-white/10 p-8 hover:border-[var(--gold)]/30 transition-colors duration-500">
                  <h3 className="font-playfair text-xl font-semibold text-[var(--gold)] mb-3">
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
    </>
  );
}
