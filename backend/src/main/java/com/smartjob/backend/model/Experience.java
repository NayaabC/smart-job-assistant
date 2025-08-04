package com.smartjob.backend.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Experience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String jobTitle;
    private String companyName;
    private String startDate;
    private String endDate;

    @ElementCollection
    @CollectionTable(name = "experience_bullet_points", joinColumns = @JoinColumn(name = "experience_id"))
    @Column(name = "bullet_point", length = 500)
    private List<String> descriptionBullets;

    @ManyToOne
    @JoinColumn(name = "resume_id")
    private Resume resume;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
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

    public List<String> getDescriptionBullets() {
        return descriptionBullets;
    }

    public void setDescriptionBullets(List<String> descriptionBullets) {
        this.descriptionBullets = descriptionBullets;
    }

    public Resume getResume() {
        return resume;
    }

    public void setResume(Resume resume) {
        this.resume = resume;
    }
}
