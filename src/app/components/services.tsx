import Link from "next/link";
import {
  FaFaucetDrip,
  FaHelmetSafety,
  FaPlugCircleBolt,
  FaScrewdriverWrench,
} from "react-icons/fa6";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: FaHelmetSafety,
      image: "/home-industries4.jpg",
      title: "Mechanical Estimating",
      description:
        "Reliable cost calculations for HVAC, ductwork, piping, and other mechanical systems. Helps contractors prepare precise bids and plan costs with confidence.",
    },
    {
      id: 2,
      icon: FaFaucetDrip,
      image: "/home-industries3.jpg",
      title: "Plumbing Estimating",
      description:
        "Accurate material, fixture, and labor takeoffs for residential, commercial, and industrial projects. Helps contractors bid faster and plan project costs with confidence.",
    },
    {
      id: 3,
      icon: FaPlugCircleBolt,
      image: "/home-industries2.jpg",
      title: "Electrical Estimating",
      description:
        "Reliable cost calculations for wiring, lighting, panels, conduits, and other electrical systems. Helps contractors prepare competitive bids and manage project costs with confidence.",
    },
    {
      id: 4,
      icon: FaScrewdriverWrench,
      image: "/home-industries5.jpg",
      title: "Cost Estimating Services",
      description:
        "Construction cost estimating services tailored to your scope, trade needs, and bidding goals. Supporting reliable budgeting, smarter planning, and better project control.",
    },
  ];

  return (
    <section
      className="w-full bg-white px-4 pt-1 pb-10 sm:px-6 sm:pt-2 lg:px-10 lg:pt-2"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <h2
          className="text-[37px] leading-[42px] md:text-[45px] md:leading-[70px] text-[#1f1f1f]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontStyle: "italic",
            letterSpacing: "0.02em",
            textTransform: "capitalize",
          }}
        >
          Our Estimating Services
        </h2>
        <div className="mb-6  h-[3px] w-[68px] rounded bg-gradient-to-r from-[#2997FF] to-[#0068CB]" />
        <p className="mt-4 text-[16px] leading-[24px] text-[#555555]">Everything You Need to Know About Accurate Project Estimation</p>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map(({ id, icon: Icon, image, title, description }) => (
            <div key={id} className="group h-[194px] [perspective:1000px]">
              <article className="relative h-full rounded-[12px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 rounded-[12px] border border-[#e0e0e0] bg-white px-6 py-7 shadow-[0_4px_18px_rgba(15,23,42,0.18)] [backface-visibility:hidden]">
                  <Icon className="text-[24px] text-[#2997FF]" aria-hidden="true" />
                  <h3 className="mt-3 text-[18px] font-semibold leading-tight text-[#202020]">{title}</h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#666666]">{description}</p>
                </div>

                <div
                  className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[12px] border border-[#e0e0e0] bg-cover bg-center shadow-[0_4px_18px_rgba(15,23,42,0.18)] [backface-visibility:hidden] [transform:rotateY(180deg)]"
                  style={{ backgroundImage: `url('${image}')` }}
                >
                  <div className="absolute inset-0 bg-black/15" />
                  <Link
                    href="/services"
                    className="relative z-10 rounded-[6px] bg-[#2997FF] px-14 py-3 text-[14px] text-white transition-colors duration-200 hover:bg-black"
                  >
                    Read More ↗
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            href="/services"
            className="rounded-[8px] bg-[#2997FF] px-6 py-3 text-white transition-colors duration-200 hover:bg-black"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", fontWeight: 500 }}
          >
            View All Services ↗
          </Link>
        </div>
      </div>
    </section>
  );
}