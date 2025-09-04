import type { MatchScoreProps } from '../types/Job';

export default function MatchScore({ score, details }: MatchScoreProps) {
  const getMatchLabel = (score: number) => {
    if (score >= 80) return 'EXCELLENT MATCH';
    if (score >= 60) return 'GOOD MATCH';
    if (score >= 40) return 'FAIR MATCH';
    return 'POOR MATCH';
  };

  const getMatchColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCircleColor = (score: number) => {
    if (score >= 80) return 'stroke-green-500';
    if (score >= 60) return 'stroke-blue-500';
    if (score >= 40) return 'stroke-yellow-500';
    return 'stroke-red-500';
  };

  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center space-y-3">
      {/* Circular progress bar */}
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            className={getCircleColor(score)}
            style={{
              strokeDasharray,
              strokeDashoffset,
              transition: 'stroke-dashoffset 0.5s ease-in-out'
            }}
          />
        </svg>
        {/* Score text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-gray-900">{score}%</span>
        </div>
      </div>

      {/* Match label */}
      <div className={`text-sm font-medium ${getMatchColor(score)}`}>
        {getMatchLabel(score)}
      </div>

      {/* Match details */}
      <div className="space-y-1">
        {details.map((detail, index) => (
          <div key={index} className="text-xs text-gray-600 text-center">
            {detail.startsWith('✓') ? (
              <span className="text-green-600">{detail}</span>
            ) : detail.startsWith('•') ? (
              <span className="text-gray-500">{detail}</span>
            ) : (
              <span>{detail}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
