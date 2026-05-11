import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://foliq.online/blog/${post.slug}/`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://foliq.online/blog/${post.slug}/`,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let i = 0;

  const flushList = (key: string) => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={key} className="my-6 space-y-2">
          {listItems.map((item, j) => (
            <li key={j} className="flex gap-3">
              <span className="text-muted mt-1 flex-shrink-0">—</span>
              <span
                className="font-sans text-base text-[#1e2022] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  while (i < lines.length) {
    const line = lines[i].trim();

    if (line.startsWith("![") && line.includes("](") && line.endsWith(")")) {
      flushList(`list-before-img-${i}`);
      const altMatch = line.match(/!\[(.*?)\]/);
      const urlMatch = line.match(/\((.*?)\)/);
      if (altMatch && urlMatch) {
        elements.push(
          <div key={`img-${i}`} className="my-10 w-full rounded-sm overflow-hidden border border-border shadow-sm">
            <img src={urlMatch[1]} alt={altMatch[1]} className="w-full h-auto object-cover max-h-[500px]" />
          </div>
        );
      }
    } else if (line.startsWith("## ")) {
      flushList(`list-before-h2-${i}`);
      elements.push(
        <h2
          key={`h2-${i}`}
          className="font-display-italic text-3xl md:text-4xl tracking-tight text-foreground mt-14 mb-6"
        >
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**") && !line.includes(":** ")) {
      flushList(`list-before-bold-${i}`);
      elements.push(
        <p key={`bold-${i}`} className="font-sans font-semibold text-foreground my-4">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    } else if (line.startsWith("- ")) {
      const text = line
        .replace(/^- /, "")
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-foreground underline underline-offset-2 hover:text-muted transition-colors" target="_blank" rel="noopener noreferrer">$1</a>');
      listItems.push(text);
    } else if (/^\d+\. /.test(line)) {
      flushList(`list-before-ol-${i}`);
      // collect ordered list
      const olItems: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i].trim())) {
        const itemHtml = lines[i].trim().replace(/^\d+\. /, "")
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-foreground underline underline-offset-2 hover:text-muted transition-colors" target="_blank" rel="noopener noreferrer">$1</a>');
        olItems.push(itemHtml);
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="my-6 space-y-2 list-decimal list-inside">
          {olItems.map((item, j) => (
            <li key={j} className="font-sans text-base text-[#1e2022] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ol>
      );
      continue;
    } else if (line.startsWith("- [ ] ") || line.startsWith("- [x] ")) {
      const checked = line.startsWith("- [x] ");
      const text = line.replace(/^- \[.?\] /, "");
      listItems.push((checked ? "✓ " : "☐ ") + text);
    } else if (line === "") {
      flushList(`list-${i}`);
    } else if (line.length > 0) {
      flushList(`list-before-p-${i}`);
      const html = line
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-foreground underline underline-offset-2 hover:text-muted transition-colors" target="_blank" rel="noopener noreferrer">$1</a>');
      elements.push(
        <p
          key={`p-${i}`}
          className="font-sans text-base md:text-lg text-[#1e2022] leading-[1.8] mb-6"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    }
    i++;
  }

  flushList("list-final");
  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "Foliq",
      url: "https://foliq.online",
    },
    url: `https://foliq.online/blog/${post.slug}/`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://foliq.online/blog/${post.slug}/`,
    },
    image: "https://foliq.online/og-image.jpg",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Nav />
      <main>
        {/* Article header */}
        <header className="pt-40 pb-16 px-6 md:px-12 border-b border-border">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <Link
                href="/blog/"
                className="font-sans text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors"
              >
                ← Blog
              </Link>
              <span className="text-border">·</span>
              <span className="font-sans text-xs uppercase tracking-widest text-muted">{post.category}</span>
            </div>

            <h1
              className="font-display-italic leading-tight tracking-tighter mb-8"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              {post.title}
            </h1>

            <p className="font-sans text-base text-muted leading-relaxed mb-10 max-w-2xl">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-8 pt-8 border-t border-border">
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-muted mb-1">Author</p>
                <p className="font-sans text-sm text-foreground font-medium">{post.author}</p>
              </div>
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-muted mb-1">Published</p>
                <p className="font-sans text-sm text-foreground">{post.date}</p>
              </div>
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-muted mb-1">Read Time</p>
                <p className="font-sans text-sm text-foreground">{post.readTime}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Article body */}
        <article
          aria-label={post.title}
          className="px-6 md:px-12 py-16 border-b border-border"
        >
          <div className="max-w-3xl mx-auto">
            {renderContent(post.content)}
          </div>
        </article>

        {/* Related posts */}
        {related.length > 0 && (
          <section aria-label="Related articles" className="px-6 md:px-12 py-16">
            <div className="max-w-7xl mx-auto">
              <p className="font-sans text-xs uppercase tracking-widest text-muted mb-12">
                Continue Reading
              </p>
              <div className="divide-y divide-border border-t border-border">
                {related.map((relPost) => (
                  <Link
                    key={relPost.slug}
                    href={`/blog/${relPost.slug}/`}
                    className="flex flex-col md:flex-row md:items-center justify-between py-8 gap-4 group"
                  >
                    <div>
                      <p className="font-sans text-xs uppercase tracking-widest text-muted mb-2">{relPost.category}</p>
                      <h3 className="font-sans text-base font-medium text-foreground group-hover:text-muted transition-colors">
                        {relPost.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span className="font-sans text-xs text-muted">{relPost.readTime}</span>
                      <span className="font-sans text-xl text-muted group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
