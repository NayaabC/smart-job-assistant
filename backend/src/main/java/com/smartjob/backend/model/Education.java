package com.smartjob.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


@Entity
public class Education {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String schoolName;
	private String degree;
	private String fieldOfStudy;
	private String startDate;
	private String endDate;
	
	@ManyToOne
	@JoinColumn(name = "resume_id")
	private Resume resume;
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getSchoolName() {
		return schoolName;
	}
	
	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}
	
	public String degree() {
		return degree;
	}
	
	public void setDegree(String degree) {
		this.degree = degree;
	}
	
	
	public String getFieldOfStudy() {
		return fieldOfStudy;
	}
	
	
	public void setFieldOfStudy(String fieldOfStudy) {
		this.fieldOfStudy = fieldOfStudy;
	}
	
	public String getStartDate() {
		return startDate;
	}
	
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	
	public String getEndDate() {
		return endDate;
	}
	
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	
	public Resume getResume() {
		return resume;
	}
	
	public void setResume(Resume resume) {
		this.resume = resume;
	}
	
	
	
	
	
	
	
	
	
	
	
}