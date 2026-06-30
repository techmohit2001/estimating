'use client';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/blog.png')" }}
      />
      <div className="absolute inset-0 bg-black/5" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] items-center px-6 sm:px-10 lg:px-16">
        <div className="-mt-14 ml-8 max-w-[760px] text-white sm:-mt-20 sm:ml-14 lg:-mt-28 lg:ml-20">
          <h1
            className="mb-6 text-[clamp(7rem,8vw,52px)] leading-[1.02] tracking-normal"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            <span className="relative inline-block">
              B
              <span
                className="absolute -bottom-1 left-0 h-[3px] w-[0.55em] rounded-full bg-[#2997FF]"
                aria-hidden
              />
            </span>
            log
          </h1>

          <p
            className="mb-10 max-w-[700px] text-[clamp(1rem,2.8vw,24px)] font-normal leading-[1.45]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Expert insights, practical strategies, and <br />real-world stories to help you streamline <br />and
            optimize localization, connect with <br />audiences and grow your business globally.
          </p>
        </div>
      </div>
    </section>
  );
}
