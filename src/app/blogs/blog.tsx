'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from './data';

const POSTS_PER_PAGE = 9;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(0);

  const sortedPosts = useMemo(
    () =>
      [...blogPosts].sort(
        (a, b) =>
          new Date(b.dateValue).getTime() - new Date(a.dateValue).getTime()
      ),
    []
  );

  const totalPages = Math.max(1, Math.ceil(sortedPosts.length / POSTS_PER_PAGE));
  const pageIndex = Math.min(currentPage, totalPages - 1);
  const visiblePosts = sortedPosts.slice(
    pageIndex * POSTS_PER_PAGE,
    pageIndex * POSTS_PER_PAGE + POSTS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-[#F2F2F2] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-10 text-center">
          <h1
            className="text-[32px] leading-tight text-[#0068CB] md:text-[40px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontWeight: 700,
            }}
          >
            Our Blogs
          </h1>
          <div className="mx-auto mt-3 h-[3px] w-[68px] rounded bg-gradient-to-r from-[#2997FF] to-[#0068CB]" />
        </div>

        <div className="grid grid-cols-1 gap-8 overflow-visible md:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <div
              key={post.id}
              className="group relative z-0 pb-4 hover:z-30"
            >
              <div
                className="pointer-events-none absolute inset-x-2 bottom-0 top-6 rounded-[14px] bg-[#1e3a5f]/50 opacity-0 blur-lg transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-3 group-hover:opacity-70"
                aria-hidden
              />
              <Link
                href={post.link}
                className="relative z-10 block rounded-[14px] bg-[#1e3a5f] p-1.5 shadow-[0_6px_20px_rgba(30,58,95,0.22)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:-translate-y-5 group-hover:scale-[1.03] group-hover:shadow-[0_22px_44px_rgba(30,58,95,0.38)]"
              >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[8px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="mt-1.5 rounded-[8px] bg-white px-5 py-5 sm:px-6 sm:py-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span
                    className="rounded-[4px] bg-[#f5a623] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-[#1a1a1a]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Blog
                  </span>
                  <span
                    className="shrink-0 text-[13px] font-bold text-[#2997FF]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {post.date}
                  </span>
                </div>

                <h3
                  className="line-clamp-2 text-[22px] font-bold leading-[1.25] text-[#1e3a5f] sm:text-2xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                  }}
                >
                  {post.title}
                </h3>

                <p
                  className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-[#5a5a5a]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {post.excerpt}
                </p>
              </div>
              </Link>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to page ${index + 1}`}
                aria-current={index === pageIndex ? 'page' : undefined}
                onClick={() => setCurrentPage(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === pageIndex
                    ? 'bg-[#0068CB]'
                    : 'bg-[#cbd5e1] hover:bg-[#94a3b8]'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
