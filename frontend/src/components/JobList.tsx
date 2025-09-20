import type { Job } from '../types/Job';
import JobCard from './JobCard';

interface JobListProps {
  jobs: Job[];
  onView: (jobId: string) => void;
  onLike: (jobId: string) => void;
  onAskOrion: (jobId: string) => void;
  onApply: (jobId: string) => void;
}

export default function JobList({ 
  jobs, 
  onView, 
  onLike, 
  onAskOrion, 
  onApply
}: JobListProps) {
  return (
    <div className="h-full overflow-y-auto">
      <div className="space-y-4">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onView={onView}
            onLike={onLike}
            onAskOrion={onAskOrion}
            onApply={onApply}
          />
        ))}
      </div>
      
      {/* Load more button */}
      <div className="mt-8 text-center">
        <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
          Load More Jobs
        </button>
      </div>
    </div>
  );
}
