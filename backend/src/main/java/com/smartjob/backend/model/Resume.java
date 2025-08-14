package com.smartjob.backend.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "resumes")
public class Resume {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;

    @ElementCollection
    @CollectionTable(name = "resume_education", joinColumns = @JoinColumn(name = "resume_id"))
    private List<Education> education;

    @ElementCollection
    @CollectionTable(name = "resume_experience", joinColumns = @JoinColumn(name = "resume_id"))
    private List<Experience> experience;

    @ElementCollection
    @CollectionTable(name = "resume_skills", joinColumns = @JoinColumn(name = "resume_id"))
    @Column(name = "skill")
    private List<String> skills;

    @ElementCollection
    @CollectionTable(name = "resume_projects", joinColumns = @JoinColumn(name = "resume_id"))
    private List<Project> projects;
    
    
    public Long getId() {
    	return id;
    }
    
    public void setId (Long id) {
    	this.id = id;
    }
    
    
    public String getName() {
    	return name;
    }
    
    public void setName (String name) {
    	this.name = name;
    }
    
    public String getEmail() {
    	return email;
    }
    
    public void setEmail (String email) {
    	this.email = email;
    }
    
    public String getPhone() {
    	return phone;
    }
    
    public void setPhone (String phone) {
    	this.phone = phone;
    }
    
    public List<String> getSkills() {
    	return skills;
    }
    
    public void setSkills(List<String> skills) {
    	this.skills = skills;
    }
    
    public List<Education> getEducation() {
    	return education;
    }
    
    public void setEducation(List<Education> education) {
    	this.education = education;
    }
    
    public List<Experience> getExperience() {
    	return experience;
    }
    
    public void setExperience(List<Experience> experience) {
    	this.experience = experience;
    }
    
    public List<Project> getProjects() {
    	return projects;
    }
    
    public void setProjects(List<Project> projects) {
    	this.projects = projects;
    }
    
    
    
}
