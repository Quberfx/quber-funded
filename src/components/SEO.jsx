import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateMetaTags } from '../utils/seo';

const SEO = ({ title, description, keywords, canonical, ogImage }) => {
  const location = useLocation();

  useEffect(() => {
    updateMetaTags({
      title,
      description,
      keywords,
      canonical: canonical || `https://quberfunded.com${location.pathname}`,
      ogImage,
    });
  }, [title, description, keywords, canonical, ogImage, location.pathname]);

  return null;
};

export default SEO;
