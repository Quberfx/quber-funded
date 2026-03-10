# 🎮 SEO Commands & Quick Actions

## 🚀 Deployment Commands

### Deploy to Vercel
```bash
cd quber-funded
git add .
git commit -m "Add comprehensive SEO implementation"
git push
```

### Validate SEO Files
```bash
npm run seo:validate
```

### Build for Production
```bash
npm run build
```

### Preview Build Locally
```bash
npm run preview
```

---

## 🔍 Verification Commands

### Check if Sitemap is Accessible
```bash
curl -I https://quberfunded.com/sitemap.xml
```

### Check if Robots.txt is Accessible
```bash
curl https://quberfunded.com/robots.txt
```

### Check DNS Propagation (TXT Record)
```bash
dig quberfunded.com TXT
```

### Check DNS Propagation (A Record)
```bash
dig quberfunded.com A
```

### Check Page Headers
```bash
curl -I https://quberfunded.com/
```

---

## 📊 SEO Testing Commands

### Test Mobile-Friendliness
Visit: https://search.google.com/test/mobile-friendly?url=https://quberfunded.com

### Test Page Speed
Visit: https://pagespeed.web.dev/?url=https://quberfunded.com

### Validate Sitemap
Visit: https://www.xml-sitemaps.com/validate-xml-sitemap.html

### Validate Structured Data
Visit: https://validator.schema.org

### Check Indexing Status
Google Search: `site:quberfunded.com`

### Check Specific Page Indexing
Google Search: `site:quberfunded.com/about-us`

---

## 🛠️ Development Commands

### Start Development Server
```bash
npm run dev
```

### Run Linter
```bash
npm run lint
```

### Fix Linting Issues
```bash
npm run lint -- --fix
```

---

## 📝 Content Management

### Add New Page to Sitemap
1. Edit `public/sitemap.xml`
2. Add new `<url>` block:
```xml
<url>
  <loc>https://quberfunded.com/new-page</loc>
  <lastmod>2026-03-09</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
```

### Add SEO Config for New Page
1. Edit `src/utils/seo.js`
2. Add to `pageSEO` object:
```javascript
newPage: {
  title: 'Page Title - QuberFunded',
  description: 'Page description here',
  keywords: 'keyword1, keyword2, keyword3',
  canonical: 'https://quberfunded.com/new-page',
}
```

### Add SEO to New Page Component
```javascript
import SEO from '../components/SEO';
import { pageSEO } from '../utils/seo';

export default function NewPage() {
  return (
    <div>
      <SEO {...pageSEO.newPage} />
      {/* Page content */}
    </div>
  );
}
```

---

## 🔗 Google Search Console Commands

### Submit Sitemap
1. Go to: https://search.google.com/search-console
2. Select property: quberfunded.com
3. Navigate to: Sitemaps
4. Enter: `sitemap.xml`
5. Click: Submit

### Request Indexing for URL
1. Go to: https://search.google.com/search-console
2. Use URL Inspection tool
3. Enter URL: `https://quberfunded.com/page`
4. Click: Request Indexing

### Check Coverage
1. Go to: https://search.google.com/search-console
2. Navigate to: Coverage
3. Review: Valid, Error, Excluded pages

---

## 📈 Analytics Commands

### Check Organic Traffic (Google Analytics)
1. Go to: https://analytics.google.com
2. Navigate to: Acquisition → All Traffic → Channels
3. Select: Organic Search

### Check Keyword Performance (Search Console)
1. Go to: https://search.google.com/search-console
2. Navigate to: Performance
3. View: Queries, Pages, Countries, Devices

---

## 🔧 Troubleshooting Commands

### Clear Browser Cache
- Chrome: `Cmd+Shift+Delete` (Mac) or `Ctrl+Shift+Delete` (Windows)
- Firefox: `Cmd+Shift+Delete` (Mac) or `Ctrl+Shift+Delete` (Windows)

### Force Refresh Page
- `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

### View Page Source
- `Cmd+Option+U` (Mac) or `Ctrl+U` (Windows)

### Open Developer Console
- `Cmd+Option+I` (Mac) or `F12` (Windows)

### Check for JavaScript Errors
1. Open Developer Console
2. Go to Console tab
3. Look for red errors

---

## 📊 Monitoring Commands

### Weekly SEO Check
```bash
# 1. Check indexing
# Google: site:quberfunded.com

# 2. Check Search Console
# Visit: https://search.google.com/search-console

# 3. Check Analytics
# Visit: https://analytics.google.com

# 4. Check for errors
# Search Console → Coverage
```

### Monthly SEO Audit
```bash
# 1. Update sitemap lastmod dates
# Edit: public/sitemap.xml

# 2. Check all pages load
# Test each URL manually

# 3. Verify meta tags
# View source for each page

# 4. Check backlinks
# Use: Ahrefs, SEMrush, or Moz

