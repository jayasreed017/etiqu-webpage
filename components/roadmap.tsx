'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Shield, Crown, Building2 } from 'lucide-react';

const roadmapStages = [
  {
    level: 1,
    title: 'Business Associate',
    description: 'Start your professional journey by learning the fundamentals of business development, communication, and client interaction while gaining hands-on industry exposure.',
    icon: TrendingUp,
  },
  {
    level: 2,
    title: 'Trainee',
    description: 'Enhance your practical knowledge through guided learning, field experience, and continuous skill development under experienced mentors.',
    icon: Users,
  },
  {
    level: 3,
    title: 'Trainer',
    description: 'Take responsibility for mentoring and guiding new associates while strengthening your leadership, presentation, and team-building abilities.',
    icon: Shield,
  },
  {
    level: 4,
    title: 'Executive Trainer',
    description: 'Lead larger teams and manage advanced training programs focused on strategic growth, operational excellence, and organizational development.',
    icon: Crown,
  },
  {
    level: 5,
    title: 'Team Leader',
    description: 'Drive team performance by motivating members, achieving business targets, and creating a collaborative environment focused on success and growth.',
    icon: Building2,
  },
  {
    level: 6,
    title: 'Assistant Business Owner',
    description: 'Support business operations at a higher level by managing teams, overseeing performance, and contributing to strategic business expansion.',
    icon: Crown,
  },
  {
    level: 7,
    title: 'Business Head',
    description: 'Lead the organization with a strong vision, oversee major business operations, and inspire teams toward long-term growth, innovation, and excellence.',
    icon: Building2,
  },
];

export function Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: '-20% 0px -20% 0px' });
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
      const stage = Math.min(6, Math.floor(scrollProgress * 7));
      setActiveStage(stage);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px">
            <motion.div
              className="w-full bg-[var(--gold)]"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
          </div>

          {roadmapStages.map((stage, index) => {
            const Icon = stage.icon;
            const isActive = index <= activeStage;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={stage.level}
                className={`relative flex items-start mb-20 last:mb-0 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Mobile Layout */}
                <div className="flex items-start gap-5 w-full md:hidden">
                  {/* Icon Node */}
                  <div className="relative z-10 shrink-0 mt-1">
                    <motion.div
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? 'border-[var(--gold)] bg-[var(--gold)]/20'
                          : 'border-white/20 bg-[var(--navy-dark)]'
                      }`}
                      whileInView={{ scale: [0.8, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon size={20} className={isActive ? 'text-[var(--gold)]' : 'text-white/30'} />
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <motion.div
                    className="flex-1 text-left"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className={`inline-block text-xs tracking-[0.3em] uppercase font-semibold mb-2 transition-colors duration-500 ${
                      isActive ? 'text-[var(--gold)]' : 'text-white/30'
                    }`}>
                      Level {stage.level}
                    </span>
                    <h3 className={`font-playfair text-xl font-semibold mb-3 transition-colors duration-500 ${
                      isActive ? 'text-white' : 'text-white/40'
                    }`}>
                      {stage.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors duration-500 ${
                      isActive ? 'text-white/60' : 'text-white/20'
                    }`}>
                      {stage.description}
                    </p>
                  </motion.div>
                </div>

                {/* Desktop Layout */}
                <>
                  {/* Content */}
                  <motion.div
                    className={`hidden md:block flex-1 ${
                      isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                    }`}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className={`inline-block text-xs tracking-[0.3em] uppercase font-semibold mb-2 transition-colors duration-500 ${
                      isActive ? 'text-[var(--gold)]' : 'text-white/30'
                    }`}>
                      Level {stage.level}
                    </span>
                    <h3 className={`font-playfair text-xl md:text-2xl font-semibold mb-3 transition-colors duration-500 ${
                      isActive ? 'text-white' : 'text-white/40'
                    }`}>
                      {stage.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors duration-500 ${
                      isActive ? 'text-white/60' : 'text-white/20'
                    }`}>
                      {stage.description}
                    </p>
                  </motion.div>

                  {/* Node - Desktop */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 z-10">
                    <motion.div
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? 'border-[var(--gold)] bg-[var(--gold)]/20'
                          : 'border-white/20 bg-[var(--navy-dark)]'
                      }`}
                      whileInView={{ scale: [0.8, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon size={20} className={isActive ? 'text-[var(--gold)]' : 'text-white/30'} />
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />
                </>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}