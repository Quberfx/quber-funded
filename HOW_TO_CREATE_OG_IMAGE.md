# 📸 How to Create Open Graph Image for Social Media

## What is an Open Graph (OG) Image?

An Open Graph image is the preview image that appears when someone shares your website link on:
- Facebook
- LinkedIn
- Twitter
- WhatsApp
- Slack
- Discord
- Any social media platform

**Example**: When you paste `https://quberfunded.com` in Facebook, the OG image is what people see.

---

## ✅ Current Status

I've temporarily set your existing images as OG images:
- **Homepage**: Desktop_Quber_funded.jpg.jpeg
- **About**: about-us-page-template.png
- **Privacy**: privacy-header.png
- **Terms**: tnc-header-bg.png

These will work, but creating a dedicated OG image is better for social media.

---

## 🎯 OG Image Specifications

### Required Dimensions
- **Recommended**: 1200 x 630 pixels
- **Minimum**: 600 x 315 pixels
- **Aspect Ratio**: 1.91:1

### File Requirements
- **Format**: JPG or PNG (JPG preferred for smaller file size)
- **Max Size**: Under 8 MB (ideally under 1 MB)
- **Color**: RGB color mode

### Safe Zone
- Keep important text/logos within center 1200 x 600 pixels
- Edges may be cropped on some platforms

---

## 🎨 Design Guidelines

