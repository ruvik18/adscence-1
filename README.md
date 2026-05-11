# Foliq — Implementation & Contribution Guide

This guide explains how to manage content (resumes and blog posts) for the Foliq platform.

## 📁 Project Structure

- `app/`: Next.js pages and layouts.
- `components/`: Reusable UI components.
- `data/`: The "database" of the application (static TypeScript files).
- `public/`: Static assets like icons and images.

---

## 📝 How to Add Blog Posts

Blog posts are stored in `data/blog.ts`. To add a new post:

1. Open `data/blog.ts`.
2. Add a new object to the `blogPosts` array using the following format:

```typescript
{
  slug: "your-blog-slug",
  title: "Your Catchy Title",
  excerpt: "A brief summary for the index page.",
  author: "Author Name",
  date: "Month Day, Year",
  category: "Category Name",
  readTime: "X min read",
  content: `
## Section Heading
Your content goes here. You can use markdown-like syntax:
- Bullet points
- **Bold text**
- *Italic text*
- [Link Text](URL)
  `
}
```

3. The system will automatically generate a new page at `/blog/your-blog-slug/`.

---

## 📄 How to Add 500+ Inspirations & Editable Resumes

Resume examples are stored in `data/resumes.ts`. You can add as many as you want (even 500+) simply by adding objects to the `resumeExamples` array.

### 1. Adding an Inspiration (Read-Only) Resume
If you have 500 PNG images you want to use as inspirations, you do **not** need to code them! 

1. **Host your images:** You can host 500 images for free (or extremely cheap) for 100k+ users by putting them in an AWS S3 Bucket, using Cloudinary, or uploading them to Imgur/ImgBB and copying the direct image links. 
2. **Add to `data/resumes.ts`:** Just provide the `imageUrl` and set `isEditable: false`. The system will automatically use the image as the thumbnail and the full preview!

```typescript
{
  id: "unique-inspiration-id",
  title: "Creative Director Resume",
  category: "Design",
  style: "Editorial",
  level: "Senior",
  colorAccent: "#333333",
  initials: "CD",
  description: "A beautiful editorial layout for design professionals.",
  tags: ["Creative", "Editorial"],
  isEditable: false,
  imageUrl: "https://your-image-host.com/path-to-your-resume.png" // <--- Add this!
}
```

### 2. Adding an Editable (Builder) Template
If you want to add one of your 50 editable templates, you need to do three things:

**Step A:** Add it to `data/resumes.ts` with `isEditable: true`.
```typescript
{
  id: "my-new-template",
  title: "My Editable Template",
  // ... other fields
  isEditable: true,
}
```

**Step B:** Provide the default data for it in `data/builder-templates.ts`:
```typescript
export const defaultResumeData: Record<string, ResumeData> = {
  "my-new-template": {
    personalInfo: { fullName: "John Doe", ... },
    // ... complete default data
  },
  // ...
};
```

**Step C:** Create the React Component for the template in `components/ResumeTemplates.tsx`, and map it in both `components/ResumeBuilder.tsx` and `components/ResumeThumbnail.tsx` within their `switch(templateId)` statements so the platform knows how to render it!

3. To add a new category to the filter list, add it to the `categories` array at the bottom of the same file.

---

## 🖼️ Managing Images

- **Favicon**: Replace `public/favicon.png` with your logo.
- **OG Images**: Social media preview images should be placed in `public/og-image.jpg`.
- **Resume Previews**: Currently, the system uses typography-based placeholders. To use real images, you can update the `ResumeGrid.tsx` component to accept an `imageUrl` field.

---

## 🚀 Deployment

The project is built with Next.js and is ready for one-click deployment on **Vercel** or **Netlify**.

1. Push your code to a GitHub repository.
2. Connect the repository to Vercel.
3. Vercel will automatically detect Next.js and deploy it.

---

## 🛠️ Technical Notes

- **Hydration**: The project uses `suppressHydrationWarning` on the `<html>` tag to prevent errors from browser extensions.
- **Animations**: Uses `framer-motion` for smooth entry effects. If you add new sections, wrap them in the `<AnimateIn>` component.
- **Responsiveness**: Built with Tailwind CSS. Use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` patterns to ensure mobile compatibility.
