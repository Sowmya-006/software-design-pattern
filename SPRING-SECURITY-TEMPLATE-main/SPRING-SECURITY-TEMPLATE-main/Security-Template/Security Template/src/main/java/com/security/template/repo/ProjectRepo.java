package com.security.template.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.template.model.Project;

@Repository
public interface ProjectRepo extends JpaRepository<Project, Long> {

}