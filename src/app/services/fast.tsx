'use client';

export default function Fast() {
  return (
    <div
      className="relative w-full bg-black overflow-hidden flex flex-col items-center justify-center"
      style={{ minHeight: '400px', padding: '20px 0 40px' }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      
      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Heading */}
        <h2
          className="text-white mb-4 text-center w-full max-w-[980px] text-[clamp(30px,5vw,45px)]"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 700,
            fontStyle: 'italic',
            lineHeight: '46px',
            letterSpacing: '0.02em',
            textAlign: 'center',
          }}
        >
          Plan Better And Bid Stronger With Expert
          <br />
          Estimating Services Content
        </h2>

        <div className="w-[64px] h-[3px] bg-gradient-to-r from-[#2997FF] to-[#0068CB] rounded-full mb-8" />

        {/* Subtitle */}
        <div
          className="text-white/90 mb-10 text-center w-full max-w-[1260px] space-y-7"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '34px',
            letterSpacing: '0',
          }}
        >
          <p>
            Estimating Buddies provides reliable construction estimating services and quantity
            takeoff services for commercial, industrial, civil, and residential projects. We support
            general contractors, subcontractors, builders, developers, architects, and engineering
            firms with practical estimating solutions that make bidding, budgeting, and planning
            more effective. Our core services include Plumbing Estimating, Construction Estimating,
            Mechanical Estimating, Architectural Cost Estimating, Quantity Takeoff, and Electrical
            Estimating, giving clients the flexibility to get support for individual trades or complete
            project scopes.
          </p>
          <p>
            At Estimating Buddies, we focus on clear numbers, detailed scope review, and
            trade-specific cost analysis that helps reduce guesswork before construction begins.
            Whether the project involves new construction, renovation, tenant improvement, or
            infrastructure work, our team prepares detailed takeoffs and cost breakdowns using
            industry-standard tools and practical pricing methods. This helps clients bid more
            competitively, manage project costs with better clarity, and move forward with greater
            confidence.
          </p>
        </div>

      </div>
    </div>
  );
}