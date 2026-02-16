import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackClassName?: string;
}

/**
 * SafeImage component that handles image loading failures gracefully
 * with a themed placeholder instead of browser broken-image icons.
 */
export default function SafeImage({ 
  src, 
  alt, 
  className = '', 
  fallbackClassName = '',
  ...props 
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
    return (
      <div 
        className={`safe-image-fallback flex items-center justify-center bg-muted ${fallbackClassName || className}`}
        role="img"
        aria-label={alt}
      >
        <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground p-4">
          <ImageOff className="h-8 w-8 opacity-50" />
          <span className="text-xs text-center opacity-75">Image unavailable</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className={`safe-image-loading animate-pulse bg-muted ${className}`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'hidden' : ''}`}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </>
  );
}
