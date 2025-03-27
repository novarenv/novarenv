'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string, alt: string } | null>(null);
  const [images, setImages] = useState<{ src: string, alt: string }[]>([]);

  useEffect(() => {
    fetch('/api/getCertifications')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching certifications:', error));
  }, []);

  useEffect(() => {
    console.log("Images", images)
  }, [images])


  return (
    <div className="container my-4 md:gap-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(image)}
            className="cursor-pointer bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={300}
              className="h-auto max-w-full rounded-lg transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-[90vh] bg-white/10 backdrop-filter backdrop-blur-md border border-white/20 rounded-lg p-6 overflow-y-auto">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="max-w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery
