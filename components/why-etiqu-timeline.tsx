'use client';

const items = [
  {
    number: '01',
    title: 'Growth - Driven Culture',
    description: 'Fast-track professional growth through performance-based opportunities.',
  },
  {
    number: '02',
    title: 'Leadership Development',
    description: 'Build essential leadership skills through structured training and mentorship.',
  },
  {
    number: '03',
    title: 'Business Exposure',
    description: 'Gain real-world experience working with clients and understanding business operations.',
  },
  {
    number: '04',
    title: 'Teamwork & Collaboration',
    description: 'Collaborate with diverse teams and learn from experienced mentors.',
  },
  {
    number: '05',
    title: 'Performance-Based Opportunities',
    description: 'Fast-track your career with opportunities based on performance and leadership potential.',
  },
  {
    number: '06',
    title: 'Entrepreneurial Mindset',
    description: 'Develop an entrepreneurial mindset with exposure to business operations and client interactions.',
  },
];

export function WhyEtiquTimeline() {
  return (
    <div className="relative w-full">

      {/* Desktop horizontal line */}
      <div className="hidden xl:block absolute top-8 left-[calc(100%/12)] right-[calc(100%/12)] h-px bg-white/20 z-0" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-0 xl:gap-6 relative z-10">
        {items.map((item, i) => (
          <div
            key={item.number}
            className="relative flex flex-col items-center text-center group cursor-pointer px-4 pb-14 xl:pb-0"
          >
            {/* Mobile vertical connector */}
            {i < items.length - 1 && (
              <div className="xl:hidden absolute left-1/2 -translate-x-1/2 top-16 bottom-0 w-px bg-white/20 z-0" />
            )}

            {/* Circle */}
            <div
              className="
                relative z-10
                w-16 h-16
                rounded-full
                border-2 border-white/40
                text-white
                flex items-center justify-center
                text-xl font-bold
                transition-all duration-300
                group-hover:border-[var(--gold)]
                group-hover:text-[var(--gold)]
                group-hover:bg-[var(--gold)]/10
              "
            >
              {item.number}
            </div>

            {/* Title */}
            <h3
              className="
                text-sm
                font-semibold
                mt-5
                mb-3
                text-white
                tracking-wide
                transition-colors duration-300
                group-hover:text-[var(--gold)]
              "
            >
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-white/60 text-sm leading-7">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}