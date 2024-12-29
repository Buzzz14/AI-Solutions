import { AIResponse } from '../types/inquiry';

interface KeywordResponse {
  keywords: string[];
  response: string;
  suggestions?: string[];
}

const responses: KeywordResponse[] = [
  // Company Information
  {
    keywords: ['company', 'about'],
    response: "AI-Solutions is a leading AI technology company based in Sunderland, UK. We specialize in developing AI-powered solutions to enhance digital employee experiences. Would you like to learn more about our specific services?",
    suggestions: []
  },
  
  // Services
  {
    keywords: ['services', 'solutions', 'offerings'],
    response: "We offer a range of AI-powered services including Virtual Assistants, Machine Learning Solutions, Data Analytics, Predictive Analysis, and AI Security. Which service would you like to learn more about?",
    suggestions: ['Virtual Assistants', 'Machine Learning', 'Data Analytics']
  },
  
  // Virtual Assistant Service
  {
    keywords: ['virtual assistant', 'chatbot', 'ai assistant'],
    response: "Our AI Virtual Assistants provide 24/7 customer support, handle routine tasks, and learn from interactions to continuously improve. Would you like to see a demonstration?",
    suggestions: ['Request demo', 'Pricing info', 'Features list']
  },
  
  // Machine Learning
  {
    keywords: ['machine learning', 'ml', 'ai models'],
    response: "Our Machine Learning solutions help automate processes, make predictions, and optimize operations. We customize solutions for your specific industry needs.",
    suggestions: ['Use cases', 'Implementation process', 'Success stories']
  },
  
  // Events
  {
    keywords: ['events', 'workshops', 'webinar', 'conference'],
    response: "We regularly host AI workshops, webinars, and tech conferences. Our next event is an AI Implementation Workshop on April 15th. Would you like to register?",
    suggestions: ['View all events', 'Register for workshop', 'Past events']
  },
  
  // Pricing
  {
    keywords: ['pricing', 'cost', 'price', 'package'],
    response: "Our pricing is customized based on your specific needs. We offer flexible packages starting from £500/month. Would you like to schedule a consultation?",
    suggestions: ['Schedule consultation', 'View pricing packages', 'Request quote']
  },
  
  // Implementation
  {
    keywords: ['implement', 'integration', 'setup', 'install'],
    response: "Our implementation process is streamlined and typically takes 2-4 weeks. We provide full support throughout the integration phase.",
    suggestions: ['Implementation guide', 'Schedule call', 'View timeline']
  },
  
  // Support
  {
    keywords: ['support', 'help', 'contact', 'assist'],
    response: "We offer a range of AI-powered services including Virtual Assistants, Machine Learning Solutions, Data Analytics, Predictive Analysis, and AI Security. Our support team is available 24/7. You can reach us through chat, email (support@ai-solutions.com), or phone (+44 123 456 7890).",
    suggestions: []
  },
  
  // Location
  {
    keywords: ['location', 'address', 'office', 'where'],
    response: "We're headquartered in Sunderland, UK, with remote teams across Europe. Would you like to visit our office or schedule a virtual meeting?",
    suggestions: ['Office location', 'Virtual meeting', 'Contact us']
  }
];

export const getAIResponse = (message: string): AIResponse => {
  const lowerMessage = message.toLowerCase();
  
  for (const response of responses) {
    if (response.keywords.some(keyword => lowerMessage.includes(keyword))) {
      return {
        message: response.response,
        suggestions: response.suggestions
      };
    }
  }

  return {
    message: "I'm here to help you learn more about AI-Solutions and our services. Feel free to ask about our company, services, events, or anything else!",
    suggestions: []
  };
};