import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { getInquiries, updateInquiryStatus, deleteInquiry } from '../../utils/storage';
import { Inquiry } from '../../types/inquiry';
import toast from 'react-hot-toast';
import InquiryList from '../../components/contact/InquiryList';
import InquiryDetails from '../../components/contact/InquiryDetails';
import SearchFilter from '../../components/contact/SearchFilter';

const InquiriesPage = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadInquiries = () => {
      const stored = getInquiries();
      setInquiries(stored);
    };

    loadInquiries();
    const interval = setInterval(loadInquiries, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleStatusUpdate = (id: string, status: Inquiry['status']) => {
    updateInquiryStatus(id, status);
    setInquiries(getInquiries());
    toast.success('Status updated successfully');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this inquiry?')) {
      deleteInquiry(id);
      setInquiries(getInquiries());
      if (selectedInquiry?.id === id) {
        setSelectedInquiry(null);
      }
      toast.success('Inquiry deleted successfully');
    }
  };

  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesFilter = filter === 'all' || inquiry.status === filter;
    const matchesSearch = 
      inquiry.name.toLowerCase().includes(search.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(search.toLowerCase()) ||
      inquiry.message.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: Inquiry['status']) => {
    switch (status) {
      case 'new': return 'text-green-500';
      case 'read': return 'text-blue-500';
      case 'responded': return 'text-gray-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Inquiries</h1>
        <SearchFilter
          search={search}
          filter={filter}
          onSearchChange={setSearch}
          onFilterChange={setFilter}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h2 className="font-semibold text-gray-900">Inquiry List</h2>
          </div>
          <InquiryList
            inquiries={filteredInquiries}
            selectedId={selectedInquiry?.id}
            onSelect={setSelectedInquiry}
            getStatusColor={getStatusColor}
          />
        </div>

        {selectedInquiry ? (
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <h2 className="font-semibold text-gray-900">Inquiry Details</h2>
            </div>
            <InquiryDetails
              inquiry={selectedInquiry}
              onStatusUpdate={handleStatusUpdate}
              onDelete={handleDelete}
            />
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow flex items-center justify-center p-8">
            <div className="text-center text-gray-500">
              <Mail className="h-12 w-12 mx-auto mb-4" />
              <p>Select an inquiry to view details</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InquiriesPage;