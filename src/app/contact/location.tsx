'use client';

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const contactItems = [
  {
    id: 'mail',
    title: 'Mail',
    value: 'info@estimatingbuddies.com',
    icon: FaEnvelope,
    href: 'mailto:info@estimatingbuddies.com',
  },
  {
    id: 'call',
    title: 'Call Us',
    value: '+1 512-828-1066',
    icon: FaPhoneAlt,
    href: 'tel:+15128281066',
  },
  {
    id: 'location',
    title: 'Our Location',
    value: '13555 South East 36th Street, Suite 100, Bellevue, WA 98006, USA',
    icon: FaMapMarkerAlt,
    href: 'https://maps.google.com/?q=13555+SE+36th+St+Suite+100+Bellevue+WA+98006',
  },
];

export default function Location() {
  return (
    <section className="bg-white px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto max-w-6xl">
        <h2
          className="text-center text-black"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: '45px',
            textTransform: 'capitalize',
            lineHeight: 1.1,
          }}
        >
          Let&apos;s Connect
        </h2>

        <div className="mt-3 flex justify-center">
          <span className="h-[3px] w-16 rounded-full bg-[#2397ff]" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.id}
                href={item.href}
                target={item.id === 'location' ? '_blank' : undefined}
                rel={item.id === 'location' ? 'noopener noreferrer' : undefined}
                className="mx-auto block w-full max-w-[280px] rounded-2xl border border-[#d8d8d8] bg-white px-4 py-4 text-center shadow-[0_6px_16px_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
              >
                <Icon className="mx-auto text-[28px] text-[#2397ff]" aria-hidden="true" />
                <h3
                  className="mt-3 text-[24px] text-black"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  {item.title}
                </h3>
                <p
                  className="mx-auto mt-1.5 max-w-[240px] text-[15px] leading-relaxed text-[#8a8a8a]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                >
                  {item.value}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
