import type { JobFilters as JobFiltersType } from '../types/Job';

interface JobFiltersProps {
  filters: JobFiltersType;
  onFiltersChange: (filters: JobFiltersType) => void;
}

export default function JobFilters({ filters, onFiltersChange }: JobFiltersProps) {
  const jobCategories = [
    'Frontend Software Engineer',
    'Full Stack Engineer', 
    'Game Developer',
    'Software Testing/Quality Assurance Engineer',
    'IT Support Specialist',
    'Help Desk Technician/Desktop Support Technician',
    'System Administrator',
    'Machine Learning Engineer',
    'AI Engineer',
    'Machine Learning, Deep Learning'
  ];

  const handleCategoryToggle = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    
    onFiltersChange({
      ...filters,
      categories: newCategories
    });
  };

  const handleSearchChange = (field: 'searchQuery' | 'location', value: string) => {
    onFiltersChange({
      ...filters,
      [field]: value
    });
  };

  const handleSortChange = (sortBy: JobFiltersType['sortBy']) => {
    onFiltersChange({
      ...filters,
      sortBy
    });
  };

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Search bar */}
      <div className="px-6 py-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              value={filters.searchQuery}
              onChange={(e) => handleSearchChange('searchQuery', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="City, state, or remote"
              value={filters.location}
              onChange={(e) => handleSearchChange('location', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Search Jobs
          </button>
        </div>
      </div>

      {/* Category filters */}
      <div className="px-6 py-4 border-t border-gray-100">
        <div className="flex flex-wrap gap-2">
          {jobCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryToggle(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filters.categories.includes(category)
                  ? 'bg-blue-100 text-blue-700 border border-blue-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200">
            +28
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 border border-blue-600">
            Edit Filters
          </button>
        </div>
      </div>

      {/* Sort options */}
      <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select
            value={filters.sortBy}
            onChange={(e) => handleSortChange(e.target.value as JobFiltersType['sortBy'])}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="Most Recent">Most Recent</option>
            <option value="Most Relevant">Most Relevant</option>
            <option value="Salary High to Low">Salary High to Low</option>
            <option value="Salary Low to High">Salary Low to High</option>
          </select>
        </div>
        <div className="text-sm text-gray-500">
          {filters.categories.length > 0 && `${filters.categories.length} filters applied`}
        </div>
      </div>
    </div>
  );
}
