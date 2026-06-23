const trustItems = [
  {
    title: "Bid-Ready Cost Accuracy",
    description:
      "Precise construction estimating that helps you prepare competitive bids with more confidence.",
  },
  {
    title: "Trade-Focused Estimating",
    description:
      "Trade-specific estimating built for real construction scopes. From quantities to costs, every detail is prepared to support smarter bidding.",
  },
  {
    title: "Detailed Takeoffs That Matter",
    description:
      "Detailed quantity takeoffs prepared with care so your team can plan better, price smarter, and bid with confidence.",
  },
  {
    title: "Scalable Multi-Trade Support",
    description:
      "Flexible estimating support across multiple trades to match the size, scope, and complexity of your project.",
  },
];

export default function Serve() {
  return (
    <section
      className="w-full bg-[#f2f2f2] px-4 pt-4 pb-4 sm:px-6 lg:px-12 lg:pt-6 lg:pb-6"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="mx-auto grid w-full max-w-[1240px] gap-8 lg:grid-cols-[1fr_1.6fr] lg:items-center">
        <div className="max-w-[430px]">
          <h2
            className="text-[36px] leading-[44px] text-[#1f1f1f] md:text-[45px] md:leading-[60px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontStyle: "italic",
          
              textTransform: "capitalize",
            }}
          >
            Why Contractors Trust Estimating Buddies
          </h2>
          <div className="mt-2 h-[3px] w-[68px] rounded bg-gradient-to-r from-[#2997FF] to-[#0068CB]" />
          <p className="mt-6 text-[16px] leading-[26px] text-[#4f4f4f]">
            In a competitive construction market, accurate estimates can make all the difference.
            We provide dependable takeoffs and cost estimating services that help you bid smarter
            and work more efficiently.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {trustItems.map((item, index) => (
            <article
              key={item.title}
              className={`rounded-[12px] border border-[#d8d8d8] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.12)] ${
                index % 3 === 0 ? "bg-[#cecece]" : "bg-[#f8f8f8]"
              }`}
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#2997FF] text-[16px] text-white"
                aria-hidden="true"
              >
                📄
              </span>
              <h3 className="mt-4 text-[18px] font-semibold leading-[30px] text-[#222222]">{item.title}</h3>
              <p className="mt-2 text-[16px] leading-[24px] text-[#666666]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}