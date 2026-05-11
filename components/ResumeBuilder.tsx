"use client";

import { useState, useRef, useEffect } from "react";
import { ResumeData, defaultResumeData } from "@/data/builder-templates";
import Link from "next/link";
import { TemplateRegistry, CleanTemplate } from "./ResumeTemplates";

interface Props {
  templateId: string;
}

export default function ResumeBuilder({ templateId }: Props) {
  const initialData =
    defaultResumeData[templateId] ||
    defaultResumeData["software-engineer-clean"];
  const [data, setData] = useState<ResumeData>(initialData);
  const [isEditing, setIsEditing] = useState(true);
  const resumeRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Sync with local storage
  useEffect(() => {
    const saved = localStorage.getItem(`resume-${templateId}`);
    if (saved) {
      try {
        setData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load saved resume");
      }
    }
  }, [templateId]);

  // Handle scaling for mobile (Canva-style preview)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        const padding = 32; // 16px each side
        const availableWidth = window.innerWidth - padding;
        const newScale = availableWidth / 800;
        setScale(newScale);
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleUpdate = (newData: ResumeData) => {
    setData(newData);
    localStorage.setItem(`resume-${templateId}`, JSON.stringify(newData));
  };

  const printResume = () => {
    window.print();
  };

  const TemplateComponent = TemplateRegistry[templateId] || CleanTemplate;

  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      <header className="sticky top-0 z-50 bg-white border-b border-border px-6 py-4 flex justify-between items-center no-print">
        <div className="flex items-center gap-4">
          <Link
            href="/resumes"
            className="text-muted hover:text-foreground transition-colors"
          >
            ← Back
          </Link>
          <h1 className="font-sans text-xs uppercase tracking-widest font-bold">
            Resume Builder
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="hidden md:block px-6 py-2 bg-surface border border-border rounded-full font-sans text-xs uppercase tracking-widest font-bold hover:bg-border transition-colors"
          >
            {isEditing ? "Hide Editor" : "Show Editor"}
          </button>
          <button
            onClick={printResume}
            className="px-6 py-2 bg-foreground text-background rounded-full font-sans text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity"
          >
            Save as PDF
          </button>
        </div>
      </header>

      <div className="flex flex-col md:flex-row h-[calc(100vh-73px)] print:h-auto overflow-hidden">
        {/* Sidebar Editor - Hidden on mobile for premium experience */}
        {isEditing && (
          <div className="hidden md:block w-full md:w-[450px] bg-white border-r border-border overflow-y-auto h-full print:hidden">
            <div className="space-y-10 p-8">
              {/* Personal Info */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted">
                    01 Personal Details
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[9px] uppercase tracking-widest text-muted font-bold">
                      Photo (Optional)
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              handleUpdate({
                                ...data,
                                personalInfo: { ...data.personalInfo, photo: reader.result as string }
                              });
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        className="w-full bg-surface border border-border p-1.5 font-sans text-xs focus:outline-none focus:border-foreground transition-colors file:mr-4 file:py-1.5 file:px-3 file:rounded-none file:border-0 file:text-[10px] file:uppercase file:tracking-widest file:font-semibold file:bg-foreground file:text-background hover:file:opacity-90 cursor-pointer"
                      />
                      {data.personalInfo.photo && (
                        <button
                          onClick={() => {
                            handleUpdate({
                              ...data,
                              personalInfo: { ...data.personalInfo, photo: undefined }
                            });
                          }}
                          className="text-[10px] uppercase tracking-widest text-red-500 hover:opacity-60 flex-shrink-0"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                  <Input
                    label="Full Name"
                    value={data.personalInfo.fullName}
                    onChange={(v) =>
                      handleUpdate({
                        ...data,
                        personalInfo: { ...data.personalInfo, fullName: v },
                      })
                    }
                  />
                  <Input
                    label="Job Title"
                    value={data.personalInfo.jobTitle}
                    onChange={(v) =>
                      handleUpdate({
                        ...data,
                        personalInfo: { ...data.personalInfo, jobTitle: v },
                      })
                    }
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Email"
                      value={data.personalInfo.email}
                      onChange={(v) =>
                        handleUpdate({
                          ...data,
                          personalInfo: { ...data.personalInfo, email: v },
                        })
                      }
                    />
                    <Input
                      label="Phone"
                      value={data.personalInfo.phone}
                      onChange={(v) =>
                        handleUpdate({
                          ...data,
                          personalInfo: { ...data.personalInfo, phone: v },
                        })
                      }
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Location"
                      value={data.personalInfo.location}
                      onChange={(v) =>
                        handleUpdate({
                          ...data,
                          personalInfo: { ...data.personalInfo, location: v },
                        })
                      }
                    />
                    <Input
                      label="Birth Date"
                      value={data.personalInfo.birthDate || ""}
                      onChange={(v) =>
                        handleUpdate({
                          ...data,
                          personalInfo: { ...data.personalInfo, birthDate: v },
                        })
                      }
                    />
                  </div>
                  <Input
                    label="Website/LinkedIn"
                    value={data.personalInfo.website}
                    onChange={(v) =>
                      handleUpdate({
                        ...data,
                        personalInfo: { ...data.personalInfo, website: v },
                      })
                    }
                  />
                </div>
              </section>

              {/* Summary */}
              <section>
                <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted mb-6">
                  02 Profile Summary
                </h3>
                <textarea
                  className="w-full bg-surface border border-border p-3 font-sans text-sm focus:outline-none focus:border-foreground transition-colors min-h-[120px] resize-none"
                  value={data.summary}
                  onChange={(e) =>
                    handleUpdate({ ...data, summary: e.target.value })
                  }
                />
              </section>

              {/* Experience */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted">
                    03 Experience
                  </h3>
                  <button
                    onClick={() => {
                      const newExp = [
                        ...data.experience,
                        {
                          id: Date.now().toString(),
                          company: "",
                          position: "",
                          period: "",
                          location: "",
                          highlights: [""],
                        },
                      ];
                      handleUpdate({ ...data, experience: newExp });
                    }}
                    className="text-[10px] uppercase tracking-widest text-foreground hover:opacity-60"
                  >
                    + Add
                  </button>
                </div>
                <div className="space-y-8">
                  {data.experience.map((exp, idx) => (
                    <div
                      key={exp.id}
                      className="p-4 border border-border bg-surface/50 space-y-4 relative group/exp"
                    >
                      <button
                        onClick={() => {
                          const newExp = data.experience.filter(
                            (_, i) => i !== idx,
                          );
                          handleUpdate({ ...data, experience: newExp });
                        }}
                        className="absolute -top-2 -right-2 w-5 h-5 bg-white border border-border flex items-center justify-center text-[10px] opacity-0 group-hover/exp:opacity-100 transition-opacity rounded-full shadow-sm"
                      >
                        ✕
                      </button>
                      <Input
                        label="Company"
                        value={exp.company}
                        onChange={(v) => {
                          const newExp = [...data.experience];
                          newExp[idx].company = v;
                          handleUpdate({ ...data, experience: newExp });
                        }}
                      />
                      <Input
                        label="Position"
                        value={exp.position}
                        onChange={(v) => {
                          const newExp = [...data.experience];
                          newExp[idx].position = v;
                          handleUpdate({ ...data, experience: newExp });
                        }}
                      />
                      <Input
                        label="Period"
                        value={exp.period}
                        onChange={(v) => {
                          const newExp = [...data.experience];
                          newExp[idx].period = v;
                          handleUpdate({ ...data, experience: newExp });
                        }}
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills */}
              <section>
                <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted mb-6">
                  04 Skills
                </h3>
                <textarea
                  className="w-full bg-surface border border-border p-3 font-sans text-sm focus:outline-none focus:border-foreground transition-colors min-h-[100px] resize-none"
                  placeholder="Comma separated skills..."
                  value={data.skills.join(", ")}
                  onChange={(e) =>
                    handleUpdate({
                      ...data,
                      skills: e.target.value.split(",").map((s) => s.trim()),
                    })
                  }
                />
              </section>
            </div>
          </div>
        )}

        {/* Preview Area */}
        <div className="flex-1 bg-[#f0f0f0] flex flex-col items-center p-0 md:p-12 overflow-y-auto h-[calc(100vh-73px)] print:p-0 print:bg-white print:h-auto print:overflow-visible">
          {/* Mobile Message Banner */}
          <div className="w-full bg-black text-white px-6 py-3 flex items-center justify-between no-print md:hidden z-20">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold">
              💻 Use laptop to edit
            </p>
            <span className="text-[10px] opacity-50 uppercase tracking-[0.1em]">
              High Quality Preview
            </span>
          </div>

          <div 
            className="flex flex-col items-center justify-start md:mt-0 mt-8 mb-20 md:mb-0 print:!m-0 print:!transform-none print:!w-full print:!h-auto print:block"
            style={{ 
              transform: scale !== 1 ? `scale(${scale})` : 'none',
              transformOrigin: 'top center',
              width: scale !== 1 ? '800px' : '100%',
              height: scale !== 1 ? `${800 * scale}px` : 'auto'
            }}
          >
            <div
              ref={resumeRef}
              className="template-container w-full max-w-[800px] min-h-[800px] h-auto shadow-2xl bg-white overflow-hidden print:shadow-none print:max-w-none print:min-h-[99vh] flex flex-col"
            >
              <TemplateComponent data={data} />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white !important;
          }
          @page {
            margin: 0;
            size: auto;
          }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Force templates and their sidebars to stretch to the bottom of the page */
        .template-container > div {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .template-container > div > div.min-h-full {
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-sans text-[9px] uppercase tracking-widest text-muted font-bold">
        {label}
      </label>
      <input
        type="text"
        className="w-full bg-surface border border-border p-2.5 font-sans text-sm focus:outline-none focus:border-foreground transition-colors"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
