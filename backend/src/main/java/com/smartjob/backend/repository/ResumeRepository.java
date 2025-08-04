package com.smartjob.backend.repository;

import com.smartjob.backend.model.Resume;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResumeRepository extends JpaRepository<Resume, Long> {
}
