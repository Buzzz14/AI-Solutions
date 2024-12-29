import React, { useState } from 'react';
import { Plus, FileText, Pencil, Trash2 } from 'lucide-react';
import PostForm from '../../components/admin/blog/PostForm';
import { BlogPost } from '../../types/admin';
import { motion } from 'framer-motion';
import { useLoader } from '../../contexts/LoaderContext';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import toast from 'react-hot-toast';

const BlogAdminPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const { showLoader, hideLoader } = useLoader();
  const { posts, addPost, updatePost, deletePost } = useBlogPosts();

  const handleSubmit = async (data: Omit<BlogPost, 'id'>) => {
    showLoader();
    try {
      if (editingPost) {
        updatePost(editingPost.id, data);
        toast.success('Post updated successfully');
      } else {
        addPost(data);
        toast.success('Post created successfully');
      }
      setShowForm(false);
      setEditingPost(null);
    } catch (error) {
      toast.error('An error occurred');
    } finally {
      hideLoader();
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      showLoader();
      try {
        deletePost(id);
        toast.success('Post deleted successfully');
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
        <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" />
          Add Post
        </button>
      </div>

      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow"
        >
          <PostForm post={editingPost || undefined} onSubmit={handleSubmit} />
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{post.author}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={() => handleEdit(post)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                >
                  <Pencil className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
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
export default BlogAdminPage;