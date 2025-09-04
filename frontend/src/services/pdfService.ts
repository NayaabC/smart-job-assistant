import type { Resume } from '../types/Resume';

export interface PDFGenerationOptions {
  format: 'jake-latex' | 'standard' | 'modern';
  includePhoto?: boolean;
  colorScheme?: 'blue' | 'green' | 'purple' | 'gray';
}

export class PDFService {
  private baseUrl: string;

  constructor(baseUrl: string = 'http://localhost:8080') {
    this.baseUrl = baseUrl;
  }

  /**
   * Generate PDF in Jake's LaTeX format
   */
  async generateJakeLaTeXPDF(resume: Resume, options: PDFGenerationOptions = { format: 'jake-latex' }) {
    try {
      const response = await fetch(`${this.baseUrl}/api/resumes/${resume.id}/pdf`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resume,
          options: {
            ...options,
            format: 'jake-latex'
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }

      // Return the PDF blob
      const blob = await response.blob();
      return blob;
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw error;
    }
  }

  /**
   * Download PDF file
   */
  downloadPDF(blob: Blob, filename: string = 'resume.pdf') {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  /**
   * Preview PDF in new window
   */
  previewPDF(blob: Blob) {
    const url = window.URL.createObjectURL(blob);
    window.open(url, '_blank');
  }

  /**
   * Generate LaTeX source code (for debugging)
   */
  async generateLaTeXSource(resume: Resume): Promise<string> {
    try {
      const response = await fetch(`${this.baseUrl}/api/resumes/${resume.id}/latex`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resume }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate LaTeX source');
      }

      return await response.text();
    } catch (error) {
      console.error('Error generating LaTeX source:', error);
      throw error;
    }
  }
}

export const pdfService = new PDFService();
