import React from 'react';
import { BlogPost } from '../../../types/admin';

interface PostFormProps {
  post?: BlogPost;
  onSubmit: (data: Omit<BlogPost, 'id'>) => void;
}

const PostForm: React.FC<PostFormProps> = ({ post, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      excerpt: formData.get('excerpt') as string,
      author: formData.get('author') as string,
      date: new Date().toISOString(),
      image: formData.get('image') as string,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          defaultValue={post?.title}
          required
          className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Excerpt</label>
        <textarea
          name="excerpt"
          defaultValue={post?.excerpt}
          required
          rows={2}
          className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Content</label>
        <textarea
          name="content"
          defaultValue={post?.content}
          required
          rows={8}
          className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Author</label>
          <input
            type="text"
            name="author"
            defaultValue={post?.author}
            required
            className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="url"
            name="image"
            defaultValue={post?.image}
            className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        {post ? 'Update Post' : 'Create Post'}
      </button>
    </form>
  );
};

export default PostForm;