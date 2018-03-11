package iac.rest.webshop.repositories;

import iac.rest.webshop.persistence.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
