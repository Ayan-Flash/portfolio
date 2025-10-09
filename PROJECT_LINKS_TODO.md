# 🔗 Project Links - Quick Update Guide

## ⚠️ ACTION REQUIRED

Replace the placeholder links in `app/components/projects.tsx` with your actual project URLs.

---

## 📍 Location
**File**: `app/components/projects.tsx`  
**Lines**: 9-30 (approximately)

---

## 🎯 Current Placeholder Links

```typescript
const projects = [
  {
    title: "Neo-ride: A Travel Booking Platform",
    description: "A modern travel booking platform with real-time inventory management and seamless checkout experience.",
    tags: ["Vite", "TypeScript", "Stripe", "Tailwind"],
    link: "https://neoride.example.com", // ← REPLACE THIS
  },
  {
    title: "Project Management Tool",
    description: "Collaborative workspace for teams to plan, track, and manage projects efficiently.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    link: "https://projectmgmt.example.com", // ← REPLACE THIS
  },
  {
    title: "AI Content Generator",
    description: "AI-powered platform that helps creators generate high-quality content in seconds.",
    tags: ["Next.js", "OpenAI", "Supabase", "Vercel"],
    link: "https://aicontent.example.com", // ← REPLACE THIS
  },
  {
    title: "AgroWatch: Smart Agriculture Monitoring",
    description: "Web-based platform for monitoring and managing agricultural activities using IoT devices.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "https://agrowatch.example.com", // ← REPLACE THIS
  },
]
```

---

## ✏️ How to Update

1. Open `f:\REACT\app\components\projects.tsx`
2. Find the `projects` array
3. Replace each `link: "https://...example.com"` with your actual project URL
4. Save the file
5. The changes will appear immediately in dev mode

---

## 💡 Tips

### If project is not deployed yet:
- Use GitHub repo link: `https://github.com/yourusername/project`
- Use demo video link: `https://youtube.com/watch?v=...`
- Use design mockup link: `https://figma.com/file/...`

### If project has multiple deployments:
- Use the production/live URL
- Avoid staging or development URLs

### Link format:
- Always include `https://`
- Ensure links open in new tab (already configured)
- Test each link after updating

---

## 🎨 Optional: Customize Projects

You can also update:
- **Title**: Change project names
- **Description**: Adjust project descriptions
- **Tags**: Add/remove tech stack badges
- **Order**: Rearrange projects by importance

---

## ✅ After Updating

Test each project card:
1. Hover over the card → Should show neon glow
2. Click "View Project" button → Should open your live site
3. Verify on mobile → Buttons should be easily tappable

---

## 📝 Example with Real Links

```typescript
const projects = [
  {
    title: "Neo-ride: A Travel Booking Platform",
    description: "A modern travel booking platform with real-time inventory management and seamless checkout experience.",
    tags: ["Vite", "TypeScript", "Stripe", "Tailwind"],
    link: "https://neoride-travel.vercel.app", // Real deployment
  },
  {
    title: "Project Management Tool",
    description: "Collaborative workspace for teams to plan, track, and manage projects efficiently.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    link: "https://github.com/yourusername/project-manager", // GitHub repo
  },
]
```

---

## 🚀 Once Updated

Your project cards will now:
- ✅ Direct users to your actual work
- ✅ Showcase live applications
- ✅ Build credibility with working links
- ✅ Increase engagement and conversions

**Don't forget to update these links before deploying to production! 🎯**
