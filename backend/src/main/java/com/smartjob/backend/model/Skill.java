package com.smartjob.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "skills")
public class Skill {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	// Each skill belongs to one resume
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "resume_id") //foreign key in skills table
	private Resume resume;
	
	public Long getId() { 
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public Resume getResume() {
		return resume;
	}
	
	public void setResume(Resume resume) {
		this.resume = resume;
	}
	
}