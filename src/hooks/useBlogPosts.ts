import { useLocalStorage } from './useLocalStorage';
import { BlogPost } from '../types/admin';

export function useBlogPosts() {
  const [posts, setPosts] = useLocalStorage<BlogPost[]>('admin_blog_posts', []);

  const addPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost = {
      id: crypto.randomUUID(),
      ...post,
    };
    setPosts([...posts, newPost]);
    return newPost;
  };

  const updatePost = (id: string, post: Partial<BlogPost>) => {
    setPosts(posts.map(p => p.id === id ? { ...p, ...post } : p));
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  return {
    posts,
    addPost,
    updatePost,
    deletePost,
  };
}