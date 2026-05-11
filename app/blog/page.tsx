import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Career Blog — Resume Writing Tips & Advice",
  description:
    "Expert resume writing advice, career tips, and job search strategies. In-depth guides on ATS optimization, resume formats, career changes, and more.",
  alternates: { canonical: "https://foliq.online/blog/" },
  openGraph: {
    title: "Career Blog — Resume Writing Tips & Advice | Foliq",
    description:
      "Expert resume writing advice, career tips, and job search strategies.",
    url: "https://foliq.online/blog/",
  },
};

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Header */}
        <section className="pt-40 pb-20 px-6 md:px-12 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <AnimateIn>
              <p className="font-sans text-xs uppercase tracking-widest text-muted mb-8">
                + Career Journal
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h1
                className="font-display-italic leading-none tracking-tighter"
                style={{ fontSize: "clamp(56px, 10vw, 140px)" }}
              >
                The Blog
              </h1>
            </AnimateIn>
          </div>
        </section>

        {/* All articles list (Uniform layout for all posts) */}
        <section aria-label="All articles" className="px-6 md:px-12 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="divide-y divide-border border-t border-border">
              {blogPosts.map((post, i) => (
                <AnimateIn key={post.slug} delay={i * 0.06}>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="flex flex-col md:flex-row md:items-center justify-between py-10 gap-4 group"
                    aria-label={`Read: ${post.title}`}
                  >
                    <div className="flex items-start md:items-center gap-6 md:gap-10">
                      <span className="font-sans text-xs text-muted w-8 flex-shrink-0 pt-1 md:pt-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-sans text-xs uppercase tracking-widest text-muted mb-2">
                          {post.category}
                        </p>
                        <h2 className="font-sans text-lg md:text-xl font-medium text-foreground group-hover:text-muted transition-colors leading-snug">
                          {post.title}
                        </h2>
                        <p className="font-sans text-sm text-muted mt-2 leading-relaxed hidden md:block max-w-xl">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 flex-shrink-0 pl-14 md:pl-0">
                      <div className="text-right hidden md:block">
                        <p className="font-sans text-xs text-muted">
                          {post.readTime}
                        </p>
                        <p className="font-sans text-xs text-muted mt-1">
                          {post.author}
                        </p>
                      </div>
                      <span className="font-sans text-xl text-muted group-hover:translate-x-1 transition-transform inline-block">
                        →
                      </span>
                    </div>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
