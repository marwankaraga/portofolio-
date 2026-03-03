import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageLightboxProps {
  images: string[];
  alt: string;
  initialIndex?: number;
  onClose: () => void;
}

const ImageLightbox = ({ images, alt, initialIndex = 0, onClose }: ImageLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    setTimeout(() => setIsAnimating(false), 400);
  }, [images.length, isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    setTimeout(() => setIsAnimating(false), 400);
  }, [images.length, isAnimating]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, nextSlide, prevSlide]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="lightbox-overlay" onClick={handleBackdropClick}>
      {/* Close button */}
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <X size={24} />
      </button>

      {/* Counter */}
      <div className="lightbox-counter">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Main image area */}
      <div className="lightbox-content">
        {/* Prev button */}
        {images.length > 1 && (
          <button className="lightbox-nav lightbox-nav-prev" onClick={prevSlide} aria-label="Previous">
            <ChevronLeft size={28} />
          </button>
        )}

        {/* Image */}
        <div className="lightbox-image-wrapper">
          <img
            src={images[currentIndex]}
            alt={`${alt} ${currentIndex + 1}`}
            className="lightbox-image"
            draggable={false}
          />
        </div>

        {/* Next button */}
        {images.length > 1 && (
          <button className="lightbox-nav lightbox-nav-next" onClick={nextSlide} aria-label="Next">
            <ChevronRight size={28} />
          </button>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="lightbox-thumbnails">
          {images.map((image, index) => (
            <button
              key={index}
              className={`lightbox-thumb ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={image} alt={`${alt} thumbnail ${index + 1}`} draggable={false} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageLightbox;
