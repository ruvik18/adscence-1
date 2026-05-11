import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Privacy Policy | Foliq",
  description:
    "Privacy Policy for Foliq detailing how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#111]">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl md:text-5xl font-display-italic mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-lg max-w-none font-sans text-muted">
          <p>Last updated: may 11 , 2026</p>
          <h2>1. Information We Collect</h2>
          <p>
            We do not collect any personal information unless explicitly
            provided by you (e.g., via contact forms). We use standard analytics
            to monitor site traffic.
          </p>
          <h2>2. How We Use Your Information</h2>
          <p>
            Any information collected is used solely to improve the user
            experience and maintain the security of our platform.
          </p>
          <h2>3. Cookies and Web Beacons</h2>
          <p>
            We use cookies to store information about visitors' preferences, to
            record user-specific information on which pages the site visitor
            accesses or visits, and to personalize or customize our web page
            content based upon visitors' browser type or other information that
            the visitor sends via their browser.
          </p>
          <h2>4. Google DoubleClick DART Cookie</h2>
          <p>
            Google, as a third-party vendor, uses cookies to serve ads on our
            site. Google's use of the DART cookie enables it to serve ads to our
            site's visitors based upon their visit to our site and other sites
            on the internet.
          </p>
          <h2>5. Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its Terms and Conditions.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
