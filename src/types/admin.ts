export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: string;
  alt: string;
}
export interface Event {
  id: string;
  date: string;
  time: string; 
  isPast: boolean; 
  title: string;
  location: string;
  description: string;
  image: string;
}

export interface BlogPost {
  id:string,
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface AdminUser {
  id: string;
  username: string;
  email: string;
  role: string;
  isActive: boolean;
}