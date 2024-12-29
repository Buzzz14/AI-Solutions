import React from 'react';
import { motion } from 'framer-motion';
import { Inquiry } from '../../types/inquiry';

interface InquiryListProps {
  inquiries: Inquiry[];
  selectedId?: string;
  onSelect: (inquiry: Inquiry) => void;
  getStatusColor: (status: Inquiry['status']) => string;
}

const InquiryList: React.FC<InquiryListProps> = ({
  inquiries,
  selectedId,
  onSelect,
  getStatusColor,
}) => {
  return (
    <div className="divide-y max-h-[600px] overflow-y-auto">
      {inquiries.map((inquiry) => (
        <motion.div
          key={inquiry.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`p-4 cursor-pointer hover:bg-gray-50 ${
            selectedId === inquiry.id ? 'bg-blue-50' : ''
          }`}
          onClick={() => onSelect(inquiry)}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-900">{inquiry.name}</h3>
              <p className="text-sm text-gray-600">{inquiry.email}</p>
            </div>
            <span className={`text-sm ${getStatusColor(inquiry.status)}`}>
              {inquiry.status}
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{inquiry.message}</p>
          <p className="mt-1 text-xs text-gray-400">
            {new Date(inquiry.createdAt).toLocaleDateString()}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default InquiryList;