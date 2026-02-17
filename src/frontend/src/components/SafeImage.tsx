import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackClassName?: string;
}

/**
 * Reusable image component with error handling that displays a themed placeholder
 * instead of browser broken-image icons when images fail to load.
 */
export default function SafeImage({ 
  src, 
  alt, 
  className, 
  fallbackClassName,
  ...props 
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div 
        className={cn(
          'safe-image-fallback flex items-center justify-center bg-muted',
          fallbackClassName,
          className
        )}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="h-8 w-8 text-muted-foreground/40" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn('safe-image-loading', className)}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}
