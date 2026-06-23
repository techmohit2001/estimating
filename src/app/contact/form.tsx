'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    uploadFileName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData(prev => ({
      ...prev,
      uploadFileName: file ? file.name : ''
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace this URL with your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxy2IYg6K9IEJPNL1vMWJwbrfmzE67brgp8xAfW5KRP2nF9lvAwQTIMuWDoHN7CQuP11w/exec';

    // Show success immediately for better UX (after 300ms)
    setTimeout(() => {
      setShowThankYou(true);
      setIsSubmitting(false);
    }, 500);

    // Send data to Google Sheets in background
    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    }).then(() => {
      console.log('Form submitted successfully:', formData);
    }).catch((error) => {
      console.error('Error submitting form:', error);
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      uploadFileName: '',
      email: '',
      phone: '',
      message: ''
    });

    // Hide popup after 1 second
    setTimeout(() => {
      setShowThankYou(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black px-4 py-12 md:px-8 md:py-20">
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
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 slide-up">
          <div 
            className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md mx-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <h2 className="text-black text-3xl font-semibold mb-2">Thank You!</h2>
            <p className="text-gray-700 text-base">Your message has been sent successfully. We&apos;ll get back to you soon!</p>
          </div>
        </div>
      )}

      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-lg">
          <h1
            className="text-white"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 600,
              fontSize: '40px',
              lineHeight: '100%'
            }}
          >
            Send Us Your Plans &amp;
            <br />
            Let Our Experts
            <br />
            Handle The Numbers
          </h1>
          <p
            className="mt-8 text-sm text-gray-300 md:text-base"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            From quantity takeoff to detailed pricing, our estimators provide clear and dependable solutions that
            help you plan better, bid smarter, and manage project costs with confidence. We help general contractors,
            builders, architects, engineering firms, and lenders make informed decisions with reliable estimating support.
          </p>
          <div
            className="mt-10 space-y-2 text-sm text-gray-200"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <p className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 7L12 13L21 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="white" strokeWidth="2" />
                </svg>
              </span>
              <span>info@estimatingbuddies.com</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M22 16.92V20A2 2 0 0 1 19.82 22A19.79 19.79 0 0 1 11.2 18.9A19.5 19.5 0 0 1 5.1 12.8A19.79 19.79 0 0 1 2 4.18A2 2 0 0 1 4 2H7.09A2 2 0 0 1 9.09 3.72C9.21 4.62 9.43 5.5 9.74 6.35A2 2 0 0 1 9.29 8.46L8 9.75A16 16 0 0 0 14.25 16L15.54 14.71A2 2 0 0 1 17.65 14.26C18.5 14.57 19.38 14.79 20.28 14.91A2 2 0 0 1 22 16.92Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>+1 512-828-1066</span>
            </p>
          </div>
        </div>

        <div className="w-full max-w-3xl rounded-2xl bg-[#f5f5f5] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.35)] md:p-8">
          <h2
            className="text-3xl text-black"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            Request a Quote
          </h2>
          <p
            className="mt-1 text-sm text-gray-600"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Response within 24 hours
          </p>

          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="e.g. John Smith"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-sm text-black placeholder-gray-400 focus:border-black focus:outline-none"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-sm text-black placeholder-gray-400 focus:border-black focus:outline-none"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-sm text-black placeholder-gray-400 focus:border-black focus:outline-none"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-sm text-black placeholder-gray-400 focus:border-black focus:outline-none"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Upload Plans (PDF, Image, ZIP)
              </label>
              <input
                type="file"
                name="uploadFileName"
                accept=".pdf,.zip,image/*"
                onChange={handleFileChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-black file:mr-3 file:rounded-md file:border-0 file:bg-black file:px-3 file:py-2 file:text-sm file:text-white hover:file:bg-gray-900 focus:border-black focus:outline-none"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              />
              {formData.uploadFileName && (
                <p className="mt-2 text-xs text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Selected: {formData.uploadFileName}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Message / Scope Of Work
              </label>
              <textarea
                name="message"
                placeholder="Briefly describe your estimation needs..."
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-3 py-3 text-sm text-black placeholder-gray-400 focus:border-black focus:outline-none"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full rounded-lg bg-black px-6 py-3 text-center text-base text-white transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}