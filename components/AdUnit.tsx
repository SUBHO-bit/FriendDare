import React, { useEffect, useRef } from 'react';

interface AdUnitProps {
  slot?: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
  label?: string;
}

export const AdUnit: React.FC<AdUnitProps> = ({ className = '', label = 'Advertisement' }) => {
  const scriptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only inject the script if it hasn't been injected yet
    if (scriptRef.current && scriptRef.current.innerHTML === '') {
      const script = document.createElement('script');
      script.async = true;
      script.dataset.cfasync = "false";
      script.src = "//pl28132820.effectivegatecpm.com/3a4ed4c650d8511c68869276a4a32a01/invoke.js";
      
      scriptRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className={`my-8 flex flex-col items-center justify-center ${className} overflow-hidden`}>
      <span className="text-[10px] uppercase tracking-wider font-semibold mb-2 text-slate-300">{label}</span>
      <div className="w-full flex flex-col items-center justify-center bg-slate-50/50 min-h-[250px] rounded-lg border border-slate-100 border-dashed relative">
        
        {/* The specific container ID required by the ad network */}
        <div id="container-3a4ed4c650d8511c68869276a4a32a01"></div>
        
        {/* Invisible container to hold the script tag */}
        <div ref={scriptRef} className="hidden"></div>
      
      </div>
    </div>
  );
};