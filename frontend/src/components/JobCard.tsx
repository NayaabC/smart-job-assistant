import type { Job } from '../types/Job';
import MatchScore from './MatchScore';

interface JobCardProps {
  job: Job;
  onView: (jobId: string) => void;
  onLike: (jobId: string) => void;
  onAskOrion: (jobId: string) => void;
  onApply: (jobId: string) => void;
}

export default function JobCard({ job, onView, onLike, onAskOrion, onApply }: JobCardProps) {
  const formatCompensation = () => {
    if (!job.compensation) return null;
    const { min, max, currency, period } = job.compensation;
    const periodText = period === 'year' ? 'yr' : period === 'month' ? 'mo' : 'hr';
    return `${currency}${min.toLocaleString()}${periodText} - ${currency}${max.toLocaleString()}${periodText}`;
  };

  const formatWorkStatus = () => {
    return job.workStatus.join(', ');
  };

  const formatExperienceLevel = () => {
    return job.experienceLevel.join(', ');
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex gap-6">
        {/* Main job content */}
        <div className="flex-1">
          {/* Header with company logo and time */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{job.postedTime}</span>
                  {job.isEarlyApplicant && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Be an early applicant
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onView(job.id)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                👁️
              </button>
              <button
                onClick={() => onLike(job.id)}
                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
              >
                ❤️
              </button>
            </div>
          </div>

          {/* Job details */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.position}</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
              <span className="font-medium">{job.companyName}</span>
              {job.industry && (
                <>
                  <span>/</span>
                  <span>{job.industry}</span>
                </>
              )}
              {job.companyType && (
                <>
                  <span>·</span>
                  <span>{job.companyType}</span>
                </>
              )}
            </div>
            
            {/* Location and work mode */}
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
              <span>📍 {job.location}</span>
              <span>🏢 {job.workMode}</span>
            </div>

            {/* Work status and experience */}
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
              <span>⏰ {formatWorkStatus()}</span>
              <span>👤 {formatExperienceLevel()}</span>
            </div>

            {/* Applicants count and compensation */}
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>👥 {job.applicantsCount}</span>
              {job.compensation && (
                <span>💰 {formatCompensation()}</span>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onAskOrion(job.id)}
                className="flex items-center space-x-1 bg-purple-100 text-purple-700 px-3 py-2 rounded-lg hover:bg-purple-200 transition-colors text-sm font-medium"
              >
                <span>✨</span>
                <span>ASK ORION</span>
              </button>
            </div>
            <button
              onClick={() => onApply(job.id)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              APPLY NOW
            </button>
          </div>
        </div>

        {/* Match Score */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <MatchScore score={job.matchScore} details={job.matchDetails} />
        </div>
      </div>
    </div>
  );
}
