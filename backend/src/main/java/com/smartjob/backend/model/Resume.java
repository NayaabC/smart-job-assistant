package com.smartjob.backend.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "resume")
public class Resume {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String email;
    private String phone;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "resume_id")
    private List<Education> educationList;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "resume_id")
    private List<Experience> experienceList;
    
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "resume_id")
    private List<Project> projects;

    @ElementCollection
    @CollectionTable(name = "resume_skills", joinColumns = @JoinColumn(name = "resumE_id"))
    @Column(name = "skill")
    private List<String> skills;

    public Resume() {}

    public Resume(String fullName, String email, String phone, List<Education> educationList, List<Experience> experienceList, List<String> skills, 
    		List<Project> projects) {
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.educationList = educationList;
        this.experienceList = experienceList;
        this.skills = skills;
        this.projects = projects;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public List<Education> getEducationList() {
        return educationList;
    }

    public void setEducationList(List<Education> educationList) {
        this.educationList = educationList;
    }

    public List<Experience> getExperienceList() {
        return experienceList;
    }

    public void setExperienceList(List<Experience> experienceList) {
        this.experienceList = experienceList;
    }

    public List<String> getSkills() {
        return skills;
    }

    public void setSkills(List<String> skills) {
        this.skills = skills;
    }
    
    public List<Project> getProjects() {
    	return projects;
    }
    
    public void setProjects(List<Project> projects) {
    	this.projects = projects;
    }
}
