'use client';

import { useEffect, useRef, useState } from 'react';

const items = [
  {
    number: '01',
    title: 'GROWTH-DRIVEN CULTURE',
    description: 'Fast-track professional growth through performance-based opportunities.',
  },
  {
    number: '02',
    title: 'LEADERSHIP DEVELOPMENT',
    description: 'Build essential leadership skills through structured training and mentorship.',
  },
  {
    number: '03',
    title: 'BUSINESS EXPOSURE',
    description: 'Gain real-world experience working with clients and understanding business operations.',
  },
  {
    number: '04',
    title: 'TEAMWORK & COLLABORATION',
    description: 'Collaborate with diverse teams and learn from experienced mentors.',
  },
  {
    number: '05',
    title: 'PERFORMANCE-BASED OPPORTUNITIES',
    description: 'Fast-track your career with opportunities based on performance and leadership potential.',
  },
  {
    number: '06',
    title: 'ENTREPRENEURIAL MINDSET',
    description: 'Develop an entrepreneurial mindset with exposure to business operations and client interactions.',
  },
];

export function WhyEtiquTimeline() {
  const [activeItems, setActiveItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveItems((prev) => new Set([...prev, index]));
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '0px 0px -10% 0px',
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="relative overflow-hidden">

      {/* Horizontal Line - Desktop only */}
      <div className="hidden xl:block absolute top-12 left-0 w-full h-px bg-white/20" />

      {/* Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-14 xl:gap-6 relative z-10">
        {items.map((item, i) => {
          const isActive = activeItems.has(i);

          return (
            <div
              key={item.number}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="text-center group cursor-pointer"
            >
              <div
                className={`w-24 h-24 mx-auto rounded-full border flex items-center justify-center text-3xl font-bold transition-all duration-500
                  ${isActive
                    ? 'border-[var(--gold)] text-[var(--gold)] bg-[var(--gold)]/10'
                    : 'border-white/40 text-white bg-[var(--navy)]'
                  }
                  group-hover:border-[var(--gold)] group-hover:text-[var(--gold)]
                  group-active:border-[var(--gold)] group-active:text-[var(--gold)]`}
              >
                {item.number}
              </div>

              <h3
                className={`text-lg font-semibold mt-8 mb-4 transition-colors duration-500
                  ${isActive ? 'text-[var(--gold)]' : 'text-white'}
                  group-hover:text-[var(--gold)] group-active:text-[var(--gold)]`}
              >
                {item.title}
              </h3>

              <p className="text-white/60 text-sm leading-7">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}