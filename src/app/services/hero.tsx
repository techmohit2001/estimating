'use client';

export default function Hero() {
  const handleGetQuoteClick = () => {
    window.dispatchEvent(new Event('open-quote-form'));
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/service1.png')" }}
      />
      <div className="absolute inset-0 bg-black/5" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] items-center px-6 sm:px-10 lg:px-16">
        <div className="max-w-[760px] text-white">
          <h1
            className="mb-6 text-[clamp(2rem,5.8vw,48px)] leading-[1.02] tracking-normal"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Estimating Services For
            <br />
            Construction
          </h1>

          <p
            className="mb-10 max-w-[700px] text-[clamp(1rem,2.8vw,24px)] font-normal leading-[1.45]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Confident bidding with accurate construction <br /> estimating and quantity takeoff services for projects across the USA.
          </p>

          <div className="flex w-full max-w-[360px] flex-nowrap items-center gap-2 sm:w-auto sm:max-w-none sm:gap-4">
            
            <button
              className="inline-flex h-12 w-[140px] flex-none items-center justify-center rounded-xl border border-white/60 bg-white/10 px-4 text-base font-medium text-white transition-colors duration-300 hover:bg-white hover:text-gray-900 sm:w-[170px] sm:px-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              onClick={handleGetQuoteClick}
            >
              Get a Quote ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}