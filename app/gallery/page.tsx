'use client';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/fade-in';
import { SectionHeading } from '@/components/section-heading';

const galleryItems = [
  {
    src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Team collaboration in modern office',
    span: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2',
    category: 'Training',
  },
  {
    src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Professional business conference',
    span: 'col-span-1 row-span-1',
    category: 'Events',
  },
  {
    src: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Leadership seminar presentation',
    span: 'col-span-1 row-span-1',
    category: 'Leadership',
  },
  {
    src: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Business networking event',
    span: 'col-span-1 md:col-span-2 row-span-1',
    category: 'Networking',
  },
  {
    src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Team strategy meeting',
    span: 'col-span-1 row-span-1',
    category: 'Strategy',
  },
  {
    src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Professional development workshop',
    span: 'col-span-1 row-span-1',
    category: 'Workshops',
  },
  {
    src: 'https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Graduation ceremony celebration',
    span: 'col-span-1 md:col-span-2 row-span-1',
    category: 'Graduation',
  },
  {
    src: 'https://images.pexels.com/photos/3182786/pexels-photo-3182786.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Mentorship session',
    span: 'col-span-1 row-span-1',
    category: 'Mentorship',
  },
  {
    src: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Global summit keynote',
    span: 'col-span-1 row-span-1',
    category: 'Summit',
  },
];

export default function Gallery() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="inline-block text-[var(--gold)] text-xs tracking-[0.4em] uppercase font-semibold mb-6">
              Our Story in Images
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
              The Gallery
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Moments that capture the spirit of ETIQU: from training sessions and
              leadership summits to graduation ceremonies and global networking events.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Captured Moments"
            title="A Visual Chronicle"
            description="Explore the experiences, milestones, and community that define the ETIQU journey."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">
            {galleryItems.map((item, i) => (
              <StaggerItem key={i} className={item.span}>
                <div className="relative group h-full overflow-hidden border border-gray-100 hover:border-[var(--gold)]/30 transition-all duration-500">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.src}')` }}
                  />
                  <div className="absolute inset-0 bg-[var(--navy)]/40 group-hover:bg-[var(--navy)]/60 transition-colors duration-500" />

                  {/* Category label */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block bg-[var(--gold)] text-white text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-1">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white text-sm font-medium">{item.alt}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
