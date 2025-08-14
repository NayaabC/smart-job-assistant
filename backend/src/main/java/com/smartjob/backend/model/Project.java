package com.smartjob.backend.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String projectName;
    private String role;

    @ElementCollection
    @CollectionTable(name = "project_descriptions", joinColumns = @JoinColumn(name = "project_id"))
    @Column(name = "description")
    private List<String> descriptions;

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getProjectName() { return projectName; }
    public void setProjectName(String projectName) { this.projectName = projectName; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public List<String> getDescriptions() { return descriptions; }
    public void setDescriptions(List<String> descriptions) { this.descriptions = descriptions; }
}
