import type { ResumePreviewProps } from '../types/Resume';

export default function ResumePreview({ 
  resume, 
  onEditResume, 
  onGeneratePDF, 
  isPDFPreview, 
  onTogglePDFPreview 
}: ResumePreviewProps) {
  if (!resume) {
    return (
      <div className="w-80 bg-white border-l border-gray-200 p-6">
        <div className="text-center">
          <div className="text-6xl mb-4">📄</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Resume Found</h3>
          <p className="text-gray-600 mb-4">
            Create your resume to get personalized job matches
          </p>
          <button
            onClick={onEditResume}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Create Resume
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Resume Preview</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={onEditResume}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Edit
            </button>
            <button
              onClick={onGeneratePDF}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Generate PDF
            </button>
          </div>
        </div>
        
        {/* PDF Preview Toggle */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">PDF Preview</span>
          <button
            onClick={onTogglePDFPreview}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isPDFPreview ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isPDFPreview ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {isPDFPreview ? (
          <PDFPreview />
        ) : (
          <ResumeContent resume={resume} />
        )}
      </div>
    </div>
  );
}

function ResumeContent({ resume }: { resume: any }) {
  return (
    <div className="space-y-6">
      {/* Personal Information */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{resume.fullName}</h4>
        <div className="space-y-1 text-sm text-gray-600">
          <p>📧 {resume.email}</p>
          <p>📞 {resume.phone}</p>
        </div>
      </div>

      {/* Skills */}
      {resume.skills && resume.skills.length > 0 && (
        <div>
          <h5 className="font-semibold text-gray-900 mb-2">Skills</h5>
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((skill: string, index: number) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {resume.experienceList && resume.experienceList.length > 0 && (
        <div>
          <h5 className="font-semibold text-gray-900 mb-2">Experience</h5>
          <div className="space-y-3">
            {resume.experienceList.map((exp: any, index: number) => (
              <div key={index} className="border-l-2 border-gray-200 pl-3">
                <h6 className="font-medium text-gray-900">{exp.jobTitle}</h6>
                <p className="text-sm text-gray-600">{exp.companyName}</p>
                <p className="text-xs text-gray-500">
                  {exp.startDate} - {exp.endDate}
                </p>
                {exp.descriptions && exp.descriptions.length > 0 && (
                  <ul className="mt-1 text-xs text-gray-600 list-disc list-inside">
                    {exp.descriptions.slice(0, 2).map((desc: string, i: number) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {resume.educationList && resume.educationList.length > 0 && (
        <div>
          <h5 className="font-semibold text-gray-900 mb-2">Education</h5>
          <div className="space-y-3">
            {resume.educationList.map((edu: any, index: number) => (
              <div key={index} className="border-l-2 border-gray-200 pl-3">
                <h6 className="font-medium text-gray-900">{edu.degree}</h6>
                <p className="text-sm text-gray-600">{edu.schoolName}</p>
                <p className="text-xs text-gray-500">
                  {edu.fieldOfStudy} • {edu.startDate} - {edu.endDate}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {resume.projects && resume.projects.length > 0 && (
        <div>
          <h5 className="font-semibold text-gray-900 mb-2">Projects</h5>
          <div className="space-y-3">
            {resume.projects.map((project: any, index: number) => (
              <div key={index} className="border-l-2 border-gray-200 pl-3">
                <h6 className="font-medium text-gray-900">{project.projectName}</h6>
                <p className="text-sm text-gray-600">{project.role}</p>
                {project.descriptions && project.descriptions.length > 0 && (
                  <ul className="mt-1 text-xs text-gray-600 list-disc list-inside">
                    {project.descriptions.slice(0, 2).map((desc: string, i: number) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function PDFPreview() {
  return (
    <div className="space-y-4">
      <div className="bg-gray-100 rounded-lg p-4 text-center">
        <div className="text-4xl mb-2">📄</div>
        <h4 className="font-semibold text-gray-900 mb-2">PDF Preview</h4>
        <p className="text-sm text-gray-600 mb-4">
          Your resume in Jake's LaTeX format
        </p>
        <div className="bg-white rounded border p-4 text-xs text-left">
          <div className="font-bold text-lg mb-2">John Doe</div>
          <div className="text-sm mb-4">
            john.doe@email.com • (555) 123-4567
          </div>
          <div className="mb-3">
            <div className="font-semibold mb-1">EXPERIENCE</div>
            <div className="text-xs">
              <div className="font-medium">Software Engineer</div>
              <div>Tech Company • 2020-2023</div>
            </div>
          </div>
          <div className="mb-3">
            <div className="font-semibold mb-1">EDUCATION</div>
            <div className="text-xs">
              <div className="font-medium">Bachelor of Science in Computer Science</div>
              <div>University Name • 2016-2020</div>
            </div>
          </div>
          <div className="mb-3">
            <div className="font-semibold mb-1">SKILLS</div>
            <div className="text-xs">JavaScript, React, Node.js, Python</div>
          </div>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
          Download PDF
        </button>
      </div>
    </div>
  );
}
