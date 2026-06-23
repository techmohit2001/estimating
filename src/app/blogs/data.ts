export type BlogPost = {
  id: number;
  image: string;
  date: string;
  dateValue: string;
  title: string;
  excerpt: string;
  link: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/home-industries1.jpg",
    date: "On Oct 6, 2025",
    dateValue: "2025-10-06",
    title: "Complete Guide to Construction Cost Estimating",
    excerpt:
      "Construction cost estimating is a critical skill for contractors, project managers, and construction professionals. Accurate estimates ensure projects stay within budget and help secure profitable contracts.",
    link: "/blogs/construction-estimating",
  },
  {
    id: 2,
    image: "/home-blog1.jpg",
    date: "On Sep 15, 2025",
    dateValue: "2025-09-15",
    title: "How to Estimate Plumbing Projects Accurately",
    excerpt:
      "Accurate plumbing estimation is essential for winning bids and maintaining profitability. Whether you're estimating residential or commercial plumbing projects, understanding the key components matters.",
    link: "/blogs/plumbing-estimation",
  },
  {
    id: 3,
    image: "/home-blog2.jpg",
    date: "On Sep 1, 2025",
    dateValue: "2025-09-01",
    title: "Best Practices for Project Cost Estimation",
    excerpt:
      "Professional cost estimation is both an art and a science. Following proven best practices ensures your estimates are accurate, competitive, and profitable across every trade.",
    link: "/blogs/estimating-best-practices",
  },
];
