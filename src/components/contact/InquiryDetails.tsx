import React from 'react';
import { Trash2 } from 'lucide-react';
import { Inquiry } from '../../types/inquiry';

interface InquiryDetailsProps {
  inquiry: Inquiry;
  onStatusUpdate: (id: string, status: Inquiry['status']) => void;
  onDelete: (id: string) => void;
}

const InquiryDetails: React.FC<InquiryDetailsProps> = ({
  inquiry,
  onStatusUpdate,
  onDelete,
}) => {
  return (
    <div className="p-4 space-y-4">
      <div>
        <h3 className="text-lg font-medium text-gray-900">{inquiry.name}</h3>
        <p className="text-gray-600">{inquiry.email}</p>
        {inquiry.company && (
          <p className="text-sm text-gray-500">{inquiry.company}</p>
        )}
      </div>
      <div className="border-t pt-4">
        <h4 className="font-medium text-gray-900 mb-2">Message</h4>
        <p className="text-gray-600">{inquiry.message}</p>
      </div>
      <div className="border-t pt-4">
        <h4 className="font-medium text-gray-900 mb-2">Actions</h4>
        <div className="flex gap-2">
          <button
            onClick={() => onStatusUpdate(inquiry.id, 'responded')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Mark as Responded
          </button>
          <button
            onClick={() => onDelete(inquiry.id)}
            className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InquiryDetails;