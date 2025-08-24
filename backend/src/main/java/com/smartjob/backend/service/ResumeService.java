package com.smartjob.backend.service;

import com.smartjob.backend.model.Resume;
import com.smartjob.backend.repository.ResumeRepository;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ResumeService {
	
	private final ResumeRepository resumeRepository;
	
	public ResumeService (ResumeRepository repo) {
		this.resumeRepository = repo;
	}
	
	
	public Resume saveResume (Resume res) {
		return resumeRepository.save(res);
	}
	
	
	public List<Resume> getAllResumes() {
		return resumeRepository.findAll();
	}
	
	public Optional<Resume> getResumeById (Long id) {
		return resumeRepository.findById(id);
	}
	
	public void deleteResume (Long id) {
		resumeRepository.deleteById(id);
	}
}