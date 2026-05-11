"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import type { ResumeExample } from "@/data/resumes";
import { defaultResumeData } from "@/data/builder-templates";
import { TemplateRegistry, CleanTemplate } from "./ResumeTemplates";

interface Props {
  resume: ResumeExample;
}

export default function ResumeInspirationView({ resume }: Props) {
  const [clicks, setClicks] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);
    if (newClicks >= 3) {
      setShowMessage(true);
      setTimeout(() => {
        setClicks(0);
        setShowMessage(false);
      }, 3000);
    }
  };

  const data =
    defaultResumeData[resume.id] ||
    defaultResumeData["software-engineer-clean"];

  const TemplateComponent = TemplateRegistry[resume.id] || CleanTemplate;

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#fcfcfc] pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <AnimateIn>
            <div className="mb-12">
              <Link
                href="/resumes/"
                className="text-muted hover:text-foreground transition-colors text-sm uppercase tracking-widest"
              >
                ← Back to Gallery
              </Link>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start mb-12 border-b border-border pb-12">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-sans text-xs uppercase tracking-widest text-muted bg-surface px-2 py-1">
                    {resume.category}
                  </span>
                  <span className="text-muted">·</span>
                  <span className="font-sans text-xs uppercase tracking-widest text-muted">
                    {resume.level}
                  </span>
                </div>
                <h1 className="font-display-italic text-5xl md:text-7xl mb-6 tracking-tight">
                  {resume.title}
                </h1>
                <p className="font-sans text-base text-muted max-w-xl leading-relaxed">
                  {resume.description}
                </p>
              </div>
            </div>
            
            <div 
              className="bg-white shadow-2xl w-full flex flex-col items-center justify-center relative cursor-pointer group"
              onClick={handleClick}
            >
              <div className="w-full h-full p-8 md:p-16 flex items-center justify-center">
                {resume.imageUrl ? (
                  <img src={resume.imageUrl} alt={resume.title} className="w-full h-auto shadow-sm" />
                ) : (
                  <TemplateComponent data={data} />
                )}
              </div>
              
              {showMessage && (
                <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-foreground text-background px-6 py-3 rounded-full font-sans text-sm shadow-2xl z-50 animate-in slide-in-from-bottom-5">
                  This resume is for inspiration only and is not editable!
                </div>
              )}
            </div>
          </AnimateIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
