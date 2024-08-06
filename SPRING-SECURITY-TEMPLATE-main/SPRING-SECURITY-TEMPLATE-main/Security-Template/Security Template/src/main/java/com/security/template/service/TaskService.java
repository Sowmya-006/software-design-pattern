package com.security.template.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.template.model.Task;
import com.security.template.model.User;
import com.security.template.repo.TaskRepo;
import com.security.template.repo.UserRepo;

@Service
public class TaskService {
    @Autowired
    private TaskRepo taskRepository;
    @Autowired
    private UserRepo userRepository;

    public Task saveTask(Task task) {
        return taskRepository.save(task);
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Optional<Task> getTaskById(Long taskId) {
        return taskRepository.findById(taskId);
    }

    public Task updateTask(Long id, Map<String, Object> updates) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found with id " + id));

        updates.forEach((key, value) -> {
            switch (key) {
                case "assignedStatus":
                    task.setAssignedStatus((Boolean) value);
                    break;
                case "assignedTo":
                    Map<String, Object> assignedToMap = (Map<String, Object>) value;
                    Long userId = ((Number) assignedToMap.get("userId")).longValue();
                    User assignedTo = userRepository.findById(userId)
                            .orElseThrow(() -> new RuntimeException("User not found with id " + userId));
                    task.setAssignedTo(assignedTo);
                    break;
            }
        });

        return taskRepository.save(task);
    }

    public void deleteTask(Long taskId) {
        taskRepository.deleteById(taskId);
    }

    public Task assignTask(Long taskId, User user) {
        Task task = taskRepository.findById(taskId).orElseThrow();
        task.setAssignedTo(user);
        task.setAssignedStatus(true);
        return taskRepository.save(task);
    }
}
