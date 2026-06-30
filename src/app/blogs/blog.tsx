'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts, type BlogPost } from './data';

const GRID_POSTS_PER_PAGE = 9;

function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <div className="mb-14 flex flex-col overflow-hidden rounded-[20px] border border-[#d8d8d8] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] md:flex-row md:items-stretch">
      <div className="shrink-0 bg-white p-5 sm:p-6 md:w-[46%] lg:p-8">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] border-[8px] border-white shadow-[0_8px_24px_rgba(0,0,0,0.14)] md:aspect-auto md:h-full md:min-h-[300px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 46vw"
            priority
          />
        </div>
      </div>

      <div
        className="flex flex-1 flex-col justify-center px-6 pb-8 pt-6 sm:px-8 md:px-10 md:py-12 lg:px-14"
        style={{
          background: 'linear-gradient(180deg, #ffffff 0%, #f5faff 45%, #edf5fb 100%)',
        }}
      >
        <h2
          className="text-[clamp(1.35rem,2.5vw,1.75rem)] font-bold leading-[1.3] text-[#1a1a1a]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {post.title}
        </h2>

        <div className="my-4 h-[3px] w-10 rounded-full bg-[#2997FF]" aria-hidden />

        <p
          className="max-w-[560px] text-[14px] leading-[1.7] text-[#555555] sm:text-[15px]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {post.excerpt}
        </p>

        <Link
          href={post.link}
          className="mt-5 inline-flex w-fit items-center gap-1 text-[14px] font-semibold text-[#2997FF] transition-colors hover:text-[#0068CB]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Read More
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="overflow-hidden rounded-[12px] border border-[#d4d4d4] bg-white shadow-[0_4px_18px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-[#2997FF] hover:shadow-[0_8px_24px_rgba(41,151,255,0.14)]">
      <Link href={post.link} className="block">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="px-5 py-5 sm:px-6 sm:py-6">
          <span
            className="mb-3 block text-[13px] text-[#a0a0a0]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {post.date}
          </span>

          <h3
            className="line-clamp-2 text-[17px] font-bold leading-[1.35] text-[#1a1a1a] sm:text-[18px]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {post.title}
          </h3>

          <p
            className="mt-3 line-clamp-3 text-[13px] leading-[1.65] text-[#777777] sm:text-[14px]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {post.excerpt}
          </p>

          <span
            className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[#2997FF] sm:text-[14px]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Read More
            <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}

function getPageNumbers(current: number, total: number): (number | 'ellipsis')[] {
  if (total <= 10) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | 'ellipsis')[] = [1, 2, 3];

  if (current > 4) pages.push('ellipsis');

  if (current > 3 && current < total - 2) {
    pages.push(current);
  }

  if (current < total - 3) pages.push('ellipsis');

  pages.push(total - 1, total);

  return [...new Set(pages)].sort((a, b) => {
    if (a === 'ellipsis') return 1;
    if (b === 'ellipsis') return -1;
    return (a as number) - (b as number);
  });
}

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

  const featuredPost = sortedPosts[0];
  const gridPosts = sortedPosts.slice(1);

  const totalPages = Math.max(1, Math.ceil(gridPosts.length / GRID_POSTS_PER_PAGE));
  const pageIndex = Math.min(currentPage, totalPages - 1);
  const visibleGridPosts = gridPosts.slice(
    pageIndex * GRID_POSTS_PER_PAGE,
    pageIndex * GRID_POSTS_PER_PAGE + GRID_POSTS_PER_PAGE
  );

  const pageNumbers = getPageNumbers(pageIndex + 1, totalPages);

  return (
    <div className="w-full bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-10">
          <h2
            className="text-[32px] leading-tight text-[#1a1a1a] md:text-[38px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontWeight: 700,
            }}
          >
            Our Blogs
          </h2>
          <div className="mt-3 h-[3px] w-[60px] rounded bg-gradient-to-r from-[#2997FF] to-[#0068CB]" />
        </div>

        {featuredPost && <FeaturedPost post={featuredPost} />}

        {visibleGridPosts.length > 0 && (
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {visibleGridPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {gridPosts.length > 0 && (
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-0.5">
              {pageNumbers.map((page, index) =>
                page === 'ellipsis' ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="px-2 text-[15px] text-[#888888]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    type="button"
                    aria-label={`Go to page ${page}`}
                    aria-current={page === pageIndex + 1 ? 'page' : undefined}
                    onClick={() => setCurrentPage(page - 1)}
                    className={`flex h-9 min-w-[36px] items-center justify-center rounded-[6px] px-2.5 text-[15px] transition-colors ${
                      page === pageIndex + 1
                        ? 'bg-[#ebebeb] font-medium text-[#1a1a1a]'
                        : 'text-[#888888] hover:bg-[#f5f5f5]'
                    }`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous page"
                disabled={pageIndex === 0}
                onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e0e0e0] bg-white text-[#888888] transition-colors hover:bg-[#f8f8f8] disabled:cursor-not-allowed disabled:opacity-35"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M10 3L5 8L10 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next page"
                disabled={pageIndex >= totalPages - 1}
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages - 1, p + 1))
                }
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f4ff] text-[#2997FF] transition-colors hover:bg-[#d6ebff] disabled:cursor-not-allowed disabled:opacity-35"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M6 3L11 8L6 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
