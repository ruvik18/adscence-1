"use client";
import { useState, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { ResumeExample } from "@/data/resumes";
import ResumeThumbnail from "@/components/ResumeThumbnail";

interface Props {
  resumes: ResumeExample[];
  categories: string[];
}

function highlight(text: string, query: string) {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} className="bg-foreground text-background px-0.5 not-italic">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

function ResumeGridContent({ resumes, categories }: Props) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState(
    categoryParam && categories.includes(categoryParam) ? categoryParam : "All"
  );
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam, categories]);

  const q = query.trim().toLowerCase();

  const filtered = resumes.filter((r) => {
    const categoryMatch =
      activeCategory === "All" || r.category === activeCategory;
    if (!q) return categoryMatch;
    const searchMatch =
      r.title.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q) ||
      r.level.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.tags.some((t) => t.toLowerCase().includes(q));
    return categoryMatch && searchMatch;
  });

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    inputRef.current?.focus();
  };

  const clearSearch = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <section className="px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Search bar */}
        <div className="mb-10">
          <div className="relative flex items-center border border-border focus-within:border-foreground transition-colors duration-150 bg-background">
            <svg
              className="absolute left-5 w-4 h-4 text-muted pointer-events-none flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.15 10.15z"
              />
            </svg>
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, industry, or skill…"
              className="w-full bg-transparent pl-12 pr-12 py-4 font-sans text-sm text-foreground placeholder:text-muted focus:outline-none"
              aria-label="Search resumes"
            />
            {query && (
              <button
                onClick={clearSearch}
                aria-label="Clear search"
                className="absolute right-5 text-muted hover:text-foreground transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
          {q && (
            <p className="font-sans text-xs text-muted mt-3">
              {filtered.length === 0
                ? "No results"
                : `${filtered.length} result${filtered.length !== 1 ? "s" : ""} for "${query}"`}
            </p>
          )}
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-16 border-b border-border pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`font-sans text-xs uppercase tracking-widest px-4 py-2 border transition-colors duration-150 ${
                activeCategory === cat
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted border-border hover:border-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resume grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border">
          {filtered.map((resume) => (
            <Link
              key={resume.id}
              href={`/resumes/${resume.id}/`}
              className="border-b border-r border-border group block"
              aria-label={`View ${resume.title}`}
            >
              {/* Preview */}
              <div className="h-64 flex items-center justify-center bg-surface border-b border-border group-hover:bg-foreground transition-colors duration-300 overflow-hidden relative">
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

              {/* Info */}
              <div className="px-4 py-5 sm:px-6 sm:py-6">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-3">
                  <span className="font-sans text-xs uppercase tracking-widest text-muted whitespace-nowrap">
                    {q ? highlight(resume.category, query) : resume.category}
                  </span>
                  <span className="text-muted">·</span>
                  <span className="font-sans text-xs uppercase tracking-widest text-muted whitespace-nowrap">
                    {q ? highlight(resume.level, query) : resume.level}
                  </span>
                  {resume.isEditable && (
                    <>
                      <span className="text-muted hidden sm:inline">·</span>
                      <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded whitespace-nowrap">
                        Editable
                      </span>
                    </>
                  )}
                </div>
                <h2 className="font-sans text-sm font-semibold text-foreground mb-2">
                  {q ? highlight(resume.title, query) : resume.title}
                </h2>
                <p className="font-sans text-xs text-muted leading-relaxed mb-4">
                  {q ? highlight(resume.description, query) : resume.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {resume.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-xs text-muted border border-border px-2 py-0.5"
                    >
                      {q ? highlight(tag, query) : tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-display-italic text-4xl text-muted mb-4">
              {q ? `No results for "${query}"` : "No examples yet"}
            </p>
            <p className="font-sans text-sm text-muted">
              {q ? (
                <>
                  Try a different keyword or{" "}
                  <button
                    onClick={clearSearch}
                    className="underline hover:opacity-60 transition-opacity"
                  >
                    clear the search
                  </button>
                  .
                </>
              ) : (
                "Try a different category."
              )}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default function ResumeGrid(props: Props) {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center">
          <p className="font-sans text-sm text-muted">Loading resumes…</p>
        </div>
      }
    >
      <ResumeGridContent {...props} />
    </Suspense>
  );
}
