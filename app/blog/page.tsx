import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Resources - 3PL Industry Insights | H&S E-commerce LTD",
  description:
    "Discover expert insights, guides, and resources about 3PL fulfilment, warehousing, e-commerce logistics, and industry best practices. Learn how to optimize your supply chain.",
  keywords: [
    "3PL blog",
    "fulfilment guides",
    "warehousing tips",
    "e-commerce logistics",
    "supply chain optimization",
    "FBA guide",
    "3PL industry news",
    "logistics best practices",
  ],
  openGraph: {
    title: "Blog & Resources - 3PL Industry Insights | H&S E-commerce LTD",
    description:
      "Discover expert insights, guides, and resources about 3PL fulfilment, warehousing, and e-commerce logistics.",
    url: "https://hsecommerce.co.uk/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://hsecommerce.co.uk/blog",
  },
};

// Sample blog posts - replace with actual content management system
const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right 3PL Provider for Your E-commerce Business",
    slug: "how-to-choose-3pl-provider",
    excerpt:
      "A comprehensive guide to selecting a 3PL fulfilment partner that aligns with your business goals, scales with your growth, and delivers exceptional service.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop&q=80",
    author: "H&S E-commerce Team",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Guides",
  },
  {
    id: 2,
    title: "FBA vs FBM: Which Fulfilment Model is Right for Your Amazon Business?",
    slug: "fba-vs-fbm-comparison",
    excerpt:
      "Explore the differences between Fulfilment by Amazon (FBA) and Fulfilment by Merchant (FBM) to determine the best strategy for your products.",
    image: "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=800&h=600&fit=crop&q=80",
    author: "H&S E-commerce Team",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Amazon Fulfilment",
  },
  {
    id: 3,
    title: "Top 10 Warehousing Best Practices for E-commerce Success",
    slug: "warehousing-best-practices",
    excerpt:
      "Learn essential warehousing strategies that can improve efficiency, reduce costs, and enhance customer satisfaction for your online business.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80",
    author: "H&S E-commerce Team",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Warehousing",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-black py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 font-heading">
              Blog & Resources
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/70 leading-relaxed">
              Expert insights, guides, and industry news to help you optimize
              your e-commerce fulfilment operations
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={`${post.title} - Featured image`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-black text-xs font-bold uppercase tracking-wider rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl md:text-2xl font-bold text-black mb-3 hover:text-primary transition-colors font-heading">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-sm transition-colors group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Optimize Your Fulfilment?
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto px-4 text-center leading-relaxed">
            Get expert advice and a custom quote for your 3PL needs
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-black font-bold transition-all duration-200"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

