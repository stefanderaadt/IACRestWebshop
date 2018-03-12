package iac.rest.webshop.controllers;

import iac.rest.webshop.repositories.TaskRepository;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/products")
public class ProductController {

	private ProductRepository productRepository;

	public ProductController(TaskRepository taskRepository) {
		this.productRepository = productRepository;
	}

	@PostMapping
	public void addTask(@RequestBody Product product) {
		productRepository.save(product);
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
