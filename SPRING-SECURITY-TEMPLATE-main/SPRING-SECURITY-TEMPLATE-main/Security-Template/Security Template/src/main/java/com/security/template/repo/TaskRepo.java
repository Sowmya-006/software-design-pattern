package com.security.template.repo;

import com.security.template.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepo extends JpaRepository<Task, Long> {

}
