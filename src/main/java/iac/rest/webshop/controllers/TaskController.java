package iac.rest.webshop.controllers;

import iac.rest.webshop.persistence.Task;
import iac.rest.webshop.repositories.TaskRepository;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

	private TaskRepository taskRepository;

	public TaskController(TaskRepository taskRepository) {
		this.taskRepository = taskRepository;
	}

	@PostMapping
	public void addTask(@RequestBody Task task) {
		taskRepository.save(task);
	}

	@GetMapping
	public List<Task> getTasks() {
		return taskRepository.findAll();
	}

	@GetMapping("/{id}")
	public Task getTask(@PathVariable long id, HttpServletResponse response) {
		Task task = taskRepository.getOne(id);

		// Return 204 when not found
		if (task == null) response.setStatus(HttpServletResponse.SC_NO_CONTENT);

		return task;
	}

	@PutMapping("/{id}")
	public void editTask(@PathVariable long id, @RequestBody Task task) {
		Task existingTask = taskRepository.getOne(id);

		Assert.notNull(existingTask, "Task not found");
		existingTask.setDescription(task.getDescription());
		taskRepository.save(existingTask);
	}

	@DeleteMapping("/{id}")
	public void deleteTask(@PathVariable long id) {
		taskRepository.deleteById(id);
	}
}
