'use client';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/fade-in';
import { SectionHeading } from '@/components/section-heading';

const galleryItems = [
  {
    src: '/gallery/img6.jpg',
    span: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2',
  },
  {
    src: '/gallery/img2.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/gallery/img1.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/gallery/img3.jpg',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    src: '/gallery/img5.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/gallery/img13.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/gallery/img7.jpg',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/gallery/img8.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/gallery/img9.jpg',
    span: 'col-span-2 row-span-1',
  },
  {
    src: '/gallery/img10.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/gallery/img11.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/gallery/img12.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/gallery/img4.jpg',
    span: 'col-span-2 row-span-1',
  },
  {
    src: '/gallery/img14.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/gallery/img15.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/gallery/img16.jpg',
    span: 'col-span-2 row-span-1',
  },
  {
    src: '/gallery/img17.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/gallery/img18.jpg',
    span: 'col-span-2 row-span-1',
  },
  {
    src: '/gallery/img20.jpg',
    span: 'col-span-1 row-span-1',
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
            backgroundImage: "url('/gallery.jpg')",
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
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
