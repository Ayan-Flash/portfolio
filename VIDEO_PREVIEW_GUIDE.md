# 🎥 Video Preview Setup Guide

## 📍 Overview

Your project cards now support **video previews on hover**! When users hover over a project card, a video demo will play automatically. When they move away, it shows the static preview image.

---

## 📂 File Structure

All videos and preview images should be placed in:
```
public/videos/
```

Current files:
- ✅ `neoride.png` - Preview image for Neo-ride project
- ✅ `agriclututural.png` - Preview image for AgroWatch project
- ✅ `hero-background.mp4` - Hero section background video

---

## 🎬 How It Works

### Default State (No Hover)
- Shows static preview image (`previewImage`)
- Video is loaded but not playing
- Clean, professional look

### Hover State
- Static image fades out
- Video starts playing automatically
- Neon overlay appears
- Play indicator shows briefly
- Smooth transition between states

### When Hover Ends
- Video pauses and resets to start
- Static image fades back in
- Returns to default state

---

## 📝 Adding Your Video Files

### Step 1: Prepare Your Videos

**Recommended Specs:**
- **Format**: MP4 (H.264 codec)
- **Duration**: 5-15 seconds
- **Resolution**: 1920x1080 (or 16:9 aspect ratio)
- **File Size**: Under 5MB per video (optimize for web)
- **Frame Rate**: 30fps
- **Quality**: High enough to showcase, but web-optimized

**Video Content Ideas:**
- Screen recording of project in action
- Quick feature demonstration
- UI/UX walkthrough
- Key functionality showcase
- Animated preview of the app

### Step 2: Add Videos to Project Folder

Place your video files in `public/videos/`:

```
public/videos/
├── neoride.png              ✅ Already exists
├── neoride-demo.mp4         ⚠️ ADD THIS
├── agriclututural.png       ✅ Already exists
├── agro-demo.mp4            ⚠️ ADD THIS
├── project-placeholder.png  ⚠️ ADD THIS (or use existing image)
├── project-demo.mp4         ⚠️ ADD THIS
├── ai-placeholder.png       ⚠️ ADD THIS
├── ai-demo.mp4             ⚠️ ADD THIS
└── hero-background.mp4      ✅ Already exists
```

### Step 3: Update Project Data

Open `app/components/projects.tsx` and verify the paths:

```typescript
const projects = [
  {
    title: "Neo-ride: A Travel Booking Platform",
    previewImage: "/videos/neoride.png",        // ✅ Correct path
    videoPreview: "/videos/neoride-demo.mp4",   // ⚠️ Add this file
    // ... rest of project data
  },
  {
    title: "AgroWatch: Smart Agriculture Monitoring",
    previewImage: "/videos/agriclututural.png", // ✅ Correct path
    videoPreview: "/videos/agro-demo.mp4",      // ⚠️ Add this file
    // ... rest of project data
  },
]
```

---

## 🛠️ Video Optimization Tips

### Using FFmpeg (Command Line)