### What to Include
1. **Your Logo** - Quber Funded logo prominently displayed
2. **Tagline** - "Instant Funded Trading Accounts"
3. **Key Benefit** - "No Challenge Required"
4. **Visual Element** - Trading charts, graphs, or abstract design
5. **Brand Colors** - Use your blue (#0156FF) and dark colors

### What to Avoid
- Too much text (keep it minimal)
- Small fonts (minimum 60px for readability)
- Important content near edges
- Low contrast text
- Cluttered design

### Design Tips
- Use high contrast for readability
- Keep it simple and bold
- Make it recognizable at small sizes
- Ensure it looks good on both light and dark backgrounds
- Test on mobile (most shares happen on mobile)

---

## 🛠️ How to Create OG Image

### Option 1: Use Canva (Easiest - Free)

1. **Go to Canva**: https://www.canva.com
2. **Create Custom Size**: 1200 x 630 pixels
3. **Design Your Image**:
   - Add Quber Funded logo
   - Add text: "Instant Funded Trading Accounts"
   - Add subtext: "No Challenge Required | Start at $5000"
   - Use your brand colors
   - Add trading-related graphics
4. **Download**: As JPG (high quality)
5. **Optimize**: Use TinyPNG.com to compress

### Option 2: Use Figma (Professional - Free)

1. **Open Figma**: https://www.figma.com
2. **Create Frame**: 1200 x 630 pixels
3. **Design**: Similar to Canva
4. **Export**: As JPG or PNG

### Option 3: Use Photoshop (Advanced)

1. **New Document**: 1200 x 630 pixels, 72 DPI, RGB
2. **Design**: Your OG image
3. **Save for Web**: JPG, Quality 80-90%

### Option 4: Hire a Designer (Best Quality)

- **Fiverr**: $5-50 for OG image design
- **Upwork**: Professional designers
- **99designs**: Design contest

---

## 📐 Design Template Example

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│                  [Quber Logo]                       │
│                                                     │
│         Instant Funded Trading Accounts             │
│                                                     │
│          No Challenge Required | $5K-$200K          │
│                                                     │
│              [Trading Chart Graphic]                │
│                                                     │
│                quberfunded.com                      │
│                                                     │
└─────────────────────────────────────────────────────┘
        1200px x 630px
```

---

## 📝 Content Suggestions

### Homepage OG Image
**Main Text**: "Instant Funded Trading Accounts"
**Subtext**: "No Challenge Required | Start at $5000"
**Visual**: Trading charts or dashboard mockup

### About Page OG Image
**Main Text**: "About Quber Funded"
**Subtext**: "Empowering Traders with Real Capital"
**Visual**: Team photo or professional trading setup

### Generic OG Image (Use for all pages)
**Main Text**: "Quber Funded"
**Subtext**: "Prop Trading Firm | Instant Funding"
**Visual**: Brand elements and trading graphics

---

## 💾 Where to Save the Image

### Option 1: Public Folder (Recommended)
```
quber-funded/public/og-image.jpg
```

Then update references to:
```
https://quberfunded.com/og-image.jpg
```

### Option 2: Assets Folder
```
quber-funded/src/assets/images/og-image.jpg
```

Then update references to:
```
https://quberfunded.com/src/assets/images/og-image.jpg
```

---

## 🔧 How to Update After Creating Image

### Step 1: Save Image
Save your OG image as `og-image.jpg` in `/public/` folder

### Step 2: Update index.html
```html
<!-- Change this -->
<meta property="og:image" content="https://quberfunded.com/src/assets/images/Desktop_Quber_funded.jpg.jpeg" />

<!-- To this -->
<meta property="og:image" content="https://quberfunded.com/og-image.jpg" />
```

### Step 3: Update seo.js
```javascript
// In src/utils/seo.js
home: {
  // ... other properties
  ogImage: 'https://quberfunded.com/og-image.jpg',
}
```

### Step 4: Deploy
```bash
git add .
git commit -m "Add Open Graph image"
git push
```

---

## ✅ Testing Your OG Image

### Facebook Debugger
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter: `https://quberfunded.com`
3. Click: "Scrape Again"
4. Check: Image preview

### Twitter Card Validator
1. Go to: https://cards-dev.twitter.com/validator
2. Enter: `https://quberfunded.com`
3. Check: Card preview

### LinkedIn Post Inspector
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter: `https://quberfunded.com`
3. Check: Preview

### Generic OG Checker
- https://www.opengraph.xyz
- https://metatags.io

---

## 🎨 Quick Design with Existing Assets

You can create a simple OG image using your existing assets:

### Using Desktop_Quber_funded.jpg.jpeg
1. Open in any image editor
2. Resize to 1200 x 630 pixels (crop if needed)
3. Add text overlay:
   - "Instant Funded Trading Accounts"
   - "No Challenge Required"
4. Save as `og-image.jpg`

### Using Canva Quick Template
1. Search Canva for "Open Graph" templates
2. Customize with your:
   - Logo (quber_logo.svg)
   - Brand colors (#0156FF)
   - Text content
3. Download and use

---

## 📊 Different Images for Different Pages

You can have unique OG images for each page:

```javascript
// In src/utils/seo.js
export const pageSEO = {
  home: {
    ogImage: 'https://quberfunded.com/og-home.jpg',
  },
  about: {
    ogImage: 'https://quberfunded.com/og-about.jpg',
  },
  // etc.
}
```

---

## 🚨 Common Mistakes to Avoid

1. **Wrong Dimensions**: Must be 1200x630 or close to 1.91:1 ratio
2. **File Too Large**: Keep under 1 MB for fast loading
3. **Text Too Small**: Minimum 60px font size
4. **Wrong Format**: Use JPG or PNG only
5. **Not Testing**: Always test on multiple platforms
6. **Forgetting to Update Cache**: Use Facebook Debugger to refresh

---

## 💡 Pro Tips

### Tip 1: Create Multiple Versions
- Light background version
- Dark background version
- Use the one that works best

### Tip 2: Add Your URL
Include "quberfunded.com" in the image for brand recognition

### Tip 3: Keep It Simple
Less is more - one clear message is better than multiple

### Tip 4: Use Real Screenshots
If possible, use actual screenshots of your platform

### Tip 5: A/B Test
Create 2-3 versions and see which gets more clicks

---

## 📋 Checklist

Before finalizing your OG image:
- [ ] Dimensions are 1200 x 630 pixels
- [ ] File size is under 1 MB
- [ ] Logo is clearly visible
- [ ] Text is readable at small sizes
- [ ] Brand colors are used
- [ ] Saved in correct location
- [ ] References updated in code
- [ ] Tested on Facebook Debugger
- [ ] Tested on Twitter Card Validator
- [ ] Tested on LinkedIn Post Inspector
- [ ] Deployed to production

---

## 🎯 Quick Action Plan

### If You Have 5 Minutes
Use your existing Desktop_Quber_funded.jpg.jpeg - it's already set up!

### If You Have 30 Minutes
1. Open Canva
2. Create 1200x630 design
3. Add logo and text
4. Download and save to /public/
5. Update references
6. Deploy

### If You Have 2 Hours
1. Create custom design in Figma/Photoshop
2. Create unique images for each page
3. Optimize all images
4. Update all references
5. Test on all platforms
6. Deploy

---

## 📞 Need Help?

### Free Tools
- **Canva**: https://www.canva.com (easiest)
- **Figma**: https://www.figma.com (professional)
- **TinyPNG**: https://tinypng.com (compression)

### Paid Services
- **Fiverr**: $5-50 for custom design
- **Upwork**: Professional designers
- **99designs**: Design contests

### Testing Tools
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Inspector**: https://www.linkedin.com/post-inspector/

---

## ✨ Summary

**Current Status**: Your existing images are being used (they work!)

**Recommended Action**: Create a dedicated 1200x630 OG image when you have time

**Priority**: Medium (current setup works, but dedicated image is better)

**Time Required**: 30 minutes with Canva

**Impact**: Better social media presence and click-through rates

---

**Remember**: Your current setup works fine! Creating a dedicated OG image is an enhancement, not a requirement. Do it when you have time to make your social shares look even more professional.
