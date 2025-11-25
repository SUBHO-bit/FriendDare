import React from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
  label?: string;
}

export const AdUnit: React.FC<AdUnitProps> = ({ slot, format = 'auto', className = '', label = 'Ad Space' }) => {
  return (
    <div className={`my-8 flex flex-col items-center justify-center ${className}`}>
      <div className="w-full bg-slate-100 border border-slate-200 border-dashed rounded-lg p-4 flex flex-col items-center justify-center text-slate-400 min-h-[100px] max-w-[728px]">
        <span className="text-xs uppercase tracking-wider font-semibold mb-2">{label}</span>
        <div className="text-center text-xs">
          {/* In production, this div would be replaced by the <ins> tag from AdSense */}
          &lt;ins class="adsbygoogle" ... data-ad-slot="{slot}" /&gt;
        </div>
      </div>
    </div>
  );
};