**Compress video for web:**
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k output.mp4
```

**Resize to 1080p:**
```bash
ffmpeg -i input.mp4 -vf scale=1920:1080 -c:v libx264 -crf 23 output.mp4
```

**Cut video length (first 10 seconds):**
```bash
ffmpeg -i input.mp4 -t 10 -c copy output.mp4
```

**Remove audio (reduce file size):**
```bash
ffmpeg -i input.mp4 -an -c:v copy output.mp4
```

### Online Tools

- **CloudConvert** - https://cloudconvert.com/mp4-converter
- **Online-Convert** - https://www.online-convert.com/
- **Compress Video** - https://www.compressvideo.io/

---

## 🎨 Creating Preview Images

### Option 1: Extract from Video
```bash
ffmpeg -i video.mp4 -ss 00:00:02 -vframes 1 preview.png
```

### Option 2: Take Screenshot
- Open your project in browser
- Take a screenshot of the main page
- Crop to 16:9 aspect ratio
- Optimize/compress the image

### Option 3: Use Design Tool
- Create a graphic in Figma/Canva
- Export as PNG
- Recommended size: 1920x1080px

---

## ✅ Current Project Mapping

### Project 1: Neo-ride
- **Preview Image**: `/videos/neoride.png` ✅ EXISTS
- **Video**: `/videos/neoride-demo.mp4` ⚠️ NEEDS TO BE ADDED
- **Suggested video**: Screen recording of booking flow

### Project 2: Project Management Tool
- **Preview Image**: `/videos/project-placeholder.png` ⚠️ NEEDS TO BE ADDED
- **Video**: `/videos/project-demo.mp4` ⚠️ NEEDS TO BE ADDED
- **Suggested video**: Kanban board in action

### Project 3: AI Content Generator
- **Preview Image**: `/videos/ai-placeholder.png` ⚠️ NEEDS TO BE ADDED
- **Video**: `/videos/ai-demo.mp4` ⚠️ NEEDS TO BE ADDED
- **Suggested video**: AI generating content in real-time

### Project 4: AgroWatch
- **Preview Image**: `/videos/agriclututural.png` ✅ EXISTS
- **Video**: `/videos/agro-demo.mp4` ⚠️ NEEDS TO BE ADDED
- **Suggested video**: Dashboard with IoT data visualization

---

## 🎯 Quick Start Checklist

- [ ] Prepare 4 video files (one per project)
- [ ] Optimize videos for web (under 5MB each)
- [ ] Add videos to `public/videos/` folder
- [ ] Create/add 2 missing preview images
- [ ] Update paths in `projects.tsx` if needed
- [ ] Test hover functionality on each card
- [ ] Verify videos play smoothly
- [ ] Check on mobile devices

---

## 🔍 Testing Your Videos

### Desktop Testing:
1. Open portfolio in browser
2. Scroll to Projects section
3. Hover over each project card
4. Verify video starts playing
5. Move mouse away
6. Verify video stops and image shows

### Mobile Testing:
- Videos won't autoplay on mobile (browser restriction)
- Preview images will always show
- This is expected behavior and works well

---

## 🎨 Fallback Behavior

If video file is missing or fails to load:
- Preview image will always show
- No errors in console
- Card still looks professional
- Hover effects still work

---

## 📏 Aspect Ratio

All videos and images should be **16:9** aspect ratio to match the `aspect-video` container.

**Examples:**
- 1920 x 1080
- 1280 x 720
- 854 x 480

---

## 🚀 Performance Notes

- Videos are lazy-loaded (only when in viewport)
- Muted by default (allows autoplay)
- Loop continuously while hovering
- Reset to start when hover ends
- No video controls shown (cleaner look)

---

## 🎨 Customization Options

### Change Video Container Style

In `projects.tsx`, modify the video section:

```tsx
<div className="relative aspect-video overflow-hidden bg-black/50">
  // Change background color, add border, etc.
</div>
```

### Adjust Transition Speed

```tsx
style={{ opacity: isHovered ? 1 : 0 }}
// Change in className: transition-opacity duration-500
```

### Modify Play Indicator

```tsx
{/* Play indicator */}
<div className="absolute inset-0 flex items-center justify-center">
  // Customize play button appearance
</div>
```

---

## ❓ Troubleshooting

### Video Won't Play
- Check file path is correct
- Verify video format is MP4
- Ensure video file exists in `public/videos/`
- Check browser console for errors

### Video Stutters
- File size too large - compress it
- Too high resolution - resize to 1080p
- Try different encoding settings

### Image Not Showing
- Verify image path matches exactly
- Check file extension (png vs jpg)
- Ensure image exists in folder

### Slow Loading
- Optimize video file size
- Use web-optimized MP4
- Consider using video CDN

---

## 📱 Mobile Considerations

- Videos might not autoplay on mobile browsers
- Preview images will be primary visual
- This is intentional and works well
- Consider adding "tap to play" for mobile

---

## 🎉 Benefits of Video Previews

✅ **More engaging** - Captures attention immediately  
✅ **Shows functionality** - Demonstrates actual features  
✅ **Professional look** - Modern, interactive portfolio  
✅ **Better conversions** - Visitors stay longer  
✅ **Showcases skills** - Shows your projects in action  

---

## 📞 Next Steps

1. **Record videos** of your projects in action
2. **Optimize** for web (under 5MB each)
3. **Add to** `public/videos/` folder
4. **Test** hover functionality
5. **Deploy** and show off! 🚀

---

**Your project cards are now ready for video previews! Just add your video files and watch the magic happen! ✨**
