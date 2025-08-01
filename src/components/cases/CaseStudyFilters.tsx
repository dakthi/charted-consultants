'use client';

import { useState } from 'react';

interface FilterProps {
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  industry: string;
  size: string;
  service: string;
}

export const CaseStudyFilters = ({ onFilterChange }: FilterProps) => {
  const [filters, setFilters] = useState<FilterState>({
    industry: 'all',
    size: 'all',
    service: 'all'
  });

  const industries = [
    { value: 'all', label: 'All Industries' },
    { value: 'professional-services', label: 'Professional Services' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'retail', label: 'Retail' },
    { value: 'hospitality', label: 'Hospitality' },
    { value: 'healthcare', label: 'Healthcare' }
  ];

  const sizes = [
    { value: 'all', label: 'All Sizes' },
    { value: 'small', label: 'Small (1-10 employees)' },
    { value: 'medium', label: 'Medium (11-50 employees)' },
    { value: 'large', label: 'Large (50+ employees)' }
  ];

  const services = [
    { value: 'all', label: 'All Services' },
    { value: 'technology', label: 'Technology Foundation' },
    { value: 'storytelling', label: 'Storytelling & Content' },
    { value: 'momentum', label: 'Momentum & Growth' },
    { value: 'full-transformation', label: 'Full Transformation' }
  ];

  const handleFilterChange = (filterType: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-12">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Filter Case Studies</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
          <select
            value={filters.industry}
            onChange={(e) => handleFilterChange('industry', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            {industries.map((industry) => (
              <option key={industry.value} value={industry.value}>
                {industry.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
          <select
            value={filters.size}
            onChange={(e) => handleFilterChange('size', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            {sizes.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Service Focus</label>
          <select
            value={filters.service}
            onChange={(e) => handleFilterChange('service', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};