import { defaultResumeData } from "@/data/builder-templates";
import { TemplateRegistry, CleanTemplate } from "./ResumeTemplates";

interface Props {
  templateId: string;
}

export default function ResumeThumbnail({ templateId }: Props) {
  const data =
    defaultResumeData[templateId] ||
    defaultResumeData["software-engineer-clean"];

  const TemplateComponent = TemplateRegistry[templateId] || CleanTemplate;

  return (
    <div className="w-full h-full relative overflow-hidden bg-white flex items-center justify-center">
      {/* Dynamic container that represents a scaled view */}
      <div
        className="absolute inset-0 origin-top-left pointer-events-none"
        style={{
          width: "400%",
          height: "400%",
          transform: "scale(0.25)",
          backgroundColor: "white",
        }}
      >
        <div className="w-full h-full p-8">
          <TemplateComponent data={data} />
        </div>
      </div>
    </div>
  );
}
