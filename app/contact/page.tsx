import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Contact Us | Foliq",
  description:
    "Contact the Foliq team for support, business inquiries, or feedback.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#111]">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl md:text-5xl font-display-italic mb-8">
          Contact Us
        </h1>
        <div className="prose prose-lg max-w-none font-sans text-muted">
          <p>
            We would love to hear from you! Whether you have a question about
            our templates, need technical support, or just want to share your
            success story, our team is ready to answer all your questions.
          </p>
          <h2>Get in Touch</h2>
          <p>
            <strong>Email:</strong> adsforweb2008@gmail.com
          </p>
          <p>
            <strong>Business Inquiries:</strong>adsforweb2008@gmail.com{" "}
          </p>
          <p>We aim to respond to all inquiries within 24-48 business hours.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
