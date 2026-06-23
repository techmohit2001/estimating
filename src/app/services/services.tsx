 "use client";

import { useState } from "react";

export default function Services() {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      image: "/services-service6.png",
      title: "Plumbing Estimating",
      description:
        "Plumbing estimating covers fixtures, piping, labor, and material costs to support accurate bidding and planning.",
    },
    {
      id: 2,
      image: "/services-service5.png",
      title: "Construction Estimating",
      description:
        "Construction estimating includes material, labor, and cost evaluation for complete building scopes and control.",
    },
    {
      id: 3,
      image: "/services-service4.png",
      title: "Mechanical Estimating",
      description:
        "Mechanical estimating covers HVAC systems, ductwork, piping, insulation, and equipment quantities.",
    },
    {
      id: 4,
      image: "/services-service3.jpg",
      title: "Architectural Cost Estimating",
      description:
        "Architectural estimates include drawings-based quantities, finishes, and structural scope budgeting.",
    },
    {
      id: 5,
      image: "/services-service2.png",
      title: "Quantity Takeoff",
      description:
        "Quantity takeoff services provide accurate material counts and measurements for reliable project bids.",
    },
    {
      id: 6,
      image: "/services-service1.png",
      title: "Electrical Estimating",
      description:
        "Electrical estimating covers wiring, panels, conduits, fixtures, and equipment with labor cost projections.",
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
          Our Services
        </h2>
        <div className="mb-6  h-[3px] w-[68px] rounded bg-gradient-to-r from-[#2997FF] to-[#0068CB]" />
        <p className="mt-4 text-[16px] leading-[24px] text-[#555555]">
          Comprehensive estimating solutions tailored for every client, every project.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, image, title, description }) => {
            const isActive = activeCardId === id;

            return (
              <article
                key={id}
                onClick={() => setActiveCardId((prevId) => (prevId === id ? null : id))}
                className="group relative h-[420px] cursor-pointer overflow-hidden rounded-[18px] border border-[#ececec] bg-white shadow-[0_6px_20px_rgba(0,0,0,0.08)] md:h-[440px]"
              >
              <div className="h-full w-full overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

              <div
                className={`absolute bottom-0 left-0 right-0 rounded-t-[16px] px-5 py-5 transition-all duration-500 ease-out ${
                  isActive ? "h-[250px] bg-[#2997FF]" : "h-[100px] bg-white"
                } md:h-[100px] md:bg-white md:group-hover:h-[250px] md:group-hover:bg-[#2997FF]`}
              >
                <h3
                  className={`text-[18px] leading-[24px] transition-colors duration-500 md:text-[24px] md:leading-[30px] lg:text-[18px] lg:leading-[34px] ${
                    isActive ? "text-white" : "text-[#161616]"
                  } md:text-[#161616] md:group-hover:text-white`}
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
                >
                  {title}
                </h3>

                <p
                  className={`mt-3 text-[15px] leading-[24px] text-white/90 transition-all duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  } md:opacity-0 md:group-hover:opacity-100`}
                >
                  {description}
                </p>

                <button
                  type="button"
                  className={`mt-4 text-[24px] text-white transition-all duration-500 md:text-[20px] lg:text-[22px] ${
                    isActive ? "opacity-100" : "opacity-0"
                  } md:opacity-0 md:group-hover:opacity-100`}
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                >
                  Know More <span aria-hidden="true">→</span>
                </button>
              </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}