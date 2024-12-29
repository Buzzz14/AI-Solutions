import { useLocalStorage } from './useLocalStorage';
import { GalleryImage } from '../types/admin';

export function useGallery() {
  const [images, setImages] = useLocalStorage<GalleryImage[]>('admin_gallery', []);

  const addImage = (image: Omit<GalleryImage, 'id'>) => {
    const newImage = {
      id: crypto.randomUUID(),
      ...image,
    };
    setImages([...images, newImage]);
    return newImage;
  };

  const updateImage = (id: string, image: Partial<GalleryImage>) => {
    setImages(images.map(img => img.id === id ? { ...img, ...image } : img));
  };

  const deleteImage = (id: string) => {
    setImages(images.filter(img => img.id !== id));
  };

  return {
    images,
    addImage,
    updateImage,
    deleteImage,
  };
}