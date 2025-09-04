// API service for connecting to the backend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api'

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

export class ApiService {
  private baseUrl: string

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`
    
    const defaultHeaders = {
      'Content-Type': 'application/json',
    }

    const config: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    }

    try {
      const response = await fetch(url, config)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'An error occurred')
      }

      return {
        data,
        success: true,
      }
    } catch (error) {
      return {
        data: null as T,
        success: false,
        message: error instanceof Error ? error.message : 'An error occurred',
      }
    }
  }

  // Resume API methods
  async getResumes() {
    return this.request('/resumes')
  }

  async getResumeById(id: string) {
    return this.request(`/resumes/${id}`)
  }

  async createResume(resume: any) {
    return this.request('/resumes', {
      method: 'POST',
      body: JSON.stringify(resume),
    })
  }

  async updateResume(id: string, resume: any) {
    return this.request(`/resumes/${id}`, {
      method: 'PUT',
      body: JSON.stringify(resume),
    })
  }

  async deleteResume(id: string) {
    return this.request(`/resumes/${id}`, {
      method: 'DELETE',
    })
  }

  // Job matching API methods (to be implemented in backend)
  async getJobMatches(resumeId: string) {
    return this.request(`/jobs/matches/${resumeId}`)
  }

  async searchJobs(filters: any) {
    return this.request('/jobs/search', {
      method: 'POST',
      body: JSON.stringify(filters),
    })
  }
}

export const apiService = new ApiService()
