export default function Hero() {
  return (
    <section className="relative h-[220px] w-full overflow-hidden sm:h-[260px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('services-plumbing-services.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] items-center px-6 sm:px-10 lg:px-16">
        <h1
          className="text-[56px] font-bold leading-[1.1] tracking-normal text-white sm:text-[64px] lg:text-[72px]"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 200,
            textAlign: 'left',
          }}
        >
          Blog Posts
        </h1>
      </div>
    </section>
  );
}
