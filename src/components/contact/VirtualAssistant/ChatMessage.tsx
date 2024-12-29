import React from 'react';

interface ChatMessageProps {
  type: 'user' | 'ai';
  content: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ type, content }) => {
  return (
    <div className={`flex ${type === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] p-3 rounded-lg ${
          type === 'user'
            ? 'bg-[#004aad] text-white'
            : 'bg-gray-100 text-gray-800'
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default ChatMessage;