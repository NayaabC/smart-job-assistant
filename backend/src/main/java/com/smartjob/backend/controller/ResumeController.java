package com.smartjob.backend.controller;

import com.smartjob.backend.model.Resume;
import com.smartjob.backend.service.ResumeService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/resumes")
public class ResumeController {

    private final ResumeService resumeService;
    
    public ResumeController(ResumeService serv) {
    	this.resumeService = serv;
    }
    
    @PostMapping
    public ResponseEntity<Resume> createResume(@RequestBody Resume resume) {
    	return ResponseEntity.ok(resumeService.saveResume(resume));
    }
    
    @GetMapping
    public ResponseEntity<List<Resume>> getAllResumes() {
    	return ResponseEntity.ok(resumeService.getAllResumes());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Resume> getResumeById(@PathVariable Long id) {
    	return resumeService.getResumeById(id)
    			.map(ResponseEntity::ok)
    			.orElse(ResponseEntity.notFound().build());
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteResume(@PathVariable Long id){
    	resumeService.deleteResume(id);
    	return ResponseEntity.noContent().build();
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Resume> updateResume(@PathVariable Long id, @RequestBody Resume updatedResume){ 
    	return resumeService.getResumeById(id)
    			.map(existingResume -> {
    				// Update fields
    				existingResume.setFullName(updatedResume.getFullName());
    				existingResume.setEmail(updatedResume.getEmail());
    				existingResume.setPhone(updatedResume.getPhone());
    				existingResume.setEducationList(updatedResume.getEducationList());
    				existingResume.setExperienceList(updatedResume.getExperienceList());
    				existingResume.setProjects(updatedResume.getProjects());
    				existingResume.setSkills(updatedResume.getSkills());
    				
    				Resume savedResume = resumeService.saveResume(existingResume);
    				return ResponseEntity.ok(savedResume);
    			}).orElse(ResponseEntity.notFound().build());
    }
}
