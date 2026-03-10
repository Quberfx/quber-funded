# GoDaddy DNS Setup Guide for QuberFunded.com

## 🎯 Purpose
This guide helps you verify your domain with Google Search Console using GoDaddy DNS settings.

---

## 📋 Prerequisites
- GoDaddy account access
- Domain: quberfunded.com
- Google Search Console account

---

## 🚀 Step-by-Step Instructions

### Step 1: Start Google Search Console Verification

1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Select "Domain" (not URL prefix)
4. Enter: `quberfunded.com`
5. Click "Continue"

Google will show you a TXT record like:
```
google-site-verification=abc123xyz789example
```

**Important**: Keep this window open! You'll need this code.

---

### Step 2: Log into GoDaddy

1. Go to https://www.godaddy.com
2. Sign in to your account
3. Click on your profile icon (top right)
4. Select "My Products"

---

### Step 3: Access DNS Management

1. Find "quberfunded.com" in your domains list
2. Click the three dots (⋮) or "Manage" button
3. Click "DNS" or "Manage DNS"
4. You should see your DNS records page

---

### Step 4: Add TXT Record for Google Verification

1. Scroll down to the "Records" section
2. Click "Add" or "Add New Record"
3. Select "TXT" from the Type dropdown

Fill in the fields:
- **Type**: TXT
- **Name**: @ (or leave blank - both work)
- **Value**: Paste the entire verification code from Google
  - Example: `google-site-verification=abc123xyz789example`
- **TTL**: 1 Hour (or 3600 seconds)

4. Click "Save" or "Add Record"

---

### Step 5: Wait for DNS Propagation

DNS changes can take time:
- **Minimum**: 10-15 minutes
- **Typical**: 1-2 hours
- **Maximum**: 24-48 hours

**Pro Tip**: Usually works within 30 minutes.

---

### Step 6: Verify in Google Search Console

1. Go back to Google Search Console verification window
2. Click "Verify"

**If successful**: ✅ You'll see "Ownership verified"

**If failed**: 
- Wait longer (DNS not propagated yet)
- Check TXT record is correct
- Try again in 30 minutes

---

## 🔍 How to Check DNS Propagation

### Method 1: Online Tool
1. Go to https://dnschecker.org
2. Enter: `quberfunded.com`
3. Select "TXT" from dropdown
4. Click "Search"
5. Look for your Google verification code

### Method 2: Command Line (Mac/Linux)
```bash
dig quberfunded.com TXT
```

Look for your verification code in the results.

### Method 3: Command Line (Windows)
```cmd
nslookup -type=TXT quberfunded.com
```

---

## 📊 Your Current DNS Records

After adding the TXT record, your DNS should include:

### Essential Records
```
Type    Name    Value                           TTL
----    ----    -----                           ---
A       @       [Vercel IP]                     1 Hour
CNAME   www     cname.vercel-dns.com           1 Hour
TXT     @       google-site-verification=...    1 Hour
```

**Note**: Your A and CNAME records should already be set up for Vercel.

---

## 🛠️ Vercel DNS Configuration (If Not Set Up)

If your domain isn't connected to Vercel yet:

### In Vercel Dashboard:
1. Go to your project
2. Click "Settings" → "Domains"
3. Add domain: `quberfunded.com`
4. Add domain: `www.quberfunded.com`
5. Vercel will show you DNS records to add

### In GoDaddy:
Add these records (Vercel will provide exact values):

```
Type    Name    Value
----    ----    -----
A       @       76.76.21.21 (example - use Vercel's IP)
CNAME   www     cname.vercel-dns.com
```

---

## ✅ Verification Checklist

After adding TXT record:
- [ ] TXT record added in GoDaddy
- [ ] Waited at least 30 minutes
- [ ] Checked DNS propagation
- [ ] Clicked "Verify" in Search Console
- [ ] Received verification confirmation

---

## 🆘 Troubleshooting

### Issue: Verification Failed

**Possible Causes:**
1. DNS not propagated yet → Wait longer
2. Wrong TXT value → Double-check the code
3. Wrong Name field → Should be "@" or blank
4. Typo in verification code → Copy-paste carefully

