import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-display-italic text-2xl text-foreground mb-4">
              {" "}
              Foliq
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed">
              The definitive resource for resume inspiration, examples, and
              career writing advice.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-muted mb-5">
                Explore
              </p>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/resumes/"
                    className="font-sans text-sm text-foreground hover:text-muted transition-colors"
                  >
                    Resume Examples
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/"
                    className="font-sans text-sm text-foreground hover:text-muted transition-colors"
                  >
                    Career Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/"
                    className="font-sans text-sm text-foreground hover:text-muted transition-colors"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-muted mb-5">
                Categories
              </p>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/resumes/?category=Technology"
                    className="font-sans text-sm text-foreground hover:text-muted transition-colors"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resumes/?category=Design"
                    className="font-sans text-sm text-foreground hover:text-muted transition-colors"
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resumes/?category=Finance"
                    className="font-sans text-sm text-foreground hover:text-muted transition-colors"
                  >
                    Finance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resumes/?category=Healthcare"
                    className="font-sans text-sm text-foreground hover:text-muted transition-colors"
                  >
                    Healthcare
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-muted mb-5">
                Resources
              </p>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/blog/how-to-write-a-resume-that-gets-interviews-2025/"
                    className="font-sans text-sm text-foreground hover:text-muted transition-colors"
                  >
                    Resume Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/ats-resume-guide-beat-applicant-tracking-systems/"
                    className="font-sans text-sm text-foreground hover:text-muted transition-colors"
                  >
                    ATS Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/10-resume-mistakes-costing-you-the-job/"
                    className="font-sans text-sm text-foreground hover:text-muted transition-colors"
                  >
                    Common Mistakes
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-muted mb-5">
                Legal & Contact
              </p>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="font-sans text-sm text-foreground hover:text-muted transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="font-sans text-sm text-foreground hover:text-muted transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclaimer"
                    className="font-sans text-sm text-foreground hover:text-muted transition-colors"
                  >
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="font-sans text-sm text-foreground hover:text-muted transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-muted">
            © {year} Foliq. All rights reserved.
          </p>
          <p className="font-sans text-xs text-muted">
            Resume inspiration for every career, every industry, every level.
          </p>
        </div>
      </div>
    </footer>
  );
}
