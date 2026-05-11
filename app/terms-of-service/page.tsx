import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Terms of Service | Foliq",
  description: "Terms of Service for using Foliq templates and resources.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#111]">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl md:text-5xl font-display-italic mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-lg max-w-none font-sans text-muted">
          <p>Last updated: may 11,2026</p>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be
            bound by the terms and provision of this agreement.
          </p>
          <h2>2. Use of License</h2>
          <p>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Foliq's website for personal,
            non-commercial transitory viewing only.
          </p>
          <h2>3. Disclaimer</h2>
          <p>
            The materials on Foliq's website are provided on an 'as is' basis.
            We make no warranties, expressed or implied, and hereby disclaim and
            negate all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or
            other violation of rights.
          </p>
          <h2>4. Limitations</h2>
          <p>
            In no event shall Foliq or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit,
            or due to business interruption) arising out of the use or inability
            to use the materials on our website.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
