import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article';
  image?: string;
  schema?: object;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical, 
  type = 'website',
  image = 'https://picsum.photos/1200/630',
  schema 
}) => {
  useEffect(() => {
    document.title = `${title} | FriendDare`;
    
    // Update meta tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateOg = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateOg('og:title', title);
    updateOg('og:description', description);
    updateOg('og:type', type);
    updateOg('og:image', image);
    updateOg('og:url', window.location.href);

    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);

    // Schema.org JSON-LD
    if (schema) {
      let script = document.querySelector('#schema-json-ld');
      if (!script) {
        script = document.createElement('script');
        script.id = 'schema-json-ld';
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }

  }, [title, description, type, image, schema]);

  return null;
};