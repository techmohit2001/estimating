import Hero from './hero';
import Accurate from './accurate';
import Solve from './solve';
import Quantity from './quantity';
import Help from './help';
import Residential from './residesntial';
import Commercial from './commercial';
import Industrial from './industrial';
import Cover from './cover';
import Software from './software';
import Scope from './scope';
import Benefits from './benefits';
import Choose from './choose';
import Ready from './ready';
import ServiceSidebar from './service-sidebar';
import FAQ from './faq';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="w-full bg-white pb-0">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8 lg:px-14">
          {/*
            Desktop: left column scrolls (Accurate + Solve), right sidebar stays sticky.
            Mobile: sidebar stays inside Accurate for correct content order.
          */}
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(200px,300px)] lg:items-start lg:gap-5 lg:pb-2 xl:gap-8">
            <div className="min-w-0">
              <Accurate />
              <Solve />
              <Quantity />
              <Help />
              <Residential />
              <Commercial />
              <Industrial />
              <Cover />
              <Software />
              <Scope />
              <Benefits />
              <Choose />
              <Ready />
              </div>
            <aside className="hidden lg:block lg:sticky lg:top-[72px] lg:bottom-24 lg:z-30 lg:self-start lg:pt-8 xl:pt-14">
              <ServiceSidebar />
            </aside>
          </div>
        </div>
        <div className="mt-8 lg:mt-10">
          <FAQ />
        </div>
      </section>
    </>
  );
}
