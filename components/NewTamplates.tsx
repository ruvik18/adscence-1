// ============================================================================
// 50 PREMIUM RESUME TEMPLATES — REDESIGNED
// Modern Typography • Curated Color Palettes • Distinct Layout Architectures
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

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORY: TECHNOLOGY (Templates 1-5)
// Palette: Obsidian & Cyan — Deep charcoal backgrounds with electric cyan accents
// Layout: Editorial sidebar with asymmetric grids
// ═══════════════════════════════════════════════════════════════════════════════

/** Template 1 — Monospace Terminal */
export function techTerminal({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#0c0e12] text-[#b8c4ce] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden font-mono">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00d4aa]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00d4aa]/[0.02] rounded-full blur-3xl" />
      <div className="relative z-10 grid grid-cols-[240px_1fr] gap-12">
        <div className="space-y-8">
          <div className="w-full aspect-[4/5] overflow-hidden rounded-sm ring-1 ring-[#1e2128]">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover grayscale contrast-125"
              />
            ) : (
              <div className="w-full h-full bg-[#14171d] flex items-center justify-center">
                <span className="text-7xl font-black text-[#1e2128]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div className="space-y-5">
            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-[#00d4aa] mb-3 font-semibold">
                // Contact
              </p>
              <div className="space-y-2 text-[11px] leading-relaxed text-[#6b7280]">
                <p className="break-all">{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                {data.personalInfo.website && (
                  <p className="break-all">{data.personalInfo.website}</p>
                )}
                {data.personalInfo.location && (
                  <p>{data.personalInfo.location}</p>
                )}
              </div>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-[#00d4aa] mb-3 font-semibold">
                // Education
              </p>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id} className="border-l border-[#1e2128] pl-3">
                    <p className="text-[11px] font-bold text-[#e5e7eb] uppercase tracking-wide">
                      {edu.school}
                    </p>
                    <p className="text-[10px] text-[#6b7280] mt-0.5">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#374151]">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-[#00d4aa] mb-3 font-semibold">
                // Skills
              </p>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[9px] px-2 py-1 bg-[#14171d] text-[#9ca3af] ring-1 ring-[#1e2128] rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8 pt-2">
          <div>
            <h1 className="text-5xl font-black tracking-tighter text-white leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-sm text-[#00d4aa] mt-3 tracking-[0.15em] uppercase font-semibold">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div className="border-t border-[#1e2128] pt-6">
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#00d4aa] mb-3 font-semibold">
              // Profile
            </p>
            <p className="text-[13px] leading-[1.8] text-[#9ca3af]">
              {data.summary}
            </p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#00d4aa] mb-4 font-semibold">
              // Experience
            </p>
            <div className="space-y-5">
              {data.experience.map((exp) => (
                <div key={exp.id} className="border-l border-[#00d4aa]/30 pl-4">
                  <p className="text-[14px] font-bold text-white tracking-wide">
                    {exp.position}
                  </p>
                  <p className="text-[10px] text-[#00d4aa] mt-0.5 mb-2">
                    {exp.period}
                  </p>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-[12px] text-[#9ca3af] leading-relaxed flex gap-2"
                      >
                        <span className="text-[#00d4aa] shrink-0">›</span>
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

/** Template 2 — Cloud Architect (White + Deep Blue) */
export function techCloud({ data }: TemplateProps) {
  return (
    <div className="h-full bg-white text-[#0f172a] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f1f5f9] rounded-full -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#f8fafc] rounded-full translate-y-1/3 -translate-x-1/4" />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-10">
          <div className="max-w-xl">
            <h1 className="text-[56px] font-black tracking-tighter text-[#0f172a] leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-base text-[#64748b] mt-3 font-medium tracking-[0.2em] uppercase">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div className="w-28 aspect-[3/4] overflow-hidden rounded-lg shadow-xl shadow-[#0f172a]/5">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#e2e8f0] flex items-center justify-center">
                <span className="text-4xl font-black text-[#94a3b8]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-[220px_1fr] gap-12">
          <div className="space-y-7">
            <div>
              <h3 className="text-[9px] font-bold text-[#dc2626] uppercase tracking-[0.3em] mb-3">
                Contact
              </h3>
              <div className="space-y-2 text-[11px] text-[#475569]">
                <p className="break-all">{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                {data.personalInfo.website && (
                  <p className="break-all">{data.personalInfo.website}</p>
                )}
                {data.personalInfo.location && (
                  <p>{data.personalInfo.location}</p>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-[9px] font-bold text-[#dc2626] uppercase tracking-[0.3em] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold text-[#0f172a]">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#475569] mt-0.5">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#94a3b8] mt-0.5">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[9px] font-bold text-[#dc2626] uppercase tracking-[0.3em] mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 bg-[#dc2626] text-white font-semibold rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-7">
            <div className="bg-[#f8fafc] p-6 rounded-xl border-l-4 border-[#dc2626]">
              <h3 className="text-[9px] font-bold text-[#dc2626] uppercase tracking-[0.3em] mb-2">
                Profile
              </h3>
              <p className="text-[13px] text-[#334155] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[9px] font-bold text-[#dc2626] uppercase tracking-[0.3em] mb-4">
                Experience
              </h3>
              <div className="space-y-5">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="pb-5 border-b border-[#e2e8f0] last:border-0"
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <p className="text-[15px] font-bold text-[#0f172a] tracking-tight">
                        {exp.position}
                      </p>
                      <p className="text-[10px] text-[#94a3b8] font-mono tracking-wide">
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#475569] leading-relaxed flex gap-2"
                        >
                          <span className="text-[#dc2626] shrink-0 mt-0.5">
                            •
                          </span>
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

/** Template 3 — Slate Infrastructure */
export function techSlate({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#f8fafc] text-[#1e293b] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-48 bg-[#0f172a]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)" }}
      />
      <div className="relative z-10">
        <div className="flex items-center gap-6 mb-10">
          <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-white/20 shadow-2xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#334155] flex items-center justify-center">
                <span className="text-3xl font-black text-[#64748b]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div>
            <h1 className="text-[42px] font-black tracking-tight text-white leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-sm text-[#38bdf8] font-semibold tracking-[0.2em] uppercase mt-2">
              {data.personalInfo.jobTitle}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[260px_1fr] gap-10">
          <div className="space-y-7">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#e2e8f0]">
              <h3 className="text-[9px] font-bold text-[#0f172a] uppercase tracking-[0.25em] mb-3">
                Details
              </h3>
              <div className="space-y-2 text-[11px] text-[#64748b]">
                <p className="break-all">{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                {data.personalInfo.location && (
                  <p>{data.personalInfo.location}</p>
                )}
                {data.personalInfo.website && (
                  <p className="break-all">{data.personalInfo.website}</p>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-[9px] font-bold text-[#0f172a] uppercase tracking-[0.25em] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-white p-4 rounded-lg shadow-sm border border-[#e2e8f0]"
                  >
                    <p className="text-[12px] font-bold text-[#1e293b]">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#64748b] mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#94a3b8] mt-1">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[9px] font-bold text-[#0f172a] uppercase tracking-[0.25em] mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-3 py-1.5 bg-[#0f172a]/5 text-[#0f172a] rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-7">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e2e8f0]">
              <h3 className="text-[9px] font-bold text-[#0f172a] uppercase tracking-[0.25em] mb-3">
                About
              </h3>
              <p className="text-[13px] text-[#475569] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[9px] font-bold text-[#0f172a] uppercase tracking-[0.25em] mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="relative pl-5 border-l-2 border-[#cbd5e1]"
                  >
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#0f172a]" />
                    <p className="text-[15px] font-bold text-[#1e293b] tracking-tight">
                      {exp.position}
                    </p>
                    <p className="text-[10px] text-[#94a3b8] font-mono tracking-wide mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#475569] leading-relaxed"
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

/** Template 4 — Cyber Grid */
export function techGrid({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#fafafa] text-[#171717] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative z-10">
        <div className="border-b-4 border-[#171717] pb-5 mb-8">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-[64px] font-black tracking-tighter text-[#171717] leading-none">
                {data.personalInfo.fullName}
              </h1>
              <p className="text-base text-[#525252] mt-2 font-mono uppercase tracking-[0.25em]">
                {data.personalInfo.jobTitle}
              </p>
            </div>
            <div className="w-28 aspect-[3/4] overflow-hidden border-2 border-[#171717] rounded-sm">
              {data.personalInfo.photo ? (
                <img
                  src={data.personalInfo.photo}
                  alt={data.personalInfo.fullName}
                  className="w-full h-full object-cover grayscale"
                />
              ) : (
                <div className="w-full h-full bg-[#e5e5e5] flex items-center justify-center">
                  <span className="text-4xl font-black text-[#a3a3a3]">
                    {data.personalInfo.fullName.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1 space-y-7">
            <div>
              <h3 className="text-[9px] font-black text-[#171717] uppercase tracking-[0.3em] border-b-2 border-[#171717] pb-2 mb-3">
                Contact
              </h3>
              <div className="space-y-2 text-[11px] font-mono text-[#525252]">
                <p className="break-all">{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                {data.personalInfo.website && (
                  <p className="break-all">{data.personalInfo.website}</p>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-[9px] font-black text-[#171717] uppercase tracking-[0.3em] border-b-2 border-[#171717] pb-2 mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold text-[#171717]">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#525252]">{edu.degree}</p>
                    <p className="text-[10px] text-[#a3a3a3]">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[9px] font-black text-[#171717] uppercase tracking-[0.3em] border-b-2 border-[#171717] pb-2 mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono px-2 py-1 border border-[#171717] text-[#171717] rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-7">
            <div>
              <h3 className="text-[9px] font-black text-[#171717] uppercase tracking-[0.3em] border-b-2 border-[#171717] pb-2 mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#404040] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[9px] font-black text-[#171717] uppercase tracking-[0.3em] border-b-2 border-[#171717] pb-2 mb-4">
                Experience
              </h3>
              <div className="space-y-5">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="grid grid-cols-[1fr_120px] gap-4"
                  >
                    <div>
                      <p className="text-[15px] font-bold text-[#171717] uppercase tracking-wide">
                        {exp.position}
                      </p>
                      <ul className="space-y-1.5 mt-2">
                        {exp.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="text-[12px] text-[#525252] leading-relaxed"
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-[10px] font-mono text-[#a3a3a3] text-right tracking-wide">
                      {exp.period}
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

/** Template 5 — Neon Circuit */
export function techCircuit({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#09090b] text-[#fafafa] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-[#22c55e]/10 rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] border border-[#22c55e]/5 rounded-full translate-y-1/3 -translate-x-1/4" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#22c55e]/[0.03] rounded-full" />
      <div className="relative z-10 grid grid-cols-[260px_1fr] gap-12">
        <div className="space-y-8">
          <div className="w-full aspect-square overflow-hidden rounded-2xl ring-1 ring-[#22c55e]/20">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#111] flex items-center justify-center">
                <span className="text-6xl font-black text-[#222]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-[9px] font-bold text-[#22c55e] uppercase tracking-[0.3em] mb-3">
                Contact
              </h3>
              <div className="space-y-2 text-[11px] font-mono text-[#71717a]">
                <p>{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                {data.personalInfo.location && (
                  <p>{data.personalInfo.location}</p>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-[9px] font-bold text-[#22c55e] uppercase tracking-[0.3em] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold text-white">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#71717a]">{edu.degree}</p>
                    <p className="text-[10px] text-[#52525b]">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[9px] font-bold text-[#22c55e] uppercase tracking-[0.3em] mb-3">
                Skills
              </h3>
              <div className="space-y-2">
                {data.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#22c55e] rounded-full" />
                    <span className="text-[11px] font-mono text-[#d4d4d8]">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h1 className="text-[52px] font-black tracking-tighter text-white leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-sm text-[#22c55e] font-mono tracking-[0.2em] uppercase mt-3">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div className="border border-[#27272a] p-6 rounded-xl bg-[#111]">
            <h3 className="text-[9px] font-bold text-[#22c55e] uppercase tracking-[0.3em] mb-3">
              Profile
            </h3>
            <p className="text-[13px] text-[#a1a1aa] leading-[1.8]">
              {data.summary}
            </p>
          </div>
          <div>
            <h3 className="text-[9px] font-bold text-[#22c55e] uppercase tracking-[0.3em] mb-4">
              Experience
            </h3>
            <div className="space-y-5">
              {data.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="border-l-2 border-[#22c55e]/30 pl-5"
                >
                  <p className="text-[15px] font-bold text-white tracking-tight">
                    {exp.position}
                  </p>
                  <p className="text-[10px] font-mono text-[#22c55e] mt-0.5 mb-2">
                    {exp.period}
                  </p>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-[12px] text-[#71717a] leading-relaxed flex gap-2"
                      >
                        <span className="text-[#22c55e] shrink-0">//</span>
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

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORY: PRODUCT (Templates 6-10)
// Palette: Warm Sand & Terracotta — Earthy warmth with burnt sienna accents
// Layout: Hero header + asymmetric body columns
// ═══════════════════════════════════════════════════════════════════════════════

/** Template 6 — Metric Dashboard */
export function productMetric({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#fefcf3] text-[#2d2420] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#c2410c]" />
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#fed7aa]/30 rounded-full -translate-y-1/3 translate-x-1/4" />
      <div className="relative z-10 ml-5">
        <div className="flex items-start justify-between mb-10">
          <div>
            <h1 className="text-[52px] font-black tracking-tight text-[#2d2420] leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-lg text-[#c2410c] mt-3 font-light tracking-[0.15em]">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div className="w-24 aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#c2410c] flex items-center justify-center">
                <span className="text-4xl font-black text-white">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-[240px_1fr] gap-12">
          <div className="space-y-7">
            <div>
              <h3 className="text-[9px] font-black text-[#c2410c] uppercase tracking-[0.25em] mb-3">
                Info
              </h3>
              <div className="space-y-2 text-[11px] text-[#6b5b54]">
                <p className="break-all">{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                {data.personalInfo.website && (
                  <p className="break-all">{data.personalInfo.website}</p>
                )}
                {data.personalInfo.location && (
                  <p>{data.personalInfo.location}</p>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-[9px] font-black text-[#c2410c] uppercase tracking-[0.25em] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="pb-3 border-b border-[#c2410c]/10 last:border-0"
                  >
                    <p className="text-[12px] font-bold text-[#2d2420]">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#6b5b54] mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#a89b94] mt-1">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[9px] font-black text-[#c2410c] uppercase tracking-[0.25em] mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-3 py-1.5 bg-[#c2410c] text-white font-bold rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-7">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#f5f0e8]">
              <h3 className="text-[9px] font-black text-[#c2410c] uppercase tracking-[0.25em] mb-3">
                Summary
              </h3>
              <p className="text-[13px] text-[#4a403c] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[9px] font-black text-[#c2410c] uppercase tracking-[0.25em] mb-4">
                Experience
              </h3>
              <div className="space-y-5">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="bg-white p-5 rounded-xl shadow-sm border border-[#f5f0e8]"
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <p className="text-[15px] font-bold text-[#2d2420] tracking-tight">
                        {exp.position}
                      </p>
                      <p className="text-[10px] text-[#c2410c] font-bold tracking-wide">
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#6b5b54] leading-relaxed flex gap-2"
                        >
                          <span className="text-[#c2410c] shrink-0">›</span>
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

/** Template 7 — Teal Timeline */
export function productTimeline({ data }: TemplateProps) {
  return (
    <div className="h-full bg-white text-[#1c1917] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-[#0d9488]" />
      <div className="relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-[56px] font-black tracking-tighter text-[#1c1917] leading-none">
            {data.personalInfo.fullName}
          </h1>
          <p className="text-base text-[#0d9488] mt-3 font-medium tracking-[0.2em] uppercase">
            {data.personalInfo.jobTitle}
          </p>
          <div className="flex justify-center gap-8 mt-4 text-[10px] text-[#78716c] uppercase tracking-wider">
            <span>{data.personalInfo.email}</span>
            <span>{data.personalInfo.phone}</span>
            {data.personalInfo.location && (
              <span>{data.personalInfo.location}</span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-[280px_1fr] gap-12">
          <div className="space-y-7">
            <div className="w-40 aspect-square mx-auto overflow-hidden rounded-full border-4 border-[#0d9488] shadow-xl">
              {data.personalInfo.photo ? (
                <img
                  src={data.personalInfo.photo}
                  alt={data.personalInfo.fullName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#ccfbf1] flex items-center justify-center">
                  <span className="text-5xl font-black text-[#0d9488]">
                    {data.personalInfo.fullName.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h3 className="text-[9px] font-black text-[#0d9488] uppercase tracking-[0.25em] border-b-2 border-[#0d9488] pb-2 mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold">{edu.school}</p>
                    <p className="text-[11px] text-[#78716c] mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#a8a29e] mt-1">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[9px] font-black text-[#0d9488] uppercase tracking-[0.25em] border-b-2 border-[#0d9488] pb-2 mb-3">
                Skills
              </h3>
              <div className="space-y-2">
                {data.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-2 h-2 bg-[#0d9488] rounded-sm" />
                    <span className="text-[11px]">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-7">
            <div>
              <h3 className="text-[9px] font-black text-[#0d9488] uppercase tracking-[0.25em] border-b-2 border-[#0d9488] pb-2 mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#44403c] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[9px] font-black text-[#0d9488] uppercase tracking-[0.25em] border-b-2 border-[#0d9488] pb-2 mb-4">
                Experience
              </h3>
              <div className="relative space-y-6 pl-8">
                <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-[#0d9488]/20" />
                {data.experience.map((exp) => (
                  <div key={exp.id} className="relative">
                    <div className="absolute -left-8 top-1 w-4 h-4 bg-[#0d9488] rounded-full border-4 border-white shadow-sm" />
                    <p className="text-[15px] font-bold tracking-tight">
                      {exp.position}
                    </p>
                    <p className="text-[10px] text-[#0d9488] font-bold mt-1 mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#57534e] leading-relaxed"
                        >
                          • {h}
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

/** Template 8 — Navy Premium */
export function productNavy({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#0f172a] text-[#e2e8f0] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d4af37]/[0.03] rounded-full -translate-y-1/3 translate-x-1/4" />
      <div className="relative z-10">
        <div className="flex items-center gap-8 mb-10">
          <div className="w-28 h-28 overflow-hidden border-2 border-[#d4af37] rounded-lg shadow-2xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#1e293b] flex items-center justify-center">
                <span className="text-5xl font-black text-[#d4af37]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div>
            <h1 className="text-[48px] font-black tracking-tight text-white leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-base text-[#d4af37] mt-3 tracking-[0.15em] uppercase font-light">
              {data.personalInfo.jobTitle}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[240px_1fr] gap-12">
          <div className="space-y-6">
            <div className="border-t border-[#d4af37]/20 pt-4">
              <h3 className="text-[9px] font-bold text-[#d4af37] uppercase tracking-[0.25em] mb-3">
                Contact
              </h3>
              <div className="space-y-2 text-[11px] text-[#94a3b8]">
                <p className="break-all">{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                {data.personalInfo.website && (
                  <p className="break-all">{data.personalInfo.website}</p>
                )}
                {data.personalInfo.location && (
                  <p>{data.personalInfo.location}</p>
                )}
              </div>
            </div>
            <div className="border-t border-[#d4af37]/20 pt-4">
              <h3 className="text-[9px] font-bold text-[#d4af37] uppercase tracking-[0.25em] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold text-[#e2e8f0]">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#94a3b8] mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#64748b] mt-1">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-[#d4af37]/20 pt-4">
              <h3 className="text-[9px] font-bold text-[#d4af37] uppercase tracking-[0.25em] mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 border border-[#d4af37]/30 text-[#d4af37] rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-t border-[#d4af37]/20 pt-4">
              <h3 className="text-[9px] font-bold text-[#d4af37] uppercase tracking-[0.25em] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#cbd5e1] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div className="border-t border-[#d4af37]/20 pt-4">
              <h3 className="text-[9px] font-bold text-[#d4af37] uppercase tracking-[0.25em] mb-4">
                Experience
              </h3>
              <div className="space-y-5">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="pb-4 border-b border-[#1e293b] last:border-0"
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <p className="text-[15px] font-bold tracking-tight">
                        {exp.position}
                      </p>
                      <p className="text-[10px] text-[#d4af37]">{exp.period}</p>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#94a3b8] leading-relaxed"
                        >
                          • {h}
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

/** Template 9 — Coral Cards */
export function productCoral({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#fff7ed] text-[#1c1917] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-end justify-between mb-8 pb-5 border-b-4 border-[#ea580c]">
          <div>
            <h1 className="text-[60px] font-black tracking-tighter text-[#292524] leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-base text-[#ea580c] mt-3 font-bold uppercase tracking-[0.2em]">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div className="w-24 aspect-[3/4] overflow-hidden rounded-xl shadow-xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#ea580c] flex items-center justify-center">
                <span className="text-4xl font-black text-white">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-[260px_1fr] gap-10">
          <div className="space-y-5">
            <div className="bg-[#ea580c] text-white p-5 rounded-xl">
              <h3 className="text-[9px] font-black uppercase tracking-[0.2em] mb-3 opacity-80">
                Contact
              </h3>
              <div className="space-y-2 text-[11px]">
                <p>{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                {data.personalInfo.location && (
                  <p>{data.personalInfo.location}</p>
                )}
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#fed7aa]">
              <h3 className="text-[9px] font-black text-[#ea580c] uppercase tracking-[0.2em] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold">{edu.school}</p>
                    <p className="text-[11px] text-[#78716c] mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#a8a29e] mt-1">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#fed7aa]">
              <h3 className="text-[9px] font-black text-[#ea580c] uppercase tracking-[0.2em] mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 bg-[#fff7ed] border border-[#ea580c] text-[#ea580c] rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#fed7aa]">
              <h3 className="text-[9px] font-black text-[#ea580c] uppercase tracking-[0.2em] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#44403c] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div className="space-y-4">
              {data.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white p-5 rounded-xl shadow-sm border border-[#fed7aa]"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <p className="text-[15px] font-bold tracking-tight">
                      {exp.position}
                    </p>
                    <span className="text-[9px] px-2.5 py-1 bg-[#ea580c] text-white font-bold rounded-sm">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5 mt-3">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-[12px] text-[#57534e] leading-relaxed flex gap-2"
                      >
                        <span className="text-[#ea580c] shrink-0">◆</span>
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

/** Template 10 — Growth Green */
export function productGrowth({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#f7fee7] text-[#14532d] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.03]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L100 100 L0 100 Z" fill="#14532d" />
        </svg>
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-7 mb-8">
          <div className="w-24 aspect-square overflow-hidden rounded-2xl bg-[#14532d] shadow-xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl font-black text-white">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div className="flex-1">
            <h1 className="text-[48px] font-black tracking-tight text-[#14532d] leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-base text-[#16a34a] mt-3 font-medium tracking-wide">
              {data.personalInfo.jobTitle}
            </p>
            <div className="flex gap-6 mt-3 text-[10px] text-[#52796f]">
              <span>{data.personalInfo.email}</span>
              <span>{data.personalInfo.phone}</span>
              {data.personalInfo.location && (
                <span>{data.personalInfo.location}</span>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1 space-y-5">
            <div>
              <h3 className="text-[9px] font-black text-[#16a34a] uppercase tracking-[0.2em] border-b-2 border-[#16a34a] pb-2 mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold text-[#14532d]">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#52796f] mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#86a88c] mt-1">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[9px] font-black text-[#16a34a] uppercase tracking-[0.2em] border-b-2 border-[#16a34a] pb-2 mb-3">
                Skills
              </h3>
              <div className="space-y-2">
                {data.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 bg-[#16a34a] rounded-full" />
                    <span className="text-[11px] text-[#14532d]">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-5">
            <div className="border-l-4 border-[#16a34a] pl-5">
              <h3 className="text-[9px] font-black text-[#16a34a] uppercase tracking-[0.2em] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#44403c] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[9px] font-black text-[#16a34a] uppercase tracking-[0.2em] border-b-2 border-[#16a34a] pb-2 mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="grid grid-cols-[1fr_auto] gap-6">
                    <div>
                      <p className="text-[15px] font-bold text-[#14532d] tracking-tight">
                        {exp.position}
                      </p>
                      <ul className="space-y-1.5 mt-2">
                        {exp.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="text-[12px] text-[#52796f] leading-relaxed"
                          >
                            • {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-[10px] text-[#86a88c] font-mono whitespace-nowrap">
                      {exp.period}
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

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORY: DESIGN (Templates 11-15)
// Palette: Warm Cream & Ink — Editorial warmth with sharp black typography
// Layout: Magazine spreads, asymmetric columns, editorial typography
// ═══════════════════════════════════════════════════════════════════════════════

/** Template 11 — Editorial Vogue */
export function designEditorial({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#f5f0e8] text-[#1a1a1a] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3 text-[9px] font-medium uppercase tracking-[0.2em] text-[#78716c]">
          <div className="space-y-1">
            <p>{data.personalInfo.email}</p>
            <p>{data.personalInfo.phone}</p>
          </div>
          {data.personalInfo.location && <p>{data.personalInfo.location}</p>}
        </div>
        <div className="grid grid-cols-[1fr_280px] gap-10">
          <div className="space-y-8">
            <div>
              <h1 className="text-[80px] font-black tracking-tighter text-[#0c0a09] leading-[0.85] uppercase">
                {data.personalInfo.fullName.split(" ")[0]}
              </h1>
              <p
                className="text-[48px] font-light italic text-[#1c1917] leading-none -mt-1"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {data.personalInfo.fullName.split(" ").slice(1).join(" ")}
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#78716c] mt-4">
                ({data.personalInfo.jobTitle})
              </p>
            </div>
            <div>
              <h3 className="text-[9px] font-black uppercase tracking-[0.25em] text-[#0c0a09] mb-4">
                Experience
              </h3>
              <div className="space-y-5">
                {data.experience.map((exp) => (
                  <div key={exp.id}>
                    <p className="text-[13px] font-bold text-[#0c0a09] uppercase tracking-wide">
                      {exp.position}{" "}
                      <span className="text-[#a8a29e] font-normal">
                        | {exp.period}
                      </span>
                    </p>
                    <ul className="space-y-1 mt-2">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[11px] text-[#57534e] leading-relaxed"
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
              <h3 className="text-[9px] font-black uppercase tracking-[0.25em] text-[#0c0a09] mb-4">
                Education
              </h3>
              <div className="grid grid-cols-2 gap-5">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold text-[#0c0a09] uppercase">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#57534e] mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#a8a29e] mt-1">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[9px] font-black uppercase tracking-[0.25em] text-[#0c0a09] mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-4">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-bold text-[#0c0a09] uppercase tracking-wider"
                  >
                    • {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <div className="w-full aspect-[3/4] overflow-hidden bg-[#d6d3d1]">
              {data.personalInfo.photo ? (
                <img
                  src={data.personalInfo.photo}
                  alt={data.personalInfo.fullName}
                  className="w-full h-full object-cover grayscale"
                />
              ) : (
                <div className="w-full h-full bg-[#d6d3d1] flex items-center justify-center">
                  <span className="text-6xl font-black text-[#a8a29e]">
                    {data.personalInfo.fullName.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h3 className="text-[9px] font-black uppercase tracking-[0.25em] text-[#0c0a09] mb-3">
                Profile
              </h3>
              <p className="text-[12px] text-[#44403c] leading-[1.8] text-justify">
                {data.summary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Template 12 — Swiss Grid */
export function designSwiss({ data }: TemplateProps) {
  return (
    <div className="h-full bg-white text-[#111] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[35%] h-full bg-[#dc2626]" />
      <div className="relative z-10 grid grid-cols-[1fr_2fr] gap-0">
        <div className="bg-[#dc2626] text-white p-8 -m-12 mr-0 space-y-7">
          <div className="w-full aspect-square overflow-hidden border-4 border-white">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover grayscale contrast-125"
              />
            ) : (
              <div className="w-full h-full bg-[#b91c1c] flex items-center justify-center">
                <span className="text-6xl font-black">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-[9px] font-black uppercase tracking-[0.3em] mb-3 opacity-80">
              Contact
            </h3>
            <div className="space-y-1.5 text-[10px]">
              <p className="break-all">{data.personalInfo.email}</p>
              <p>{data.personalInfo.phone}</p>
              {data.personalInfo.location && (
                <p>{data.personalInfo.location}</p>
              )}
            </div>
          </div>
          <div>
            <h3 className="text-[9px] font-black uppercase tracking-[0.3em] mb-3 opacity-80">
              Education
            </h3>
            <div className="space-y-3">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <p className="text-[11px] font-bold uppercase">
                    {edu.school}
                  </p>
                  <p className="text-[11px] opacity-80">{edu.degree}</p>
                  <p className="text-[9px] opacity-60">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[9px] font-black uppercase tracking-[0.3em] mb-3 opacity-80">
              Skills
            </h3>
            <div className="flex flex-wrap gap-1">
              {data.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-[9px] px-2 py-1 bg-white text-[#dc2626] font-bold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="p-8 -m-12 ml-10 space-y-7">
          <div className="border-b-4 border-[#111] pb-5">
            <h1 className="text-[64px] font-black tracking-tighter leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#78716c] mt-3">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div>
            <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-[#dc2626] mb-3">
              Profile
            </h3>
            <p className="text-[13px] text-[#44403c] leading-[1.8]">
              {data.summary}
            </p>
          </div>
          <div>
            <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-[#dc2626] mb-4">
              Experience
            </h3>
            <div className="space-y-5">
              {data.experience.map((exp) => (
                <div key={exp.id} className="grid grid-cols-[1fr_100px] gap-3">
                  <div>
                    <p className="text-[13px] font-bold uppercase tracking-wide">
                      {exp.position}
                    </p>
                    <ul className="space-y-1 mt-2">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[11px] text-[#57534e] leading-relaxed"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-[9px] text-[#a8a29e] font-mono text-right">
                    {exp.period}
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

/** Template 13 — Bauhaus */
export function designBauhaus({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#f0f0f0] text-[#1a1a1a] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-8 right-8 w-32 h-32 bg-[#e8b931] rounded-full" />
      <div className="absolute bottom-12 left-1/2 w-24 h-24 bg-[#c41e3a] rotate-45" />
      <div className="absolute top-1/3 left-8 w-16 h-16 bg-[#0047ab]" />
      <div className="relative z-10">
        <div className="flex items-start gap-7 mb-10">
          <div className="w-28 h-28 bg-[#1a1a1a] flex items-center justify-center shadow-xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-5xl font-black text-white">
                {data.personalInfo.fullName.charAt(0)}
              </span>
            )}
          </div>
          <div className="pt-2">
            <h1 className="text-[56px] font-black tracking-tight leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-lg text-[#c41e3a] font-bold uppercase tracking-[0.2em] mt-3">
              {data.personalInfo.jobTitle}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[220px_1fr] gap-10">
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] text-white p-5">
              <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#e8b931] mb-3">
                Contact
              </h3>
              <div className="space-y-1.5 text-[10px]">
                <p>{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                {data.personalInfo.location && (
                  <p>{data.personalInfo.location}</p>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-[#0047ab] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold">{edu.school}</p>
                    <p className="text-[11px] text-[#57534e]">{edu.degree}</p>
                    <p className="text-[10px] text-[#a8a29e]">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-[#c41e3a] mb-3">
                Skills
              </h3>
              <div className="space-y-2">
                {data.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-2 h-2 bg-[#c41e3a]" />
                    <span className="text-[11px] font-bold">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-[#e8b931] pl-5">
              <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-[#0047ab] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#44403c] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-[#0047ab] mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="bg-white p-4 border-t-4 border-[#1a1a1a] shadow-sm"
                  >
                    <p className="text-[14px] font-bold">{exp.position}</p>
                    <p className="text-[9px] text-[#c41e3a] font-bold mt-1 mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[11px] text-[#57534e] leading-relaxed"
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

/** Template 14 — Minimal Lines */
export function designMinimal({ data }: TemplateProps) {
  return (
    <div className="h-full bg-white text-[#1a1a1a] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-10">
          <div>
            <h1 className="text-[48px] font-light tracking-tight text-[#1a1a1a] leading-none">
              {data.personalInfo.fullName}
            </h1>
            <div className="w-16 h-px bg-[#1a1a1a] my-4" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#78716c]">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div className="w-20 aspect-[3/4] overflow-hidden">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#f0f0f0] flex items-center justify-center">
                <span className="text-3xl font-light text-[#a3a3a3]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-[200px_1fr] gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#a3a3a3] mb-3 border-b border-[#e5e5e5] pb-2">
                Contact
              </h3>
              <div className="space-y-1.5 text-[10px]">
                <p className="text-[#525252]">{data.personalInfo.email}</p>
                <p className="text-[#525252]">{data.personalInfo.phone}</p>
                {data.personalInfo.location && (
                  <p className="text-[#525252]">{data.personalInfo.location}</p>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#a3a3a3] mb-3 border-b border-[#e5e5e5] pb-2">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[11px] font-medium">{edu.school}</p>
                    <p className="text-[11px] text-[#a3a3a3]">{edu.degree}</p>
                    <p className="text-[9px] text-[#d4d4d4]">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#a3a3a3] mb-3 border-b border-[#e5e5e5] pb-2">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1">
                {data.skills.map((skill, i) => (
                  <span key={i} className="text-[9px] text-[#525252]">
                    {skill}
                    {i < data.skills.length - 1 ? " /" : ""}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#a3a3a3] mb-3 border-b border-[#e5e5e5] pb-2">
                Profile
              </h3>
              <p className="text-[12px] text-[#44403c] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#a3a3a3] mb-4 border-b border-[#e5e5e5] pb-2">
                Experience
              </h3>
              <div className="space-y-5">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="pb-4 border-b border-[#f5f5f5] last:border-0"
                  >
                    <div className="flex justify-between items-baseline">
                      <p className="text-[14px] font-medium">{exp.position}</p>
                      <p className="text-[9px] text-[#d4d4d4] uppercase tracking-wider">
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1 mt-2">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[11px] text-[#737373] leading-relaxed"
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
      </div>
    </div>
  );
}

/** Template 15 — Bold Typography */
export function designBold({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#0c0a09] text-white p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 text-[200px] font-black text-white/[0.02] leading-none tracking-tighter select-none">
        CV
      </div>
      <div className="relative z-10">
        <div className="mb-10">
          <h1 className="text-[88px] font-black tracking-tighter leading-[0.85] text-[#f0e68c]">
            {data.personalInfo.fullName}
          </h1>
          <p className="text-lg text-white/50 mt-4 font-light tracking-[0.2em] uppercase">
            {data.personalInfo.jobTitle}
          </p>
        </div>
        <div className="grid grid-cols-[300px_1fr] gap-10">
          <div className="space-y-6">
            <div className="w-full aspect-[3/4] overflow-hidden bg-[#292524]">
              {data.personalInfo.photo ? (
                <img
                  src={data.personalInfo.photo}
                  alt={data.personalInfo.fullName}
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-7xl font-black text-[#525252]">
                    {data.personalInfo.fullName.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f0e68c] mb-3">
                Contact
              </h3>
              <div className="space-y-1.5 text-[11px]">
                <p className="text-white/60">{data.personalInfo.email}</p>
                <p className="text-white/60">{data.personalInfo.phone}</p>
                {data.personalInfo.website && (
                  <p className="text-white/60 break-all">
                    {data.personalInfo.website}
                  </p>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f0e68c] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="border-l-2 border-[#f0e68c] pl-3"
                  >
                    <p className="text-[12px] font-bold">{edu.school}</p>
                    <p className="text-[11px] text-white/50">{edu.degree}</p>
                    <p className="text-[10px] text-white/30">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f0e68c] mb-3">
                Skills
              </h3>
              <div className="space-y-2">
                {data.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span className="text-[#f0e68c]">→</span>
                    <span className="text-[11px] text-white/70">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-7">
            <div className="border-t border-white/10 pt-5">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f0e68c] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-white/60 leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div className="border-t border-white/10 pt-5">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f0e68c] mb-4">
                Experience
              </h3>
              <div className="space-y-5">
                {data.experience.map((exp) => (
                  <div key={exp.id}>
                    <p className="text-[16px] font-bold text-white">
                      {exp.position}
                    </p>
                    <p className="text-[10px] text-[#f0e68c] mt-1 mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-white/50 leading-relaxed"
                        >
                          • {h}
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

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORY: MARKETING (Templates 16-20)
// Palette: Bold & Energetic — High contrast with dynamic accent colors
// Layout: Centered hero headers, card-based content, energetic typography
// ═══════════════════════════════════════════════════════════════════════════════

/** Template 16 — Vibrant Red */
export function marketingVibrant({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#be123c] text-white p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#881337] rounded-full translate-y-1/3 translate-x-1/4" />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-[56px] font-black tracking-tighter leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-lg mt-3 font-bold uppercase tracking-[0.2em] text-white/80">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div className="w-20 aspect-square overflow-hidden rounded-full border-4 border-white shadow-2xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#881337] flex items-center justify-center">
                <span className="text-3xl font-black">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-[260px_1fr] gap-10">
          <div className="space-y-6">
            <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-white/80">
                Contact
              </h3>
              <div className="space-y-1.5 text-[11px]">
                <p>{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                {data.personalInfo.location && (
                  <p>{data.personalInfo.location}</p>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-white/80">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold">{edu.school}</p>
                    <p className="text-[11px] text-white/60">{edu.degree}</p>
                    <p className="text-[10px] text-white/40">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-white/80">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 bg-white text-[#be123c] font-bold rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-white/80">
                Profile
              </h3>
              <p className="text-[13px] text-white/90 leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-white/80">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="bg-white/10 p-5 rounded-xl backdrop-blur-sm"
                  >
                    <p className="text-[15px] font-bold">{exp.position}</p>
                    <p className="text-[10px] text-white/50 mt-1 mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-white/80 leading-relaxed"
                        >
                          • {h}
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

/** Template 17 — Dynamic Yellow */
export function marketingDynamic({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#0c0a09] text-white p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-3 bg-[#eab308]" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#eab308]/5 rounded-full" />
      <div className="relative z-10">
        <div className="text-center mb-10">
          <div className="w-24 h-24 mx-auto mb-5 overflow-hidden rounded-full border-4 border-[#eab308] shadow-xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#292524] flex items-center justify-center">
                <span className="text-4xl font-black text-[#eab308]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <h1 className="text-[56px] font-black tracking-tighter leading-none">
            {data.personalInfo.fullName}
          </h1>
          <p className="text-lg text-[#eab308] mt-3 font-bold uppercase tracking-[0.3em]">
            {data.personalInfo.jobTitle}
          </p>
          <div className="flex justify-center gap-5 mt-4 text-[10px] text-white/50">
            <span>{data.personalInfo.email}</span>
            <span>•</span>
            <span>{data.personalInfo.phone}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="border-t-2 border-[#eab308] pt-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#eab308] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold">{edu.school}</p>
                    <p className="text-[11px] text-white/50">{edu.degree}</p>
                    <p className="text-[10px] text-white/30">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t-2 border-[#eab308] pt-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#eab308] mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 border border-[#eab308] text-[#eab308] rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-t-2 border-[#eab308] pt-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#eab308] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-white/70 leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div className="border-t-2 border-[#eab308] pt-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#eab308] mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div key={exp.id}>
                    <p className="text-[14px] font-bold">{exp.position}</p>
                    <p className="text-[10px] text-[#eab308] font-mono mt-1 mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-white/60 leading-relaxed"
                        >
                          • {h}
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

/** Template 18 — Purple Modern */
export function marketingPurple({ data }: TemplateProps) {
  return (
    <div className="h-full bg-white text-[#1a1a1a] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#7c3aed]/5 rounded-full -translate-y-1/3 translate-x-1/4" />
      <div className="relative z-10">
        <div className="flex items-end justify-between mb-6 pb-5 border-b-4 border-[#7c3aed]">
          <div>
            <h1 className="text-[56px] font-black tracking-tight text-[#7c3aed] leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-lg text-[#1a1a1a] mt-3 font-medium uppercase tracking-[0.15em]">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div className="w-20 aspect-[3/4] overflow-hidden bg-[#7c3aed] rounded-lg">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl font-black text-white">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-[240px_1fr] gap-10">
          <div className="space-y-6">
            <div className="bg-[#7c3aed] text-white p-5 rounded-xl">
              <h3 className="text-[9px] font-black uppercase tracking-[0.3em] mb-3 opacity-80">
                Contact
              </h3>
              <div className="space-y-1.5 text-[10px]">
                <p>{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                {data.personalInfo.location && (
                  <p>{data.personalInfo.location}</p>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-[#7c3aed] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="border-l-2 border-[#7c3aed] pl-3"
                  >
                    <p className="text-[11px] font-bold">{edu.school}</p>
                    <p className="text-[11px] text-[#57534e]">{edu.degree}</p>
                    <p className="text-[9px] text-[#a8a29e]">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-[#7c3aed] mb-3">
                Skills
              </h3>
              <div className="space-y-2">
                {data.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 bg-[#7c3aed] rounded-sm" />
                    <span className="text-[11px]">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-[#7c3aed] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#44403c] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-[#7c3aed] mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="bg-[#faf5ff] p-5 rounded-xl border-l-4 border-[#7c3aed]"
                  >
                    <p className="text-[15px] font-bold text-[#7c3aed]">
                      {exp.position}
                    </p>
                    <p className="text-[10px] text-[#a8a29e] mt-1 mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#57534e] leading-relaxed"
                        >
                          • {h}
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

/** Template 19 — Coral Navy */
export function marketingCoral({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#0f172a] text-white p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#f43f5e]/10 rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="relative z-10">
        <div className="flex items-center gap-7 mb-8">
          <div className="w-24 h-24 overflow-hidden rounded-xl border-4 border-[#f43f5e] shadow-xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#1e293b] flex items-center justify-center">
                <span className="text-4xl font-black text-[#f43f5e]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div>
            <h1 className="text-[48px] font-black tracking-tight leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-lg text-[#f43f5e] mt-3 font-bold uppercase tracking-[0.2em]">
              {data.personalInfo.jobTitle}
            </p>
            <div className="flex gap-5 mt-3 text-[10px] text-white/50">
              <span>{data.personalInfo.email}</span>
              <span>{data.personalInfo.phone}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f43f5e] mb-3 border-b border-[#f43f5e]/20 pb-2">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold">{edu.school}</p>
                    <p className="text-[11px] text-white/50">{edu.degree}</p>
                    <p className="text-[10px] text-white/30">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f43f5e] mb-3 border-b border-[#f43f5e]/20 pb-2">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 bg-[#f43f5e] text-[#0f172a] font-bold rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f43f5e] mb-3 border-b border-[#f43f5e]/20 pb-2">
                Profile
              </h3>
              <p className="text-[13px] text-white/70 leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f43f5e] mb-4 border-b border-[#f43f5e]/20 pb-2">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div key={exp.id}>
                    <p className="text-[15px] font-bold">{exp.position}</p>
                    <p className="text-[10px] text-[#f43f5e] font-mono mt-1 mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-white/60 leading-relaxed"
                        >
                          • {h}
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

/** Template 20 — Bold Orange */
export function marketingBold({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#0c0a09] text-white p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-[55%] bg-[#ea580c]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 55%, 0 100%)" }}
      />
      <div className="relative z-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h1 className="text-[64px] font-black tracking-tighter leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-lg text-[#0c0a09] mt-3 font-bold uppercase tracking-[0.2em] bg-white inline-block px-3 py-1.5">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div className="w-24 aspect-[3/4] overflow-hidden border-4 border-white shadow-2xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#292524] flex items-center justify-center">
                <span className="text-4xl font-black text-white">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1 space-y-6">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ea580c] mb-3">
                Contact
              </h3>
              <div className="space-y-1.5 text-[11px]">
                <p className="text-white/60">{data.personalInfo.email}</p>
                <p className="text-white/60">{data.personalInfo.phone}</p>
                {data.personalInfo.location && (
                  <p className="text-white/60">{data.personalInfo.location}</p>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ea580c] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold">{edu.school}</p>
                    <p className="text-[11px] text-white/50">{edu.degree}</p>
                    <p className="text-[10px] text-white/30">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ea580c] mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-1 border border-[#ea580c] text-[#ea580c] rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-6">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ea580c] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-white/70 leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ea580c] mb-4">
                Experience
              </h3>
              <div className="space-y-5">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="grid grid-cols-[1fr_120px] gap-3"
                  >
                    <div>
                      <p className="text-[15px] font-bold">{exp.position}</p>
                      <ul className="space-y-1.5 mt-2">
                        {exp.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="text-[12px] text-white/60 leading-relaxed"
                          >
                            • {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-[10px] text-[#ea580c] font-mono text-right">
                      {exp.period}
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

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORY: FINANCE (Templates 21-25)
// Palette: Deep Navy & Gold — Conservative authority with refined metallic accents
// Layout: Clean asymmetric grids, professional hierarchy, understated elegance
// ═══════════════════════════════════════════════════════════════════════════════

/** Template 21 — Conservative Navy */
export function financeConservative({ data }: TemplateProps) {
  return (
    <div className="h-full bg-white text-[#1e3a5f] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-4 bg-[#1e3a5f]" />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8 pt-3">
          <div>
            <h1 className="text-[48px] font-bold tracking-tight text-[#1e3a5f] leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-sm text-[#1e3a5f]/60 mt-3 font-medium uppercase tracking-[0.2em]">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div className="text-right text-[10px] text-[#1e3a5f]/50 space-y-1">
            <p>{data.personalInfo.email}</p>
            <p>{data.personalInfo.phone}</p>
            {data.personalInfo.location && <p>{data.personalInfo.location}</p>}
          </div>
        </div>
        <div className="grid grid-cols-[260px_1fr] gap-10">
          <div className="space-y-6">
            <div className="w-32 aspect-[3/4] mx-auto overflow-hidden bg-[#1e3a5f] rounded-sm shadow-lg">
              {data.personalInfo.photo ? (
                <img
                  src={data.personalInfo.photo}
                  alt={data.personalInfo.fullName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">
                    {data.personalInfo.fullName.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e3a5f] border-b-2 border-[#1e3a5f] pb-2 mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold">{edu.school}</p>
                    <p className="text-[11px] text-[#475569]">{edu.degree}</p>
                    <p className="text-[10px] text-[#94a3b8]">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e3a5f] border-b-2 border-[#1e3a5f] pb-2 mb-3">
                Skills
              </h3>
              <div className="space-y-2">
                {data.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 bg-[#1e3a5f] rounded-full" />
                    <span className="text-[11px]">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-[#1e3a5f] pl-5">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e3a5f] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#475569] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e3a5f] border-b-2 border-[#1e3a5f] pb-2 mb-4">
                Professional Experience
              </h3>
              <div className="space-y-5">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="pb-4 border-b border-[#e2e8f0] last:border-0"
                  >
                    <div className="flex justify-between items-baseline">
                      <p className="text-[15px] font-bold text-[#1e3a5f]">
                        {exp.position}
                      </p>
                      <p className="text-[10px] text-[#94a3b8] font-mono">
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#475569] leading-relaxed"
                        >
                          • {h}
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

/** Template 22 — Premium Green */
export function financePremium({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#f5f5f0] text-[#2c3e2c] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-[#1b5e20]" />
      <div className="relative z-10 ml-5">
        <div className="text-center mb-8">
          <h1 className="text-[48px] font-bold tracking-tight text-[#1b5e20] leading-none">
            {data.personalInfo.fullName}
          </h1>
          <div className="w-16 h-px bg-[#1b5e20] mx-auto my-4" />
          <p className="text-sm text-[#525252] font-medium uppercase tracking-[0.2em]">
            {data.personalInfo.jobTitle}
          </p>
          <div className="flex justify-center gap-5 mt-3 text-[10px] text-[#78716c]">
            <span>{data.personalInfo.email}</span>
            <span>•</span>
            <span>{data.personalInfo.phone}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1b5e20] mb-3 border-b border-[#1b5e20]/20 pb-2">
                Profile
              </h3>
              <p className="text-[13px] text-[#475569] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1b5e20] mb-3 border-b border-[#1b5e20]/20 pb-2">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div key={exp.id}>
                    <p className="text-[14px] font-bold text-[#1b5e20]">
                      {exp.position}
                    </p>
                    <p className="text-[10px] text-[#78716c] mt-1 mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#57534e] leading-relaxed"
                        >
                          • {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="w-28 aspect-square mx-auto overflow-hidden rounded-full border-4 border-[#1b5e20] shadow-xl">
              {data.personalInfo.photo ? (
                <img
                  src={data.personalInfo.photo}
                  alt={data.personalInfo.fullName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#c8e6c9] flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#1b5e20]">
                    {data.personalInfo.fullName.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1b5e20] mb-3 border-b border-[#1b5e20]/20 pb-2">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id} className="text-center">
                    <p className="text-[12px] font-bold">{edu.school}</p>
                    <p className="text-[11px] text-[#57534e]">{edu.degree}</p>
                    <p className="text-[10px] text-[#a8a29e]">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1b5e20] mb-3 border-b border-[#1b5e20]/20 pb-2">
                Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-1.5">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 bg-[#1b5e20] text-white rounded-sm"
                  >
                    {skill}
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

/** Template 23 — Burgundy Gold */
export function financeBurgundy({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#2d1b2e] text-[#f5f0e8] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#d4af37]/5 rounded-full -translate-y-1/3 translate-x-1/4" />
      <div className="relative z-10">
        <div className="flex items-end justify-between mb-6 pb-5 border-b border-[#d4af37]/20">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 overflow-hidden border-2 border-[#d4af37] rounded-sm">
              {data.personalInfo.photo ? (
                <img
                  src={data.personalInfo.photo}
                  alt={data.personalInfo.fullName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#3d2b3e] flex items-center justify-center">
                  <span className="text-3xl font-bold text-[#d4af37]">
                    {data.personalInfo.fullName.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h1 className="text-[40px] font-bold tracking-tight text-[#d4af37] leading-none">
                {data.personalInfo.fullName}
              </h1>
              <p className="text-sm text-[#f5f0e8]/60 mt-2 uppercase tracking-[0.15em]">
                {data.personalInfo.jobTitle}
              </p>
            </div>
          </div>
          <div className="text-right text-[10px] text-[#f5f0e8]/40 space-y-1">
            <p>{data.personalInfo.email}</p>
            <p>{data.personalInfo.phone}</p>
          </div>
        </div>
        <div className="grid grid-cols-[220px_1fr] gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="border-l border-[#d4af37]/20 pl-3"
                  >
                    <p className="text-[12px] font-bold">{edu.school}</p>
                    <p className="text-[11px] text-[#f5f0e8]/50">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#f5f0e8]/30">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-1 border border-[#d4af37]/30 text-[#d4af37] rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#f5f0e8]/70 leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="pb-4 border-b border-[#f5f0e8]/5 last:border-0"
                  >
                    <div className="flex justify-between items-baseline">
                      <p className="text-[15px] font-bold text-[#d4af37]">
                        {exp.position}
                      </p>
                      <p className="text-[10px] text-[#f5f0e8]/40">
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#f5f0e8]/50 leading-relaxed"
                        >
                          • {h}
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

/** Template 24 — Modern Banking */
export function financeBanking({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#fafbfc] text-[#24292e] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-32 bg-[#0366d6]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)" }}
      />
      <div className="relative z-10">
        <div className="flex items-end justify-between mb-10 pt-6">
          <div>
            <h1 className="text-[48px] font-bold tracking-tight text-white leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-sm text-white/70 mt-3 uppercase tracking-[0.2em]">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div className="w-20 aspect-[3/4] overflow-hidden border-2 border-white shadow-xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-white/20 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1 space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0366d6] mb-3">
                Contact
              </h3>
              <div className="space-y-1.5 text-[11px]">
                <p className="text-[#525252]">{data.personalInfo.email}</p>
                <p className="text-[#525252]">{data.personalInfo.phone}</p>
                {data.personalInfo.location && (
                  <p className="text-[#525252]">{data.personalInfo.location}</p>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0366d6] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold">{edu.school}</p>
                    <p className="text-[11px] text-[#57534e]">{edu.degree}</p>
                    <p className="text-[10px] text-[#a8a29e]">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0366d6] mb-3">
                Skills
              </h3>
              <div className="space-y-2">
                {data.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-2 h-2 bg-[#0366d6] rounded-full" />
                    <span className="text-[11px]">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#e1e4e8]">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0366d6] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#475569] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0366d6] mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="bg-white p-5 rounded-xl shadow-sm border border-[#e1e4e8]"
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <p className="text-[15px] font-bold text-[#24292e]">
                        {exp.position}
                      </p>
                      <p className="text-[10px] text-[#a8a29e] font-mono">
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#57534e] leading-relaxed"
                        >
                          • {h}
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

/** Template 25 — Deep Blue Minimal */
export function financeDeepBlue({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#0c2340] text-white p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[35%] h-full bg-[#0a1c34]" />
      <div className="relative z-10 grid grid-cols-[1fr_2fr] gap-0">
        <div className="bg-[#0a1c34] p-8 -m-12 mr-0 space-y-7">
          <div className="w-24 aspect-square mx-auto overflow-hidden rounded-full border-4 border-[#d4af37] shadow-xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#0c2340] flex items-center justify-center">
                <span className="text-3xl font-bold text-[#d4af37]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#d4af37] mb-3">
              Contact
            </h3>
            <div className="space-y-1.5 text-[10px] text-white/60">
              <p>{data.personalInfo.email}</p>
              <p>{data.personalInfo.phone}</p>
              {data.personalInfo.location && (
                <p>{data.personalInfo.location}</p>
              )}
            </div>
          </div>
          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#d4af37] mb-3">
              Education
            </h3>
            <div className="space-y-3">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <p className="text-[11px] font-bold">{edu.school}</p>
                  <p className="text-[11px] text-white/50">{edu.degree}</p>
                  <p className="text-[9px] text-white/30">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#d4af37] mb-3">
              Skills
            </h3>
            <div className="flex flex-wrap gap-1">
              {data.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-[9px] px-2 py-1 border border-[#d4af37]/30 text-[#d4af37] rounded-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="p-8 -m-12 ml-10 space-y-7">
          <div className="border-b border-[#d4af37]/20 pb-5">
            <h1 className="text-[48px] font-bold tracking-tight text-[#d4af37] leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-sm text-white/50 mt-3 uppercase tracking-[0.2em]">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#d4af37] mb-3">
              Profile
            </h3>
            <p className="text-[13px] text-white/70 leading-[1.8]">
              {data.summary}
            </p>
          </div>
          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#d4af37] mb-4">
              Experience
            </h3>
            <div className="space-y-5">
              {data.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="pb-4 border-b border-white/5 last:border-0"
                >
                  <div className="flex justify-between items-baseline">
                    <p className="text-[15px] font-bold">{exp.position}</p>
                    <p className="text-[10px] text-[#d4af37]">{exp.period}</p>
                  </div>
                  <ul className="space-y-1.5 mt-2">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-[12px] text-white/50 leading-relaxed"
                      >
                        • {h}
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

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORY: HEALTHCARE (Templates 26-30)
// Palette: Calming Teal & White — Clean clinical feel with soothing warmth
// Layout: Centered photo headers, card-based sections, soft rounded elements
// ═══════════════════════════════════════════════════════════════════════════════

/** Template 26 — Calming Teal */
export function healthcareTeal({ data }: TemplateProps) {
  return (
    <div className="h-full bg-white text-[#0f766e] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-3 bg-[#0d9488]" />
      <div className="relative z-10">
        <div className="flex items-center gap-7 mb-8 pt-3">
          <div className="w-24 h-24 overflow-hidden rounded-full border-4 border-[#0d9488] shadow-xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#ccfbf1] flex items-center justify-center">
                <span className="text-4xl font-bold text-[#0d9488]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div>
            <h1 className="text-[48px] font-bold tracking-tight text-[#134e4a] leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-lg text-[#0d9488] mt-3 font-medium uppercase tracking-[0.15em]">
              {data.personalInfo.jobTitle}
            </p>
            <div className="flex gap-5 mt-3 text-[10px] text-[#78716c]">
              <span>{data.personalInfo.email}</span>
              <span>{data.personalInfo.phone}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-[#f0fdfa] p-5 rounded-xl">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0d9488] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#44403c] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0d9488] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="border-l-2 border-[#0d9488] pl-3"
                  >
                    <p className="text-[12px] font-bold text-[#134e4a]">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#57534e] mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#a8a29e] mt-1">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0d9488] mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 bg-[#0d9488] text-white rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0d9488] mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="bg-[#f5f5f5] p-5 rounded-xl border-l-4 border-[#0d9488]"
                  >
                    <p className="text-[15px] font-bold text-[#134e4a]">
                      {exp.position}
                    </p>
                    <p className="text-[10px] text-[#0d9488] mt-1 mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#57534e] leading-relaxed"
                        >
                          • {h}
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

/** Template 27 — Soft Blue */
export function healthcareSoftBlue({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#f0f4f8] text-[#1e3a5f] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#3b82f6]/5 rounded-full -translate-y-1/3 translate-x-1/4" />
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white shadow-xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#dbeafe] flex items-center justify-center">
                <span className="text-4xl font-bold text-[#2563eb]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <h1 className="text-[48px] font-bold tracking-tight text-[#2563eb] leading-none">
            {data.personalInfo.fullName}
          </h1>
          <p className="text-sm text-[#4a5568] mt-3 uppercase tracking-[0.2em]">
            {data.personalInfo.jobTitle}
          </p>
          <div className="flex justify-center gap-5 mt-3 text-[10px] text-[#78716c]">
            <span>{data.personalInfo.email}</span>
            <span>•</span>
            <span>{data.personalInfo.phone}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563eb] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#4a5568] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563eb] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold text-[#2563eb]">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#4a5568] mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#a0aec0] mt-1">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563eb] mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 bg-[#eff6ff] text-[#2563eb] rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563eb] mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="pb-4 border-b border-[#e2e8f0] last:border-0"
                  >
                    <p className="text-[15px] font-bold text-[#2563eb]">
                      {exp.position}
                    </p>
                    <p className="text-[10px] text-[#78716c] mt-1 mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#4a5568] leading-relaxed"
                        >
                          • {h}
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

/** Template 28 — Sage Green */
export function healthcareSage({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#f7f9f5] text-[#365314] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-[#65a30d]" />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8 pt-3">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 overflow-hidden rounded-xl bg-[#65a30d] shadow-lg">
              {data.personalInfo.photo ? (
                <img
                  src={data.personalInfo.photo}
                  alt={data.personalInfo.fullName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    {data.personalInfo.fullName.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h1 className="text-[40px] font-bold tracking-tight text-[#365314] leading-none">
                {data.personalInfo.fullName}
              </h1>
              <p className="text-sm text-[#65a30d] mt-2 uppercase tracking-[0.15em]">
                {data.personalInfo.jobTitle}
              </p>
            </div>
          </div>
          <div className="text-right text-[10px] text-[#65a30d] space-y-1">
            <p>{data.personalInfo.email}</p>
            <p>{data.personalInfo.phone}</p>
            {data.personalInfo.location && <p>{data.personalInfo.location}</p>}
          </div>
        </div>
        <div className="grid grid-cols-[240px_1fr] gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#65a30d] mb-3 border-b border-[#65a30d] pb-2">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold text-[#365314]">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#65a30d]">{edu.degree}</p>
                    <p className="text-[10px] text-[#a3c585]">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#65a30d] mb-3 border-b border-[#65a30d] pb-2">
                Skills
              </h3>
              <div className="space-y-2">
                {data.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#65a30d]" />
                    <span className="text-[11px] text-[#65a30d]">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-[#65a30d] pl-5">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#65a30d] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#4a5d3a] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#65a30d] mb-4 border-b border-[#65a30d] pb-2">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="bg-[#ecf6e5] p-5 rounded-xl">
                    <div className="flex justify-between items-baseline">
                      <p className="text-[15px] font-bold text-[#365314]">
                        {exp.position}
                      </p>
                      <p className="text-[10px] text-[#65a30d]">{exp.period}</p>
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#5a7d4a] leading-relaxed"
                        >
                          • {h}
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

/** Template 29 — Navy Medical */
export function healthcareNavy({ data }: TemplateProps) {
  return (
    <div className="h-full bg-white text-[#1e3a5f] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#1e3a5af0]/[0.02] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="relative z-10">
        <div className="flex items-end justify-between mb-8 pb-5 border-b-2 border-[#1e3a5f]">
          <div>
            <h1 className="text-[56px] font-bold tracking-tight text-[#1e3a5f] leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-lg text-[#3b82f6] mt-3 font-medium uppercase tracking-[0.15em]">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div className="w-20 aspect-[3/4] overflow-hidden bg-[#1e3a5f] rounded-sm">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1 space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b82f6] mb-3">
                Contact
              </h3>
              <div className="space-y-1.5 text-[11px]">
                <p className="text-[#4a5568]">{data.personalInfo.email}</p>
                <p className="text-[#4a5568]">{data.personalInfo.phone}</p>
                {data.personalInfo.location && (
                  <p className="text-[#4a5568]">{data.personalInfo.location}</p>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b82f6] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="border-l-2 border-[#3b82f6] pl-3"
                  >
                    <p className="text-[12px] font-bold text-[#1e3a5f]">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#4a5568] mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#a0aec0] mt-1">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b82f6] mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 bg-[#1e3a5f] text-white rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-6">
            <div className="bg-[#f7fafc] p-5 rounded-xl border-l-4 border-[#3b82f6]">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b82f6] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#4a5568] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b82f6] mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="bg-[#f7fafc] p-5 rounded-xl">
                    <div className="flex justify-between items-baseline">
                      <p className="text-[15px] font-bold text-[#1e3a5f]">
                        {exp.position}
                      </p>
                      <p className="text-[10px] text-[#3b82f6] font-mono">
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#4a5568] leading-relaxed"
                        >
                          • {h}
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

/** Template 30 — Clinical White */
export function healthcareClinical({ data }: TemplateProps) {
  return (
    <div className="h-full bg-white text-[#374151] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 19px, #000 20px)",
        }}
      />
      <div className="relative z-10">
        <div className="grid grid-cols-[280px_1fr] gap-0">
          <div className="bg-[#f9fafb] p-8 -m-12 mr-0 space-y-7">
            <div className="w-full aspect-[3/4] overflow-hidden bg-[#e5e7eb] rounded-sm">
              {data.personalInfo.photo ? (
                <img
                  src={data.personalInfo.photo}
                  alt={data.personalInfo.fullName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-[#9ca3af]">
                    {data.personalInfo.fullName.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4b5563] mb-3">
                Contact
              </h3>
              <div className="space-y-1.5 text-[11px]">
                <p className="text-[#6b7280]">{data.personalInfo.email}</p>
                <p className="text-[#6b7280]">{data.personalInfo.phone}</p>
                {data.personalInfo.location && (
                  <p className="text-[#6b7280]">{data.personalInfo.location}</p>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4b5563] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold">{edu.school}</p>
                    <p className="text-[11px] text-[#6b7280]">{edu.degree}</p>
                    <p className="text-[10px] text-[#9ca3af]">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4b5563] mb-3">
                Skills
              </h3>
              <div className="space-y-2">
                {data.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-1 h-1 bg-[#4b5563] rounded-full" />
                    <span className="text-[11px]">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-8 -m-12 ml-10 space-y-7">
            <div className="border-b-2 border-[#e5e7eb] pb-5">
              <h1 className="text-[48px] font-bold tracking-tight text-[#111827] leading-none">
                {data.personalInfo.fullName}
              </h1>
              <p className="text-lg text-[#6b7280] mt-3 uppercase tracking-[0.15em]">
                {data.personalInfo.jobTitle}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4b5563] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#525252] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4b5563] mb-4">
                Experience
              </h3>
              <div className="space-y-5">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="pb-5 border-b border-[#e5e7eb] last:border-0"
                  >
                    <div className="flex justify-between items-baseline">
                      <p className="text-[15px] font-bold text-[#111827]">
                        {exp.position}
                      </p>
                      <p className="text-[10px] text-[#9ca3af] font-mono">
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#6b7280] leading-relaxed"
                        >
                          • {h}
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

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORY: EDUCATION (Templates 31-35)
// Palette: Academic Burgundy & Gold — Scholarly warmth with classic accents
// Layout: Traditional with modern twists, warm card elements
// ═══════════════════════════════════════════════════════════════════════════════

/** Template 31 — Academic Burgundy */
export function educationAcademic({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#faf8f5] text-[#3d2b2b] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-3 h-full bg-[#7c2d12]" />
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#7c2d12]/[0.03] rounded-bl-full" />
      <div className="relative z-10 ml-5">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-[48px] font-bold tracking-tight text-[#7c2d12] leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-sm text-[#a1625a] mt-3 uppercase tracking-[0.2em]">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div className="w-20 aspect-square overflow-hidden rounded-full border-4 border-[#7c2d12] shadow-xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#fecaca] flex items-center justify-center">
                <span className="text-3xl font-bold text-[#7c2d12]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#7c2d12]">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7c2d12] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#525252] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7c2d12] mb-3 border-b border-[#7c2d12]/10 pb-2">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <p className="text-[12px] font-bold text-[#7c2d12]">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#57534e] mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#a8a29e] mt-1">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7c2d12] mb-3 border-b border-[#7c2d12]/10 pb-2">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 bg-[#7c2d12] text-white rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7c2d12] mb-4 border-b border-[#7c2d12]/10 pb-2">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="bg-white p-5 rounded-lg shadow-sm"
                  >
                    <p className="text-[15px] font-bold text-[#7c2d12]">
                      {exp.position}
                    </p>
                    <p className="text-[10px] text-[#a8a29e] mt-1 mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#57534e] leading-relaxed"
                        >
                          • {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-[10px] text-[#57534e] space-y-1">
              <p className="font-bold text-[#7c2d12]">Contact</p>
              <p>{data.personalInfo.email}</p>
              <p>{data.personalInfo.phone}</p>
              {data.personalInfo.location && (
                <p>{data.personalInfo.location}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Template 32 — Library Brown */
export function educationLibrary({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#f5f0e8] text-[#3e2723] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-4 bg-[#5d4037]" />
      <div className="relative z-10">
        <div className="text-center mb-8 pt-3">
          <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-4 border-[#8d6e63] shadow-xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#d7ccc8] flex items-center justify-center">
                <span className="text-4xl font-bold text-[#5d4037]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <h1 className="text-[48px] font-bold tracking-tight text-[#5d4037] leading-none">
            {data.personalInfo.fullName}
          </h1>
          <p className="text-sm text-[#8d6e63] mt-3 uppercase tracking-[0.2em]">
            {data.personalInfo.jobTitle}
          </p>
          <div className="flex justify-center gap-5 mt-3 text-[10px] text-[#795548]">
            <span>{data.personalInfo.email}</span>
            <span>•</span>
            <span>{data.personalInfo.phone}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="border-l-4 border-[#5d4037] pl-5">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5d4037] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#525252] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5d4037] mb-3 border-b-2 border-[#5d4037] pb-2">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div key={exp.id}>
                    <p className="text-[15px] font-bold text-[#5d4037]">
                      {exp.position}
                    </p>
                    <p className="text-[10px] text-[#8d6e63] mt-1 mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#57534e] leading-relaxed"
                        >
                          • {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5d4037] mb-3 border-b-2 border-[#5d4037] pb-2">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id} className="bg-[#efebe9] p-4 rounded-lg">
                    <p className="text-[12px] font-bold text-[#5d4037]">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#57534e] mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#a8a29e] mt-1">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5d4037] mb-3 border-b-2 border-[#5d4037] pb-2">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 border border-[#8d6e63] text-[#5d4037] rounded-sm"
                  >
                    {skill}
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

/** Template 33 — University Blue */
export function educationUniversity({ data }: TemplateProps) {
  return (
    <div className="h-full bg-white text-[#1e3a5f] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[35%] h-full bg-[#dbeafe]" />
      <div className="relative z-10 grid grid-cols-[1fr_2fr] gap-0">
        <div className="bg-[#dbeafe] p-8 -m-12 mr-0 space-y-7">
          <div className="w-full aspect-[3/4] overflow-hidden bg-[#1e3a5f] rounded-sm shadow-lg">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-6xl font-bold text-white">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e3a5f] mb-3">
              Contact
            </h3>
            <div className="space-y-1.5 text-[11px]">
              <p className="text-[#444]">{data.personalInfo.email}</p>
              <p className="text-[#444]">{data.personalInfo.phone}</p>
              {data.personalInfo.location && (
                <p className="text-[#444]">{data.personalInfo.location}</p>
              )}
            </div>
          </div>
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e3a5f] mb-3">
              Education
            </h3>
            <div className="space-y-3">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <p className="text-[12px] font-bold">{edu.school}</p>
                  <p className="text-[11px] text-[#525252]">{edu.degree}</p>
                  <p className="text-[10px] text-[#888]">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e3a5f] mb-3">
              Skills
            </h3>
            <div className="flex flex-wrap gap-1">
              {data.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-[10px] px-2.5 py-1 bg-[#1e3a5f] text-white rounded-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="p-8 -m-12 ml-10 space-y-7">
          <div className="border-b-4 border-[#1e3a5f] pb-5">
            <h1 className="text-[56px] font-bold tracking-tight text-[#1e3a5f] leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-lg text-[#525252] mt-3 uppercase tracking-[0.2em]">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e3a5f] mb-3">
              Profile
            </h3>
            <p className="text-[13px] text-[#44403c] leading-[1.8]">
              {data.summary}
            </p>
          </div>
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e3a5f] mb-4">
              Experience
            </h3>
            <div className="space-y-5">
              {data.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="pb-5 border-b border-[#dbeafe] last:border-0"
                >
                  <div className="flex justify-between items-baseline">
                    <p className="text-[15px] font-bold text-[#1e3a5f]">
                      {exp.position}
                    </p>
                    <p className="text-[10px] text-[#888] font-mono">
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-1.5 mt-2">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-[12px] text-[#57534e] leading-relaxed"
                      >
                        • {h}
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

/** Template 34 — Forest Academic */
export function educationForest({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#14532d] text-[#ecfdf5] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#16a34a]/10 rounded-full -translate-y-1/3 translate-x-1/4" />
      <div className="relative z-10">
        <div className="flex items-center gap-7 mb-8">
          <div className="w-24 h-24 overflow-hidden rounded-full border-4 border-[#22c55e] shadow-xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#16a34a] flex items-center justify-center">
                <span className="text-4xl font-bold text-[#ecfdf5]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div>
            <h1 className="text-[48px] font-bold tracking-tight text-[#ecfdf5] leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-lg text-[#22c55e] mt-3 uppercase tracking-[0.15em]">
              {data.personalInfo.jobTitle}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-[#16a34a]/10 p-5 rounded-xl backdrop-blur-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#22c55e] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#ecfdf5]/70 leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#22c55e] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="border-l-2 border-[#22c55e] pl-3"
                  >
                    <p className="text-[12px] font-bold text-[#ecfdf5]">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#ecfdf5]/50">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#ecfdf5]/30">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#22c55e] mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 bg-[#22c55e] text-[#14532d] font-bold rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-[10px] text-[#ecfdf5]/40 space-y-1">
              <p>{data.personalInfo.email}</p>
              <p>{data.personalInfo.phone}</p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#22c55e] mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="bg-[#16a34a]/10 p-5 rounded-xl">
                    <p className="text-[15px] font-bold text-[#ecfdf5]">
                      {exp.position}
                    </p>
                    <p className="text-[10px] text-[#22c55e] mt-1 mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#ecfdf5]/50 leading-relaxed"
                        >
                          • {h}
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

/** Template 35 — Intellectual Gray */
export function educationIntellectual({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#fafafa] text-[#212121] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-[#d97706]" />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-6">
            <div className="w-20 aspect-[3/4] overflow-hidden bg-[#d97706] rounded-sm shadow-lg">
              {data.personalInfo.photo ? (
                <img
                  src={data.personalInfo.photo}
                  alt={data.personalInfo.fullName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    {data.personalInfo.fullName.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h1 className="text-[48px] font-bold tracking-tight text-[#212121] leading-none">
                {data.personalInfo.fullName}
              </h1>
              <p className="text-sm text-[#d97706] mt-3 uppercase tracking-[0.2em] font-bold">
                {data.personalInfo.jobTitle}
              </p>
              <div className="flex gap-5 mt-3 text-[10px] text-[#6b7280]">
                <span>{data.personalInfo.email}</span>
                <span>{data.personalInfo.phone}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1 space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d97706] mb-3 border-b border-[#e5e7eb] pb-2">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold">{edu.school}</p>
                    <p className="text-[11px] text-[#6b7280] mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#9ca3af] mt-1">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d97706] mb-3 border-b border-[#e5e7eb] pb-2">
                Skills
              </h3>
              <div className="space-y-2">
                {data.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-2 h-2 bg-[#d97706]" />
                    <span className="text-[11px]">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-6">
            <div className="border-l-4 border-[#d97706] pl-5">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d97706] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#44403c] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d97706] mb-4 border-b border-[#e5e7eb] pb-2">
                Experience
              </h3>
              <div className="space-y-5">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="pb-5 border-b border-[#f5f5f5] last:border-0"
                  >
                    <div className="flex justify-between items-baseline">
                      <p className="text-[15px] font-bold text-[#212121]">
                        {exp.position}
                      </p>
                      <p className="text-[10px] text-[#9ca3af] font-mono">
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#57534e] leading-relaxed"
                        >
                          • {h}
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

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORY: SALES (Templates 36-40)
// Palette: Energetic Orange & Black — High contrast with bold confidence
// Layout: Dynamic headers, bold stats areas, confident typography
// ═══════════════════════════════════════════════════════════════════════════════

/** Template 36 — Bold Orange */
export function salesOrange({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#1a1a1a] text-white p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-[55%] h-full bg-[#f97316]"
        style={{ clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 100%)" }}
      />
      <div className="relative z-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h1 className="text-[64px] font-black tracking-tighter text-white leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-lg text-[#1a1a1a] mt-3 font-bold uppercase tracking-[0.2em] bg-white inline-block px-3 py-1.5">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div className="w-24 aspect-[3/4] overflow-hidden border-4 border-white shadow-2xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#292524] flex items-center justify-center">
                <span className="text-4xl font-black text-[#f97316]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-[260px_1fr] gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-3">
                Contact
              </h3>
              <div className="space-y-1.5 text-[11px]">
                <p>{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                {data.personalInfo.location && (
                  <p>{data.personalInfo.location}</p>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold">{edu.school}</p>
                    <p className="text-[11px] text-white/60">{edu.degree}</p>
                    <p className="text-[10px] text-white/30">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 bg-white text-[#f97316] font-bold rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-[#f97316] pl-5">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-white/70 leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="bg-white/5 p-5 rounded-xl backdrop-blur-sm"
                  >
                    <div className="flex justify-between items-baseline">
                      <p className="text-[15px] font-bold">{exp.position}</p>
                      <p className="text-[10px] text-[#f97316] font-mono">
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-white/60 leading-relaxed"
                        >
                          • {h}
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

/** Template 37 — Dynamic Red */
export function salesDynamic({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#fafafa] text-[#1a1a1a] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-48 bg-[#dc2626]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)" }}
      />
      <div className="relative z-10">
        <div className="flex items-end justify-between mb-8 pt-4">
          <div>
            <h1 className="text-[48px] font-black tracking-tight text-white leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-sm text-white/70 mt-3 uppercase tracking-[0.2em]">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div className="w-20 aspect-square overflow-hidden rounded-full border-4 border-white shadow-xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-white/20 flex items-center justify-center">
                <span className="text-3xl font-black text-white">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#dc2626] mb-3 border-b-2 border-[#dc2626] pb-2">
                Profile
              </h3>
              <p className="text-[13px] text-[#44403c] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#dc2626] mb-3 border-b-2 border-[#dc2626] pb-2">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div key={exp.id}>
                    <p className="text-[15px] font-bold text-[#dc2626]">
                      {exp.position}
                    </p>
                    <p className="text-[10px] text-[#9ca3af] mt-1 mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#57534e] leading-relaxed"
                        >
                          • {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#dc2626] mb-3 border-b-2 border-[#dc2626] pb-2">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <p className="text-[12px] font-bold text-[#dc2626]">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#57534e] mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#a8a29e] mt-1">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#dc2626] mb-3 border-b-2 border-[#dc2626] pb-2">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 bg-[#dc2626] text-white font-bold rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-[#dc2626] text-white p-4 rounded-lg text-center">
              <p className="text-[10px] uppercase tracking-[0.2em] mb-1">
                Contact
              </p>
              <p className="text-[11px]">{data.personalInfo.email}</p>
              <p className="text-[11px]">{data.personalInfo.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Template 38 — Confident Green */
export function salesGreen({ data }: TemplateProps) {
  return (
    <div className="h-full bg-white text-[#0f172a] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#22c55e]/5 rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="relative z-10">
        <div className="flex items-center gap-7 mb-8">
          <div className="w-24 h-24 overflow-hidden rounded-2xl bg-[#22c55e] shadow-xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl font-black text-white">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div className="flex-1">
            <h1 className="text-[52px] font-black tracking-tight text-[#0f172a] leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-base text-[#22c55e] mt-3 font-bold uppercase tracking-[0.2em]">
              {data.personalInfo.jobTitle}
            </p>
            <div className="flex gap-6 mt-3 text-[10px] text-[#6b7280]">
              <span>{data.personalInfo.email}</span>
              <span>{data.personalInfo.phone}</span>
              {data.personalInfo.location && (
                <span>{data.personalInfo.location}</span>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[240px_1fr] gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#22c55e] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold">{edu.school}</p>
                    <p className="text-[11px] text-[#6b7280]">{edu.degree}</p>
                    <p className="text-[10px] text-[#a8a29e]">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#22c55e] mb-3">
                Skills
              </h3>
              <div className="space-y-2">
                {data.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-2 h-2 bg-[#22c55e] rounded-full" />
                    <span className="text-[11px]">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-[#f0fdf4] p-5 rounded-xl border-l-4 border-[#22c55e]">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#22c55e] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#44403c] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#22c55e] mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="grid grid-cols-[1fr_auto] gap-4 pb-4 border-b border-[#f5f5f5] last:border-0"
                  >
                    <div>
                      <p className="text-[15px] font-bold text-[#0f172a]">
                        {exp.position}
                      </p>
                      <ul className="space-y-1.5 mt-2">
                        {exp.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="text-[12px] text-[#57534e] leading-relaxed"
                          >
                            • {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-[10px] text-[#22c55e] font-mono whitespace-nowrap">
                      {exp.period}
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

/** Template 39 — Sharp Navy */
export function salesNavy({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#0c4a6e] text-white p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#38bdf8]/5 rounded-full -translate-y-1/3 translate-x-1/4" />
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-4 border-[#38bdf8] shadow-xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#0e7490] flex items-center justify-center">
                <span className="text-4xl font-black text-[#38bdf8]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <h1 className="text-[56px] font-black tracking-tighter text-[#38bdf8] leading-none">
            {data.personalInfo.fullName}
          </h1>
          <p className="text-sm text-white/60 mt-3 uppercase tracking-[0.2em]">
            {data.personalInfo.jobTitle}
          </p>
          <div className="flex justify-center gap-5 mt-3 text-[10px] text-white/40">
            <span>{data.personalInfo.email}</span>
            <span>•</span>
            <span>{data.personalInfo.phone}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="border-t border-[#38bdf8]/20 pt-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#38bdf8] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-white/70 leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div className="border-t border-[#38bdf8]/20 pt-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#38bdf8] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold">{edu.school}</p>
                    <p className="text-[11px] text-white/50">{edu.degree}</p>
                    <p className="text-[10px] text-white/30">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-[#38bdf8]/20 pt-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#38bdf8] mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 bg-[#38bdf8] text-[#0c4a6e] font-bold rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-t border-[#38bdf8]/20 pt-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#38bdf8] mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="bg-white/5 p-5 rounded-xl">
                    <div className="flex justify-between items-baseline">
                      <p className="text-[15px] font-bold">{exp.position}</p>
                      <p className="text-[10px] text-[#38bdf8] font-mono">
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-white/60 leading-relaxed"
                        >
                          • {h}
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

/** Template 40 — Professional Purple */
export function salesPurple({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#faf5ff] text-[#3b0764] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-4 bg-[#7e22ce]" />
      <div className="relative z-10">
        <div className="flex items-end justify-between mb-8 pt-3">
          <div>
            <h1 className="text-[52px] font-black tracking-tight text-[#7e22ce] leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-lg text-[#a855f7] mt-3 uppercase tracking-[0.15em] font-bold">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div className="w-20 aspect-[3/4] overflow-hidden bg-[#7e22ce] rounded-lg shadow-xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl font-black text-white">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1 space-y-6">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7e22ce] mb-3 border-b border-[#e9d5ff] pb-2">
                Contact
              </h3>
              <div className="space-y-1.5 text-[11px]">
                <p className="text-[#525252]">{data.personalInfo.email}</p>
                <p className="text-[#525252]">{data.personalInfo.phone}</p>
                {data.personalInfo.location && (
                  <p className="text-[#525252]">{data.personalInfo.location}</p>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7e22ce] mb-3 border-b border-[#e9d5ff] pb-2">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold text-[#7e22ce]">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#525252]">{edu.degree}</p>
                    <p className="text-[10px] text-[#a8a29e]">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7e22ce] mb-3 border-b border-[#e9d5ff] pb-2">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-1 bg-[#7e22ce] text-white rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#7e22ce]">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7e22ce] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#44403c] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7e22ce] mb-4 border-b border-[#e9d5ff] pb-2">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="bg-white p-5 rounded-lg shadow-sm"
                  >
                    <div className="flex justify-between items-baseline">
                      <p className="text-[15px] font-bold text-[#7e22ce]">
                        {exp.position}
                      </p>
                      <p className="text-[10px] text-[#a855f7] font-mono">
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#57534e] leading-relaxed"
                        >
                          • {h}
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

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORY: EXECUTIVE (Templates 41-45)
// Palette: Premium Black & Gold — Executive authority with refined luxury
// Layout: Bold commanding headers, premium typography, sophisticated spacing
// ═══════════════════════════════════════════════════════════════════════════════

/** Template 41 — Executive Black Gold */
export function execBlackGold({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#0a0a0a] text-[#f5f5f0] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c5a059]/5 rounded-full -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#c5a059]/[0.02] rounded-full translate-y-1/3 -translate-x-1/4" />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-[#c5a059]/20">
          <div className="flex items-center gap-7">
            <div className="w-24 h-24 overflow-hidden border-2 border-[#c5a059] rounded-sm">
              {data.personalInfo.photo ? (
                <img
                  src={data.personalInfo.photo}
                  alt={data.personalInfo.fullName}
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              ) : (
                <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center">
                  <span className="text-5xl font-light text-[#c5a059]">
                    {data.personalInfo.fullName.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h1 className="text-[52px] font-light tracking-tight text-[#f5f5f0] leading-none">
                {data.personalInfo.fullName}
              </h1>
              <p className="text-sm text-[#c5a059] mt-3 uppercase tracking-[0.2em] font-bold">
                {data.personalInfo.jobTitle}
              </p>
            </div>
          </div>
          <div className="text-right text-[10px] text-[#f5f5f0]/30 space-y-1">
            <p>{data.personalInfo.email}</p>
            <p>{data.personalInfo.phone}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c5a059] mb-3">
                Executive Summary
              </h3>
              <p className="text-[13px] text-[#f5f5f0]/60 leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c5a059] mb-4">
                Leadership Experience
              </h3>
              <div className="space-y-5">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="border-l-2 border-[#c5a059] pl-5"
                  >
                    <p className="text-[16px] font-bold text-[#f5f5f0]">
                      {exp.position}
                    </p>
                    <p className="text-[10px] text-[#c5a059] mt-1 mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#f5f5f0]/40 leading-relaxed"
                        >
                          • {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c5a059] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-[#1a1a1a] p-4 border-l-2 border-[#c5a059]"
                  >
                    <p className="text-[12px] font-bold text-[#f5f5f0]">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#f5f5f0]/50">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#f5f5f0]/20">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c5a059] mb-3">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-3 py-1.5 border border-[#c5a059]/30 text-[#c5a059] rounded-sm"
                  >
                    {skill}
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

/** Template 42 — Navy Premium */
export function execNavy({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#0c2340] text-white p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-3 bg-[#d4af37]" />
      <div className="relative z-10">
        <div className="flex items-end justify-between mb-10 pt-3">
          <div>
            <h1 className="text-[56px] font-light tracking-tight text-white leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-sm text-[#d4af37] mt-3 uppercase tracking-[0.2em] font-bold">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div className="w-24 aspect-[3/4] overflow-hidden border-2 border-[#d4af37]">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#0a1c34] flex items-center justify-center">
                <span className="text-4xl font-light text-[#d4af37]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-[260px_1fr] gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-3">
                Contact
              </h3>
              <div className="space-y-1.5 text-[11px]">
                <p className="text-white/60">{data.personalInfo.email}</p>
                <p className="text-white/60">{data.personalInfo.phone}</p>
                {data.personalInfo.location && (
                  <p className="text-white/60">{data.personalInfo.location}</p>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="border-l border-[#d4af37]/20 pl-3"
                  >
                    <p className="text-[12px] font-bold">{edu.school}</p>
                    <p className="text-[11px] text-white/50">{edu.degree}</p>
                    <p className="text-[10px] text-white/30">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-3">
                Expertise
              </h3>
              <div className="space-y-2">
                {data.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span className="text-[#d4af37]">—</span>
                    <span className="text-[11px] text-white/60">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-t border-[#d4af37]/20 pt-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-3">
                Executive Summary
              </h3>
              <p className="text-[13px] text-white/60 leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div className="border-t border-[#d4af37]/20 pt-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-4">
                Experience
              </h3>
              <div className="space-y-5">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="pb-4 border-b border-white/5 last:border-0"
                  >
                    <div className="flex justify-between items-baseline">
                      <p className="text-[16px] font-bold">{exp.position}</p>
                      <p className="text-[10px] text-[#d4af37]">{exp.period}</p>
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-white/40 leading-relaxed"
                        >
                          • {h}
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

/** Template 43 — Charcoal Modern */
export function execCharcoal({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#292524] text-[#e7e5e4] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, #e7e5e4 11px)",
        }}
      />
      <div className="relative z-10">
        <div className="flex items-center gap-7 mb-10">
          <div className="w-28 h-28 overflow-hidden rounded-full border-4 border-[#a8a29e] shadow-xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover grayscale contrast-125"
              />
            ) : (
              <div className="w-full h-full bg-[#44403c] flex items-center justify-center">
                <span className="text-5xl font-light text-[#a8a29e]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div>
            <h1 className="text-[52px] font-light tracking-tight text-[#f5f5f5] leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-lg text-[#a8a29e] mt-3 uppercase tracking-[0.2em]">
              {data.personalInfo.jobTitle}
            </p>
            <div className="flex gap-5 mt-3 text-[10px] text-[#a8a29e]/60">
              <span>{data.personalInfo.email}</span>
              <span>{data.personalInfo.phone}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="border-l-2 border-[#a8a29e] pl-5">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8a29e] mb-3">
                Executive Summary
              </h3>
              <p className="text-[13px] text-[#e7e5e4]/60 leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8a29e] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id} className="bg-[#44403c] p-4 rounded-sm">
                    <p className="text-[12px] font-bold text-[#f5f5f5]">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#e7e5e4]/50">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#e7e5e4]/20">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8a29e] mb-3">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-1">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 border border-[#a8a29e]/30 text-[#a8a29e] rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8a29e] mb-4">
                Experience
              </h3>
              <div className="space-y-5">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="border-t border-[#a8a29e]/10 pt-4"
                  >
                    <p className="text-[16px] font-bold text-[#f5f5f5]">
                      {exp.position}
                    </p>
                    <p className="text-[10px] text-[#a8a29e] mt-1 mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#e7e5e4]/40 leading-relaxed"
                        >
                          • {h}
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

/** Template 44 — White Minimal */
export function execWhite({ data }: TemplateProps) {
  return (
    <div className="h-full bg-white text-[#0c0a09] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-[#0c0a09]" />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8 pt-4">
          <div>
            <h1 className="text-[56px] font-light tracking-tighter text-[#0c0a09] leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-sm text-[#78716c] mt-3 uppercase tracking-[0.3em] font-bold">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div className="w-16 aspect-square overflow-hidden bg-[#0c0a09]">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover grayscale"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-2xl font-light text-white">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1 space-y-6">
            <div>
              <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#78716c] mb-3 border-b border-[#e7e5e4] pb-2">
                Contact
              </h3>
              <div className="space-y-1.5 text-[10px]">
                <p className="text-[#444]">{data.personalInfo.email}</p>
                <p className="text-[#444]">{data.personalInfo.phone}</p>
                {data.personalInfo.location && (
                  <p className="text-[#444]">{data.personalInfo.location}</p>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#78716c] mb-3 border-b border-[#e7e5e4] pb-2">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[11px] font-bold">{edu.school}</p>
                    <p className="text-[10px] text-[#57534e]">{edu.degree}</p>
                    <p className="text-[9px] text-[#a8a29e]">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#78716c] mb-3 border-b border-[#e7e5e4] pb-2">
                Expertise
              </h3>
              <div className="space-y-1.5">
                {data.skills.map((skill, i) => (
                  <div key={i} className="text-[10px] flex items-center gap-2">
                    <span className="text-[#a8a29e]">—</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-6">
            <div className="border-t border-[#e7e5e4] pt-4">
              <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#78716c] mb-3">
                Executive Summary
              </h3>
              <p className="text-[12px] text-[#44403c] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div className="border-t border-[#e7e5e4] pt-4">
              <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#78716c] mb-4">
                Experience
              </h3>
              <div className="space-y-5">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="pb-5 border-b border-[#f5f5f4] last:border-0"
                  >
                    <div className="flex justify-between items-baseline">
                      <p className="text-[16px] font-light tracking-tight">
                        {exp.position}
                      </p>
                      <p className="text-[9px] text-[#a8a29e] font-mono">
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1 mt-2">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[11px] text-[#57534e] leading-relaxed"
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

/** Template 45 — Deep Burgundy */
export function execBurgundy({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#2d1f2b] text-[#f0e6e9] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-3 bg-[#9f7aea]" />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-10 pt-3">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 overflow-hidden border-2 border-[#9f7aea] rounded-sm">
              {data.personalInfo.photo ? (
                <img
                  src={data.personalInfo.photo}
                  alt={data.personalInfo.fullName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#3d2f3b] flex items-center justify-center">
                  <span className="text-5xl font-light text-[#9f7aea]">
                    {data.personalInfo.fullName.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h1 className="text-[48px] font-light tracking-tight text-[#f0e6e9] leading-none">
                {data.personalInfo.fullName}
              </h1>
              <p className="text-sm text-[#9f7aea] mt-3 uppercase tracking-[0.2em] font-bold">
                {data.personalInfo.jobTitle}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[260px_1fr] gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9f7aea] mb-3">
                Contact
              </h3>
              <div className="space-y-1.5 text-[11px]">
                <p className="text-[#f0e6e9]/60">{data.personalInfo.email}</p>
                <p className="text-[#f0e6e9]/60">{data.personalInfo.phone}</p>
                {data.personalInfo.location && (
                  <p className="text-[#f0e6e9]/60">
                    {data.personalInfo.location}
                  </p>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9f7aea] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="border-l border-[#9f7aea]/20 pl-3"
                  >
                    <p className="text-[12px] font-bold">{edu.school}</p>
                    <p className="text-[11px] text-[#f0e6e9]/50">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#f0e6e9]/30">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9f7aea] mb-3">
                Competencies
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 border border-[#9f7aea]/30 text-[#9f7aea] rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-t border-[#9f7aea]/20 pt-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9f7aea] mb-3">
                Executive Summary
              </h3>
              <p className="text-[13px] text-[#f0e6e9]/60 leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div className="border-t border-[#9f7aea]/20 pt-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9f7aea] mb-4">
                Experience
              </h3>
              <div className="space-y-5">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="border-l-2 border-[#9f7aea] pl-5"
                  >
                    <p className="text-[16px] font-bold text-[#f0e6e9]">
                      {exp.position}
                    </p>
                    <p className="text-[10px] text-[#9f7aea] mt-1 mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#f0e6e9]/40 leading-relaxed"
                        >
                          • {h}
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

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORY: ENTRY LEVEL (Templates 46-50)
// Palette: Fresh & Clean — Light, airy, approachable
// Layout: Simple, organized, with clear hierarchy and modern touches
// ═══════════════════════════════════════════════════════════════════════════════

/** Template 46 — Fresh Blue */
export function entryBlue({ data }: TemplateProps) {
  return (
    <div className="h-full bg-white text-[#1e3a5f] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-40 bg-[#3b82f6]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)" }}
      />
      <div className="relative z-10">
        <div className="flex items-end justify-between mb-8 pt-4">
          <div>
            <h1 className="text-[48px] font-bold tracking-tight text-white leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-sm text-white/70 mt-3 uppercase tracking-[0.2em]">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div className="w-20 aspect-square overflow-hidden rounded-full border-4 border-white shadow-xl bg-white">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#dbeafe] flex items-center justify-center">
                <span className="text-3xl font-bold text-[#3b82f6]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-[#eff6ff] p-5 rounded-xl">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b82f6] mb-3">
                About Me
              </h3>
              <p className="text-[13px] text-[#44403c] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b82f6] mb-3 border-b-2 border-[#bfdbfe] pb-2">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold text-[#1e3a5f]">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#525252] mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-[#a8a29e] mt-1">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b82f6] mb-3 border-b-2 border-[#bfdbfe] pb-2">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 bg-[#3b82f6] text-white rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b82f6] mb-3 border-b-2 border-[#bfdbfe] pb-2">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="bg-[#fafafa] p-4 rounded-lg">
                    <p className="text-[14px] font-bold text-[#1e3a5f]">
                      {exp.position}
                    </p>
                    <p className="text-[10px] text-[#a8a29e] mt-1 mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#57534e] leading-relaxed"
                        >
                          • {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#3b82f6] text-white p-4 rounded-xl text-center">
              <p className="text-[10px] uppercase tracking-[0.2em] mb-1">
                Contact
              </p>
              <p className="text-[11px]">{data.personalInfo.email}</p>
              <p className="text-[11px]">{data.personalInfo.phone}</p>
              {data.personalInfo.location && (
                <p className="text-[11px]">{data.personalInfo.location}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Template 47 — Soft Mint */
export function entryMint({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#f0fdf4] text-[#14532d] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#22c55e]/5 rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-4 border-[#22c55e] shadow-xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#bbf7d0] flex items-center justify-center">
                <span className="text-4xl font-bold text-[#22c55e]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <h1 className="text-[48px] font-bold tracking-tight text-[#14532d] leading-none">
            {data.personalInfo.fullName}
          </h1>
          <p className="text-sm text-[#22c55e] mt-3 uppercase tracking-[0.2em] font-bold">
            {data.personalInfo.jobTitle}
          </p>
          <div className="flex justify-center gap-5 mt-3 text-[10px] text-[#65a30d]">
            <span>{data.personalInfo.email}</span>
            <span>•</span>
            <span>{data.personalInfo.phone}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#22c55e] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#44403c] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#22c55e] mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <p className="text-[12px] font-bold text-[#14532d]">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#525252]">{edu.degree}</p>
                    <p className="text-[10px] text-[#a8a29e]">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#22c55e] mb-3">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <p className="text-[14px] font-bold text-[#14532d]">
                      {exp.position}
                    </p>
                    <p className="text-[10px] text-[#a8a29e] mt-1 mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#57534e] leading-relaxed"
                        >
                          • {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#22c55e] mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 bg-[#22c55e] text-white rounded-full"
                  >
                    {skill}
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

/** Template 48 — Clean White */
export function entryWhite({ data }: TemplateProps) {
  return (
    <div className="h-full bg-white text-[#171717] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative z-10">
        <div className="flex items-center gap-7 mb-8">
          <div className="w-24 aspect-square overflow-hidden rounded-2xl bg-[#171717] shadow-xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div>
            <h1 className="text-[48px] font-bold tracking-tight text-[#171717] leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-base text-[#525252] mt-3 uppercase tracking-[0.15em] font-medium">
              {data.personalInfo.jobTitle}
            </p>
            <div className="flex gap-6 mt-3 text-[10px] text-[#a3a3a3]">
              <span>{data.personalInfo.email}</span>
              <span>{data.personalInfo.phone}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[240px_1fr] gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#171717] mb-3 border-b-2 border-[#171717] pb-2">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold">{edu.school}</p>
                    <p className="text-[11px] text-[#525252]">{edu.degree}</p>
                    <p className="text-[10px] text-[#a3a3a3]">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#171717] mb-3 border-b-2 border-[#171717] pb-2">
                Skills
              </h3>
              <div className="space-y-2">
                {data.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 bg-[#171717] rounded-full" />
                    <span className="text-[11px]">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-[#171717] pl-5">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#171717] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#404040] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#171717] mb-4 border-b-2 border-[#171717] pb-2">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="pb-4 border-b border-[#f5f5f5] last:border-0"
                  >
                    <div className="flex justify-between items-baseline">
                      <p className="text-[15px] font-bold text-[#171717]">
                        {exp.position}
                      </p>
                      <p className="text-[10px] text-[#a3a3a3] font-mono">
                        {exp.period}
                      </p>
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#525252] leading-relaxed"
                        >
                          • {h}
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

/** Template 49 — Warm Cream */
export function entryCream({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#fefce8] text-[#713f12] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-3 h-full bg-[#ca8a04]" />
      <div className="relative z-10 ml-5">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-[48px] font-bold tracking-tight text-[#713f12] leading-none">
              {data.personalInfo.fullName}
            </h1>
            <p className="text-sm text-[#ca8a04] mt-3 uppercase tracking-[0.2em] font-bold">
              {data.personalInfo.jobTitle}
            </p>
          </div>
          <div className="w-20 aspect-square overflow-hidden rounded-full border-4 border-[#ca8a04] shadow-xl">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#fde68a] flex items-center justify-center">
                <span className="text-3xl font-bold text-[#ca8a04]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ca8a04] mb-3 border-b border-[#fde68a] pb-2">
                About Me
              </h3>
              <p className="text-[13px] text-[#525252] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ca8a04] mb-3 border-b border-[#fde68a] pb-2">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold text-[#713f12]">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#525252]">{edu.degree}</p>
                    <p className="text-[10px] text-[#a8a29e]">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ca8a04] mb-3 border-b border-[#fde68a] pb-2">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <p className="text-[14px] font-bold text-[#713f12]">
                      {exp.position}
                    </p>
                    <p className="text-[10px] text-[#ca8a04] mt-1 mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#57534e] leading-relaxed"
                        >
                          • {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ca8a04] mb-3 border-b border-[#fde68a] pb-2">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 bg-[#ca8a04] text-white rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-[10px] text-[#78716c] space-y-1">
              <p>{data.personalInfo.email}</p>
              <p>{data.personalInfo.phone}</p>
              {data.personalInfo.location && (
                <p>{data.personalInfo.location}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Template 50 — Modern Gray */
export function entryGray({ data }: TemplateProps) {
  return (
    <div className="h-full bg-[#fafafa] text-[#262626] p-12 -mx-10 -mt-10 print:-mx-12 print:-mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-[#525252]" />
      <div className="relative z-10">
        <div className="text-center mb-8 pt-4">
          <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full border-2 border-[#525252]">
            {data.personalInfo.photo ? (
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#e5e5e5] flex items-center justify-center">
                <span className="text-3xl font-bold text-[#525252]">
                  {data.personalInfo.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <h1 className="text-[48px] font-bold tracking-tight text-[#262626] leading-none">
            {data.personalInfo.fullName}
          </h1>
          <p className="text-sm text-[#525252] mt-3 uppercase tracking-[0.2em]">
            {data.personalInfo.jobTitle}
          </p>
          <div className="flex justify-center gap-5 mt-3 text-[10px] text-[#737373]">
            <span>{data.personalInfo.email}</span>
            <span>•</span>
            <span>{data.personalInfo.phone}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="border-l-4 border-[#525252] pl-5">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#525252] mb-3">
                Profile
              </h3>
              <p className="text-[13px] text-[#404040] leading-[1.8]">
                {data.summary}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#525252] mb-3 border-b border-[#e5e5e5] pb-2">
                Education
              </h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-white p-4 rounded-sm shadow-sm"
                  >
                    <p className="text-[12px] font-bold text-[#262626]">
                      {edu.school}
                    </p>
                    <p className="text-[11px] text-[#525252]">{edu.degree}</p>
                    <p className="text-[10px] text-[#a3a3a3]">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#525252] mb-3 border-b border-[#e5e5e5] pb-2">
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="bg-white p-4 rounded-sm shadow-sm"
                  >
                    <p className="text-[14px] font-bold text-[#262626]">
                      {exp.position}
                    </p>
                    <p className="text-[10px] text-[#a3a3a3] mt-1 mb-2">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-[#525252] leading-relaxed"
                        >
                          • {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#525252] mb-3 border-b border-[#e5e5e5] pb-2">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 border border-[#525252] text-[#525252] rounded-sm"
                  >
                    {skill}
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
