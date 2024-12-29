import React, { useState } from 'react';
import { Plus, Image, Pencil, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLoader } from '../../contexts/LoaderContext';
import { useGallery } from '../../hooks/useGallery';
import { GalleryImage } from '../../types/admin';
import toast from 'react-hot-toast';

const GalleryAdminPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  const { showLoader, hideLoader } = useLoader();
  const { images, addImage, updateImage, deleteImage } = useGallery();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showLoader();
    try {
      const formData = new FormData(e.currentTarget);
      const imageData = {
        url: formData.get('url') as string,
        caption: formData.get('caption') as string,
        category: formData.get('category') as string,
        alt: formData.get('alt') as string,
      };

      if (editingImage) {
        updateImage(editingImage.id, imageData);
        toast.success('Image updated successfully');
      } else {
        addImage(imageData);
        toast.success('Image added successfully');
      }
      setShowForm(false);
      setEditingImage(null);
    } catch (error) {
      toast.error('An error occurred');
    } finally {
      hideLoader();
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      showLoader();
      try {
        deleteImage(id);
        toast.success('Image deleted successfully');
      } catch (error) {
        toast.error('An error occurred');
      } finally {
        hideLoader();
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Gallery Management</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" />
          Add Image
        </button>
      </div>

      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="url"
                name="url"
                defaultValue={editingImage?.url}
                required
                className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Caption</label>
              <input
                type="text"
                name="caption"
                defaultValue={editingImage?.caption}
                required
                className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Alt Text</label>
              <input
                type="text"
                name="alt"
                defaultValue={editingImage?.alt}
                required
                className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                name="category"
                defaultValue={editingImage?.category}
                required
                className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
              >
                <option value="Events">Events</option>
                <option value="Workshops">Workshops</option>
                <option value="Team">Team</option>
                <option value="Office">Office</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              {editingImage ? 'Update Image' : 'Add Image'}
            </button>
          </form>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <div className="relative group">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
            </div>
            <div className="p-4">
              <p className="font-medium">{image.caption}</p>
              <p className="text-sm text-gray-600">{image.category}</p>
              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={() => {
                    setEditingImage(image);
                    setShowForm(true);
                  }}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                >
                  <Pencil className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(image.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GalleryAdminPage;