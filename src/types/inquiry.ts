export interface Inquiry {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  status: 'new' | 'read' | 'responded';
  createdAt: string;
}

export interface AIResponse {
  message: string;
  suggestions?: string[];
}