import { Cormorant_Garamond, Poppins } from 'next/font/google';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const STATS = [
  { value: '10+', label: 'Years Experience' },
  { value: '2020', label: 'Founded' },
  { value: 'USA + CA', label: 'Coverage Area' },
  { value: 'Fast', label: 'Turnaround' },
] as const;

export default function Plans() {
  return (
    <section className="w-full bg-white px-4 pb-12 pt-6 sm:px-6 sm:pb-14 lg:px-10 lg:pb-16 lg:pt-10">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="pb-8 sm:pb-10">
          <h2
            className={`${cormorantGaramond.className} mb-4 text-[#1a1a1a]`}
            style={{
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: '45px',
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            About Our Company
          </h2>

          <div className="mx-auto mb-10 h-[3px] w-12 rounded-full bg-[#2997FF]" />

          <div
            className={`${poppins.className} space-y-6 text-[#555555]`}
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              lineHeight: '1.75',
              fontWeight: 400,
            }}
          >
            <p>
              At{' '}
              <strong className="font-semibold text-[#333333]">Estimating Buddies</strong>, we
              specialize in delivering accurate, transparent, and cost-effective construction
              estimating and material takeoff services for contractors, developers, architects, and
              homeowners across the{' '}
              <strong className="font-semibold text-[#333333]">USA and Canada</strong>.{' '}
              <strong className="font-semibold text-[#333333]">Founded in 2020</strong>, our team
              brings{' '}
              <strong className="font-semibold text-[#333333]">
                10+ years of combined industry experience
              </strong>{' '}
              to every project. Our core services include{' '}
              <strong className="font-semibold text-[#333333]">
                Plumbing Estimating, Construction Estimating, Mechanical Estimating, Architectural
                Cost Estimating, Quantity Takeoff, and Electrical Estimating
              </strong>
              , giving clients the flexibility to get support for individual trades or complete
              project scopes.
            </p>
            <p>
              We deliver comprehensive estimating solutions for{' '}
              <strong className="font-semibold text-[#333333]">
                residential and commercial projects
              </strong>
              , helping clients save time, reduce risk, and bid with confidence. At Estimating
              Buddies, we focus on clear numbers, detailed scope review, and trade-specific cost
              analysis that helps reduce guesswork before construction begins. Whether your project
              involves new construction, renovation, tenant improvement, or infrastructure work,
              our team prepares detailed takeoffs and cost breakdowns using industry-standard
              tools—so you can plan smarter, bid competitively, and move forward with greater
              confidence.
            </p>
          </div>
        </div>

        <div className="bg-black py-5 sm:py-6">
          <div className="flex flex-wrap items-center justify-center gap-2 px-3 sm:gap-3 sm:px-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex w-full max-w-[130px] flex-col items-center justify-center rounded-lg px-2 py-3 text-center sm:max-w-[150px] sm:px-3 sm:py-3.5"
                style={{
                  background: 'linear-gradient(180deg, #0f1a2e 0%, #0a1220 100%)',
                  borderBottom: '2px solid #2997FF',
                }}
              >
                <span
                  className={`${poppins.className} mb-0.5 text-[16px] font-bold leading-none text-white sm:text-[18px]`}
                >
                  {stat.value}
                </span>
                <span
                  className={`${poppins.className} text-[10px] font-normal text-white/70 sm:text-[11px]`}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
