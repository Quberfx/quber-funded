import { useEffect } from 'react';

const StructuredData = ({ data }) => {
  useEffect(() => {
    // Remove existing structured data script if any
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data]);

  return null;
};

// Predefined structured data for different pages
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Quber Funded",
  "description": "Instant funded trading accounts without challenges. Trade forex, crypto, and indices with real capital starting at $5000.",
  "url": "https://quberfunded.com",
  "logo": "https://quberfunded.com/logo.svg",
  "image": "https://quberfunded.com/logo.svg",
  "sameAs": [
    "https://twitter.com/quberfunded",
    "https://linkedin.com/company/quberfunded",
    "https://youtube.com/@quberfunded"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "email": "support@quberfunded.com"
  }
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export default StructuredData;
