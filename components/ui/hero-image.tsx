"use client";

import { useState } from "react";

interface HeroImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
}

export function HeroImage({
  src,
  alt,
  fallbackSrc = `https://placehold.co/1920x1080?text=${encodeURIComponent(alt)}`,
  className,
  width,
  height,
}: HeroImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
} 