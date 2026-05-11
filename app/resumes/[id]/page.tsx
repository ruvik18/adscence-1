import { notFound } from "next/navigation";
import { resumeExamples } from "@/data/resumes";
import ResumeBuilder from "@/components/ResumeBuilder";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return resumeExamples.map((resume) => ({ id: resume.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const resume = resumeExamples.find((r) => r.id === id);
  if (!resume) return {};

  return {
    title: `Edit ${resume.title} — Online Resume Builder`,
    description: `Recreate and customize the ${resume.title} with your own details. High-quality, ATS-friendly template ready to download as PDF.`,
  };
}

import ResumeInspirationView from "@/components/ResumeInspirationView";

export default async function ResumeDetailPage({ params }: Props) {
  const { id } = await params;
  const resume = resumeExamples.find((r) => r.id === id);

  if (!resume) notFound();

  if (resume.isEditable) {
    return <ResumeBuilder templateId={id} />;
  } else {
    return <ResumeInspirationView resume={resume} />;
  }
}
