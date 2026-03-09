// SEO utility functions for dynamic meta tag management

export const updateMetaTags = ({ title, description, keywords, canonical, ogImage }) => {
  // Update title
  if (title) {
    document.title = title;
  }

  // Update or create meta tags
  const metaTags = [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: ogImage || 'https://quberfunded.com/og-image.jpg' },
    { property: 'og:url', content: canonical || window.location.href },
    { property: 'twitter:title', content: title },
    { property: 'twitter:description', content: description },
    { property: 'twitter:image', content: ogImage || 'https://quberfunded.com/og-image.jpg' },
  ];

  metaTags.forEach(({ name, property, content }) => {
    if (!content) return;

    const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
    let element = document.querySelector(selector);

    if (!element) {
      element = document.createElement('meta');
      if (name) element.setAttribute('name', name);
      if (property) element.setAttribute('property', property);
      document.head.appendChild(element);
    }

    element.setAttribute('content', content);
  });

  // Add image dimensions for better social media display
  if (ogImage) {
    const imageWidth = document.querySelector('meta[property="og:image:width"]');
    const imageHeight = document.querySelector('meta[property="og:image:height"]');
    
    if (!imageWidth) {
      const widthMeta = document.createElement('meta');
      widthMeta.setAttribute('property', 'og:image:width');
      widthMeta.setAttribute('content', '1200');
      document.head.appendChild(widthMeta);
    }
    
    if (!imageHeight) {
      const heightMeta = document.createElement('meta');
      heightMeta.setAttribute('property', 'og:image:height');
      heightMeta.setAttribute('content', '630');
      document.head.appendChild(heightMeta);
    }
  }

  // Update canonical link
  if (canonical) {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);
  }
};

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: 'Quber Funded - Instant Funded Trading Account | No Challenge Prop Firm',
    description: 'Get instant funded trading account starting at $5000. No challenge, no competition, no evaluation fees. Trade forex, crypto, and indices with Quber Funded - the prop firm that rewards pure performance.',
    keywords: 'instant funded account, no challenge prop firm, funded trading account without challenge, instant funded forex account, prop firm instant funding, funded trader no evaluation, get funded instantly, trading capital no challenge',
    canonical: 'https://quberfunded.com/',
    ogImage: 'https://quberfunded.com/src/assets/images/Desktop_Quber_funded.jpg.jpeg',
  },
  about: {
    title: 'About Quber Funded - Revolutionary Prop Trading Firm',
    description: 'Learn about Quber Funded, the prop trading firm that eliminates challenges and competitions. Discover our mission to provide instant funding and support traders with capital from $5000 to $200,000.',
    keywords: 'about quber funded, prop trading firm, instant funding company, trading capital provider, funded trader program',
    canonical: 'https://quberfunded.com/about-us',
    ogImage: 'https://quberfunded.com/src/assets/images/about-us-page-template.png',
  },
  privacy: {
    title: 'Privacy Policy - Quber Funded',
    description: 'Read Quber Funded\'s privacy policy to understand how we collect, use, and protect your personal information.',
    keywords: 'privacy policy, data protection, quber funded privacy',
    canonical: 'https://quberfunded.com/privacy-policy',
    ogImage: 'https://quberfunded.com/src/assets/images/privacy-header.png',
  },
  terms: {
    title: 'Terms of Service - Quber Funded',
    description: 'Review the terms and conditions for using Quber Funded\'s instant funded trading accounts and services.',
    keywords: 'terms of service, trading terms, quber funded terms',
    canonical: 'https://quberfunded.com/terms-of-service',
    ogImage: 'https://quberfunded.com/src/assets/images/tnc-header-bg.png',
  },
};