# 5. Review keyword rankings
# Use: Search Console or rank tracker
```

---

## 🎯 Quick Actions

### Update Homepage SEO
```bash
# Edit: src/utils/seo.js
# Find: pageSEO.home
# Update: title, description, keywords
# Deploy: git push
```

### Add Blog Post
```bash
# 1. Create: src/pages/blog/PostName.jsx
# 2. Add SEO: import SEO component
# 3. Update: src/utils/seo.js
# 4. Update: public/sitemap.xml
# 5. Deploy: git push
```

### Fix Crawl Error
```bash
# 1. Identify error in Search Console
# 2. Fix the issue (404, redirect, etc.)
# 3. Deploy fix
# 4. Request re-crawl in Search Console
```

---

## 🔐 Security Commands

### Check Security Headers
```bash
curl -I https://quberfunded.com/ | grep -E "(X-|Content-Security)"
```

### Check SSL Certificate
```bash
openssl s_client -connect quberfunded.com:443 -servername quberfunded.com
```

### Check for Mixed Content
1. Open page in browser
2. Open Developer Console
3. Look for mixed content warnings

---

## 📱 Mobile Testing

### Test on Real Device
1. Open: https://quberfunded.com on phone
2. Check: Layout, speed, functionality

### Test with Chrome DevTools
1. Open: Chrome DevTools (F12)
2. Click: Device toolbar icon
3. Select: Device type
4. Test: Responsiveness

### Test with Mobile-Friendly Tool
Visit: https://search.google.com/test/mobile-friendly?url=https://quberfunded.com

---

## 🎨 Image Optimization

### Optimize Images for Web
```bash
# Using ImageOptim (Mac)
# Drag and drop images to optimize

# Using TinyPNG (Online)
# Visit: https://tinypng.com
# Upload and download optimized images
```

### Convert to WebP
```bash
# Using cwebp (if installed)
cwebp input.jpg -o output.webp -q 80
```

---

## 📊 Reporting Commands

### Generate SEO Report
```bash
# 1. Export data from Search Console
# Performance → Export

# 2. Export data from Analytics
# Acquisition → Organic Search → Export

# 3. Check backlinks
# Use: Ahrefs, SEMrush, or Moz

# 4. Compile in spreadsheet
```

---

## 🔄 Backup Commands

### Backup SEO Files
```bash
# Create backup directory
mkdir seo-backup-$(date +%Y%m%d)

# Copy SEO files
cp public/sitemap.xml seo-backup-$(date +%Y%m%d)/
cp public/robots.txt seo-backup-$(date +%Y%m%d)/
cp src/utils/seo.js seo-backup-$(date +%Y%m%d)/
cp src/components/SEO.jsx seo-backup-$(date +%Y%m%d)/
```

---

## 🎓 Learning Commands

### Read Documentation
```bash
# Main overview
cat README_SEO.md

# Quick start
cat QUICK_SEO_SETUP.md

# Full guide
cat SEO_IMPLEMENTATION_GUIDE.md

# Checklist
cat SEO_CHECKLIST.md
```

---

## 🚨 Emergency Commands

### Rollback Deployment (Vercel)
1. Go to: Vercel Dashboard
2. Select: Project
3. Navigate to: Deployments
4. Find: Previous working deployment
5. Click: Promote to Production

### Temporarily Block Crawlers
```bash
# Edit: public/robots.txt
# Add: Disallow: /
# Deploy immediately
# Remember to revert later!
```

---

## 📞 Support Commands

### Get Help
```bash
# Google Search Console Help
# Visit: https://support.google.com/webmasters

# Vercel Support
# Visit: https://vercel.com/support

# Check documentation
cat README_SEO.md
```

---

## ✅ Daily Checklist Commands

### Morning Routine
```bash
# 1. Check Search Console for errors
# 2. Check Analytics for traffic
# 3. Monitor keyword rankings
# 4. Respond to any alerts
```

### Weekly Routine
```bash
# 1. Review Search Console performance
# 2. Check new backlinks
# 3. Update content if needed
# 4. Build 1-2 new backlinks
```

### Monthly Routine
```bash
# 1. Comprehensive SEO audit
# 2. Update sitemap dates
# 3. Publish 2-4 blog posts
# 4. Review and optimize low-performing pages
```

---

## 🎯 Quick Reference

| Action | Command/URL |
|--------|-------------|
| Deploy | `git push` |
| Validate SEO | `npm run seo:validate` |
| Check Sitemap | `curl https://quberfunded.com/sitemap.xml` |
| Search Console | https://search.google.com/search-console |
| Check Indexing | Google: `site:quberfunded.com` |
| Test Mobile | https://search.google.com/test/mobile-friendly |
| Test Speed | https://pagespeed.web.dev |
| Validate Schema | https://validator.schema.org |

---

## 💡 Pro Tips

### Use Aliases for Common Commands
Add to your `.bashrc` or `.zshrc`:
```bash
alias seo-deploy='cd quber-funded && git add . && git commit -m "SEO update" && git push'
alias seo-check='curl -I https://quberfunded.com/sitemap.xml && curl -I https://quberfunded.com/robots.txt'
alias seo-index='echo "Check: site:quberfunded.com in Google"'
```

### Bookmark Important URLs
- Search Console: https://search.google.com/search-console
- Analytics: https://analytics.google.com
- PageSpeed: https://pagespeed.web.dev
- Mobile Test: https://search.google.com/test/mobile-friendly

---

**Last Updated**: March 9, 2026  
**Quick Help**: See `README_SEO.md` for overview  
**Full Guide**: See `SEO_IMPLEMENTATION_GUIDE.md`
