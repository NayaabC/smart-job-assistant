export interface Job {
  id: string;
  companyName: string;
  companyLogo: string;
  position: string;
  location: string;
  workMode: 'Remote' | 'Hybrid' | 'Onsite';
  compensation?: {
    min: number;
    max: number;
    currency: string;
    period: 'year' | 'month' | 'hour';
  };
  workStatus: ('Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Freelance')[];
  experienceLevel: ('New Grad' | 'Entry Level' | 'Mid-level' | 'Senior Level')[];
  postedTime: string;
  applicantsCount: string;
  isEarlyApplicant?: boolean;
  matchScore: number;
  matchDetails: string[];
  industry?: string;
  companyType?: string;
}

export interface JobFilters {
  categories: string[];
  searchQuery: string;
  location: string;
  sortBy: 'Most Recent' | 'Most Relevant' | 'Salary High to Low' | 'Salary Low to High';
}

export interface MatchScoreProps {
  score: number;
  details: string[];
}
