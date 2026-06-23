import {
  FaHelmetSafety,
  FaUserTie,
  FaUsersGear,
  FaHouseChimney,
  FaPenRuler,
  FaBuildingUser,
  FaUsers,
  FaScrewdriverWrench,
} from "react-icons/fa6";

const industries = [
  { id: 1, label: "Contractors", icon: FaHelmetSafety },
  { id: 2, label: "Architects", icon: FaPenRuler },
  { id: 3, label: "Vendors", icon: FaBuildingUser },
  { id: 4, label: "Developers", icon: FaUsersGear },
  { id: 5, label: "Home Builders", icon: FaHouseChimney },
  { id: 6, label: "Designers", icon: FaUserTie },
  { id: 7, label: "Builders", icon: FaUsers },
  { id: 8, label: "Subcontractors", icon: FaScrewdriverWrench },
  { id: 9, label: "Engineers", icon: FaHelmetSafety },
];

export default function Industries() {
  return (
    <section className="w-full bg-white px-4 py-7 sm:px-6 sm:py-8 lg:px-10 lg:py-9">
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-10 lg:grid-cols-2">
        <div>
          <h2
            className="text-[40px] leading-tight text-[#1f1f1f]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 700,
            }}
          >
            Industries We Serve
          </h2>
          <div className="mt-3 h-[3px] w-[68px] rounded bg-gradient-to-r from-[#2997FF] to-[#0068CB]" />

          <p
            className="mt-6 max-w-[520px] text-[14px] leading-7 text-[#3f3f3f]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            From residential developments to commercial and industrial builds, we serve diverse sectors
            with reliable Plumbing Estimating, Construction Estimating, Mechanical Estimating, and
            Electrical Estimating support, including:
          </p>

          <div className="-ml-4 mt-3 w-full max-w-[340px] rounded-tr-[38px] bg-black px-19 py-5 text-white sm:-ml-6 lg:-ml-10">
            <ul className="space-y-2.5">
              {industries.map(({ id, label, icon: Icon }) => (
                <li key={id} className="flex items-center gap-3 text-[14px]">
                  <Icon className="text-[#2c9bff]" aria-hidden="true" />
                  <span style={{ fontFamily: "Poppins, sans-serif" }}>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:mx-0">
          <div className="absolute left-[4%] top-[-26px] h-[88%] w-[66%] rounded-tl-[14px] bg-black" />
          <img
            src="/home-industries1.jpg"
            alt="Construction professionals discussing work at a job site"
            className="relative z-10 ml-auto h-[340px] w-[92%] rounded-[14px] object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
