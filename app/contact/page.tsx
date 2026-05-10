'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';
import { SectionHeading } from '@/components/section-heading';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['123 Business Avenue, Suite 400', 'New York, NY 10001'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@etiqu.com', 'admissions@etiqu.com'],
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 2:00 PM'],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="inline-block text-[var(--gold)] text-xs tracking-[0.4em] uppercase font-semibold mb-6">
              Get in Touch
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
              Contact Us
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Whether you are ready to begin your journey or simply want to learn
              more, our team is here to guide you every step of the way.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                <span className="inline-block text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-semibold mb-4">
                  Send a Message
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-playfair text-3xl font-semibold text-[var(--navy)] mb-8">
                  We&apos;d Love to Hear From You
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs tracking-wider uppercase font-semibold text-[var(--navy)] mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors duration-300"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-wider uppercase font-semibold text-[var(--navy)] mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs tracking-wider uppercase font-semibold text-[var(--navy)] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-wider uppercase font-semibold text-[var(--navy)] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors duration-300"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs tracking-wider uppercase font-semibold text-[var(--navy)] mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors duration-300 bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="program">Program Details</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs tracking-wider uppercase font-semibold text-[var(--navy)] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors duration-300 resize-none"
                      placeholder="Tell us about your interest in ETIQU..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[var(--gold)] text-white px-10 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[var(--gold-light)] transition-all duration-300"
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                </form>
              </FadeIn>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.3}>
                <div className="space-y-8">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="w-12 h-12 border border-[var(--gold)]/30 flex items-center justify-center shrink-0">
                          <Icon size={20} className="text-[var(--gold)]" />
                        </div>
                        <div>
                          <h3 className="font-playfair text-base font-semibold text-[var(--navy)] mb-1">
                            {item.title}
                          </h3>
                          {item.lines.map((line) => (
                            <p key={line} className="text-sm text-gray-500">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Map Placeholder */}
      <section className="bg-[var(--off-white)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <FadeIn>
            <div className="relative w-full h-[400px] bg-gray-200 border border-gray-200 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1920')",
                }}
              />
              <div className="absolute inset-0 bg-[var(--navy)]/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={40} className="text-[var(--gold)] mx-auto mb-3" />
                  <p className="font-playfair text-xl font-semibold text-white">123 Business Avenue, Suite 400</p>
                  <p className="text-sm text-white/70 mt-1">New York, NY 10001</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
