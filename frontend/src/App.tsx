import { useState } from 'react'
import type { Job, JobFilters } from './types/Job'
import type { Resume } from './types/Resume'
import Sidebar from './components/Sidebar'
import JobFiltersComponent from './components/JobFilters'
import JobList from './components/JobList'
import ResumePreview from './components/ResumePreview'

function App() {
  const [activeTab, setActiveTab] = useState('jobs')
  const [filters, setFilters] = useState<JobFilters>({
    categories: [],
    searchQuery: '',
    location: '',
    sortBy: 'Most Recent'
  })
  const [isPDFPreview, setIsPDFPreview] = useState(false)
  
  // Sample resume data - in a real app, this would come from your backend API
  const [resume] = useState<Resume | null>({
    id: 1,
    fullName: 'John Doe',
    email: 'john.doe@email.com',
    phone: '(555) 123-4567',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'AWS'],
    educationList: [
      {
        id: 1,
        schoolName: 'University of Technology',
        degree: 'Bachelor of Science',
        fieldOfStudy: 'Computer Science',
        startDate: '2016',
        endDate: '2020',
        description: 'Graduated with honors'
      }
    ],
    experienceList: [
      {
        id: 1,
        jobTitle: 'Software Engineer',
        companyName: 'Tech Corp',
        startDate: '2020',
        endDate: '2023',
        descriptions: [
          'Developed and maintained web applications using React and Node.js',
          'Collaborated with cross-functional teams to deliver high-quality software',
          'Implemented automated testing and CI/CD pipelines'
        ]
      },
      {
        id: 2,
        jobTitle: 'Junior Developer',
        companyName: 'StartupXYZ',
        startDate: '2019',
        endDate: '2020',
        descriptions: [
          'Built responsive web interfaces using modern JavaScript frameworks',
          'Participated in agile development processes'
        ]
      }
    ],
    projects: [
      {
        id: 1,
        projectName: 'E-commerce Platform',
        role: 'Full-stack Developer',
        descriptions: [
          'Built a complete e-commerce solution with React frontend and Node.js backend',
          'Integrated payment processing and inventory management systems'
        ]
      }
    ]
  })

  // Sample job data - in a real app, this would come from your backend API
  const [jobs] = useState<Job[]>([
    {
      id: '1',
      companyName: 'Equifax',
      companyLogo: '🏢',
      position: 'Rotational Security Associate',
      location: 'USA-GA-Alpharetta-JVW3',
      workMode: 'Onsite',
      workStatus: ['Full-time'],
      experienceLevel: ['New Grad', 'Entry Level'],
      postedTime: '12 minutes ago',
      applicantsCount: 'Less than 25 applicants',
      isEarlyApplicant: true,
      matchScore: 55,
      matchDetails: ['✓ H1B Sponsor Likely'],
      industry: 'Analytics · Consulting · Public Company'
    },
    {
      id: '2',
      companyName: 'Analog Devices',
      companyLogo: '🏭',
      position: 'Field Product Engineer, Data Center Cooling',
      location: 'Austin, TX',
      workMode: 'Onsite',
      workStatus: ['Full-time'],
      experienceLevel: ['New Grad', 'Entry Level'],
      postedTime: '12 minutes ago',
      applicantsCount: '67 applicants',
      matchScore: 56,
      matchDetails: ['• No H1B']
    },
    {
      id: '3',
      companyName: 'Oliver Wyman',
      companyLogo: '🏛️',
      position: 'Junior Analyst 2026',
      location: 'Houston - Dallas',
      workMode: 'Hybrid',
      workStatus: ['Full-time'],
      experienceLevel: ['New Grad', 'Entry Level'],
      postedTime: '12 minutes ago',
      applicantsCount: 'Less than 25 applicants',
      matchScore: 45,
      matchDetails: ['• No H1B']
    },
    {
      id: '4',
      companyName: 'Groundworks',
      companyLogo: '🏗️',
      position: 'Administrative Assistant - Scheduler',
      location: 'Bristow, VA',
      workMode: 'Onsite',
      workStatus: ['Full-time'],
      experienceLevel: ['Entry Level'],
      postedTime: '12 minutes ago',
      applicantsCount: 'Less than 25 applicants',
      matchScore: 23,
      matchDetails: ['✓ Growth Opportunities']
    },
    {
      id: '5',
      companyName: 'HHMI',
      companyLogo: '🧬',
      position: 'Software Engineer - Gadagkar Lab',
      location: 'Columbia University',
      workMode: 'Onsite',
      workStatus: ['Full-time'],
      experienceLevel: ['New Grad', 'Entry Level'],
      postedTime: '13 minutes ago',
      applicantsCount: 'Less than 25 applicants',
      compensation: {
        min: 80000,
        max: 130000,
        currency: '$',
        period: 'year'
      },
      matchScore: 63,
      matchDetails: ['✓ Growth Opportunities']
    }
  ])

  const handleJobAction = (action: string, jobId: string) => {
    console.log(`${action} job:`, jobId)
    // Handle job actions (view, like, ask orion, apply)
  }

  const handleFiltersChange = (newFilters: JobFilters) => {
    setFilters(newFilters)
    // In a real app, this would trigger an API call to fetch filtered jobs
    console.log('Filters changed:', newFilters)
  }

  const handleEditResume = () => {
    console.log('Edit resume')
    // Navigate to resume editor or open modal
  }

  const handleGeneratePDF = () => {
    console.log('Generate PDF')
    // Call backend API to generate PDF in Jake's LaTeX format
  }

  const handleTogglePDFPreview = () => {
    setIsPDFPreview(!isPDFPreview)
  }

  return (
    <div className="min-h-screen bg-gray-50 grid grid-cols-[256px_1fr_320px] grid-rows-[auto_auto_1fr] gap-0">
      {/* Sidebar - spans full height */}
      <div className="row-span-3">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      
      {/* Top Navigation Tabs - spans middle and right columns */}
      <div className="col-span-2 bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center space-x-8">
            <button className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'jobs' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
            }`}>
              JOBS
            </button>
            <button className="px-4 py-2 rounded-lg font-medium text-blue-600 hover:bg-blue-50 transition-colors">
              Recommended
            </button>
            <button className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-50 transition-colors">
              Liked 0
            </button>
            <button className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-50 transition-colors">
              Applied 991
            </button>
            <button className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-50 transition-colors">
              External 0
            </button>
          </div>
        </div>
      </div>

      {/* Job Filters - spans middle and right columns */}
      <div className="col-span-2">
        <JobFiltersComponent filters={filters} onFiltersChange={handleFiltersChange} />
      </div>

      {/* Main Content Area - flexible grid for job list and resume preview */}
      <div className="col-span-2 grid grid-cols-[1fr_320px] gap-0 min-h-0">
        {/* Job List - takes remaining space */}
        <div className="min-h-0">
          <JobList
            jobs={jobs}
            onView={(jobId) => handleJobAction('view', jobId)}
            onLike={(jobId) => handleJobAction('like', jobId)}
            onAskOrion={(jobId) => handleJobAction('ask-orion', jobId)}
            onApply={(jobId) => handleJobAction('apply', jobId)}
          />
        </div>

        {/* Resume Preview - fixed width */}
        <div className="w-80">
          <ResumePreview
            resume={resume}
            onEditResume={handleEditResume}
            onGeneratePDF={handleGeneratePDF}
            isPDFPreview={isPDFPreview}
            onTogglePDFPreview={handleTogglePDFPreview}
          />
        </div>
      </div>
    </div>
  )
}

export default App
