import React, { useState } from 'react';

export const ORALPRO_LOGO_URL = 'https://i.ibb.co/MDpzrTVH/chatgpt-7.png';
export const ORALPRO_LOCAL_LOGO_URL = '/images/oralpro-logo.png';

export interface LogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'header' | 'lg' | 'xl';
  showText?: boolean;
  light?: boolean;
  showBackground?: boolean;
}

export const OralProLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'header',
  light = false,
  showBackground = false,
}) => {
  const [imgSrc, setImgSrc] = useState(ORALPRO_LOGO_URL);

  // Height configurations tuned for a much larger, bolder and prominent brand presence
  const heightClass = {
    xs: 'h-8 sm:h-9',
    sm: 'h-10 sm:h-11',
    md: 'h-12 sm:h-14 lg:h-16',
    header: 'h-13 sm:h-14 lg:h-16 xl:h-18',
    lg: 'h-16 sm:h-18 lg:h-22',
    xl: 'h-22 sm:h-26 lg:h-32',
  }[size] || 'h-13 sm:h-14 lg:h-16 xl:h-18';

  const logoImage = (
    <img
      src={imgSrc}
      alt="OralPro Marketing Dentário"
      className={`${heightClass} w-auto object-contain select-none transition-transform duration-200 group-hover:scale-[1.02] shrink-0`}
      onError={() => {
        if (imgSrc !== ORALPRO_LOCAL_LOGO_URL) {
          setImgSrc(ORALPRO_LOCAL_LOGO_URL);
        }
      }}
      loading="eager"
      decoding="async"
    />
  );

  // If used on a dark background (light = true or dark admin/footer), provide a crisp white badge
  if (light || showBackground) {
    return (
      <div
        className={`inline-flex items-center justify-center bg-white px-2.5 py-1 rounded-xl shadow-xs border border-white/20 select-none shrink-0 ${className}`}
      >
        {logoImage}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center shrink-0 select-none ${className}`}>
      {logoImage}
    </div>
  );
};

export interface EmblemProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'header' | 'lg' | 'xl';
  showBackground?: boolean;
  light?: boolean;
}

export const OralProEmblem: React.FC<EmblemProps> = ({
  className = '',
  size = 'md',
  light = false,
  showBackground = false,
}) => {
  return (
    <OralProLogo
      size={size}
      light={light}
      showBackground={showBackground}
      className={className}
    />
  );
};

