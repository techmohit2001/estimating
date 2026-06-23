import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/app/blogs/data";

export default function Blog() {
  const latestBlogs = [...blogPosts]
    .sort(
      (a, b) =>
        new Date(b.dateValue).getTime() - new Date(a.dateValue).getTime()
    )
    .slice(0, 4);

  return (
    <section className="w-full bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1240px] rounded-2xl bg-white px-6 py-8 sm:px-8">
        <h2
          className="text-[32px] leading-tight text-[#1f1f1f] md:text-[45px] md:leading-[60px]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 700,
          }}
        >
          Latest Blogs
        </h2>
        <div className="mt-3 h-[3px] w-[68px] rounded bg-gradient-to-r from-[#2997FF] to-[#0068CB]" />
        <p
          className="mt-4 text-[16px] leading-6 text-[#3f3f3f]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Serving contractors, builders, architects, engineers, and vendors with
          dependable estimating solutions.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {latestBlogs.map((post) => (
            <div key={post.id} className="group relative pb-3">
              <div className="pointer-events-none absolute inset-x-3 bottom-1 h-[88%] rounded-xl bg-black/35 opacity-45 blur-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-2 group-hover:opacity-70" />
              <article className="relative z-10 overflow-hidden rounded-xl bg-black p-2.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:z-30 group-hover:-translate-y-6 group-hover:scale-[1.02] group-hover:shadow-[0_26px_48px_rgba(0,0,0,0.32)]">
                <Link href={post.link} className="block">
                  <div className="relative h-[124px] w-full overflow-hidden rounded-lg">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    />
                  </div>
                </Link>

                <div className="px-1 pb-2 pt-4">
                  <Link href={post.link} className="block">
                    <h3
                      className="line-clamp-2 text-[16px] font-semibold leading-6 text-white"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {post.title}
                    </h3>
                  </Link>
                  <p
                    className="mt-2 text-[12px] text-[#A9A9A9]"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {post.date}
                  </p>
                  <Link
                    href={post.link}
                    className="mt-5 inline-block text-[14px] font-medium text-[#2997FF] hover:text-[#5db3ff]"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
