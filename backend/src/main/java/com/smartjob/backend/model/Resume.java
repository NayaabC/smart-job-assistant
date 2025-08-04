package com.smartjob.backend.model;

import jakarta.persistence.*;

@Entity
public class Resume {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String jobTitle;
	private String resumeText;
	
	
	public Resume() {
		
	}
	
	public Resume(String jobTitle, String resumeText) {
		this.jobTitle = jobTitle;
		this.resumeText = resumeText;
	}
	
	
	public Long getId() {
		return id;
	}
	
	public String getJobTitle() {
		return jobTitle;
	}
	
	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}
	
	public String getResumeText() {
		return resumeText;
	}
	
	public void setResumeText(String resumeText) {
		this.resumeText = resumeText;
	}
}