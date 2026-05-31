import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--navy-dark)] text-white/70">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="ETIQU"
                width={40}
                height={40}
                className="object-contain"
              />
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
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[var(--gold)] mt-0.5 shrink-0" />
                <span className="text-sm text-white/50">Etiqu No 30, 3rd floor,Tamara Towers, Above Hdfc Bank, Vayalur Road, Srinivasa Nagar , Trichy -17</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[var(--gold)] shrink-0" />
                <span className="text-sm text-white/50">+91 7010515019</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[var(--gold)] shrink-0" />
                <span className="text-sm text-white/50">hretiquteam@gmail.com</span>
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
