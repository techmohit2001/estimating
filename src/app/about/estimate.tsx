'use client';

import { useState } from 'react';

// Replace with your background image URL when ready
const BACKGROUND_IMAGE_URL = '/services-ready.jpg';

const bodyTextStyle = {
  fontFamily: 'Poppins, sans-serif',
  fontSize: '14px',
  lineHeight: '1.55',
  fontWeight: 400,
} as const;

const labelStyle = {
  fontFamily: 'Poppins, sans-serif',
  fontSize: '13px',
} as const;

export default function Estimate() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    uploadFileName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData((prev) => ({
      ...prev,
      uploadFileName: file ? file.name : '',
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const GOOGLE_SCRIPT_URL =
      'https://script.google.com/macros/s/AKfycbxy2IYg6K9IEJPNL1vMWJwbrfmzE67brgp8xAfW5KRP2nF9lvAwQTIMuWDoHN7CQuP11w/exec';

    setTimeout(() => {
      setShowThankYou(true);
      setIsSubmitting(false);
    }, 500);

    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).catch((error) => {
      console.error('Error submitting form:', error);
    });

    setFormData({
      firstName: '',
      lastName: '',
      uploadFileName: '',
      email: '',
      phone: '',
      message: '',
    });

    setTimeout(() => {
      setShowThankYou(false);
    }, 1000);
  };

  return (
    <section className="relative w-full overflow-hidden pt-4 pb-8 sm:pt-5 sm:pb-10 lg:pt-6 lg:pb-11">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${BACKGROUND_IMAGE_URL}')` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden />

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .slide-up {
          animation: slideUp 0.5s ease-out;
        }
      `}</style>

      {showThankYou && (
        <div className="slide-up fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div
            className="mx-4 max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <h2 className="mb-2 text-3xl font-semibold text-black">Thank You!</h2>
            <p className="text-base text-gray-700">
              Your message has been sent successfully. We&apos;ll get back to you soon!
            </p>
          </div>
        </div>
      )}

      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-10 lg:px-8">
        {/* Left — text (wider so copy flows further across) */}
        <div className="w-full flex-1 text-white lg:min-w-0 lg:pr-6">
          <h2
            className="mb-3 text-[20px] font-semibold leading-snug sm:text-[22px] lg:mb-4 lg:text-[24px]"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            Ready to Estimate Your <br /> Next Project?
          </h2>
          <p className="text-white/95" style={bodyTextStyle}>
            At Estimating Buddies, we believe a good estimate is more than a number. It is the
            foundation of a successful bid, a controlled budget, and a profitable project. Send us
            your drawings today and get accurate estimating support for your next residential or
            commercial project.
          </p>
        </div>

        {/* Right — quote form (same as contact page) */}
        <div className="w-full max-w-[440px] shrink-0 rounded-xl bg-white p-4 shadow-[0_8px_28px_rgba(0,0,0,0.2)] sm:p-5 lg:max-w-[460px]">
          <h3
            className="text-lg text-black sm:text-xl"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            Request a Quote
          </h3>
          <p
            className="mt-0.5 text-xs text-gray-600"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px' }}
          >
            Response within 24 hours
          </p>

          <div className="mt-4 space-y-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-0.5 block text-black" style={labelStyle}>
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="e.g. John Smith"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-2.5 py-2 text-xs text-black placeholder-gray-400 focus:border-black focus:outline-none"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </div>
              <div>
                <label className="mb-0.5 block text-black" style={labelStyle}>
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Your Construction Co."
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-2.5 py-2 text-xs text-black placeholder-gray-400 focus:border-black focus:outline-none"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-0.5 block text-black" style={labelStyle}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-2.5 py-2 text-xs text-black placeholder-gray-400 focus:border-black focus:outline-none"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </div>
              <div>
                <label className="mb-0.5 block text-black" style={labelStyle}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-2.5 py-2 text-xs text-black placeholder-gray-400 focus:border-black focus:outline-none"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </div>
            </div>

            <div>
              <label className="mb-0.5 block text-black" style={labelStyle}>
                Upload Plans (PDF, Image, ZIP)
              </label>
              <input
                type="file"
                name="uploadFileName"
                accept=".pdf,.zip,image/*"
                onChange={handleFileChange}
                className="w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs text-black file:mr-2 file:rounded file:border-0 file:bg-black file:px-2.5 file:py-1.5 file:text-xs file:text-white hover:file:bg-gray-900 focus:border-black focus:outline-none"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              />
              {formData.uploadFileName && (
                <p className="mt-1 text-[11px] text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Selected: {formData.uploadFileName}
                </p>
              )}
            </div>

            <div>
              <label className="mb-0.5 block text-black" style={labelStyle}>
                Message / Scope Of Work
              </label>
              <textarea
                name="message"
                placeholder="Briefly describe your estimation needs..."
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full resize-none rounded-md border border-gray-300 bg-white px-2.5 py-2 text-xs text-black placeholder-gray-400 focus:border-black focus:outline-none"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full rounded-md bg-black px-4 py-2 text-center text-sm text-white transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
