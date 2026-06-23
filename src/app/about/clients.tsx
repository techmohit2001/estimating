import { Cormorant_Garamond, Poppins } from 'next/font/google';
import { FaCheck } from 'react-icons/fa6';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const FEATURES = [
  { label: 'FOUNDED', value: '2020' },
  { label: 'EXPERIENCE', value: '10+ years of combined' },
  { label: 'PROJECTS', value: 'Residential & Commercial' },
  { label: 'COVERAGE', value: 'USA and Canada' },
  { label: 'REPORTS', value: 'Clear material & labor breakdowns' },
  { label: 'FAST TURNAROUND', value: 'Fast turnaround & responsive support' },
] as const;

export default function Clients() {
  return (
    <section className="w-full bg-white px-4 pt-2 pb-10 sm:px-6 sm:pt-3 sm:pb-12 lg:px-10 lg:pt-4 lg:pb-14">
      <div className="mx-auto w-full max-w-[1280px]">
        <h2
          className={`${cormorantGaramond.className} text-[#000000]`}
          style={{
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: 'clamp(36px, 5vw, 45px)',
            lineHeight: 1.1,
          }}
        >
          <span className="relative inline-block">
            Why
            <span
              className="absolute left-0 top-full mt-1.5 h-[4px] w-full rounded-sm bg-[#2997FF]"
              aria-hidden
            />
          </span>{' '}
          Choose Us
        </h2>

        <p
          className={`${poppins.className} mt-5 w-full text-[#666666] sm:mt-6`}
          style={{
            fontSize: '16px',
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          Choosing Estimating Buddies means working with a team that understands the value of
          accuracy, speed, and clear communication. We do not prepare rough numbers or generic
          estimates. Every project is reviewed with attention to detail, so your estimate reflects
          the actual drawing scope. Our cost reports are clean, structured, and easy to understand,
          helping you make better bidding and budgeting decisions.
        </p>

        <p
          className={`${poppins.className} mt-7 mb-5 text-[#333333] sm:mt-8 sm:mb-6`}
          style={{
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: 1.4,
          }}
        >
          What makes us different:
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {FEATURES.map((item) => (
            <div
              key={item.label}
              className="flex items-center rounded-lg border border-[#f0f0f0] bg-white p-5"
            >
              <div
                className="mr-4 flex size-10 shrink-0 items-center justify-center rounded-md bg-[#e6f4ff] text-[#2997FF]"
                aria-hidden
              >
                <FaCheck className="text-sm" />
              </div>
              <div className={`${poppins.className} min-w-0`}>
                <p
                  className="mb-0.5 text-[12px] font-normal uppercase tracking-wide text-[#999999]"
                  style={{ lineHeight: 1.3 }}
                >
                  {item.label}
                </p>
                <p
                  className="text-[16px] font-semibold text-[#000000]"
                  style={{ lineHeight: 1.4 }}
                >
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
