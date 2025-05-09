"use client";

import { useState } from "react";

interface FallbackImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  width?: number;
  height?: number;
}

export function FallbackImage({
  src,
  alt,
  fallbackSrc = `https://placehold.co/600x400?text=${encodeURIComponent(alt)}`,
  className,
  width,
  height,
}: FallbackImageProps) {
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