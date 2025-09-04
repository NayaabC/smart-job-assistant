export interface Education {
  id?: number;
  schoolName: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Experience {
  id?: number;
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  descriptions: string[];
}

export interface Project {
  id?: number;
  projectName: string;
  role: string;
  descriptions: string[];
}

export interface Resume {
  id?: number;
  fullName: string;
  email: string;
  phone: string;
  educationList: Education[];
  experienceList: Experience[];
  projects: Project[];
  skills: string[];
}

export interface ResumePreviewProps {
  resume: Resume | null;
  onEditResume: () => void;
  onGeneratePDF: () => void;
  isPDFPreview: boolean;
  onTogglePDFPreview: () => void;
}
