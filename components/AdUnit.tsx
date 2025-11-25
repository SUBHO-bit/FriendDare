import React, { useEffect, useRef } from 'react';

interface AdUnitProps {
  slot?: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
  label?: string;
}

export const AdUnit: React.FC<AdUnitProps> = ({ className = '', label = 'Advertisement' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Specific settings from your code
  const containerId = "container-3a4ed4c650d8511c68869276a4a32a01";
  const scriptSrc = "https://pl28132820.effectivegatecpm.com/3a4ed4c650d8511c68869276a4a32a01/invoke.js";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Clear previous content
    container.innerHTML = '';

    // 2. Create an iframe to hold the ad
    const iframe = document.createElement('iframe');
    iframe.title = "Ad Content";
    // Set a reasonable default height, but allow it to be flexible if needed
    iframe.style.width = '100%';
    iframe.style.height = '300px'; 
    iframe.style.border = '0';
    iframe.style.overflow = 'hidden';
    iframe.scrolling = "no";

    // 3. Append the iframe to the DOM *before* writing to it
    container.appendChild(iframe);

    // 4. Write the ad code into the iframe
    const doc = iframe.contentWindow?.document;
    if (doc) {
      const adContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <base target="_top" />
            <style>
              body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; }
            </style>
          </head>
          <body>
            <script async="async" data-cfasync="false" src="${scriptSrc}"></script>
            <div id="${containerId}"></div>
          </body>
        </html>
      `;

      try {
        doc.open();
        doc.write(adContent);
        doc.close();
      } catch (err) {
        console.error("AdUnit injection error:", err);
      }
    }
  }, []);

  return (
    <div className={`my-8 flex flex-col items-center justify-center ${className}`}>
      {label && <span className="text-[10px] uppercase tracking-wider font-semibold mb-2 text-slate-300">{label}</span>}
      <div 
        ref={containerRef}
        className="w-full flex justify-center bg-slate-50 min-h-[300px] rounded-lg border border-slate-100 border-dashed overflow-hidden"
      >
        {/* Iframe will be injected here */}
      </div>
    </div>
  );
};
