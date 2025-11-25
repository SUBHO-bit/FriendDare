import React, { useEffect, useRef } from 'react';

interface AdUnitProps {
  slot?: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
  label?: string;
}

export const AdUnit: React.FC<AdUnitProps> = ({ className = '', label = 'Advertisement' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Specific settings from your provided code
  const containerId = "container-3a4ed4c650d8511c68869276a4a32a01";
  const scriptSrc = "https://pl28132820.effectivegatecpm.com/3a4ed4c650d8511c68869276a4a32a01/invoke.js";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Clear previous content to prevent duplicates
    container.innerHTML = '';

    // 2. Create the iframe
    const iframe = document.createElement('iframe');
    iframe.title = "Ad Content";
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.minHeight = '300px'; 
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.scrolling = "no";
    
    container.appendChild(iframe);

    const doc = iframe.contentWindow?.document;
    if (doc) {
      // 3. Write the HTML. Important: DIV comes BEFORE Script to ensure it exists when script runs.
      const adContent = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <base target="_top" />
            <style>
              body { 
                margin: 0; 
                padding: 0; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                width: 100%;
                height: 100%;
                background-color: transparent;
                font-family: sans-serif;
              }
              /* Ensure the container can take width */
              #${containerId} {
                display: block;
                width: 100%;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <!-- Container must be present before the script runs -->
            <div id="${containerId}"></div>
            <script async="async" data-cfasync="false" src="${scriptSrc}"></script>
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
    <div className={`my-6 w-full flex flex-col items-center ${className}`}>
      {label && (
        <span className="text-[10px] uppercase tracking-wider font-bold text-slate-300 mb-2">
          {label}
        </span>
      )}
      <div 
        ref={containerRef}
        className="w-full flex justify-center min-h-[250px]"
      >
        {/* Iframe will be injected here */}
      </div>
    </div>
  );
};
