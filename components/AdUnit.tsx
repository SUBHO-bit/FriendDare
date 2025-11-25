import React, { useEffect, useRef } from 'react';

interface AdUnitProps {
  slot?: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
  label?: string;
}

export const AdUnit: React.FC<AdUnitProps> = ({ className = '', label = 'Advertisement' }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  // Specific container ID from the provided snippet
  const containerId = "container-3a4ed4c650d8511c68869276a4a32a01";

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentWindow?.document;
    if (!doc) return;

    // We write the ad script into the iframe to isolate it.
    // This ensures it re-executes every time the component mounts (page change).
    // Base target _top ensures clicks open in the main window.
    const adContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <base target="_top" />
          <style>
            body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; overflow: hidden; background-color: transparent; }
          </style>
        </head>
        <body>
          <div id="${containerId}"></div>
          <script async="async" data-cfasync="false" src="//pl28132820.effectivegatecpm.com/3a4ed4c650d8511c68869276a4a32a01/invoke.js"></script>
        </body>
      </html>
    `;

    try {
      doc.open();
      doc.write(adContent);
      doc.close();
    } catch (e) {
      console.error("AdUnit Error:", e);
    }
  }, []);

  return (
    <div className={`my-8 flex flex-col items-center justify-center ${className} overflow-hidden`}>
      {label && <span className="text-[10px] uppercase tracking-wider font-semibold mb-2 text-slate-300">{label}</span>}
      <div className="w-full flex flex-col items-center justify-center bg-slate-50/50 min-h-[260px] rounded-lg border border-slate-100 border-dashed relative">
        <iframe 
          ref={iframeRef}
          title="Ad Content"
          style={{ width: '100%', height: '260px', border: 'none', overflow: 'hidden' }}
          scrolling="no"
        />
      </div>
    </div>
  );
};