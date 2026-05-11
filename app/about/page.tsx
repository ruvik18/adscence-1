import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "About Foliq — Resume Inspiration for Every Career",
  description:
    "Learn about Foliq's mission to give every job seeker access to premium resume design, career writing tips, and ATS-optimized templates — completely free.",
  alternates: { canonical: "https://foliq.online/about/" },
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#111]">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl md:text-5xl font-display-italic mb-8">
          About Foliq
        </h1>
        <div className="prose prose-lg max-w-none font-sans text-muted space-y-6 text-justify">
          <p>
            Welcome to <strong>Foliq</strong> — a specialized career resource platform born from the belief that a well-designed resume shouldn't be a luxury. In today's hyper-competitive job market, your professional story needs more than just good formatting; it needs a narrative that captures attention in seconds while satisfying the rigorous demands of Applicant Tracking Systems (ATS).
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Our Core Mission</h2>
          <p>
            Our mission is to democratize professional branding. For too long, the "secret sauce" of successful resume writing has been guarded by expensive career coaches and premium resume-writing services. We believe that everyone—from first-year interns to seasoned executives—should have access to high-end design principles and strategic writing advice.
          </p>
          <p>
            Foliq serves as a bridge between your actual experience and how it is perceived by recruiters. By providing a vast library of professionally curated resume examples and editable templates, we empower you to take control of your career path. We don't just provide "templates"; we provide blueprints for professional success, ensuring that your first impression is as impactful as your actual work.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">The Foliq Difference</h2>
          <p>
            What sets Foliq apart is our commitment to depth and research-backed strategy. We don't just follow trends; we study them. Every resume example on our platform is evaluated against modern hiring criteria, focusing on three key pillars:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Aesthetic Excellence:</strong> We apply editorial-grade typography and spatial design to ensure your resume is visually striking without being overwhelming.
            </li>
            <li>
              <strong>ATS Optimization:</strong> We test our layouts against common parsing software to ensure your document actually reaches the human eye, avoiding the "black hole" of automated rejection.
            </li>
            <li>
              <strong>Strategic Content:</strong> Through our comprehensive career blog, we provide the writing frameworks and action-verb strategies needed to quantify your impact and prove your value.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Why We Started</h2>
          <p>
            Foliq was founded during a shift in the global workforce where "career agility" became the new standard. Whether transitioning industries, returning from a gap, or scaling the executive ladder, the tools available to most people were either too generic or too expensive. We saw a gap for a platform that offered the same level of polish as a bespoke design agency but made it accessible to everyone.
          </p>
          <p>
            Since our inception, we have focused on building a community of career-minded individuals who value transparency and excellence. We continue to update our resources weekly to reflect the ever-changing landscape of modern work, from remote-work optimization to the nuances of executive personal branding.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Our Commitment</h2>
          <p>
            We are committed to remaining a free, high-quality resource for the global workforce. We believe that professional growth should be limited only by your ambition, not your access to tools. Foliq is your partner in this journey, providing the inspiration and the infrastructure needed to turn your aspirations into applications, and applications into offers.
          </p>
          <p>
            If you have feedback, success stories, or specific industry requests, we invite you to connect with us. Together, we are redefining the standard of professional presentation.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
