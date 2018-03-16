package iac.rest.webshop.controllers;

import iac.rest.webshop.persistence.Category;
import iac.rest.webshop.repositories.CategoryRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {

	private CategoryRepository categoryRepository;

	public CategoryController(CategoryRepository categoryRepository) {
		this.categoryRepository = categoryRepository;
	}

	@GetMapping
	public List<Category> getCategories() {
		return categoryRepository.findAll();
	}

	@GetMapping("/{name}")
	public ResponseEntity<Category> getCategory(@PathVariable String name, HttpServletResponse response, Principal principal) {
		Category category = categoryRepository.findByPathName(name);

		// Return 204 when not found
		if (category == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}

		return new ResponseEntity<>(category, HttpStatus.OK);
	}
}
