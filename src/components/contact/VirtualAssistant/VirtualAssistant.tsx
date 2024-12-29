import React, { useState, useEffect, useRef } from 'react';
import { BotMessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAIResponse } from '../../../utils/virtualAssistant';
import ChatMessage from './ChatMessage';
import ChatSuggestions from './ChatSuggestions';
import ChatInput from './ChatInput';

const VirtualAssistant = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'ai'; content: string }>>([
    { type: 'ai', content: 'Hello! 👋 I\'m your AI assistant from AI-Solutions. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setInput('');

    const aiResponse = getAIResponse(userMessage);
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'ai', content: aiResponse.message }]);
      setSuggestions(aiResponse.suggestions || []);
    }, 500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-[#004aad] to-[#0066cc] text-white rounded-full p-4 shadow-sm hover:bg-blue-700 transition-colors border-2 border-white z-50"
        style={{
          boxShadow: '0 4px 15px rgba(0, 102, 204, 0.5)',
        }}
      >
        <BotMessageSquare className="h-6 w-6" />
      </button>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 w-full max-w-[380px] h-[70vh] bg-white rounded-lg shadow-xl z-50 max-h-[600px] flex flex-col"
          >
            <div className="p-4 border-b flex justify-between items-center bg-[#004aad] text-white rounded-t-lg">
              <div className="flex items-center space-x-2">
                <BotMessageSquare className="h-5 w-5" />
                <h3 className="font-semibold">AI Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  type={message.type}
                  content={message.content}
                />
              ))}
              <div ref={messagesEndRef} />
            </div>

            <ChatSuggestions
              suggestions={suggestions}
              onSelect={handleSuggestionClick}
            />

            <ChatInput
              value={input}
              onChange={setInput}
              onSend={handleSend}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VirtualAssistant;