**Solutions:**
- Wait 1-2 hours and try again
- Delete and re-add the TXT record
- Clear your browser cache
- Try verification in incognito mode

### Issue: Can't Find DNS Management

**Solution:**
1. Go to https://dcc.godaddy.com/manage/
2. Find your domain
3. Click "DNS" button directly

### Issue: Multiple TXT Records

**This is OK!** You can have multiple TXT records:
- Google verification
- SPF records (email)
- DKIM records (email)
- Other verifications

Don't delete existing TXT records unless you're sure they're not needed.

### Issue: TTL Too Long

**Solution:**
- Change TTL to 1 Hour (3600 seconds)
- Shorter TTL = faster propagation
- Can change back to longer TTL after verification

---

## 📧 Email Configuration (If Applicable)

If you use GoDaddy email, make sure not to delete these records:
- MX records (mail exchange)
- SPF records (TXT starting with "v=spf1")
- DKIM records (TXT with long key)

---

## 🔐 Security Best Practices

### Recommended DNS Records for Security:

#### SPF Record (Email Security)
```
Type: TXT
Name: @
Value: v=spf1 include:_spf.google.com ~all
```

#### DMARC Record (Email Security)
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:admin@quberfunded.com
```

**Note**: Only add these if you use email with your domain.

---

## 📱 Mobile App Deep Links (Future)

If you plan to add mobile apps later:

```
Type: TXT
Name: @
Value: apple-app-site-association=...
```

---

## 🌐 Subdomain Setup (If Needed)

To add subdomains like `blog.quberfunded.com`:

```
Type: CNAME
Name: blog
Value: cname.vercel-dns.com
TTL: 1 Hour
```

---

## 📊 DNS Record Priority

| Priority | Record Type | Purpose |
|----------|-------------|---------|
| Critical | A / CNAME | Website access |
| Critical | TXT (Google) | Search Console |
| High | MX | Email delivery |
| Medium | SPF/DKIM | Email security |
| Low | DMARC | Email reporting |

---

## 🔄 After Verification

Once Google Search Console is verified:

1. **Keep the TXT record** - Don't delete it!
2. Submit your sitemap: `sitemap.xml`
3. Request indexing for main pages
4. Monitor weekly for issues

---

## 📞 GoDaddy Support

If you need help:
- **Phone**: 1-480-505-8877
- **Chat**: Available in GoDaddy dashboard
- **Help**: https://www.godaddy.com/help

---

## 🎓 Additional Resources

### GoDaddy Documentation
- [Managing DNS](https://www.godaddy.com/help/manage-dns-680)
- [Add TXT Record](https://www.godaddy.com/help/add-a-txt-record-19232)
- [DNS Propagation](https://www.godaddy.com/help/what-is-dns-propagation-and-how-long-does-it-take-16660)

### Google Documentation
- [Verify Domain Ownership](https://support.google.com/webmasters/answer/9008080)
- [DNS Verification](https://support.google.com/webmasters/answer/9008080#domain_name_verification)

---

## ✨ Quick Reference

### TXT Record Format
```
Type: TXT
Name: @
Value: google-site-verification=YOUR_CODE_HERE
TTL: 1 Hour
```

### Verification URL
https://search.google.com/search-console

### DNS Checker
https://dnschecker.org

---

## 📝 Notes Section

**Verification Code**: ___________________________________

**Date Added**: _______________

**Verification Status**: ⬜ Pending  ⬜ Verified

**DNS Propagation Checked**: ⬜ Yes  ⬜ No

**Issues Encountered**: 
- 
- 

**Resolution**: 
- 
- 

---

**Last Updated**: March 9, 2026  
**Domain**: quberfunded.com  
**Registrar**: GoDaddy  
**Hosting**: Vercel

---

## 🎉 Success!

Once verified, you'll be able to:
- ✅ Submit sitemaps
- ✅ Request indexing
- ✅ Monitor search performance
- ✅ Fix crawl errors
- ✅ Track keyword rankings

**Next Step**: Submit your sitemap at `https://quberfunded.com/sitemap.xml`
