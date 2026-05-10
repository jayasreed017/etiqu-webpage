import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--navy-dark)] text-white/70">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border-2 border-[var(--gold)] flex items-center justify-center">
                <span className="font-playfair text-[var(--gold)] text-lg font-bold">E</span>
              </div>
              <span className="font-playfair text-2xl font-semibold text-white tracking-wide">
                ETIQU
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              Developing tomorrow&apos;s business owners through excellence, integrity, and unwavering commitment to professional growth.
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-[var(--gold)] text-sm tracking-widest uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Opportunity', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-white/50 hover:text-[var(--gold)] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-[var(--gold)] text-sm tracking-widest uppercase mb-6">
              Programs
            </h4>
            <ul className="space-y-3">
              {['Business Associate', 'Team Leader', 'Manager', 'Director', 'Business Owner'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/50">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-[var(--gold)] text-sm tracking-widest uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[var(--gold)] mt-0.5 shrink-0" />
                <span className="text-sm text-white/50">123 Business Avenue, Suite 400<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[var(--gold)] shrink-0" />
                <span className="text-sm text-white/50">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[var(--gold)] shrink-0" />
                <span className="text-sm text-white/50">info@etiqu.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-16 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} ETIQU. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            A Legacy of Excellence Since 2015
          </p>
        </div>
      </div>
    </footer>
  );
}
