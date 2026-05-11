# 🚀 Adding a New Editable Template (Beginner's Guide)

Adding a new editable template to your Foliq is now super easy! Follow these 3 simple steps:

---

## 1. Create your Template Component
Open `components/ResumeTemplates.tsx` and copy-paste this "Beginner Template" block at the end (just above the `TemplateRegistry`):

```tsx
export function MyAwesomeTemplate({ data }: TemplateProps) {
  return (
    <div className="p-8 bg-white border-2 border-black">
      <h1 className="text-4xl font-bold">{data.personalInfo.fullName}</h1>
      <p className="text-xl text-gray-600">{data.personalInfo.jobTitle}</p>
      
      {/* Add more sections here using {data.experience}, {data.skills}, etc. */}
    </div>
  );
}
```

---

## 2. Register your Template
Scroll to the very bottom of `components/ResumeTemplates.tsx` to the `TemplateRegistry` and add your template's unique ID:

```tsx
export const TemplateRegistry: Record<string, React.FC<TemplateProps>> = {
  // ... existing templates ...
  "my-new-template-id": MyAwesomeTemplate, // 👈 Add this line
};
```

---

## 3. Add to the Gallery
Open `data/resumes.ts` and add an entry for your new template:

```tsx
  {
    id: "my-new-template-id", // 👈 This must match the ID in the registry!
    title: "My New Design",
    category: "Design",
    style: "Bold & Custom",
    level: "All Levels",
    colorAccent: "#000000",
    initials: "NEW",
    description: "A brand new editable template for everyone.",
    tags: ["Creative", "New"],
    isEditable: true, // 👈 Set this to true to make it editable!
  },
```

---

## 💡 About Thumbnails
**You don't need to upload a PNG thumbnail!** 

Because your template is "Editable", the platform will automatically render a **live preview** of your code as the thumbnail in the gallery. It’s always up-to-date with your latest code changes.

---

## ✅ That's it!
Your new template will now automatically appear in the gallery and work perfectly in the Resume Builder. Happy coding! 🎨
