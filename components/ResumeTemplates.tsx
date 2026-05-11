// ============================================================================
// 50 PREMIUM RESUME TEMPLATES — EDITORIAL REDESIGN
// Fashion-Forward Typography • Bold Color Palettes • Dramatic Layouts
// Inspired by: editorial fashion magazines, luxury brand identities
// ============================================================================

export interface TemplateProps {
  data: {
    personalInfo: {
      fullName: string;
      jobTitle: string;
      email: string;
      phone: string;
      location?: string;
      website?: string;
      birthDate?: string;
      photo?: string;
    };
    summary: string;
    education: Array<{
      id: string;
      school: string;
      degree: string;
      period: string;
    }>;
    experience: Array<{
      id: string;
      position: string;
      period: string;
      highlights: string[];
    }>;
    skills: string[];
  };
}

const sample: TemplateProps["data"] = {
  personalInfo: {
    fullName: "ALEX MORRISON",
    jobTitle: "Creative Director",
    email: "alex@studio.co",
    phone: "+1 212 555 0192",
    location: "New York, NY",
    website: "alexmorrison.co",
    birthDate: "1994",
  },
  summary:
    "A creative director with 9 years building brands that stop people mid-scroll. Obsessive about the space between things. Equally comfortable in boardrooms and production studios.",
  education: [
    {
      id: "1",
      school: "Parsons School of Design",
      degree: "BFA Graphic Design",
      period: "2012 — 2016",
    },
    {
      id: "2",
      school: "Cooper Union",
      degree: "Certificate in Motion",
      period: "2017",
    },
  ],
  experience: [
    {
      id: "1",
      position: "Creative Director",
      period: "2021 — Present",
      highlights: [
        "Led brand identity for 12 Fortune 500 clients globally",
        "Built and managed a design team of 8 across 3 continents",
        "Increased client retention by 40% through systematic design thinking",
      ],
    },
    {
      id: "2",
      position: "Senior Designer",
      period: "2018 — 2021",
      highlights: [
        "Art directed campaigns reaching 50M+ impressions across digital and print",
        "Designed award-winning packaging for luxury consumer goods sector",
      ],
    },
    {
      id: "3",
      position: "Designer",
      period: "2016 — 2018",
      highlights: [
        "Produced visual systems for 20+ brand identities from concept to launch",
      ],
    },
  ],
  skills: [
    "Brand Strategy",
    "Art Direction",
    "Typography",
    "Motion Design",
    "Leadership",
    "Figma",
    "Creative Vision",
  ],
};



// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 1 — Blackout Editorial (dark, oversized RESUME watermark)
// ─────────────────────────────────────────────────────────────────────────────
function T1({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#111111] text-white relative overflow-hidden"
      style={{ padding: "0", fontFamily: "'Montserrat', sans-serif" }}
    >
      <div
        className="absolute top-[-20px] left-0 w-full text-[#ffffff08] select-none leading-none pointer-events-none"
        style={{
          fontSize: "clamp(80px, 22vw, 180px)",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 900,
          letterSpacing: "-0.04em",
        }}
      >
        RESUME
      </div>
      <div className="relative z-10 grid grid-cols-[220px_1fr] min-h-full">
        <div className="bg-[#0a0a0a] flex flex-col p-8 gap-7 border-r border-[#1f1f1f]">
          <div className="w-full aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
            <div className="w-full min-h-full flex items-center justify-center">
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  fontSize: "72px",
                  color: "#222",
                }}
              >
                {p.personalInfo.fullName.charAt(0)}
              </span>
            </div>
          </div>
          <div>
            <p className="text-[8px] tracking-[0.4em] text-[#555] mb-3 uppercase">
              Profile
            </p>
            <p className="text-[11px] leading-[1.8] text-[#888]">{p.summary}</p>
          </div>
          <div>
            <p className="text-[8px] tracking-[0.4em] text-[#555] mb-3 uppercase">
              Contact
            </p>
            <div className="space-y-1.5 text-[10px] text-[#666]">
              <p>{p.personalInfo.email}</p>
              <p>{p.personalInfo.phone}</p>
              {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
              {p.personalInfo.website && <p>{p.personalInfo.website}</p>}
            </div>
          </div>
          <div>
            <p className="text-[8px] tracking-[0.4em] text-[#555] mb-3 uppercase">
              Skills
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.skills.map((s, i) => (
                <span
                  key={i}
                  className="text-[9px] text-[#555] border border-[#222] px-2 py-1"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="p-8 flex flex-col gap-7">
          <div className="mt-4">
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(32px, 5vw, 52px)",
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p className="text-[10px] tracking-[0.4em] text-white/40 mt-4 uppercase">
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div>
            <p className="text-[8px] tracking-[0.4em] text-[#444] mb-5 uppercase border-b border-[#1f1f1f] pb-2">
              Professional Experience
            </p>
            <div className="space-y-6">
              {p.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 800,
                        fontSize: "14px",
                        color: "white",
                      }}
                    >
                      {exp.position}
                    </p>
                    <p className="text-[9px] text-[#444] tracking-wider">
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-1 mt-2">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-[11px] text-[#666] leading-relaxed flex gap-2"
                      >
                        <span className="text-[#333] shrink-0">—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[8px] tracking-[0.4em] text-[#444] mb-4 uppercase border-b border-[#1f1f1f] pb-2">
              Education
            </p>
            <div className="space-y-3">
              {p.education.map((edu) => (
                <div key={edu.id}>
                  <p style={{ fontWeight: 700, fontSize: "12px" }}>
                    {edu.school}
                  </p>
                  <p className="text-[10px] text-[#666] mt-0.5">
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 2 — Cream Editorial (like inspiration image 1)
// ─────────────────────────────────────────────────────────────────────────────
function T2({ data: p }: TemplateProps) {
  const nameParts = p.personalInfo.fullName.split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";
  return (
    <div
      className="min-h-full bg-[#f5f0eb] text-[#1a1a1a] overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="grid grid-cols-2 min-h-full">
        <div className="flex flex-col p-10 pr-6 gap-6">
          <div className="border-b border-[#1a1a1a]/20 pb-5">
            <div className="grid grid-cols-2 gap-4 text-[9px] tracking-[0.25em] uppercase text-[#888] mb-4">
              <div>
                <p className="text-[#1a1a1a] font-bold">
                  {p.personalInfo.email}
                </p>
                <p>Email</p>
              </div>
              <div>
                <p className="text-[#1a1a1a] font-bold">
                  {p.personalInfo.phone}
                </p>
                <p>Phone</p>
              </div>
              {p.personalInfo.location && (
                <div>
                  <p className="text-[#1a1a1a] font-bold">
                    {p.personalInfo.location}
                  </p>
                  <p>Address</p>
                </div>
              )}
              {p.personalInfo.website && (
                <div>
                  <p className="text-[#1a1a1a] font-bold">
                    {p.personalInfo.website}
                  </p>
                  <p>Web</p>
                </div>
              )}
            </div>
          </div>
          <div>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(50px, 10vw, 80px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
                color: "#1a1a1a",
              }}
            >
              {firstName}
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "clamp(40px, 8vw, 65px)",
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
                color: "#1a1a1a",
              }}
            >
              {lastName}
            </p>
            <p className="text-[9px] tracking-[0.35em] text-[#999] mt-4 uppercase">
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div>
            <p className="text-[8px] tracking-[0.4em] text-[#aaa] mb-3 uppercase border-b border-[#1a1a1a]/10 pb-2">
              Experience
            </p>
            <div className="space-y-5">
              {p.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex items-baseline gap-3 mb-1">
                    <p
                      style={{
                        fontWeight: 800,
                        fontSize: "12px",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {exp.position}
                    </p>
                    <span className="text-[#aaa] text-[9px]">|</span>
                    <p
                      className="text-[9px] text-[#999] italic"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-1">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-[10px] text-[#666] leading-relaxed"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex-1 bg-[#e8e2db] overflow-hidden flex items-center justify-center">
            <div className="w-full min-h-full flex items-center justify-center bg-[#d5cec6]">
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  fontSize: "120px",
                  color: "#c5bdb5",
                  opacity: 0.5,
                }}
              >
                {p.personalInfo.fullName.charAt(0)}
              </span>
            </div>
          </div>
          <div className="bg-[#f5f0eb] p-6 border-t border-[#1a1a1a]/10">
            <p className="text-[8px] tracking-[0.4em] text-[#aaa] mb-3 uppercase">
              Education
            </p>
            <div className="grid grid-cols-2 gap-4">
              {p.education.map((edu) => (
                <div key={edu.id} className="border-l border-[#1a1a1a]/20 pl-3">
                  <p style={{ fontWeight: 800, fontSize: "11px" }}>
                    {edu.degree}
                  </p>
                  <p className="text-[10px] text-[#888] mt-0.5">
                    {edu.school} / {edu.period}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-[8px] tracking-[0.4em] text-[#aaa] mb-2 uppercase">
                Skills
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {p.skills.map((s, i) => (
                  <span key={i} className="text-[10px] text-[#666]">
                    • {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 3 — Pure White Serif Power
// ─────────────────────────────────────────────────────────────────────────────
function T3({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-white text-[#111] overflow-hidden"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <div className="border-b-[3px] border-[#111] py-8 px-12">
        <div className="flex items-end justify-between">
          <div>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: "clamp(44px, 8vw, 72px)",
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              className="text-[11px] tracking-[0.35em] text-[#888] mt-4 uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div
            className="text-right text-[9px] tracking-[0.2em] text-[#bbb] space-y-1"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <p>{p.personalInfo.email}</p>
            <p>{p.personalInfo.phone}</p>
            {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_280px] min-h-[calc(100%-120px)]">
        <div className="p-10 space-y-7 border-r border-[#f0f0f0]">
          <div>
            <p
              className="text-[8px] tracking-[0.45em] text-[#bbb] mb-4 uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Profile
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "14px",
                lineHeight: 1.8,
                color: "#555",
                fontStyle: "italic",
              }}
            >
              {p.summary}
            </p>
          </div>
          <div>
            <p
              className="text-[8px] tracking-[0.45em] text-[#bbb] mb-5 uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Experience
            </p>
            <div className="space-y-6">
              {p.experience.map((exp) => (
                <div key={exp.id} className="border-l-[2px] border-[#111] pl-5">
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 900,
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {exp.position}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      fontSize: "10px",
                      color: "#999",
                      marginTop: "2px",
                      marginBottom: "6px",
                    }}
                  >
                    {exp.period}
                  </p>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "11px",
                          color: "#777",
                          lineHeight: 1.7,
                        }}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-8 space-y-7">
          <div>
            <p
              className="text-[8px] tracking-[0.45em] text-[#bbb] mb-4 uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Education
            </p>
            <div className="space-y-4">
              {p.education.map((edu) => (
                <div key={edu.id}>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: "13px",
                    }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "10px",
                      color: "#999",
                      marginTop: "2px",
                    }}
                  >
                    {edu.degree}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "9px",
                      color: "#ccc",
                      marginTop: "2px",
                    }}
                  >
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p
              className="text-[8px] tracking-[0.45em] text-[#bbb] mb-4 uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Skills
            </p>
            <div className="space-y-2">
              {p.skills.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-[1px] bg-[#111]" />
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "11px",
                      color: "#555",
                    }}
                  >
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#111] text-white p-5">
            <p
              className="text-[8px] tracking-[0.4em] text-[#888] mb-3 uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Contact
            </p>
            <div
              className="space-y-2 text-[10px] text-[#aaa]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>{p.personalInfo.email}</p>
              <p>{p.personalInfo.phone}</p>
              {p.personalInfo.website && <p>{p.personalInfo.website}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 4 — Charcoal Swiss Grid
// ─────────────────────────────────────────────────────────────────────────────
function T4({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#1c1c1c] text-white overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="p-10">
        <div className="border-b border-[#333] pb-7 mb-7">
          <div className="flex items-start justify-between">
            <div>
              <h1
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(38px, 7vw, 60px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.03em",
                  color: "#fff",
                }}
              >
                {p.personalInfo.fullName}
              </h1>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 300,
                  fontSize: "11px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#666",
                  marginTop: "12px",
                }}
              >
                {p.personalInfo.jobTitle}
              </p>
            </div>
            <div className="text-right space-y-1">
              <p className="text-[9px] text-[#555] tracking-wider">
                {p.personalInfo.email}
              </p>
              <p className="text-[9px] text-[#555] tracking-wider">
                {p.personalInfo.phone}
              </p>
              {p.personalInfo.location && (
                <p className="text-[9px] text-[#555] tracking-wider">
                  {p.personalInfo.location}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-7">
            <div>
              <p
                style={{
                  fontWeight: 300,
                  fontSize: "8px",
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  color: "#444",
                  marginBottom: "12px",
                }}
              >
                Career
              </p>
              <div className="space-y-5">
                {p.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="grid grid-cols-[100px_1fr] gap-5"
                  >
                    <p
                      style={{
                        fontSize: "9px",
                        color: "#555",
                        letterSpacing: "0.1em",
                        lineHeight: 1.4,
                        paddingTop: "2px",
                      }}
                    >
                      {exp.period}
                    </p>
                    <div>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: "13px",
                          color: "white",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {exp.position}
                      </p>
                      <ul className="space-y-1 mt-2">
                        {exp.highlights.map((h, i) => (
                          <li
                            key={i}
                            style={{
                              fontSize: "11px",
                              color: "#777",
                              lineHeight: 1.6,
                            }}
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <p
                style={{
                  fontWeight: 300,
                  fontSize: "8px",
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  color: "#444",
                  marginBottom: "12px",
                }}
              >
                Summary
              </p>
              <p style={{ fontSize: "11px", color: "#777", lineHeight: 1.8 }}>
                {p.summary}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontWeight: 300,
                  fontSize: "8px",
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  color: "#444",
                  marginBottom: "12px",
                }}
              >
                Education
              </p>
              <div className="space-y-3">
                {p.education.map((edu) => (
                  <div key={edu.id}>
                    <p style={{ fontWeight: 700, fontSize: "11px" }}>
                      {edu.school}
                    </p>
                    <p
                      style={{
                        fontSize: "9px",
                        color: "#666",
                        marginTop: "2px",
                      }}
                    >
                      {edu.degree} · {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p
                style={{
                  fontWeight: 300,
                  fontSize: "8px",
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  color: "#444",
                  marginBottom: "12px",
                }}
              >
                Skills
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.skills.map((s, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "9px",
                      border: "1px solid #333",
                      padding: "3px 8px",
                      color: "#666",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 5 — Neon Green Terminal
// ─────────────────────────────────────────────────────────────────────────────
function T5({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#0a0a0a] text-white overflow-hidden"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <div className="border-l-4 border-[#00ff88] min-h-full">
        <div className="p-10 min-h-full flex flex-col gap-7">
          <div className="flex items-start justify-between">
            <div>
              <p
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.4em",
                  color: "#00ff88",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                ~/resume
              </p>
              <h1
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(36px, 6vw, 56px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.04em",
                  color: "white",
                }}
              >
                {p.personalInfo.fullName}
              </h1>
              <p
                style={{
                  fontSize: "10px",
                  color: "#00ff88",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginTop: "10px",
                }}
              >
                {p.personalInfo.jobTitle}
              </p>
            </div>
            <div className="text-[9px] text-[#333] space-y-1 text-right">
              <p className="text-[#555]">{p.personalInfo.email}</p>
              <p className="text-[#555]">{p.personalInfo.phone}</p>
              {p.personalInfo.location && (
                <p className="text-[#555]">{p.personalInfo.location}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-[200px_1fr] gap-10 flex-1">
            <div className="space-y-6 border-r border-[#1a1a1a] pr-6">
              <div>
                <p
                  style={{
                    fontSize: "8px",
                    letterSpacing: "0.4em",
                    color: "#00ff88",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}
                >
                  // profile
                </p>
                <p style={{ fontSize: "10px", color: "#666", lineHeight: 1.8 }}>
                  {p.summary}
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "8px",
                    letterSpacing: "0.4em",
                    color: "#00ff88",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}
                >
                  // education
                </p>
                {p.education.map((edu) => (
                  <div key={edu.id} className="mb-3">
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "#ccc",
                      }}
                    >
                      {edu.school}
                    </p>
                    <p
                      style={{
                        fontSize: "9px",
                        color: "#555",
                        marginTop: "2px",
                      }}
                    >
                      {edu.degree}
                    </p>
                    <p
                      style={{
                        fontSize: "8px",
                        color: "#333",
                        marginTop: "2px",
                      }}
                    >
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <p
                  style={{
                    fontSize: "8px",
                    letterSpacing: "0.4em",
                    color: "#00ff88",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}
                >
                  // skills
                </p>
                <div className="space-y-1.5">
                  {p.skills.map((s, i) => (
                    <p key={i} style={{ fontSize: "10px", color: "#555" }}>
                      <span style={{ color: "#00ff88" }}>›</span> {s}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p
                style={{
                  fontSize: "8px",
                  letterSpacing: "0.4em",
                  color: "#00ff88",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                // experience
              </p>
              <div className="space-y-6">
                {p.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="border-l border-[#00ff88]/20 pl-4"
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <p
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 800,
                          fontSize: "13px",
                          color: "white",
                        }}
                      >
                        {exp.position}
                      </p>
                      <p
                        style={{
                          fontSize: "8px",
                          color: "#333",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          style={{
                            fontSize: "11px",
                            color: "#555",
                            lineHeight: 1.7,
                          }}
                        >
                          <span style={{ color: "#00ff88" }}>//</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 6 — Warm Ivory Split
// ─────────────────────────────────────────────────────────────────────────────
function T6({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="grid grid-cols-[45%_55%] min-h-full">
        <div className="bg-[#1a1a1a] text-white p-10 flex flex-col gap-7">
          <div>
            <p
              style={{
                fontSize: "8px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "#555",
                marginBottom: "16px",
              }}
            >
              Portfolio
            </p>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(36px, 6vw, 52px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
                color: "white",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "#555",
                marginTop: "12px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div className="flex-1 bg-[#111] flex items-center justify-center">
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "120px",
                color: "#222",
                fontWeight: 300,
              }}
            >
              {p.personalInfo.fullName.charAt(0)}
            </span>
          </div>
          <div className="space-y-1.5">
            <p
              style={{
                fontSize: "8px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#444",
                marginBottom: "8px",
              }}
            >
              Contact
            </p>
            <p style={{ fontSize: "10px", color: "#666" }}>
              {p.personalInfo.email}
            </p>
            <p style={{ fontSize: "10px", color: "#666" }}>
              {p.personalInfo.phone}
            </p>
            {p.personalInfo.location && (
              <p style={{ fontSize: "10px", color: "#666" }}>
                {p.personalInfo.location}
              </p>
            )}
          </div>
        </div>
        <div className="bg-[#f9f6f2] p-10 flex flex-col gap-7">
          <div>
            <p
              style={{
                fontSize: "8px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#bbb",
                marginBottom: "10px",
              }}
            >
              About
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "13px",
                fontStyle: "italic",
                color: "#666",
                lineHeight: 1.8,
              }}
            >
              {p.summary}
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "8px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#bbb",
                marginBottom: "12px",
              }}
            >
              Experience
            </p>
            <div className="space-y-5">
              {p.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="pb-4 border-b border-[#ede8e2] last:border-0"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <p
                      style={{
                        fontWeight: 800,
                        fontSize: "12px",
                        letterSpacing: "0.03em",
                        textTransform: "uppercase",
                        color: "#1a1a1a",
                      }}
                    >
                      {exp.position}
                    </p>
                    <p style={{ fontSize: "9px", color: "#bbb" }}>
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-1 mt-1.5">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "10px",
                          color: "#888",
                          lineHeight: 1.7,
                        }}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p
                style={{
                  fontSize: "8px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#bbb",
                  marginBottom: "10px",
                }}
              >
                Education
              </p>
              {p.education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "11px",
                      color: "#1a1a1a",
                    }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{ fontSize: "9px", color: "#aaa", marginTop: "2px" }}
                  >
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: "8px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#bbb",
                  marginBottom: "10px",
                }}
              >
                Skills
              </p>
              <div className="space-y-1.5">
                {p.skills.map((s, i) => (
                  <p key={i} style={{ fontSize: "10px", color: "#888" }}>
                    · {s}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 7 — Cobalt Blue Magazine
// ─────────────────────────────────────────────────────────────────────────────
function T7({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#0a1628] text-white overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="min-h-full flex flex-col">
        <div className="bg-[#1a3a6b] px-10 pt-8 pb-6">
          <p
            style={{
              fontSize: "8px",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "#4a7fc1",
              marginBottom: "8px",
            }}
          >
            Resume · 2025
          </p>
          <div className="flex items-end justify-between">
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(40px, 7vw, 64px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <div className="text-right">
              <p
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#4a7fc1",
                }}
              >
                {p.personalInfo.jobTitle}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-[240px_1fr] overflow-hidden">
          <div className="bg-[#0d1f3c] p-8 space-y-6">
            <div>
              <p
                style={{
                  fontSize: "8px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#4a7fc1",
                  marginBottom: "10px",
                }}
              >
                Contact
              </p>
              <div className="space-y-1.5 text-[10px] text-[#5a7ea8]">
                <p>{p.personalInfo.email}</p>
                <p>{p.personalInfo.phone}</p>
                {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
                {p.personalInfo.website && <p>{p.personalInfo.website}</p>}
              </div>
            </div>
            <div>
              <p
                style={{
                  fontSize: "8px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#4a7fc1",
                  marginBottom: "10px",
                }}
              >
                Profile
              </p>
              <p
                style={{ fontSize: "10px", color: "#5a7ea8", lineHeight: 1.8 }}
              >
                {p.summary}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "8px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#4a7fc1",
                  marginBottom: "10px",
                }}
              >
                Education
              </p>
              {p.education.map((edu) => (
                <div
                  key={edu.id}
                  className="mb-3 border-l border-[#1a3a6b] pl-3"
                >
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#7a9ec8",
                    }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{
                      fontSize: "9px",
                      color: "#4a6a8a",
                      marginTop: "2px",
                    }}
                  >
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: "8px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#4a7fc1",
                  marginBottom: "10px",
                }}
              >
                Skills
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.skills.map((s, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "9px",
                      border: "1px solid #1a3a6b",
                      padding: "3px 8px",
                      color: "#4a7fc1",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="p-8 space-y-5">
            <p
              style={{
                fontSize: "8px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#4a7fc1",
                marginBottom: "4px",
              }}
            >
              Experience
            </p>
            {p.experience.map((exp) => (
              <div
                key={exp.id}
                className="border-b border-[#0d1f3c] pb-5 last:border-0"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <p
                    style={{
                      fontWeight: 800,
                      fontSize: "14px",
                      color: "white",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {exp.position}
                  </p>
                  <p
                    style={{
                      fontSize: "9px",
                      color: "#4a7fc1",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {exp.period}
                  </p>
                </div>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "11px",
                        color: "#5a7ea8",
                        lineHeight: 1.7,
                      }}
                    >
                      — {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 8 — Sand + Ink Newspaper
// ─────────────────────────────────────────────────────────────────────────────
function T8({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#faf7f2] text-[#1a1a1a] overflow-hidden"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <div className="border-b-4 border-double border-[#1a1a1a] py-6 px-10 text-center">
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "8px",
            letterSpacing: "0.6em",
            textTransform: "uppercase",
            color: "#999",
            marginBottom: "8px",
          }}
        >
          Curriculum Vitae
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: "clamp(44px, 8vw, 68px)",
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
          }}
        >
          {p.personalInfo.fullName}
        </h1>
        <div
          style={{
            width: "40px",
            height: "2px",
            background: "#1a1a1a",
            margin: "12px auto 8px",
          }}
        />
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "9px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#888",
          }}
        >
          {p.personalInfo.jobTitle}
        </p>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "9px",
            color: "#bbb",
            marginTop: "6px",
          }}
        >
          {p.personalInfo.email} · {p.personalInfo.phone} ·{" "}
          {p.personalInfo.location}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-0 min-h-[calc(100%-130px)]">
        <div className="col-span-2 p-8 border-r border-[#e8e2d8]">
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "7px",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "#bbb",
              marginBottom: "14px",
            }}
          >
            Professional Record
          </p>
          <div className="space-y-5">
            {p.experience.map((exp) => (
              <div
                key={exp.id}
                className="pb-4 border-b border-[#ede8e2] last:border-0"
              >
                <div className="flex items-baseline gap-4 mb-1">
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: "15px",
                    }}
                  >
                    {exp.position}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "8px",
                      color: "#bbb",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {exp.period}
                  </p>
                </div>
                <ul className="columns-1 space-y-1">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "11px",
                        color: "#666",
                        lineHeight: 1.7,
                      }}
                    >
                      — {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "7px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "#bbb",
                marginBottom: "10px",
              }}
            >
              Statement
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "13px",
                color: "#777",
                lineHeight: 1.8,
              }}
            >
              {p.summary}
            </p>
          </div>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "7px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "#bbb",
                marginBottom: "10px",
              }}
            >
              Education
            </p>
            {p.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "13px",
                  }}
                >
                  {edu.school}
                </p>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "9px",
                    color: "#999",
                    marginTop: "2px",
                  }}
                >
                  {edu.degree}
                </p>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "8px",
                    color: "#ccc",
                    marginTop: "1px",
                  }}
                >
                  {edu.period}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "7px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "#bbb",
                marginBottom: "10px",
              }}
            >
              Competencies
            </p>
            <div className="space-y-2">
              {p.skills.map((s, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "11px",
                    color: "#777",
                    borderBottom: "1px solid #ede8e2",
                    paddingBottom: "6px",
                  }}
                >
                  {s}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 9 — Pure Black Power
// ─────────────────────────────────────────────────────────────────────────────
function T9({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-black text-white overflow-hidden relative"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(100px, 25vw, 220px)",
            color: "#0a0a0a",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          CV
        </p>
      </div>
      <div className="relative z-10 min-h-full flex flex-col p-10 gap-6">
        <div className="flex items-end justify-between border-b border-[#1a1a1a] pb-6">
          <div>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(42px, 7vw, 62px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#555",
                marginTop: "12px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div className="text-right text-[9px] text-[#444] space-y-1">
            <p>{p.personalInfo.email}</p>
            <p>{p.personalInfo.phone}</p>
            {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
          </div>
        </div>
        <div className="flex-1 grid grid-cols-[1fr_220px] gap-8">
          <div className="space-y-6">
            <p
              style={{
                fontSize: "8px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#333",
                marginBottom: "12px",
              }}
            >
              Experience
            </p>
            {p.experience.map((exp) => (
              <div key={exp.id} className="border-l-2 border-white pl-5">
                <p
                  style={{
                    fontWeight: 900,
                    fontSize: "14px",
                    letterSpacing: "0.02em",
                  }}
                >
                  {exp.position}
                </p>
                <p
                  style={{
                    fontSize: "9px",
                    color: "#555",
                    letterSpacing: "0.2em",
                    marginTop: "3px",
                    marginBottom: "8px",
                  }}
                >
                  {exp.period}
                </p>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "11px",
                        color: "#777",
                        lineHeight: 1.7,
                      }}
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="space-y-6 border-l border-[#111] pl-6">
            <div>
              <p
                style={{
                  fontSize: "8px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                Profile
              </p>
              <p style={{ fontSize: "10px", color: "#666", lineHeight: 1.8 }}>
                {p.summary}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "8px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                Education
              </p>
              {p.education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <p style={{ fontWeight: 700, fontSize: "11px" }}>
                    {edu.school}
                  </p>
                  <p
                    style={{ fontSize: "9px", color: "#555", marginTop: "2px" }}
                  >
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: "8px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                Skills
              </p>
              {p.skills.map((s, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "10px",
                    color: "#555",
                    padding: "4px 0",
                    borderBottom: "1px solid #111",
                  }}
                >
                  {s}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 10 — Crimson Statement
// ─────────────────────────────────────────────────────────────────────────────
function T10({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#f8f4ef] overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="grid grid-cols-[300px_1fr] min-h-full">
        <div className="bg-[#b91c1c] text-white p-9 flex flex-col gap-6">
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "#f87171",
                marginBottom: "12px",
              }}
            >
              Selected Work
            </p>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(32px, 5vw, 46px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "#fca5a5",
                marginTop: "10px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div className="bg-[#991b1b] flex-1 flex items-center justify-center">
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "100px",
                color: "#7f1d1d",
                fontWeight: 300,
              }}
            >
              {p.personalInfo.fullName.charAt(0)}
            </span>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#f87171",
                marginBottom: "8px",
              }}
            >
              Contact
            </p>
            <div className="space-y-1.5 text-[10px] text-[#fca5a5]">
              <p>{p.personalInfo.email}</p>
              <p>{p.personalInfo.phone}</p>
              {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#f87171",
                marginBottom: "8px",
              }}
            >
              Skills
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.skills.map((s, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "8px",
                    border: "1px solid #991b1b",
                    padding: "2px 6px",
                    color: "#fca5a5",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="p-9 flex flex-col gap-6">
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#ccc",
                marginBottom: "8px",
              }}
            >
              Profile
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "13px",
                color: "#666",
                lineHeight: 1.8,
              }}
            >
              {p.summary}
            </p>
          </div>
          <div className="flex-1">
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#ccc",
                marginBottom: "14px",
              }}
            >
              Experience
            </p>
            <div className="space-y-5">
              {p.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="border-l-2 border-[#b91c1c] pl-5 pb-4"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <p
                      style={{
                        fontWeight: 900,
                        fontSize: "13px",
                        color: "#1a1a1a",
                        textTransform: "uppercase",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {exp.position}
                    </p>
                    <p style={{ fontSize: "9px", color: "#ccc" }}>
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-1 mt-2">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "11px",
                          color: "#888",
                          lineHeight: 1.7,
                        }}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#ccc",
                marginBottom: "10px",
              }}
            >
              Education
            </p>
            <div className="grid grid-cols-2 gap-4">
              {p.education.map((edu) => (
                <div key={edu.id} className="border border-[#ede8e2] p-4">
                  <p
                    style={{
                      fontWeight: 800,
                      fontSize: "11px",
                      color: "#1a1a1a",
                    }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{ fontSize: "9px", color: "#999", marginTop: "2px" }}
                  >
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 11 — Slate + Ochre Architect
// ─────────────────────────────────────────────────────────────────────────────
function T11({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#f2ede8] overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="bg-[#2c2c2c] px-10 pt-9 pb-0">
        <div className="flex items-end justify-between pb-6">
          <div>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(42px, 7vw, 64px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
                color: "white",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#e8a020",
                marginTop: "10px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div
            className="text-[9px] text-right space-y-1 pb-1"
            style={{ color: "#555" }}
          >
            <p>{p.personalInfo.email}</p>
            <p>{p.personalInfo.phone}</p>
            {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[240px_1fr] flex-1">
        <div className="bg-[#e8e2d8] p-8 space-y-6">
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#bbb",
                marginBottom: "10px",
              }}
            >
              About
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "12px",
                color: "#777",
                lineHeight: 1.8,
              }}
            >
              {p.summary}
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#bbb",
                marginBottom: "10px",
              }}
            >
              Education
            </p>
            {p.education.map((edu) => (
              <div
                key={edu.id}
                className="mb-3 border-l-2 border-[#e8a020] pl-3"
              >
                <p
                  style={{
                    fontWeight: 800,
                    fontSize: "11px",
                    color: "#2c2c2c",
                  }}
                >
                  {edu.school}
                </p>
                <p style={{ fontSize: "9px", color: "#aaa", marginTop: "1px" }}>
                  {edu.degree} · {edu.period}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#bbb",
                marginBottom: "10px",
              }}
            >
              Skills
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.skills.map((s, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "9px",
                    background: "#2c2c2c",
                    color: "#888",
                    padding: "3px 8px",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="p-8 space-y-5">
          <p
            style={{
              fontSize: "7px",
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              color: "#bbb",
              marginBottom: "4px",
            }}
          >
            Career History
          </p>
          {p.experience.map((exp) => (
            <div
              key={exp.id}
              className="border-b border-[#e0d8ce] pb-5 last:border-0"
            >
              <div className="flex items-center gap-3 mb-1">
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "#e8a020",
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    fontWeight: 900,
                    fontSize: "13px",
                    color: "#2c2c2c",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {exp.position}
                </p>
                <p
                  style={{ fontSize: "9px", color: "#bbb", marginLeft: "auto" }}
                >
                  {exp.period}
                </p>
              </div>
              <ul className="space-y-1 mt-2 ml-5">
                {exp.highlights.map((h, i) => (
                  <li
                    key={i}
                    style={{ fontSize: "11px", color: "#888", lineHeight: 1.7 }}
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 12 — Bordeaux Vertical
// ─────────────────────────────────────────────────────────────────────────────
function T12({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-white overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="min-h-full flex">
        <div style={{ width: "6px", background: "#6b1a1a", flexShrink: 0 }} />
        <div className="flex-1 grid grid-cols-[260px_1fr] min-h-full">
          <div className="bg-[#6b1a1a] text-white p-8 flex flex-col gap-6">
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.5em",
                  textTransform: "uppercase",
                  color: "#c4a0a0",
                  marginBottom: "12px",
                }}
              >
                Resume
              </p>
              <h1
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(28px, 4vw, 40px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.03em",
                }}
              >
                {p.personalInfo.fullName}
              </h1>
              <p
                style={{
                  fontSize: "8px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#c4a0a0",
                  marginTop: "10px",
                }}
              >
                {p.personalInfo.jobTitle}
              </p>
            </div>
            <div className="bg-[#5a1515] flex-1 flex items-center justify-center">
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "90px",
                  color: "#4a1010",
                  fontWeight: 300,
                }}
              >
                {p.personalInfo.fullName.charAt(0)}
              </span>
            </div>
            <div className="space-y-5">
              <div>
                <p
                  style={{
                    fontSize: "7px",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    color: "#c4a0a0",
                    marginBottom: "7px",
                  }}
                >
                  Contact
                </p>
                <div
                  className="space-y-1.5 text-[9px]"
                  style={{ color: "#c4a0a0" }}
                >
                  <p>{p.personalInfo.email}</p>
                  <p>{p.personalInfo.phone}</p>
                  {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
                </div>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "7px",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    color: "#c4a0a0",
                    marginBottom: "7px",
                  }}
                >
                  Skills
                </p>
                <div className="space-y-1">
                  {p.skills.map((s, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: "9px",
                        color: "#c4a0a0",
                        borderBottom: "1px solid #5a1515",
                        paddingBottom: "4px",
                      }}
                    >
                      {s}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 space-y-6">
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#ccc",
                  marginBottom: "8px",
                }}
              >
                Summary
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "13px",
                  color: "#777",
                  lineHeight: 1.8,
                }}
              >
                {p.summary}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#ccc",
                  marginBottom: "12px",
                }}
              >
                Experience
              </p>
              <div className="space-y-5">
                {p.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="border-b border-[#f0f0f0] pb-4 last:border-0"
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <p
                        style={{
                          fontWeight: 900,
                          fontSize: "13px",
                          color: "#1a1a1a",
                        }}
                      >
                        {exp.position}
                      </p>
                      <p style={{ fontSize: "9px", color: "#ccc" }}>
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1 mt-2">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          style={{
                            fontSize: "11px",
                            color: "#888",
                            lineHeight: 1.7,
                          }}
                        >
                          · {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#ccc",
                  marginBottom: "10px",
                }}
              >
                Education
              </p>
              <div className="space-y-3">
                {p.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="border-l-4 border-[#6b1a1a] pl-4"
                  >
                    <p
                      style={{
                        fontWeight: 800,
                        fontSize: "12px",
                        color: "#1a1a1a",
                      }}
                    >
                      {edu.school}
                    </p>
                    <p
                      style={{
                        fontSize: "9px",
                        color: "#aaa",
                        marginTop: "2px",
                      }}
                    >
                      {edu.degree} · {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 13 — Forest Green Architectural
// ─────────────────────────────────────────────────────────────────────────────
function T13({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#f4f7f4] overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="grid grid-cols-[1fr_260px] min-h-full">
        <div className="p-9 flex flex-col gap-6">
          <div className="border-b-2 border-[#1a3a1a] pb-6">
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(40px, 7vw, 60px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
                color: "#1a3a1a",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#4a7c4a",
                marginTop: "10px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#aaa",
                marginBottom: "12px",
              }}
            >
              Experience
            </p>
            <div className="space-y-5">
              {p.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="border-l-2 border-[#4a7c4a] pl-5 pb-4"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <p
                      style={{
                        fontWeight: 900,
                        fontSize: "14px",
                        color: "#1a3a1a",
                      }}
                    >
                      {exp.position}
                    </p>
                    <p style={{ fontSize: "9px", color: "#bbb" }}>
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-1.5 mt-2">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "11px",
                          color: "#777",
                          lineHeight: 1.7,
                        }}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#aaa",
                marginBottom: "8px",
              }}
            >
              Statement
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "12px",
                color: "#888",
                lineHeight: 1.8,
              }}
            >
              {p.summary}
            </p>
          </div>
        </div>
        <div className="bg-[#1a3a1a] text-white p-8 flex flex-col gap-6">
          <div className="bg-[#0f2a0f] flex-1 max-h-[200px] flex items-center justify-center">
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "80px",
                color: "#0f2010",
                letterSpacing: "-0.05em",
              }}
            >
              {p.personalInfo.fullName.charAt(0)}
            </span>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#4a7c4a",
                marginBottom: "8px",
              }}
            >
              Contact
            </p>
            <div
              className="space-y-1.5 text-[9px]"
              style={{ color: "#7a9c7a" }}
            >
              <p>{p.personalInfo.email}</p>
              <p>{p.personalInfo.phone}</p>
              {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#4a7c4a",
                marginBottom: "8px",
              }}
            >
              Education
            </p>
            {p.education.map((edu) => (
              <div key={edu.id} className="mb-3 border-l border-[#2a5a2a] pl-3">
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "10px",
                    color: "#8aba8a",
                  }}
                >
                  {edu.school}
                </p>
                <p
                  style={{
                    fontSize: "8px",
                    color: "#5a8a5a",
                    marginTop: "2px",
                  }}
                >
                  {edu.degree} · {edu.period}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#4a7c4a",
                marginBottom: "8px",
              }}
            >
              Skills
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.skills.map((s, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "8px",
                    border: "1px solid #2a5a2a",
                    padding: "2px 7px",
                    color: "#7a9c7a",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 14 — Ultra Minimal Hairline
// ─────────────────────────────────────────────────────────────────────────────
function T14({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-white text-[#111] overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="p-12 min-h-full flex flex-col gap-10">
        <div>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(40px, 7vw, 60px)",
              lineHeight: 0.88,
              letterSpacing: "-0.04em",
              color: "#111",
            }}
          >
            {p.personalInfo.fullName}
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginTop: "14px",
            }}
          >
            <div style={{ height: "1px", width: "32px", background: "#111" }} />
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#aaa",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 flex-1">
          <div className="col-span-2 space-y-8">
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.5em",
                  textTransform: "uppercase",
                  color: "#ccc",
                  marginBottom: "10px",
                }}
              >
                Experience
              </p>
              <div className="space-y-6">
                {p.experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline border-b border-[#f0f0f0] pb-2 mb-2">
                      <p style={{ fontWeight: 700, fontSize: "14px" }}>
                        {exp.position}
                      </p>
                      <p style={{ fontSize: "9px", color: "#ccc" }}>
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          style={{
                            fontSize: "11px",
                            color: "#888",
                            lineHeight: 1.7,
                          }}
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-8 border-l border-[#f0f0f0] pl-8">
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.5em",
                  textTransform: "uppercase",
                  color: "#ccc",
                  marginBottom: "8px",
                }}
              >
                Profile
              </p>
              <p style={{ fontSize: "11px", color: "#888", lineHeight: 1.8 }}>
                {p.summary}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.5em",
                  textTransform: "uppercase",
                  color: "#ccc",
                  marginBottom: "8px",
                }}
              >
                Contact
              </p>
              <div
                className="space-y-1.5 text-[10px]"
                style={{ color: "#888" }}
              >
                <p>{p.personalInfo.email}</p>
                <p>{p.personalInfo.phone}</p>
                {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
              </div>
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.5em",
                  textTransform: "uppercase",
                  color: "#ccc",
                  marginBottom: "8px",
                }}
              >
                Education
              </p>
              {p.education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <p style={{ fontWeight: 700, fontSize: "11px" }}>
                    {edu.school}
                  </p>
                  <p
                    style={{ fontSize: "9px", color: "#aaa", marginTop: "2px" }}
                  >
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.5em",
                  textTransform: "uppercase",
                  color: "#ccc",
                  marginBottom: "8px",
                }}
              >
                Skills
              </p>
              {p.skills.map((s, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "10px",
                    color: "#888",
                    padding: "3px 0",
                    borderBottom: "1px solid #f5f5f5",
                  }}
                >
                  {s}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 15 — Bold Italic Fashion
// ─────────────────────────────────────────────────────────────────────────────
function T15({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#0d0d0d] text-white overflow-hidden relative"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div
        className="absolute top-0 left-0 w-full"
        style={{
          fontSize: "clamp(60px, 18vw, 150px)",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 900,
          fontStyle: "italic",
          color: "#141414",
          letterSpacing: "-0.04em",
          lineHeight: 0.85,
          paddingLeft: "24px",
          userSelect: "none",
        }}
      >
        {p.personalInfo.fullName.split(" ")[0]}
      </div>
      <div className="relative z-10 min-h-full flex flex-col p-9 gap-7 pt-[120px]">
        <div className="flex items-end justify-between border-b border-[#1f1f1f] pb-5">
          <div>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontStyle: "italic",
                fontSize: "clamp(24px, 4vw, 38px)",
                letterSpacing: "-0.03em",
                lineHeight: 0.9,
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#555",
                marginTop: "8px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div className="text-right text-[9px] text-[#444] space-y-1">
            <p>{p.personalInfo.email}</p>
            <p>{p.personalInfo.phone}</p>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-[1fr_200px] gap-8">
          <div className="space-y-5">
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#333",
                marginBottom: "10px",
              }}
            >
              Experience
            </p>
            {p.experience.map((exp) => (
              <div
                key={exp.id}
                className="pb-4 border-b border-[#1a1a1a] last:border-0"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <p
                    style={{
                      fontWeight: 900,
                      fontSize: "14px",
                      fontStyle: "italic",
                    }}
                  >
                    {exp.position}
                  </p>
                  <p style={{ fontSize: "9px", color: "#444" }}>{exp.period}</p>
                </div>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "11px",
                        color: "#666",
                        lineHeight: 1.7,
                      }}
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="space-y-5 border-l border-[#1a1a1a] pl-6">
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                Profile
              </p>
              <p style={{ fontSize: "10px", color: "#666", lineHeight: 1.8 }}>
                {p.summary}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                Education
              </p>
              {p.education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <p
                    style={{ fontWeight: 700, fontSize: "11px", color: "#ccc" }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{ fontSize: "9px", color: "#555", marginTop: "2px" }}
                  >
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                Skills
              </p>
              {p.skills.map((s, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "10px",
                    color: "#555",
                    padding: "3px 0",
                    borderBottom: "1px solid #1a1a1a",
                  }}
                >
                  {s}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATES 16-25: Bold color blocks, marketing, finance
// ─────────────────────────────────────────────────────────────────────────────

function T16({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#ff3b00] text-white overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="min-h-full flex flex-col">
        <div className="p-9 pb-6">
          <div className="flex items-start justify-between mb-5">
            <p
              style={{
                fontSize: "8px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Creative Resume
            </p>
            <div
              className="text-right text-[9px]"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              <p>{p.personalInfo.email}</p>
              <p>{p.personalInfo.phone}</p>
            </div>
          </div>
          <h1
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(44px, 8vw, 72px)",
              lineHeight: 0.85,
              letterSpacing: "-0.05em",
            }}
          >
            {p.personalInfo.fullName}
          </h1>
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              marginTop: "12px",
            }}
          >
            {p.personalInfo.jobTitle}
          </p>
        </div>
        <div className="flex-1 bg-white text-[#1a1a1a] grid grid-cols-[240px_1fr] overflow-hidden">
          <div className="bg-[#1a1a1a] text-white p-7 space-y-5">
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#555",
                  marginBottom: "8px",
                }}
              >
                About
              </p>
              <p style={{ fontSize: "10px", color: "#888", lineHeight: 1.8 }}>
                {p.summary}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#555",
                  marginBottom: "8px",
                }}
              >
                Education
              </p>
              {p.education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <p
                    style={{ fontWeight: 700, fontSize: "10px", color: "#ccc" }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{ fontSize: "8px", color: "#666", marginTop: "2px" }}
                  >
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#555",
                  marginBottom: "8px",
                }}
              >
                Skills
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.skills.map((s, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "8px",
                      border: "1px solid #333",
                      padding: "2px 7px",
                      color: "#888",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="p-7">
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#ccc",
                marginBottom: "14px",
              }}
            >
              Experience
            </p>
            <div className="space-y-5">
              {p.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="border-l-[3px] border-[#ff3b00] pl-5 pb-4"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <p
                      style={{
                        fontWeight: 900,
                        fontSize: "14px",
                        color: "#1a1a1a",
                      }}
                    >
                      {exp.position}
                    </p>
                    <p style={{ fontSize: "9px", color: "#ccc" }}>
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-1.5 mt-1">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "11px",
                          color: "#888",
                          lineHeight: 1.7,
                        }}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function T17({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#f5f0e8] overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="min-h-full flex flex-col">
        <div className="bg-[#111] text-white px-10 pt-8 pb-6 flex items-end justify-between">
          <div>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(38px, 6vw, 56px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#eab308",
                marginTop: "10px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div className="text-right text-[9px]" style={{ color: "#555" }}>
            <p>{p.personalInfo.email}</p>
            <p>{p.personalInfo.phone}</p>
            {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
          </div>
        </div>
        <div className="flex-1 grid grid-cols-[1fr_240px] overflow-hidden">
          <div className="p-8 space-y-5">
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#bbb",
                marginBottom: "10px",
              }}
            >
              Experience
            </p>
            {p.experience.map((exp) => (
              <div
                key={exp.id}
                className="border-b border-[#e5ddd0] pb-4 last:border-0"
              >
                <div className="flex justify-between items-baseline mb-1">
                  <p
                    style={{
                      fontWeight: 900,
                      fontSize: "13px",
                      color: "#1a1a1a",
                    }}
                  >
                    {exp.position}
                  </p>
                  <p
                    style={{
                      fontSize: "9px",
                      color: "#eab308",
                      fontWeight: 700,
                    }}
                  >
                    {exp.period}
                  </p>
                </div>
                <ul className="space-y-1 mt-1.5">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "11px",
                        color: "#888",
                        lineHeight: 1.7,
                      }}
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-[#111] text-white p-7 space-y-5">
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#eab308",
                  marginBottom: "8px",
                }}
              >
                Profile
              </p>
              <p style={{ fontSize: "10px", color: "#888", lineHeight: 1.8 }}>
                {p.summary}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#eab308",
                  marginBottom: "8px",
                }}
              >
                Education
              </p>
              {p.education.map((edu) => (
                <div
                  key={edu.id}
                  className="mb-3 border-l-2 border-[#eab308] pl-3"
                >
                  <p style={{ fontWeight: 700, fontSize: "10px" }}>
                    {edu.school}
                  </p>
                  <p
                    style={{ fontSize: "8px", color: "#666", marginTop: "2px" }}
                  >
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#eab308",
                  marginBottom: "8px",
                }}
              >
                Skills
              </p>
              {p.skills.map((s, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "10px",
                    color: "#666",
                    padding: "3px 0",
                    borderBottom: "1px solid #1f1f1f",
                  }}
                >
                  {s}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function T18({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-white overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="min-h-full grid grid-cols-[280px_1fr]">
        <div className="bg-[#4f0080] text-white p-8 flex flex-col gap-5">
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "#9b59b6",
                marginBottom: "10px",
              }}
            >
              Portfolio
            </p>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(28px, 4vw, 38px)",
                lineHeight: 0.88,
                letterSpacing: "-0.03em",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "8px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#9b59b6",
                marginTop: "10px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div className="bg-[#3d0066] flex-1 max-h-[180px] flex items-center justify-center">
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "100px",
                color: "#2d0050",
                fontWeight: 300,
              }}
            >
              {p.personalInfo.fullName.charAt(0)}
            </span>
          </div>
          <div className="space-y-4">
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#9b59b6",
                  marginBottom: "7px",
                }}
              >
                Contact
              </p>
              <div
                className="space-y-1.5 text-[9px]"
                style={{ color: "#9b59b6" }}
              >
                <p>{p.personalInfo.email}</p>
                <p>{p.personalInfo.phone}</p>
                {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
              </div>
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#9b59b6",
                  marginBottom: "7px",
                }}
              >
                Skills
              </p>
              <div className="flex flex-wrap gap-1">
                {p.skills.map((s, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "8px",
                      border: "1px solid #3d0066",
                      padding: "2px 6px",
                      color: "#9b59b6",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#9b59b6",
                  marginBottom: "7px",
                }}
              >
                Education
              </p>
              {p.education.map((edu) => (
                <div key={edu.id} className="mb-2">
                  <p style={{ fontSize: "10px", fontWeight: 700 }}>
                    {edu.school}
                  </p>
                  <p
                    style={{
                      fontSize: "8px",
                      color: "#7b3a9b",
                      marginTop: "1px",
                    }}
                  >
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-8 flex flex-col gap-6">
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#ccc",
                marginBottom: "8px",
              }}
            >
              Profile
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "13px",
                color: "#777",
                lineHeight: 1.8,
              }}
            >
              {p.summary}
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#ccc",
                marginBottom: "12px",
              }}
            >
              Experience
            </p>
            <div className="space-y-5">
              {p.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="border-l-2 border-[#4f0080] pl-5 pb-4"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <p
                      style={{
                        fontWeight: 900,
                        fontSize: "14px",
                        color: "#1a1a1a",
                      }}
                    >
                      {exp.position}
                    </p>
                    <p style={{ fontSize: "9px", color: "#ccc" }}>
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-1.5 mt-1">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "11px",
                          color: "#888",
                          lineHeight: 1.7,
                        }}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function T19({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#0f0f23] text-white overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="min-h-full flex flex-col p-9 gap-6">
        <div className="flex items-start justify-between">
          <div>
            <div style={{ display: "flex", gap: "4px", marginBottom: "10px" }}>
              {["#6366f1", "#8b5cf6", "#a78bfa"].map((c, i) => (
                <div
                  key={i}
                  style={{ width: "8px", height: "8px", background: c }}
                />
              ))}
            </div>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(40px, 7vw, 58px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#6366f1",
                marginTop: "10px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div className="text-right text-[9px]" style={{ color: "#444" }}>
            <p>{p.personalInfo.email}</p>
            <p>{p.personalInfo.phone}</p>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-[1fr_200px] gap-8">
          <div className="space-y-6">
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#333",
                marginBottom: "4px",
              }}
            >
              Career
            </p>
            {p.experience.map((exp) => (
              <div
                key={exp.id}
                className="border-b border-[#1a1a2e] pb-5 last:border-0"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "white",
                    }}
                  >
                    {exp.position}
                  </p>
                  <p style={{ fontSize: "9px", color: "#6366f1" }}>
                    {exp.period}
                  </p>
                </div>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "11px",
                        color: "#666",
                        lineHeight: 1.7,
                      }}
                    >
                      <span style={{ color: "#6366f1" }}>·</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                Summary
              </p>
              <p style={{ fontSize: "11px", color: "#666", lineHeight: 1.8 }}>
                {p.summary}
              </p>
            </div>
          </div>
          <div className="space-y-5 border-l border-[#1a1a2e] pl-6">
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                Education
              </p>
              {p.education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <p
                    style={{ fontWeight: 700, fontSize: "10px", color: "#ccc" }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{ fontSize: "8px", color: "#555", marginTop: "2px" }}
                  >
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                Skills
              </p>
              {p.skills.map((s, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "10px",
                    color: "#555",
                    padding: "3px 0",
                    borderBottom: "1px solid #1a1a2e",
                  }}
                >
                  {s}
                </p>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                Contact
              </p>
              <div className="text-[9px]" style={{ color: "#555" }}>
                <p>{p.personalInfo.email}</p>
                {p.personalInfo.location && (
                  <p className="mt-1">{p.personalInfo.location}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function T20({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#fdf9f3] overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="grid grid-cols-[1fr_260px] min-h-full">
        <div className="p-9 flex flex-col gap-6">
          <div className="pb-5 border-b-4 border-[#1a1a1a]">
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(40px, 7vw, 62px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
                color: "#1a1a1a",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#e8571a",
                marginTop: "10px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "#bbb",
                marginBottom: "12px",
              }}
            >
              Experience
            </p>
            <div className="space-y-5">
              {p.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="pb-4 border-b border-[#ede8e0] last:border-0"
                >
                  <div className="flex items-center gap-4 mb-1">
                    <p
                      style={{
                        fontWeight: 900,
                        fontSize: "14px",
                        color: "#1a1a1a",
                      }}
                    >
                      {exp.position}
                    </p>
                    <div
                      style={{ flex: 1, height: "1px", background: "#e8e0d5" }}
                    />
                    <p style={{ fontSize: "9px", color: "#bbb" }}>
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-1.5 mt-2">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "11px",
                          color: "#888",
                          lineHeight: 1.7,
                        }}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "#bbb",
                marginBottom: "8px",
              }}
            >
              Profile
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "12px",
                color: "#888",
                lineHeight: 1.8,
              }}
            >
              {p.summary}
            </p>
          </div>
        </div>
        <div className="bg-[#1a1a1a] text-white p-7 flex flex-col gap-5">
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#555",
                marginBottom: "8px",
              }}
            >
              Contact
            </p>
            <div className="space-y-1.5 text-[9px]" style={{ color: "#888" }}>
              <p>{p.personalInfo.email}</p>
              <p>{p.personalInfo.phone}</p>
              {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#555",
                marginBottom: "8px",
              }}
            >
              Education
            </p>
            {p.education.map((edu) => (
              <div key={edu.id} className="mb-3 border-l border-[#333] pl-3">
                <p style={{ fontWeight: 700, fontSize: "10px", color: "#ccc" }}>
                  {edu.school}
                </p>
                <p style={{ fontSize: "8px", color: "#666", marginTop: "2px" }}>
                  {edu.degree} · {edu.period}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#555",
                marginBottom: "8px",
              }}
            >
              Skills
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.skills.map((s, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "8px",
                    background: "#2a2a2a",
                    padding: "3px 8px",
                    color: "#888",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-[#e8571a] text-white p-4 mt-auto">
            <p
              style={{
                fontSize: "8px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: "4px",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Tagline
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "12px",
                lineHeight: 1.5,
              }}
            >
              "Design is not what it looks like — it's how it works."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function T21({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#0c1520] text-white overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="border-t-4 border-[#d4af37] min-h-full flex flex-col p-9 gap-6">
        <div className="flex items-end justify-between border-b border-[#1a2530] pb-6">
          <div>
            <p
              style={{
                fontSize: "8px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "#d4af37",
                marginBottom: "10px",
              }}
            >
              Curriculum Vitae
            </p>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(36px, 6vw, 54px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#8a7040",
                marginTop: "10px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div className="text-right text-[9px]" style={{ color: "#4a5a6a" }}>
            <p>{p.personalInfo.email}</p>
            <p>{p.personalInfo.phone}</p>
            {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
          </div>
        </div>
        <div className="flex-1 grid grid-cols-[240px_1fr] gap-8">
          <div className="space-y-5 border-r border-[#1a2530] pr-6">
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#d4af37",
                  marginBottom: "8px",
                }}
              >
                Profile
              </p>
              <p
                style={{ fontSize: "10px", color: "#5a6a7a", lineHeight: 1.8 }}
              >
                {p.summary}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#d4af37",
                  marginBottom: "8px",
                }}
              >
                Education
              </p>
              {p.education.map((edu) => (
                <div
                  key={edu.id}
                  className="mb-3 border-l border-[#d4af37]/30 pl-3"
                >
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "10px",
                      color: "#8a9aaa",
                    }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{
                      fontSize: "8px",
                      color: "#4a5a6a",
                      marginTop: "2px",
                    }}
                  >
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#d4af37",
                  marginBottom: "8px",
                }}
              >
                Skills
              </p>
              {p.skills.map((s, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "10px",
                    color: "#5a6a7a",
                    padding: "3px 0",
                    borderBottom: "1px solid #1a2530",
                  }}
                >
                  {s}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#d4af37",
                marginBottom: "12px",
              }}
            >
              Experience
            </p>
            <div className="space-y-5">
              {p.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="border-l-2 border-[#d4af37] pl-5 pb-4"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <p
                      style={{
                        fontWeight: 900,
                        fontSize: "14px",
                        color: "white",
                      }}
                    >
                      {exp.position}
                    </p>
                    <p style={{ fontSize: "9px", color: "#d4af37" }}>
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-1.5 mt-2">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "11px",
                          color: "#5a6a7a",
                          lineHeight: 1.7,
                        }}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function T22({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#f7f4f0] overflow-hidden"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      <div className="min-h-full grid grid-cols-[1fr_260px]">
        <div className="p-10 flex flex-col gap-7">
          <div className="border-b border-[#1a1a1a] pb-7">
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "7px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "#bbb",
                marginBottom: "12px",
              }}
            >
              Resume
            </p>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(50px, 9vw, 78px)",
                lineHeight: 0.85,
                letterSpacing: "-0.01em",
                color: "#1a1a1a",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "9px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#aaa",
                marginTop: "14px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#ccc",
                marginBottom: "14px",
              }}
            >
              Experience
            </p>
            <div className="space-y-6">
              {p.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="pb-5 border-b border-[#ede8e0] last:border-0"
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 600,
                        fontSize: "20px",
                        color: "#1a1a1a",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {exp.position}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "8px",
                        color: "#ccc",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "14px",
                          color: "#888",
                          lineHeight: 1.7,
                          fontStyle: "italic",
                        }}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#1a1a1a] text-white p-8 flex flex-col gap-5">
          <div>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#555",
                marginBottom: "8px",
              }}
            >
              About
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "15px",
                color: "#888",
                lineHeight: 1.8,
              }}
            >
              {p.summary}
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#555",
                marginBottom: "8px",
              }}
            >
              Contact
            </p>
            <div
              className="space-y-1.5"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "9px",
                color: "#666",
              }}
            >
              <p>{p.personalInfo.email}</p>
              <p>{p.personalInfo.phone}</p>
              {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
            </div>
          </div>
          <div>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#555",
                marginBottom: "8px",
              }}
            >
              Education
            </p>
            {p.education.map((edu) => (
              <div key={edu.id} className="mb-3">
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#ccc",
                  }}
                >
                  {edu.school}
                </p>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "8px",
                    color: "#555",
                    marginTop: "2px",
                  }}
                >
                  {edu.degree} · {edu.period}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#555",
                marginBottom: "8px",
              }}
            >
              Skills
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.skills.map((s, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "8px",
                    border: "1px solid #333",
                    padding: "2px 7px",
                    color: "#666",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function T23({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#e8f0ff] overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="bg-[#1a3a8a] text-white px-9 pt-8 pb-0">
        <div className="flex items-end justify-between pb-6">
          <div>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(38px, 6vw, 56px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#6a9ae8",
                marginTop: "10px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div className="text-right text-[9px]" style={{ color: "#4a6a9a" }}>
            <p>{p.personalInfo.email}</p>
            <p>{p.personalInfo.phone}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[240px_1fr] flex-1 min-h-[calc(100%-110px)]">
        <div className="bg-[#d0dcf5] p-7 space-y-5">
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                marginBottom: "8px",
                color: "#6a8ab8",
              }}
            >
              Profile
            </p>
            <p style={{ fontSize: "10px", color: "#4a6a8a", lineHeight: 1.8 }}>
              {p.summary}
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#6a8ab8",
                marginBottom: "8px",
              }}
            >
              Education
            </p>
            {p.education.map((edu) => (
              <div
                key={edu.id}
                className="mb-3 border-l-2 border-[#1a3a8a] pl-3"
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "10px",
                    color: "#1a3a8a",
                  }}
                >
                  {edu.school}
                </p>
                <p
                  style={{
                    fontSize: "8px",
                    color: "#6a8ab8",
                    marginTop: "2px",
                  }}
                >
                  {edu.degree} · {edu.period}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#6a8ab8",
                marginBottom: "8px",
              }}
            >
              Skills
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.skills.map((s, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "8px",
                    background: "#1a3a8a",
                    color: "#6a9ae8",
                    padding: "2px 7px",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#6a8ab8",
                marginBottom: "7px",
              }}
            >
              Contact
            </p>
            <div style={{ fontSize: "9px", color: "#6a8ab8" }}>
              {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
              {p.personalInfo.website && (
                <p className="mt-1">{p.personalInfo.website}</p>
              )}
            </div>
          </div>
        </div>
        <div className="p-7">
          <p
            style={{
              fontSize: "7px",
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              color: "#aabbd5",
              marginBottom: "12px",
            }}
          >
            Experience
          </p>
          <div className="space-y-5">
            {p.experience.map((exp) => (
              <div
                key={exp.id}
                className="border-b border-[#d0dcf5] pb-4 last:border-0"
              >
                <div className="flex justify-between items-baseline mb-1">
                  <p
                    style={{
                      fontWeight: 900,
                      fontSize: "14px",
                      color: "#1a3a8a",
                    }}
                  >
                    {exp.position}
                  </p>
                  <p style={{ fontSize: "9px", color: "#aabbd5" }}>
                    {exp.period}
                  </p>
                </div>
                <ul className="space-y-1.5 mt-1.5">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "11px",
                        color: "#6a8ab8",
                        lineHeight: 1.7,
                      }}
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function T24({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-white overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="min-h-full p-9 flex flex-col gap-6">
        <div className="flex items-start justify-between">
          <div>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(40px, 7vw, 60px)",
                lineHeight: 0.88,
                letterSpacing: "-0.05em",
                color: "#111",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#22c55e",
                marginTop: "10px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div className="bg-[#22c55e] text-white p-4 text-right">
            <p
              style={{
                fontSize: "8px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: "4px",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Contact
            </p>
            <p style={{ fontSize: "9px" }}>{p.personalInfo.email}</p>
            <p style={{ fontSize: "9px" }}>{p.personalInfo.phone}</p>
            {p.personalInfo.location && (
              <p style={{ fontSize: "9px" }}>{p.personalInfo.location}</p>
            )}
          </div>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-5">
            <div className="border-l-4 border-[#22c55e] pl-5">
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  color: "#bbb",
                  marginBottom: "6px",
                }}
              >
                Profile
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "12px",
                  color: "#777",
                  lineHeight: 1.8,
                }}
              >
                {p.summary}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  color: "#bbb",
                  marginBottom: "12px",
                }}
              >
                Experience
              </p>
              <div className="space-y-5">
                {p.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="pb-4 border-b border-[#f5f5f5] last:border-0"
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <p
                        style={{
                          fontWeight: 900,
                          fontSize: "14px",
                          color: "#111",
                        }}
                      >
                        {exp.position}
                      </p>
                      <p
                        style={{
                          fontSize: "9px",
                          color: "#22c55e",
                          fontWeight: 700,
                        }}
                      >
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1.5 mt-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          style={{
                            fontSize: "11px",
                            color: "#888",
                            lineHeight: 1.7,
                          }}
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-5 border-l border-[#f0f0f0] pl-6">
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#bbb",
                  marginBottom: "8px",
                }}
              >
                Education
              </p>
              {p.education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <p
                    style={{ fontWeight: 800, fontSize: "11px", color: "#111" }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{ fontSize: "9px", color: "#aaa", marginTop: "2px" }}
                  >
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#bbb",
                  marginBottom: "8px",
                }}
              >
                Skills
              </p>
              {p.skills.map((s, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "10px",
                    color: "#888",
                    padding: "4px 0",
                    borderBottom: "1px solid #f5f5f5",
                  }}
                >
                  {s}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function T25({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#06111f] text-white overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="grid grid-cols-[280px_1fr] min-h-full">
        <div className="bg-[#030c17] p-8 flex flex-col gap-5">
          <div className="bg-[#06111f] p-5">
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "#1a4a6a",
                marginBottom: "8px",
              }}
            >
              Profile
            </p>
            <p style={{ fontSize: "10px", color: "#2a5a7a", lineHeight: 1.8 }}>
              {p.summary}
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#1a4a6a",
                marginBottom: "8px",
              }}
            >
              Contact
            </p>
            <div
              className="space-y-1.5 text-[9px]"
              style={{ color: "#2a5a7a" }}
            >
              <p>{p.personalInfo.email}</p>
              <p>{p.personalInfo.phone}</p>
              {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#1a4a6a",
                marginBottom: "8px",
              }}
            >
              Education
            </p>
            {p.education.map((edu) => (
              <div key={edu.id} className="mb-3 border-l border-[#0a2030] pl-3">
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "10px",
                    color: "#3a6a8a",
                  }}
                >
                  {edu.school}
                </p>
                <p
                  style={{
                    fontSize: "8px",
                    color: "#1a4a6a",
                    marginTop: "2px",
                  }}
                >
                  {edu.degree} · {edu.period}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#1a4a6a",
                marginBottom: "8px",
              }}
            >
              Skills
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.skills.map((s, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "8px",
                    border: "1px solid #0a2030",
                    padding: "2px 7px",
                    color: "#2a5a7a",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="p-8 flex flex-col gap-6">
          <div className="border-b border-[#0a1e30] pb-6">
            <p
              style={{
                fontSize: "8px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "#1a4a6a",
                marginBottom: "10px",
              }}
            >
              Finance & Strategy
            </p>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(38px, 6vw, 54px)",
                lineHeight: 0.88,
                letterSpacing: "-0.03em",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#2a5a7a",
                marginTop: "10px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#1a4a6a",
                marginBottom: "12px",
              }}
            >
              Experience
            </p>
            <div className="space-y-5">
              {p.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="border-b border-[#0a1e30] pb-4 last:border-0"
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: "14px",
                        color: "white",
                      }}
                    >
                      {exp.position}
                    </p>
                    <p style={{ fontSize: "9px", color: "#2a5a7a" }}>
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "11px",
                          color: "#2a5a7a",
                          lineHeight: 1.7,
                        }}
                      >
                        › {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATES 26-35: Healthcare, Law, Academia — clean authority
// ─────────────────────────────────────────────────────────────────────────────

const cleanTemplate = (
  accent: string,
  bg: string,
  textColor: string,
  sidebarBg: string,
  label: string,
) => (
  <div
    className="min-h-full overflow-hidden"
    style={{ fontFamily: "'Montserrat', sans-serif", background: bg }}
  >
    <div className="grid grid-cols-[260px_1fr] min-h-full">
      <div
        style={{
          background: sidebarBg,
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "7px",
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              color: accent,
              marginBottom: "8px",
              opacity: 0.7,
            }}
          >
            {label}
          </p>
          <h1
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(26px, 4vw, 36px)",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              color: textColor,
            }}
          >
            {p.personalInfo.fullName}
          </h1>
          <p
            style={{
              fontSize: "8px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: accent,
              marginTop: "10px",
            }}
          >
            {p.personalInfo.jobTitle}
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: "7px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: accent,
              marginBottom: "7px",
              opacity: 0.6,
            }}
          >
            Contact
          </p>
          <div
            style={{
              fontSize: "9px",
              color: textColor,
              opacity: 0.5,
              lineHeight: 2,
            }}
          >
            <p>{p.personalInfo.email}</p>
            <p>{p.personalInfo.phone}</p>
            {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
          </div>
        </div>
        <div>
          <p
            style={{
              fontSize: "7px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: accent,
              marginBottom: "7px",
              opacity: 0.6,
            }}
          >
            Education
          </p>
          {p.education.map((edu) => (
            <div
              key={edu.id}
              style={{
                marginBottom: "12px",
                borderLeft: `2px solid ${accent}`,
                paddingLeft: "10px",
                opacity: 0.7,
              }}
            >
              <p
                style={{ fontWeight: 700, fontSize: "10px", color: textColor }}
              >
                {edu.school}
              </p>
              <p
                style={{
                  fontSize: "8px",
                  color: textColor,
                  opacity: 0.5,
                  marginTop: "2px",
                }}
              >
                {edu.degree} · {edu.period}
              </p>
            </div>
          ))}
        </div>
        <div>
          <p
            style={{
              fontSize: "7px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: accent,
              marginBottom: "7px",
              opacity: 0.6,
            }}
          >
            Skills
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {p.skills.map((s, i) => (
              <span
                key={i}
                style={{
                  fontSize: "8px",
                  border: `1px solid ${accent}`,
                  padding: "2px 7px",
                  color: accent,
                  opacity: 0.7,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          background: bg,
        }}
      >
        <div
          style={{
            borderBottom: `2px solid ${accent}`,
            paddingBottom: "16px",
            opacity: 0.3,
          }}
        />
        <div>
          <p
            style={{
              fontSize: "7px",
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              color: accent,
              marginBottom: "8px",
              opacity: 0.5,
            }}
          >
            Profile
          </p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "12px",
              color: textColor,
              lineHeight: 1.8,
              opacity: 0.6,
            }}
          >
            {p.summary}
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: "7px",
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              color: accent,
              marginBottom: "12px",
              opacity: 0.5,
            }}
          >
            Experience
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {p.experience.map((exp) => (
              <div
                key={exp.id}
                style={{
                  borderBottom: "1px solid rgba(0,0,0,0.05)",
                  paddingBottom: "14px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "6px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 900,
                      fontSize: "14px",
                      color: textColor,
                    }}
                  >
                    {exp.position}
                  </p>
                  <p style={{ fontSize: "9px", color: accent }}>{exp.period}</p>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "11px",
                        color: textColor,
                        lineHeight: 1.7,
                        opacity: 0.55,
                        marginBottom: "4px",
                      }}
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

function T26({ data: p }: TemplateProps) {
  return cleanTemplate(
    "#0d9488",
    "#f0fdfa",
    "#0f4f4a",
    "#e0f5f3",
    "Healthcare",
  );
}
function T27({ data: p }: TemplateProps) {
  return cleanTemplate("#2563eb", "#f0f6ff", "#1e3a5f", "#e0eeff", "Medicine");
}
function T28({ data: p }: TemplateProps) {
  return cleanTemplate(
    "#65a30d",
    "#f7faf5",
    "#2a4a0a",
    "#e8f5e0",
    "Health Sciences",
  );
}
function T29({ data: p }: TemplateProps) {
  return cleanTemplate("#3b82f6", "#f8fafc", "#1e3a5f", "#f0f5ff", "Clinical");
}
function T30({ data: p }: TemplateProps) {
  return cleanTemplate("#0891b2", "#f0f9ff", "#0c3a4a", "#e0f5ff", "Medical");
}
function T31({ data: p }: TemplateProps) {
  return cleanTemplate("#7c3aed", "#faf5ff", "#3b0764", "#f0e8ff", "Law");
}
function T32({ data: p }: TemplateProps) {
  return cleanTemplate("#1d4ed8", "#f0f4ff", "#0f1f5f", "#e8eeff", "Legal");
}
function T33({ data: p }: TemplateProps) {
  return cleanTemplate("#b45309", "#fffbeb", "#4a2000", "#fff8e8", "Counsel");
}
function T34({ data: p }: TemplateProps) {
  return cleanTemplate("#0f766e", "#f0fdfa", "#0a3530", "#e0f5f2", "Practice");
}
function T35({ data: p }: TemplateProps) {
  return cleanTemplate("#be185d", "#fff1f8", "#5f0030", "#ffe8f5", "Attorney");
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATES 36-40: Bold editorial academia + sales
// ─────────────────────────────────────────────────────────────────────────────

function T36({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#fffef9] overflow-hidden"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      <div className="min-h-full flex flex-col">
        <div className="border-b-4 border-double border-[#1a1a1a] py-7 px-9 text-center">
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "7px",
              letterSpacing: "0.6em",
              textTransform: "uppercase",
              color: "#aaa",
              marginBottom: "8px",
            }}
          >
            Academia
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: "clamp(48px, 9vw, 76px)",
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              color: "#1a1a1a",
            }}
          >
            {p.personalInfo.fullName}
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              marginTop: "10px",
            }}
          >
            <div style={{ height: "1px", width: "32px", background: "#ccc" }} />
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "8px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#999",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
            <div style={{ height: "1px", width: "32px", background: "#ccc" }} />
          </div>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "8px",
              color: "#ccc",
              marginTop: "6px",
            }}
          >
            {p.personalInfo.email} · {p.personalInfo.phone}
          </p>
        </div>
        <div className="grid grid-cols-[1fr_220px] flex-1 overflow-hidden">
          <div className="p-8 space-y-6">
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "7px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "#bbb",
                marginBottom: "4px",
              }}
            >
              Career
            </p>
            {p.experience.map((exp) => (
              <div
                key={exp.id}
                className="border-b border-[#ede8dc] pb-5 last:border-0"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 700,
                      fontSize: "19px",
                      color: "#1a1a1a",
                    }}
                  >
                    {exp.position}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "8px",
                      color: "#bbb",
                    }}
                  >
                    {exp.period}
                  </p>
                </div>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontStyle: "italic",
                        fontSize: "13px",
                        color: "#888",
                        lineHeight: 1.7,
                      }}
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-l border-[#ede8dc] p-7 space-y-5">
            <div>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "7px",
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  color: "#bbb",
                  marginBottom: "8px",
                }}
              >
                Statement
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "13px",
                  color: "#888",
                  lineHeight: 1.8,
                }}
              >
                {p.summary}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "7px",
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  color: "#bbb",
                  marginBottom: "8px",
                }}
              >
                Education
              </p>
              {p.education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#1a1a1a",
                    }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "8px",
                      color: "#bbb",
                      marginTop: "2px",
                    }}
                  >
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "7px",
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  color: "#bbb",
                  marginBottom: "8px",
                }}
              >
                Fields
              </p>
              {p.skills.map((s, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "13px",
                    color: "#888",
                    padding: "3px 0",
                    borderBottom: "1px solid #ede8dc",
                  }}
                >
                  {s}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function T37({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#1e1e2e] text-white overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="min-h-full flex flex-col p-9 gap-6">
        <div className="flex items-start justify-between border-b border-[#2a2a3e] pb-6">
          <div>
            <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
              {["#a78bfa", "#818cf8", "#60a5fa"].map((c, i) => (
                <div
                  key={i}
                  style={{ width: "6px", height: "24px", background: c }}
                />
              ))}
            </div>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(38px, 6vw, 54px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#a78bfa",
                marginTop: "10px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div className="text-right text-[9px]" style={{ color: "#444" }}>
            <p>{p.personalInfo.email}</p>
            <p>{p.personalInfo.phone}</p>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-[1fr_200px] gap-8">
          <div className="space-y-5">
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#333",
                marginBottom: "4px",
              }}
            >
              Research & Experience
            </p>
            {p.experience.map((exp) => (
              <div
                key={exp.id}
                className="border-b border-[#2a2a3e] pb-4 last:border-0"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "white",
                    }}
                  >
                    {exp.position}
                  </p>
                  <p style={{ fontSize: "9px", color: "#a78bfa" }}>
                    {exp.period}
                  </p>
                </div>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "11px",
                        color: "#666",
                        lineHeight: 1.7,
                      }}
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="space-y-5 border-l border-[#2a2a3e] pl-6">
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                Summary
              </p>
              <p style={{ fontSize: "10px", color: "#666", lineHeight: 1.8 }}>
                {p.summary}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                Education
              </p>
              {p.education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <p
                    style={{ fontWeight: 700, fontSize: "10px", color: "#ccc" }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{ fontSize: "8px", color: "#555", marginTop: "2px" }}
                  >
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                Skills
              </p>
              {p.skills.map((s, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "10px",
                    color: "#555",
                    padding: "3px 0",
                    borderBottom: "1px solid #2a2a3e",
                  }}
                >
                  {s}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function T38({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#f8f8f8] overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="min-h-full flex">
        <div style={{ width: "8px", background: "#22c55e", flexShrink: 0 }} />
        <div className="flex-1 p-9 flex flex-col gap-6">
          <div className="flex items-end justify-between border-b-2 border-[#111] pb-5">
            <div>
              <h1
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(38px, 6vw, 56px)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.04em",
                  color: "#111",
                }}
              >
                {p.personalInfo.fullName}
              </h1>
              <p
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  color: "#22c55e",
                  marginTop: "10px",
                }}
              >
                {p.personalInfo.jobTitle}
              </p>
            </div>
            <div className="text-right text-[9px]" style={{ color: "#aaa" }}>
              <p>{p.personalInfo.email}</p>
              <p>{p.personalInfo.phone}</p>
              {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-[240px_1fr] gap-8">
            <div className="space-y-5">
              <div>
                <p
                  style={{
                    fontSize: "7px",
                    letterSpacing: "0.45em",
                    textTransform: "uppercase",
                    color: "#bbb",
                    marginBottom: "8px",
                  }}
                >
                  Summary
                </p>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontSize: "12px",
                    color: "#777",
                    lineHeight: 1.8,
                  }}
                >
                  {p.summary}
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "7px",
                    letterSpacing: "0.45em",
                    textTransform: "uppercase",
                    color: "#bbb",
                    marginBottom: "8px",
                  }}
                >
                  Education
                </p>
                {p.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="mb-3 border-l-2 border-[#22c55e] pl-3"
                  >
                    <p
                      style={{
                        fontWeight: 800,
                        fontSize: "11px",
                        color: "#111",
                      }}
                    >
                      {edu.school}
                    </p>
                    <p
                      style={{
                        fontSize: "8px",
                        color: "#aaa",
                        marginTop: "2px",
                      }}
                    >
                      {edu.degree} · {edu.period}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <p
                  style={{
                    fontSize: "7px",
                    letterSpacing: "0.45em",
                    textTransform: "uppercase",
                    color: "#bbb",
                    marginBottom: "8px",
                  }}
                >
                  Skills
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.skills.map((s, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "8px",
                        background: "#22c55e",
                        color: "white",
                        padding: "2px 7px",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  color: "#bbb",
                  marginBottom: "12px",
                }}
              >
                Experience
              </p>
              <div className="space-y-5">
                {p.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="border-b border-[#e8e8e8] pb-4 last:border-0"
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <p
                        style={{
                          fontWeight: 900,
                          fontSize: "14px",
                          color: "#111",
                        }}
                      >
                        {exp.position}
                      </p>
                      <p
                        style={{
                          fontSize: "9px",
                          color: "#22c55e",
                          fontWeight: 700,
                        }}
                      >
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1.5 mt-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          style={{
                            fontSize: "11px",
                            color: "#888",
                            lineHeight: 1.7,
                          }}
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function T39({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#0a1f2e] text-white overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="grid grid-cols-[1fr_240px] min-h-full">
        <div className="p-9 flex flex-col gap-6">
          <div className="border-b border-[#1a3a4e] pb-6">
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(38px, 6vw, 54px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#38bdf8",
                marginTop: "10px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#1a4a6a",
                marginBottom: "12px",
              }}
            >
              Experience
            </p>
            <div className="space-y-5">
              {p.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="border-b border-[#1a3a4e] pb-4 last:border-0"
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <p
                      style={{
                        fontWeight: 900,
                        fontSize: "14px",
                        color: "white",
                      }}
                    >
                      {exp.position}
                    </p>
                    <p style={{ fontSize: "9px", color: "#38bdf8" }}>
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "11px",
                          color: "#4a7a9a",
                          lineHeight: 1.7,
                        }}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#061420] p-7 flex flex-col gap-5">
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#1a4a6a",
                marginBottom: "7px",
              }}
            >
              Profile
            </p>
            <p style={{ fontSize: "10px", color: "#3a6a8a", lineHeight: 1.8 }}>
              {p.summary}
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#1a4a6a",
                marginBottom: "7px",
              }}
            >
              Contact
            </p>
            <div style={{ fontSize: "9px", color: "#3a6a8a", lineHeight: 1.8 }}>
              <p>{p.personalInfo.email}</p>
              <p>{p.personalInfo.phone}</p>
              {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#1a4a6a",
                marginBottom: "7px",
              }}
            >
              Education
            </p>
            {p.education.map((edu) => (
              <div key={edu.id} className="mb-3 border-l border-[#0a2030] pl-3">
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "10px",
                    color: "#4a7a9a",
                  }}
                >
                  {edu.school}
                </p>
                <p
                  style={{
                    fontSize: "8px",
                    color: "#2a5a7a",
                    marginTop: "2px",
                  }}
                >
                  {edu.degree} · {edu.period}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#1a4a6a",
                marginBottom: "7px",
              }}
            >
              Skills
            </p>
            {p.skills.map((s, i) => (
              <p
                key={i}
                style={{
                  fontSize: "10px",
                  color: "#3a6a8a",
                  padding: "3px 0",
                  borderBottom: "1px solid #0a2030",
                }}
              >
                {s}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function T40({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#faf0ff] overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="min-h-full grid grid-cols-[1fr_260px]">
        <div className="p-9 flex flex-col gap-6">
          <div className="border-b-4 border-[#7c3aed] pb-5">
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(38px, 6vw, 54px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
                color: "#1a1a1a",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#7c3aed",
                marginTop: "10px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#ccc",
                marginBottom: "12px",
              }}
            >
              Experience
            </p>
            <div className="space-y-5">
              {p.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="border-l-2 border-[#7c3aed] pl-5 pb-4"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <p
                      style={{
                        fontWeight: 900,
                        fontSize: "14px",
                        color: "#1a1a1a",
                      }}
                    >
                      {exp.position}
                    </p>
                    <p
                      style={{
                        fontSize: "9px",
                        color: "#7c3aed",
                        fontWeight: 700,
                      }}
                    >
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-1.5 mt-1">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "11px",
                          color: "#888",
                          lineHeight: 1.7,
                        }}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#7c3aed] text-white p-7 flex flex-col gap-5">
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "8px",
              }}
            >
              Profile
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "12px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.8,
              }}
            >
              {p.summary}
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "8px",
              }}
            >
              Contact
            </p>
            <div
              style={{
                fontSize: "9px",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.8,
              }}
            >
              <p>{p.personalInfo.email}</p>
              <p>{p.personalInfo.phone}</p>
              {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "8px",
              }}
            >
              Education
            </p>
            {p.education.map((edu) => (
              <div key={edu.id} className="mb-3 border-l border-white/20 pl-3">
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  {edu.school}
                </p>
                <p
                  style={{
                    fontSize: "8px",
                    color: "rgba(255,255,255,0.4)",
                    marginTop: "2px",
                  }}
                >
                  {edu.degree} · {edu.period}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "8px",
              }}
            >
              Skills
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {p.skills.map((s, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "8px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    padding: "2px 7px",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATES 41-50: Executive + Entry level
// ─────────────────────────────────────────────────────────────────────────────

function T41({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#0a0a0a] text-white overflow-hidden relative"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c5a059] to-[#e8d5a0]" />
      <div className="min-h-full flex flex-col p-9 gap-6">
        <div className="flex items-center justify-between border-b border-[#c5a059]/20 pb-6">
          <div>
            <p
              style={{
                fontSize: "8px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "#c5a059",
                marginBottom: "10px",
              }}
            >
              Executive Resume
            </p>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(38px, 6vw, 54px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#6a5030",
                marginTop: "10px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div className="text-right text-[9px]" style={{ color: "#3a3a3a" }}>
            <p>{p.personalInfo.email}</p>
            <p>{p.personalInfo.phone}</p>
            {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
          </div>
        </div>
        <div className="flex-1 grid grid-cols-[240px_1fr] gap-8">
          <div className="space-y-5 border-r border-[#1a1a1a] pr-6">
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#c5a059",
                  marginBottom: "8px",
                }}
              >
                Executive Summary
              </p>
              <p style={{ fontSize: "10px", color: "#555", lineHeight: 1.8 }}>
                {p.summary}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#c5a059",
                  marginBottom: "8px",
                }}
              >
                Education
              </p>
              {p.education.map((edu) => (
                <div
                  key={edu.id}
                  className="mb-3 border-l border-[#c5a059]/30 pl-3"
                >
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "10px",
                      color: "#c5a059",
                    }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{ fontSize: "8px", color: "#555", marginTop: "2px" }}
                  >
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#c5a059",
                  marginBottom: "8px",
                }}
              >
                Competencies
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {p.skills.map((s, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "8px",
                      border: "1px solid #2a2a2a",
                      padding: "2px 7px",
                      color: "#666",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#c5a059",
                marginBottom: "12px",
              }}
            >
              Leadership Experience
            </p>
            <div className="space-y-5">
              {p.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="border-l-2 border-[#c5a059] pl-5 pb-4"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <p
                      style={{
                        fontWeight: 900,
                        fontSize: "14px",
                        color: "white",
                      }}
                    >
                      {exp.position}
                    </p>
                    <p style={{ fontSize: "9px", color: "#c5a059" }}>
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-1.5 mt-2">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "11px",
                          color: "#555",
                          lineHeight: 1.7,
                        }}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function T42({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#f0ece4] overflow-hidden"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      <div className="grid grid-cols-[280px_1fr] min-h-full">
        <div className="bg-[#1a1510] text-white p-8 flex flex-col gap-5">
          <div>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "7px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "#8a7050",
                marginBottom: "12px",
              }}
            >
              C-Suite
            </p>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(30px, 5vw, 44px)",
                lineHeight: 0.9,
                letterSpacing: "-0.01em",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "8px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#6a5030",
                marginTop: "10px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div className="bg-[#0a0a07] flex-1 max-h-[160px] flex items-center justify-center">
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "90px",
                color: "#1a1510",
                fontWeight: 300,
              }}
            >
              {p.personalInfo.fullName.charAt(0)}
            </span>
          </div>
          <div className="space-y-4">
            {[
              {
                label: "Contact",
                content: [
                  p.personalInfo.email,
                  p.personalInfo.phone,
                  p.personalInfo.location || "",
                ],
              },
              {
                label: "Education",
                content: p.education.map((e) => `${e.school} · ${e.period}`),
              },
            ].map(({ label, content }) => (
              <div key={label}>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "7px",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    color: "#6a5030",
                    marginBottom: "6px",
                  }}
                >
                  {label}
                </p>
                {content.filter(Boolean).map((c, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "9px",
                      color: "#6a5030",
                      lineHeight: 1.8,
                    }}
                  >
                    {c}
                  </p>
                ))}
              </div>
            ))}
            <div>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#6a5030",
                  marginBottom: "6px",
                }}
              >
                Skills
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {p.skills.map((s, i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "7px",
                      border: "1px solid #3a2a10",
                      padding: "2px 6px",
                      color: "#6a5030",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 flex flex-col gap-6">
          <div>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#bbb",
                marginBottom: "8px",
              }}
            >
              Executive Profile
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "15px",
                color: "#888",
                lineHeight: 1.8,
              }}
            >
              {p.summary}
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#bbb",
                marginBottom: "12px",
              }}
            >
              Experience
            </p>
            <div className="space-y-5">
              {p.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="border-b border-[#e0d8cc] pb-4 last:border-0"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 700,
                        fontSize: "19px",
                        color: "#1a1510",
                      }}
                    >
                      {exp.position}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "9px",
                        color: "#bbb",
                      }}
                    >
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-1.5 mt-1">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontStyle: "italic",
                          fontSize: "13px",
                          color: "#999",
                          lineHeight: 1.7,
                        }}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function T43({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-white overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="min-h-full p-9 flex flex-col gap-6">
        <div className="grid grid-cols-[1fr_auto] items-start gap-8 border-b-2 border-[#111] pb-6">
          <div>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(42px, 7vw, 64px)",
                lineHeight: 0.85,
                letterSpacing: "-0.05em",
                color: "#111",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "#999",
                marginTop: "12px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div className="bg-[#111] text-white p-4 text-right min-w-[180px]">
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#555",
                marginBottom: "6px",
              }}
            >
              Details
            </p>
            <p style={{ fontSize: "9px", color: "#888" }}>
              {p.personalInfo.email}
            </p>
            <p style={{ fontSize: "9px", color: "#888", marginTop: "2px" }}>
              {p.personalInfo.phone}
            </p>
            {p.personalInfo.location && (
              <p style={{ fontSize: "9px", color: "#888", marginTop: "2px" }}>
                {p.personalInfo.location}
              </p>
            )}
          </div>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-5">
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "#ccc",
                marginBottom: "4px",
              }}
            >
              Experience
            </p>
            {p.experience.map((exp) => (
              <div
                key={exp.id}
                className="pb-4 border-b border-[#f0f0f0] last:border-0"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <p
                    style={{
                      fontWeight: 900,
                      fontSize: "15px",
                      color: "#111",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {exp.position}
                  </p>
                  <p style={{ fontSize: "9px", color: "#bbb" }}>{exp.period}</p>
                </div>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "11px",
                        color: "#888",
                        lineHeight: 1.7,
                      }}
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="space-y-5 border-l border-[#f0f0f0] pl-6">
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.5em",
                  textTransform: "uppercase",
                  color: "#ccc",
                  marginBottom: "8px",
                }}
              >
                Profile
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "12px",
                  color: "#888",
                  lineHeight: 1.8,
                }}
              >
                {p.summary}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.5em",
                  textTransform: "uppercase",
                  color: "#ccc",
                  marginBottom: "8px",
                }}
              >
                Education
              </p>
              {p.education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <p
                    style={{ fontWeight: 800, fontSize: "11px", color: "#111" }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{ fontSize: "9px", color: "#bbb", marginTop: "2px" }}
                  >
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.5em",
                  textTransform: "uppercase",
                  color: "#ccc",
                  marginBottom: "8px",
                }}
              >
                Skills
              </p>
              {p.skills.map((s, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "10px",
                    color: "#888",
                    padding: "3px 0",
                    borderBottom: "1px solid #f5f5f5",
                  }}
                >
                  {s}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function T44({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#0f1623] text-white overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="grid grid-cols-[1fr_260px] min-h-full">
        <div className="p-9 flex flex-col gap-6">
          <div className="border-b border-[#1a2535] pb-6">
            <p
              style={{
                fontSize: "8px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "#2a5070",
                marginBottom: "10px",
              }}
            >
              Board Level
            </p>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(38px, 6vw, 54px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#3a7090",
                marginTop: "10px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#1a3040",
                marginBottom: "12px",
              }}
            >
              Experience
            </p>
            <div className="space-y-5">
              {p.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="border-b border-[#1a2535] pb-4 last:border-0"
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: "14px",
                        color: "white",
                      }}
                    >
                      {exp.position}
                    </p>
                    <p style={{ fontSize: "9px", color: "#3a7090" }}>
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "11px",
                          color: "#2a4a60",
                          lineHeight: 1.7,
                        }}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#080e18] p-7 flex flex-col gap-5">
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#1a3040",
                marginBottom: "8px",
              }}
            >
              Summary
            </p>
            <p style={{ fontSize: "10px", color: "#2a4a60", lineHeight: 1.8 }}>
              {p.summary}
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#1a3040",
                marginBottom: "7px",
              }}
            >
              Contact
            </p>
            <div style={{ fontSize: "9px", color: "#2a4a60", lineHeight: 1.8 }}>
              <p>{p.personalInfo.email}</p>
              <p>{p.personalInfo.phone}</p>
              {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#1a3040",
                marginBottom: "7px",
              }}
            >
              Education
            </p>
            {p.education.map((edu) => (
              <div key={edu.id} className="mb-3 border-l border-[#1a2535] pl-3">
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "10px",
                    color: "#3a7090",
                  }}
                >
                  {edu.school}
                </p>
                <p
                  style={{
                    fontSize: "8px",
                    color: "#2a4a60",
                    marginTop: "2px",
                  }}
                >
                  {edu.degree} · {edu.period}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#1a3040",
                marginBottom: "7px",
              }}
            >
              Skills
            </p>
            {p.skills.map((s, i) => (
              <p
                key={i}
                style={{
                  fontSize: "10px",
                  color: "#2a4a60",
                  padding: "3px 0",
                  borderBottom: "1px solid #0f1623",
                }}
              >
                {s}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function T45({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#fdfaf5] overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="min-h-full flex flex-col">
        <div className="bg-[#1a1410] text-white px-9 py-7">
          <div className="flex items-end justify-between">
            <div>
              <p
                style={{
                  fontSize: "8px",
                  letterSpacing: "0.5em",
                  textTransform: "uppercase",
                  color: "#c5a059",
                  marginBottom: "10px",
                }}
              >
                Senior Executive
              </p>
              <h1
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(38px, 6vw, 54px)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.04em",
                }}
              >
                {p.personalInfo.fullName}
              </h1>
              <p
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#6a5030",
                  marginTop: "10px",
                }}
              >
                {p.personalInfo.jobTitle}
              </p>
            </div>
            <div className="text-right text-[9px]" style={{ color: "#4a3a20" }}>
              <p>{p.personalInfo.email}</p>
              <p>{p.personalInfo.phone}</p>
              {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-[240px_1fr] overflow-hidden">
          <div className="bg-[#f0e8d8] p-7 space-y-5">
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#8a7050",
                  marginBottom: "8px",
                }}
              >
                Summary
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "12px",
                  color: "#6a5030",
                  lineHeight: 1.8,
                }}
              >
                {p.summary}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#8a7050",
                  marginBottom: "8px",
                }}
              >
                Education
              </p>
              {p.education.map((edu) => (
                <div
                  key={edu.id}
                  className="mb-3 border-l-2 border-[#c5a059] pl-3"
                >
                  <p
                    style={{
                      fontWeight: 800,
                      fontSize: "11px",
                      color: "#1a1410",
                    }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{
                      fontSize: "8px",
                      color: "#8a7050",
                      marginTop: "2px",
                    }}
                  >
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#8a7050",
                  marginBottom: "8px",
                }}
              >
                Skills
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {p.skills.map((s, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "8px",
                      border: "1px solid #c5a059",
                      padding: "2px 7px",
                      color: "#8a7050",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="p-7">
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#bbb",
                marginBottom: "12px",
              }}
            >
              Experience
            </p>
            <div className="space-y-5">
              {p.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="border-b border-[#e8e0d0] pb-4 last:border-0"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <p
                      style={{
                        fontWeight: 900,
                        fontSize: "14px",
                        color: "#1a1410",
                      }}
                    >
                      {exp.position}
                    </p>
                    <p
                      style={{
                        fontSize: "9px",
                        color: "#c5a059",
                        fontWeight: 700,
                      }}
                    >
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-1.5 mt-1.5">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "11px",
                          color: "#888",
                          lineHeight: 1.7,
                        }}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Entry templates 46-50
function T46({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#111] text-white overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="min-h-full p-9 flex flex-col gap-5">
        <div className="border-b border-[#1f1f1f] pb-5">
          <p
            style={{
              fontSize: "8px",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "#555",
              marginBottom: "10px",
            }}
          >
            Entry Level
          </p>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(38px, 7vw, 58px)",
              lineHeight: 0.88,
              letterSpacing: "-0.04em",
            }}
          >
            {p.personalInfo.fullName}
          </h1>
          <p
            style={{
              fontSize: "9px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#555",
              marginTop: "10px",
            }}
          >
            {p.personalInfo.jobTitle}
          </p>
        </div>
        <div className="flex-1 grid grid-cols-[1fr_200px] gap-7">
          <div className="space-y-5">
            <div className="bg-[#1a1a1a] p-5">
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#444",
                  marginBottom: "7px",
                }}
              >
                About
              </p>
              <p style={{ fontSize: "11px", color: "#666", lineHeight: 1.8 }}>
                {p.summary}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                Experience
              </p>
              <div className="space-y-4">
                {p.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="border-b border-[#1a1a1a] pb-4 last:border-0"
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <p style={{ fontWeight: 700, fontSize: "13px" }}>
                        {exp.position}
                      </p>
                      <p style={{ fontSize: "9px", color: "#444" }}>
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1 mt-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          style={{
                            fontSize: "10px",
                            color: "#555",
                            lineHeight: 1.7,
                          }}
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-5 border-l border-[#1a1a1a] pl-5">
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                Contact
              </p>
              <div style={{ fontSize: "9px", color: "#555", lineHeight: 1.8 }}>
                <p>{p.personalInfo.email}</p>
                <p>{p.personalInfo.phone}</p>
                {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
              </div>
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                Education
              </p>
              {p.education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <p
                    style={{ fontWeight: 700, fontSize: "11px", color: "#ccc" }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{ fontSize: "8px", color: "#555", marginTop: "2px" }}
                  >
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                Skills
              </p>
              {p.skills.map((s, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "10px",
                    color: "#555",
                    padding: "3px 0",
                    borderBottom: "1px solid #1a1a1a",
                  }}
                >
                  {s}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function T47({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#fef9f3] overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="min-h-full grid grid-cols-[260px_1fr]">
        <div className="bg-[#ff8c00] text-white p-8 flex flex-col gap-5">
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "10px",
              }}
            >
              Fresh Graduate
            </p>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(28px, 4vw, 38px)",
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "8px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                marginTop: "10px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div className="bg-[#e07000] flex-1 max-h-[160px] flex items-center justify-center">
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "90px",
                color: "#c06000",
                letterSpacing: "-0.05em",
              }}
            >
              {p.personalInfo.fullName.charAt(0)}
            </span>
          </div>
          <div className="space-y-4">
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: "6px",
                }}
              >
                Contact
              </p>
              <div
                style={{
                  fontSize: "9px",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.8,
                }}
              >
                <p>{p.personalInfo.email}</p>
                <p>{p.personalInfo.phone}</p>
              </div>
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: "6px",
                }}
              >
                Skills
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {p.skills.map((s, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "8px",
                      border: "1px solid rgba(255,255,255,0.2)",
                      padding: "2px 6px",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 flex flex-col gap-6">
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#ccc",
                marginBottom: "8px",
              }}
            >
              Profile
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "13px",
                color: "#777",
                lineHeight: 1.8,
              }}
            >
              {p.summary}
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#ccc",
                marginBottom: "10px",
              }}
            >
              Experience
            </p>
            <div className="space-y-4">
              {p.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="border-l-2 border-[#ff8c00] pl-4 pb-3"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <p
                      style={{
                        fontWeight: 900,
                        fontSize: "13px",
                        color: "#1a1a1a",
                      }}
                    >
                      {exp.position}
                    </p>
                    <p style={{ fontSize: "9px", color: "#ccc" }}>
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-1 mt-1">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "10px",
                          color: "#888",
                          lineHeight: 1.7,
                        }}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#ccc",
                marginBottom: "10px",
              }}
            >
              Education
            </p>
            <div className="grid grid-cols-2 gap-4">
              {p.education.map((edu) => (
                <div key={edu.id} className="border border-[#f0e8dc] p-4">
                  <p
                    style={{
                      fontWeight: 800,
                      fontSize: "11px",
                      color: "#1a1a1a",
                    }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{ fontSize: "9px", color: "#aaa", marginTop: "2px" }}
                  >
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function T48({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-white overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="bg-[#111827] text-white px-9 py-6">
        <div className="flex items-end justify-between">
          <div>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(38px, 6vw, 54px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#9ca3af",
                marginTop: "10px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div className="text-right text-[9px]" style={{ color: "#4b5563" }}>
            <p>{p.personalInfo.email}</p>
            <p>{p.personalInfo.phone}</p>
            {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[240px_1fr] min-h-[calc(100%-100px)]">
        <div className="bg-[#f9fafb] p-7 space-y-5 border-r border-[#f0f0f0]">
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#bbb",
                marginBottom: "8px",
              }}
            >
              About
            </p>
            <p style={{ fontSize: "11px", color: "#777", lineHeight: 1.8 }}>
              {p.summary}
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#bbb",
                marginBottom: "8px",
              }}
            >
              Education
            </p>
            {p.education.map((edu) => (
              <div key={edu.id} className="mb-3">
                <p style={{ fontWeight: 800, fontSize: "11px", color: "#111" }}>
                  {edu.school}
                </p>
                <p style={{ fontSize: "9px", color: "#aaa", marginTop: "2px" }}>
                  {edu.degree} · {edu.period}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#bbb",
                marginBottom: "8px",
              }}
            >
              Skills
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {p.skills.map((s, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "8px",
                    background: "#111827",
                    color: "#9ca3af",
                    padding: "2px 7px",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#bbb",
                marginBottom: "7px",
              }}
            >
              Contact
            </p>
            <div style={{ fontSize: "9px", color: "#aaa", lineHeight: 1.8 }}>
              {p.personalInfo.website && <p>{p.personalInfo.website}</p>}
            </div>
          </div>
        </div>
        <div className="p-7">
          <p
            style={{
              fontSize: "7px",
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              color: "#ccc",
              marginBottom: "12px",
            }}
          >
            Experience
          </p>
          <div className="space-y-5">
            {p.experience.map((exp) => (
              <div
                key={exp.id}
                className="border-b border-[#f5f5f5] pb-4 last:border-0"
              >
                <div className="flex justify-between items-baseline mb-1">
                  <p
                    style={{ fontWeight: 900, fontSize: "14px", color: "#111" }}
                  >
                    {exp.position}
                  </p>
                  <p style={{ fontSize: "9px", color: "#bbb" }}>{exp.period}</p>
                </div>
                <ul className="space-y-1.5 mt-1.5">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "11px",
                        color: "#888",
                        lineHeight: 1.7,
                      }}
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function T49({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#f5ede0] overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="min-h-full p-9 flex flex-col gap-5">
        <div className="border-b-2 border-[#3a1a00] pb-5">
          <div className="flex justify-between items-start">
            <div>
              <h1
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900,
                  fontSize: "clamp(40px, 7vw, 58px)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.02em",
                  color: "#3a1a00",
                }}
              >
                {p.personalInfo.fullName}
              </h1>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#c8830a",
                  marginTop: "10px",
                }}
              >
                {p.personalInfo.jobTitle}
              </p>
            </div>
            <div className="text-right">
              <p style={{ fontSize: "9px", color: "#b08050", lineHeight: 1.8 }}>
                {p.personalInfo.email}
              </p>
              <p style={{ fontSize: "9px", color: "#b08050" }}>
                {p.personalInfo.phone}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-[1fr_220px] gap-8">
          <div className="space-y-5">
            <div className="border-l-4 border-[#c8830a] pl-5">
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#b08050",
                  marginBottom: "6px",
                }}
              >
                About Me
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "13px",
                  color: "#6a4020",
                  lineHeight: 1.8,
                }}
              >
                {p.summary}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#b08050",
                  marginBottom: "10px",
                }}
              >
                Experience
              </p>
              <div className="space-y-4">
                {p.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="border-b border-[#e0c8a8] pb-4 last:border-0"
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <p
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 700,
                          fontSize: "15px",
                          color: "#3a1a00",
                        }}
                      >
                        {exp.position}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "9px",
                          color: "#b08050",
                        }}
                      >
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1 mt-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontStyle: "italic",
                            fontSize: "12px",
                            color: "#7a5030",
                            lineHeight: 1.7,
                          }}
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-5 border-l border-[#e0c8a8] pl-6">
            <div>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#b08050",
                  marginBottom: "8px",
                }}
              >
                Education
              </p>
              {p.education.map((edu) => (
                <div
                  key={edu.id}
                  className="mb-3 border-l-2 border-[#c8830a] pl-3"
                >
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: "13px",
                      color: "#3a1a00",
                    }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "8px",
                      color: "#b08050",
                      marginTop: "2px",
                    }}
                  >
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#b08050",
                  marginBottom: "8px",
                }}
              >
                Skills
              </p>
              {p.skills.map((s, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "12px",
                    color: "#7a5030",
                    padding: "4px 0",
                    borderBottom: "1px solid #e0c8a8",
                  }}
                >
                  {s}
                </p>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#b08050",
                  marginBottom: "7px",
                }}
              >
                Location
              </p>
              {p.personalInfo.location && (
                <p style={{ fontSize: "10px", color: "#7a5030" }}>
                  {p.personalInfo.location}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function T50({ data: p }: TemplateProps) {
  return (
    <div
      className="min-h-full bg-[#f5f5f5] overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="min-h-full p-9 flex flex-col gap-5">
        <div className="flex items-end justify-between border-b border-[#ddd] pb-5">
          <div>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(38px, 6vw, 54px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
                color: "#111",
              }}
            >
              {p.personalInfo.fullName}
            </h1>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#888",
                marginTop: "10px",
              }}
            >
              {p.personalInfo.jobTitle}
            </p>
          </div>
          <div className="text-right text-[9px]" style={{ color: "#aaa" }}>
            <p>{p.personalInfo.email}</p>
            <p>{p.personalInfo.phone}</p>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-5">
            <div className="bg-white p-5">
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#bbb",
                  marginBottom: "6px",
                }}
              >
                Profile
              </p>
              <p style={{ fontSize: "11px", color: "#777", lineHeight: 1.8 }}>
                {p.summary}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#bbb",
                  marginBottom: "10px",
                }}
              >
                Experience
              </p>
              <div className="space-y-4">
                {p.experience.map((exp) => (
                  <div key={exp.id} className="bg-white p-4">
                    <div className="flex justify-between items-baseline mb-1">
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: "13px",
                          color: "#111",
                        }}
                      >
                        {exp.position}
                      </p>
                      <p style={{ fontSize: "9px", color: "#bbb" }}>
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1 mt-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          style={{
                            fontSize: "10px",
                            color: "#888",
                            lineHeight: 1.7,
                          }}
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <div className="bg-white p-4">
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#bbb",
                  marginBottom: "8px",
                }}
              >
                Education
              </p>
              {p.education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <p
                    style={{ fontWeight: 700, fontSize: "11px", color: "#111" }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{ fontSize: "9px", color: "#aaa", marginTop: "2px" }}
                  >
                    {edu.degree} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-white p-4">
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#bbb",
                  marginBottom: "8px",
                }}
              >
                Skills
              </p>
              {p.skills.map((s, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "10px",
                    color: "#888",
                    padding: "3px 0",
                    borderBottom: "1px solid #f5f5f5",
                  }}
                >
                  {s}
                </p>
              ))}
            </div>
            <div className="bg-white p-4">
              <p
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#bbb",
                  marginBottom: "7px",
                }}
              >
                Contact
              </p>
              <div style={{ fontSize: "9px", color: "#aaa", lineHeight: 1.8 }}>
                {p.personalInfo.location && <p>{p.personalInfo.location}</p>}
                {p.personalInfo.website && <p>{p.personalInfo.website}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY — renders all 50 templates in a scrollable grid
// ─────────────────────────────────────────────────────────────────────────────

const TEMPLATES = [
  { id: 1, label: "Blackout Editorial", fn: T1 },
  { id: 2, label: "Cream Editorial", fn: T2 },
  { id: 3, label: "White Serif Power", fn: T3 },
  { id: 4, label: "Charcoal Swiss Grid", fn: T4 },
  { id: 5, label: "Neon Green Terminal", fn: T5 },
  { id: 6, label: "Warm Ivory Split", fn: T6 },
  { id: 7, label: "Cobalt Blue Magazine", fn: T7 },
  { id: 8, label: "Sand & Ink Newspaper", fn: T8 },
  { id: 9, label: "Pure Black Power", fn: T9 },
  { id: 10, label: "Crimson Statement", fn: T10 },
  { id: 11, label: "Slate + Ochre Architect", fn: T11 },
  { id: 12, label: "Bordeaux Vertical", fn: T12 },
  { id: 13, label: "Forest Green", fn: T13 },
  { id: 14, label: "Ultra Minimal Hairline", fn: T14 },
  { id: 15, label: "Bold Italic Fashion", fn: T15 },
  { id: 16, label: "Orange Fire", fn: T16 },
  { id: 17, label: "Black & Gold Dynamic", fn: T17 },
  { id: 18, label: "Deep Purple", fn: T18 },
  { id: 19, label: "Indigo Digital", fn: T19 },
  { id: 20, label: "Warm Modern", fn: T20 },
  { id: 21, label: "Navy Gold Finance", fn: T21 },
  { id: 22, label: "Cormorant Garamond", fn: T22 },
  { id: 23, label: "Cobalt Professional", fn: T23 },
  { id: 24, label: "Emerald Clean", fn: T24 },
  { id: 25, label: "Midnight Navy", fn: T25 },
  { id: 26, label: "Teal Clinical", fn: T26 },
  { id: 27, label: "Sky Blue Medical", fn: T27 },
  { id: 28, label: "Sage Green Health", fn: T28 },
  { id: 29, label: "Cloud Blue", fn: T29 },
  { id: 30, label: "Cyan Clinical", fn: T30 },
  { id: 31, label: "Violet Law", fn: T31 },
  { id: 32, label: "Royal Blue Legal", fn: T32 },
  { id: 33, label: "Amber Counsel", fn: T33 },
  { id: 34, label: "Teal Practice", fn: T34 },
  { id: 35, label: "Rose Attorney", fn: T35 },
  { id: 36, label: "Academic Serif", fn: T36 },
  { id: 37, label: "Violet Research", fn: T37 },
  { id: 38, label: "Green Bold Sales", fn: T38 },
  { id: 39, label: "Navy Sales Pro", fn: T39 },
  { id: 40, label: "Purple Sales Force", fn: T40 },
  { id: 41, label: "Black Gold Executive", fn: T41 },
  { id: 42, label: "Garamond C-Suite", fn: T42 },
  { id: 43, label: "Monolith Executive", fn: T43 },
  { id: 44, label: "Board Level Navy", fn: T44 },
  { id: 45, label: "Warm Gold Executive", fn: T45 },
  { id: 46, label: "Dark Entry", fn: T46 },
  { id: 47, label: "Orange Entry", fn: T47 },
  { id: 48, label: "Clean Entry Gray", fn: T48 },
  { id: 49, label: "Warm Serif Entry", fn: T49 },
  { id: 50, label: "Minimal Gray Entry", fn: T50 },
];

export default function ResumeGallery() {
  return (
    <div
      style={{
        background: "#0a0a0a",
        minHeight: "100vh",
        padding: "48px 24px",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div
          style={{
            marginBottom: "56px",
            borderBottom: "1px solid #1a1a1a",
            paddingBottom: "32px",
          }}
        >
          <p
            style={{
              fontSize: "9px",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "#444",
              marginBottom: "12px",
            }}
          >
            Collection
          </p>
          <h1
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 5vw, 56px)",
              letterSpacing: "-0.04em",
              color: "white",
              lineHeight: 0.9,
            }}
          >
            50 Premium
            <br />
            Resume Templates
          </h1>
          <p
            style={{
              fontSize: "12px",
              color: "#555",
              marginTop: "16px",
              maxWidth: "400px",
              lineHeight: 1.7,
            }}
          >
            Editorial typography · Premium color palettes · Distinct layout
            architectures
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
            gap: "32px",
          }}
        >
          {TEMPLATES.map(({ id, label, fn: Comp }) => (
            <div
              key={id}
              style={{
                background: "#111",
                borderRadius: "0px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "10px 14px",
                  borderBottom: "1px solid #1a1a1a",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "8px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#555",
                  }}
                >
                  Template {String(id).padStart(2, "0")}
                </span>
                <span style={{ fontSize: "9px", color: "#333" }}>{label}</span>
              </div>
              <div
                style={{
                  position: "relative",
                  height: "520px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    transform: "scale(0.65)",
                    transformOrigin: "top left",
                    width: "154%",
                    height: "154%",
                  }}
                >
                  <Comp data={sample} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// Added to fix build errors:
export const CleanTemplate = T1;
export const TemplateRegistry: Record<string, React.FC<any>> = {
  "techTerminal": T1,
  "techCloud": T2,
  "techSlate": T3,
  "techGrid": T4,
  "techCircuit": T5,
  "productMetric": T6,
  "productTimeline": T7,
  "productNavy": T8,
  "productCoral": T9,
  "productGrowth": T10,
  "designEditorial": T11,
  "designSwiss": T12,
  "designBauhaus": T13,
  "designMinimal": T14,
  "designBold": T15,
  "marketingVibrant": T16,
  "marketingDynamic": T17,
  "marketingPurple": T18,
  "marketingCoral": T19,
  "marketingBold": T20,
  "financeConservative": T21,
  "financePremium": T22,
  "financeBurgundy": T23,
  "financeBanking": T24,
  "financeDeepBlue": T25,
  "healthcareTeal": T26,
  "healthcareSoftBlue": T27,
  "healthcareSage": T28,
  "healthcareNavy": T29,
  "healthcareClinical": T30,
  "educationAcademic": T31,
  "educationLibrary": T32,
  "educationUniversity": T33,
  "educationForest": T34,
  "educationIntellectual": T35,
  "salesBoldRed": T36,
  "salesGoldBlack": T37,
  "salesDynamic": T38,
  "salesGrowth": T39,
  "salesResults": T40,
  "executiveLuxury": T41,
  "executiveNavy": T42,
  "executivePower": T43,
  "executiveCommand": T44,
  "executiveHeritage": T45,
  "entryClean": T46,
  "entryPastel": T47,
  "entrySimple": T48,
  "entryCreative": T49,
  "entryWarm": T50,
  "software-engineer-clean": T1,
  "product-manager-modern": T1,
  "my-childEze-resume": T1,
  "ui-ux-tamp": T1,
  "blue-inspo-png": T1,
  "modern-black-tamp": T1,
  "modern-dark-sf": T1,
  "tamp-5": T1,
  "tamp-4": T1,
};
