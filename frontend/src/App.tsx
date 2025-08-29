import { useState } from 'react'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Searching for:', searchQuery, 'in', location)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">JobRight</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Find Jobs</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Companies</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Career Advice</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 transition-colors">Sign In</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Post a Job
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Find Your Dream Job Today
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Discover millions of job opportunities with all the information you need. Its your future.
          </p>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 bg-white rounded-lg p-2 shadow-lg">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none rounded-md"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="City, state, or remote"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none rounded-md"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold"
              >
                Search Jobs
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Job Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Technology', count: '50K+', icon: '💻', color: 'bg-blue-100' },
              { title: 'Healthcare', count: '30K+', icon: '🏥', color: 'bg-green-100' },
              { title: 'Finance', count: '25K+', icon: '💰', color: 'bg-yellow-100' },
              { title: 'Marketing', count: '20K+', icon: '📢', color: 'bg-purple-100' },
              { title: 'Education', count: '15K+', icon: '📚', color: 'bg-indigo-100' },
              { title: 'Sales', count: '18K+', icon: '📈', color: 'bg-red-100' },
              { title: 'Design', count: '12K+', icon: '🎨', color: 'bg-pink-100' },
              { title: 'Engineering', count: '35K+', icon: '⚙️', color: 'bg-gray-100' },
            ].map((category, index) => (
              <div key={index} className={`${category.color} p-6 rounded-lg hover:shadow-md transition-shadow cursor-pointer`}>
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.count} jobs</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Jobs
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                title: 'Senior Software Engineer',
                company: 'TechCorp Inc.',
                location: 'San Francisco, CA',
                type: 'Full-time',
                salary: '$120K - $180K',
                logo: '🏢'
              },
              {
                title: 'Product Manager',
                company: 'InnovateLab',
                location: 'New York, NY',
                type: 'Full-time',
                salary: '$100K - $150K',
                logo: '🚀'
              },
              {
                title: 'UX Designer',
                company: 'Creative Studio',
                location: 'Remote',
                type: 'Contract',
                salary: '$80K - $120K',
                logo: '🎨'
              },
              {
                title: 'Data Scientist',
                company: 'Analytics Pro',
                location: 'Austin, TX',
                type: 'Full-time',
                salary: '$110K - $160K',
                logo: '📊'
              }
            ].map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{job.logo}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{job.title}</h3>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Apply
                  </button>
                </div>
                <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                  <span>📍 {job.location}</span>
                  <span>⏰ {job.type}</span>
                  <span>💰 {job.salary}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              View All Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose JobRight?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔍',
                title: 'Smart Search',
                description: 'AI-powered job matching that finds the perfect fit for your skills and experience.'
              },
              {
                icon: '📱',
                title: 'Mobile First',
                description: 'Apply to jobs anywhere, anytime with our mobile-optimized platform.'
              },
              {
                icon: '🔒',
                title: 'Secure & Private',
                description: 'Your data is protected with enterprise-grade security and privacy controls.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">JobRight</h3>
              <p className="text-gray-400">
                Find your dream job with the most comprehensive job search platform.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Browse Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Advice</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Salary Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resume Builder</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Employers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Post a Job</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Recruitment Tools</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 JobRight. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
