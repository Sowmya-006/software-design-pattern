package com.security.template.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.template.model.Project;
import com.security.template.repo.ProjectRepo;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepo projectRepository;

    public Project saveProject(Project project) {
        return projectRepository.save(project);
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Optional<Project> getProjectById(Long projectId) {
        return projectRepository.findById(projectId);
    }

    public Project updateProject(Long projectId, Project projectDetails) {
        Project project = projectRepository.findById(projectId).orElseThrow();
        project.setProjectName(projectDetails.getProjectName());
        project.setDescription(projectDetails.getDescription());
        project.setDueDate(projectDetails.getDueDate());
        project.setManager(projectDetails.getManager());
        return projectRepository.save(project);
    }

    public void deleteProject(Long projectId) {
        projectRepository.deleteById(projectId);
    }
}
