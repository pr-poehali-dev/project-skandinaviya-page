import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="space-y-4">
        <Card className="relative overflow-hidden group shadow-lg">
          <div className="aspect-[16/10] relative">
            <img
              src={images[currentImage]}
              alt={`${title} - фото ${currentImage + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Затемнение при ховере */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

            {/* Навигация */}
            {images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                  onClick={prevImage}
                >
                  <Icon name="ChevronLeft" size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                  onClick={nextImage}
                >
                  <Icon name="ChevronRight" size={20} />
                </Button>
              </>
            )}

            {/* Кнопка полноэкранного режима */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white/90 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
              onClick={() => setIsFullscreen(true)}
            >
              <Icon name="Maximize" size={18} />
            </Button>

            {/* Счетчик изображений */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              {currentImage + 1} / {images.length}
            </div>
          </div>
        </Card>

        {/* Миниатюры */}
        {images.length > 1 && (
          <div className="grid grid-cols-5 gap-3">
            {images.slice(0, 5).map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentImage
                    ? "border-blue-500 shadow-lg scale-105"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img
                  src={image}
                  alt={`Миниатюра ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {index === 4 && images.length > 5 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      +{images.length - 5}
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Полноэкранная галерея */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white border-white/20"
            onClick={() => setIsFullscreen(false)}
          >
            <Icon name="X" size={20} />
          </Button>

          <div className="relative max-w-6xl max-h-full p-4">
            <img
              src={images[currentImage]}
              alt={`${title} - фото ${currentImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20"
                  onClick={prevImage}
                >
                  <Icon name="ChevronLeft" size={24} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20"
                  onClick={nextImage}
                >
                  <Icon name="ChevronRight" size={24} />
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
