import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { FaClock } from 'react-icons/fa6';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const bodyStyle = {
  fontFamily: 'Poppins, sans-serif',
  fontSize: '16px',
  lineHeight: '1.7',
  fontWeight: 400,
} as const;

export default function Clarity() {
  return (
    <section className="w-full overflow-x-hidden bg-white px-4 pt-4 pb-10 sm:px-6 sm:pt-5 sm:pb-12 lg:px-10 lg:pt-6 lg:pb-14">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        {/* Left — overlapping images (main tall + overlay right-center) */}
        <div className="relative mx-auto w-[85%] max-w-[280px] pr-3 sm:w-full sm:max-w-[420px] sm:pr-10 md:max-w-[460px] lg:mx-0 lg:max-w-[500px] lg:overflow-visible lg:pr-12">
          <div className="relative aspect-[4/5] max-h-[320px] w-full overflow-hidden rounded-[18px] shadow-[0_8px_28px_rgba(0,0,0,0.1)] sm:max-h-none sm:rounded-[24px] sm:shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
            <Image
              src="/about-clarity.png"
              alt="Estimator reviewing blueprints at a desk"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 42vw"
              priority
            />
          </div>

          <div className="absolute top-1/2 right-0 z-10 h-[50%] w-[40%] -translate-y-1/2 translate-x-[6%] overflow-hidden rounded-[14px] border-4 border-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] sm:h-[56%] sm:w-[44%] sm:translate-x-[16%] sm:rounded-[18px] sm:border-[6px] lg:h-[58%] lg:w-[46%] lg:translate-x-[24%] lg:rounded-[20px] lg:border-8">
            <Image
              src="/about-clarity1.png"
              alt="Construction team reviewing blueprints on site"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 35vw, (max-width: 1024px) 40vw, 22vw"
            />
          </div>
        </div>

        {/* Right — text content */}
        <div
          className={`${poppins.className} rounded-[24px] bg-[#f5f7fa] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12`}
        >
          <p
            className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#2997FF] sm:text-sm"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            About Us
          </p>

          <h2
            className="mb-3 text-[#1a1a1a]"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '45px',
              lineHeight: 1.15,
            }}
          >
            Who We Are
          </h2>

          <div className="space-y-5 text-[#4a4a4a]" style={bodyStyle}>
            <p>
              Estimating Buddies is a professional estimating company focused on accuracy,
              transparency, and quick turnaround. We help clients turn drawings, blueprints,
              specifications, and project documents into organized estimates that are easy to review
              and use.
            </p>
            <p>
              Our team understands the pressure contractors face during bidding. Deadlines are tight,
              project scopes can change, and missing items can lead to costly mistakes. We review
              every drawing carefully, study the scope, and prepare estimates based on actual project
              requirements.
            </p>
            <p>
              We are available from{' '}
              <strong className="font-semibold text-[#1a1a1a]">7:00 AM CST to 5:00 PM CST</strong>,
              making it easier for clients across North America to communicate with our team during
              working hours.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4 rounded-2xl bg-[#e8f4ff] px-5 py-4">
            <div
              className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#cce8ff] text-[#2997FF]"
              aria-hidden
            >
              <FaClock className="text-xl" />
            </div>
            <div>
              <p
                className="text-[#1a1a1a]"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  fontWeight: 600,
                  lineHeight: 1.4,
                }}
              >
                Working Hours
              </p>
              <p
                className="text-[#1a1a1a]"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: 1.4,
                }}
              >
                7:00 AM CST to 5:00 PM CST
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
