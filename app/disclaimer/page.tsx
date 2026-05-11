import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Disclaimer | Foliq",
  description: "Legal disclaimer for Foliq and its templates.",
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#111]">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl md:text-5xl font-display-italic mb-8">
          Disclaimer
        </h1>
        <div className="prose prose-lg max-w-none font-sans text-muted">
          <p>Last updated: may 11 , 2026</p>
          <h2>1. General Information</h2>
          <p>
            The information provided by Foliq on our website is for general
            informational purposes only. All information on the Site is provided
            in good faith, however we make no representation or warranty of any
            kind, express or implied, regarding the accuracy, adequacy,
            validity, reliability, availability, or completeness of any
            information on the Site.
          </p>
          <h2>2. Career Advice Disclaimer</h2>
          <p>
            The Site cannot and does not contain specific career or hiring
            advice. The resume templates and blog articles are provided for
            general informational and educational purposes only and are not a
            substitute for professional career counseling. Use of our templates
            does not guarantee employment or interviews.
          </p>
          <h2>3. External Links Disclaimer</h2>
          <p>
            The Site may contain links to other websites or content belonging to
            or originating from third parties. Such external links are not
            investigated, monitored, or checked for accuracy, adequacy,
            validity, reliability, availability, or completeness by us.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
