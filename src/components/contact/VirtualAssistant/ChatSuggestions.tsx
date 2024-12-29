import React from 'react';

interface ChatSuggestionsProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
}

const ChatSuggestions: React.FC<ChatSuggestionsProps> = ({ suggestions, onSelect }) => {
  if (!suggestions.length) return null;

  return (
    <div className="p-2 border-t border-gray-100">
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSelect(suggestion)}
            className="whitespace-nowrap px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatSuggestions;