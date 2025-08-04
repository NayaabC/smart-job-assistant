package com.smartjob.backend.controller;

import com.smartjob.backend.model.Resume;
import com.smartjob.backend.repository.ResumeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/resumes")
@CrossOrigin(origins = "*")
public class ResumeController {

    @Autowired
    private ResumeRepository resumeRepository;

    @PostMapping
    public Resume createResume(@RequestBody Resume resume) {
        return resumeRepository.save(resume);
    }

    @GetMapping
    public List<Resume> getAllResumes() {
        return resumeRepository.findAll();
    }
}
