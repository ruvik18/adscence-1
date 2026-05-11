import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import NewsletterForm from "@/components/NewsletterForm";
import { blogPosts } from "@/data/blog";
import { resumeExamples } from "@/data/resumes";
import ResumeThumbnail from "@/components/ResumeThumbnail";

export const metadata: Metadata = {
  title: "Foliq — Resume Inspiration for Every Career",
  description:
    "Browse 12,000+ curated resume examples by industry and role. Get expert resume writing tips, templates, and career advice to land your next job faster.",
  alternates: { canonical: "https://foliq.online" },
};

const categories = [
  "Software Engineer",
  "Product Manager",
  "Graphic Designer",
  "Marketing",
  "Data Scientist",
  "Financial Analyst",
  "Healthcare",
  "Education",
  "Sales",
  "Executive",
  "Entry Level",
  "UX Designer",
];

export default function HomePage() {
  const featuredPosts = blogPosts.slice(0, 3);
  const featuredResumes = resumeExamples.slice(0, 3);

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          aria-label="Hero"
          className="relative min-h-[60vh] md:min-h-screen flex flex-col justify-center pt-28 pb-12 md:pt-24 md:pb-16 px-6 md:px-12 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto w-full">
            {/* Small descriptor */}
            <AnimateIn delay={0.1}>
              <p className="font-sans text-xs tracking-widest uppercase text-muted mb-8 md:mb-16">
                + Resume inspiration for every career
              </p>
            </AnimateIn>

            {/* Giant editorial headline */}
            <div className="relative">
              <AnimateIn delay={0.2}>
                <h1
                  className="font-display-italic leading-none tracking-tighter"
                  style={{ fontSize: "clamp(72px, 14vw, 200px)" }}
                >
                  Resume
                </h1>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <p
                  className="font-display-italic leading-none tracking-tighter text-muted ml-auto text-right"
                  aria-hidden="true"
                  style={{ fontSize: "clamp(72px, 14vw, 200px)" }}
                >
                  Inspiration
                </p>
              </AnimateIn>

              <AnimateIn delay={0.4}>
                <p
                  className="font-display-italic leading-none tracking-tighter"
                  style={{ fontSize: "clamp(72px, 14vw, 200px)" }}
                >
                  for Every
                </p>
              </AnimateIn>

              <AnimateIn delay={0.5}>
                <p
                  className="font-display-italic leading-none tracking-tighter text-right"
                  style={{ fontSize: "clamp(72px, 14vw, 200px)" }}
                >
                  Career
                </p>
              </AnimateIn>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-end mt-12 md:mt-8">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-border flex flex-col items-center justify-center gap-1">
                <span className="font-sans text-[10px] md:text-xs text-muted">
                  ↓
                </span>
                <span className="font-sans text-[10px] md:text-xs text-muted tracking-wide">
                  Scroll
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section
          aria-label="Statistics"
          className="border-t border-b border-border bg-dark"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-5">
            <div className="flex flex-wrap justify-center md:justify-between gap-6 text-center md:text-left">
              {[
                { value: "50+", label: "Resume Examples" },
                { value: "20+", label: "Expert Articles" },
                { value: "1,000+", label: "Job Seekers Helped" },
                { value: "12", label: "Industries Covered" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="font-display-italic text-xl text-white">
                    {stat.value}
                  </span>
                  <span className="font-sans text-xs text-white/50 uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section
          aria-label="Browse by category"
          className="py-24 px-6 md:px-12 border-b border-border"
        >
          <div className="max-w-7xl mx-auto">
            <AnimateIn>
              <div className="flex items-end justify-between mb-16">
                <h2
                  className="font-display-italic leading-tight tracking-tighter"
                  style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
                >
                  Browse by
                  <br />
                  Category
                </h2>
                <Link
                  href="/resumes/"
                  className="font-sans text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors border-b border-muted pb-0.5"
                >
                  View All
                </Link>
              </div>
            </AnimateIn>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-border">
              {categories.map((cat, i) => (
                <AnimateIn key={cat} delay={i * 0.04}>
                  <Link
                    href={`/resumes/?category=${encodeURIComponent(cat)}`}
                    className="flex flex-col justify-between border-b border-r border-border p-6 h-40 group hover:bg-neutral-50 transition-colors"
                  >
                    <span className="font-sans text-xs text-muted font-medium">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-lg font-medium tracking-tight">
                        {cat}
                      </span>
                      <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        →
                      </span>
                    </div>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Resume Examples */}
        <section
          aria-label="Featured resume examples"
          className="py-24 px-6 md:px-12 border-b border-border"
        >
          <div className="max-w-7xl mx-auto">
            <AnimateIn>
              <div className="flex items-end justify-between mb-16">
                <h2
                  className="font-display-italic leading-tight tracking-tighter"
                  style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
                >
                  Featured
                  <br />
                  Examples
                </h2>
                <Link
                  href="/resumes/"
                  className="font-sans text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors border-b border-muted pb-0.5"
                >
                  See All 12,000+
                </Link>
              </div>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-border">
              {featuredResumes.map((resume, i) => (
                <AnimateIn key={resume.id} delay={i * 0.1}>
                  <Link
                    href="/resumes/"
                    className="border-b border-r border-border group block"
                  >
                    {/* Resume preview placeholder */}
                    <div className="h-72 flex items-center justify-center bg-surface border-b border-border group-hover:bg-foreground transition-colors duration-300 overflow-hidden relative">
                      {resume.imageUrl ? (
                        <img
                          src={resume.imageUrl}
                          alt={resume.title}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <ResumeThumbnail templateId={resume.id} />
                      )}
                      <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors pointer-events-none" />
                    </div>
                    <div className="px-6 py-6">
                      <p className="font-sans text-xs uppercase tracking-widest text-muted mb-2">
                        {resume.category} · {resume.level}
                      </p>
                      <h3 className="font-sans text-base font-semibold text-foreground mb-2">
                        {resume.title}
                      </h3>
                      <p className="font-sans text-sm text-muted leading-relaxed">
                        {resume.style}
                      </p>
                    </div>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Blog strip */}
        <section
          aria-label="Latest articles"
          className="py-24 px-6 md:px-12 border-b border-border"
        >
          <div className="max-w-7xl mx-auto">
            <AnimateIn>
              <div className="flex items-end justify-between mb-16">
                <h2
                  className="font-display-italic leading-tight tracking-tighter"
                  style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
                >
                  From the
                  <br />
                  Journal
                </h2>
                <Link
                  href="/blog/"
                  className="font-sans text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors border-b border-muted pb-0.5"
                >
                  All Articles
                </Link>
              </div>
            </AnimateIn>

            <div className="divide-y divide-border border-t border-border">
              {featuredPosts.map((post, i) => (
                <AnimateIn key={post.slug} delay={i * 0.08}>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="flex flex-col md:flex-row md:items-center justify-between py-8 gap-4 group"
                    aria-label={`Read: ${post.title}`}
                  >
                    <div className="flex items-center gap-6">
                      <span className="font-sans text-xs text-muted w-6 flex-shrink-0 hidden md:block">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-sans text-xs uppercase tracking-widest text-muted mb-1">
                          {post.category}
                        </p>
                        <h3 className="font-sans text-base md:text-lg font-medium text-foreground group-hover:text-muted transition-colors">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 flex-shrink-0">
                      <span className="font-sans text-xs text-muted hidden md:block">
                        {post.readTime}
                      </span>
                      <span className="font-sans text-xs text-muted">
                        {post.author}
                      </span>
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

        {/* Value proposition */}
        <section
          aria-label="Why Foliq"
          className="py-32 px-6 md:px-12 border-b border-border"
        >
          <div className="max-w-7xl mx-auto">
            <AnimateIn>
              <p className="font-sans text-xs uppercase tracking-widest text-muted mb-12">
                Why Foliq
              </p>
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-border">
              {[
                {
                  number: "01",
                  title: "Curated, Not Generic",
                  body: "Every resume example is hand-selected for quality. No filler, no fluff — only examples that have been proven to work.",
                },
                {
                  number: "02",
                  title: "Advice You Can Trust",
                  body: "Our guides are written by career coaches and hiring managers with decades of combined experience across every major industry.",
                },
                {
                  number: "03",
                  title: "Built for Real Careers",
                  body: "From entry-level to C-suite, from healthcare to fintech — we cover every career stage and every industry with equal depth.",
                },
              ].map((item, i) => (
                <AnimateIn
                  key={item.number}
                  delay={i * 0.1}
                  className="border-b border-r border-border px-8 py-10"
                >
                  <p className="font-sans text-xs text-muted tracking-widest mb-8">
                    {item.number}
                  </p>
                  <h3 className="font-display-italic text-2xl tracking-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    {item.body}
                  </p>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section aria-label="Newsletter signup" className="py-32 px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateIn>
              <p className="font-sans text-xs uppercase tracking-widest text-muted mb-6">
                Stay Sharp
              </p>
              <h2
                className="font-display-italic leading-tight tracking-tighter mb-6"
                style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
              >
                Resume tips, delivered weekly.
              </h2>
              <p className="font-sans text-base text-muted mb-12 leading-relaxed">
                Join 50,000+ job seekers who get our best resume advice, new
                examples, and career insights every week. No spam. Unsubscribe
                anytime.
              </p>
              <NewsletterForm />
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
