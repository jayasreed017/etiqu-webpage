import { FadeIn } from './fade-in';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}

export function SectionHeading({ label, title, description, light = false, center = true }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-16`}>
      {label && (
        <FadeIn>
          <span className="inline-block text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            {label}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2
          className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 ${
            light ? 'text-white' : 'text-[var(--navy)]'
          }`}
          style={{ lineHeight: 1.2 }}
        >
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className={`text-base md:text-lg leading-relaxed ${light ? 'text-white/60' : 'text-gray-500'}`}>
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
