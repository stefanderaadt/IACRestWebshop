package iac.rest.webshop.controllers;

import iac.rest.webshop.persistence.Category;
import iac.rest.webshop.persistence.Product;
import iac.rest.webshop.repositories.ApplicationUserRepository;
import iac.rest.webshop.repositories.CategoryRepository;
import iac.rest.webshop.repositories.ProductRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

	private ProductRepository productRepository;
	private CategoryRepository categoryRepository;

	public ProductController(ProductRepository productRepository,
                             CategoryRepository categoryRepository) {
		this.productRepository = productRepository;
		this.categoryRepository = categoryRepository;
	}

	@PostMapping
	public void addProduct(@RequestBody Product product) {
	    System.out.println(product);

        Category category = categoryRepository.getOne(product.getCategory().getId());

        //Add category to product and product to category
        product.setCategory(category);
        category.getProducts().add(product);

        System.out.println(product);

		productRepository.save(product);
	}

	@GetMapping
	public List<Product> getProducts() {
		return productRepository.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Product> getProduct(@PathVariable long id, HttpServletResponse response) {
		// Return 204 when not found
		if (!productRepository.findById(id).isPresent()) return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        Product product = productRepository.getOne(id);

        return new ResponseEntity<>(product, HttpStatus.OK);
	}

	@PutMapping("/{id}")
	public void editProduct(@PathVariable long id, @RequestBody Product product) {
		Product existingProduct = productRepository.getOne(id);

		Assert.notNull(existingProduct, "Product not found");
		existingProduct.setName(product.getName());
		existingProduct.setDescription(product.getDescription());
		existingProduct.setDiscounts(product.getDiscounts());
		existingProduct.setPrice(product.getPrice());
		existingProduct.setCategory(product.getCategory());
		productRepository.save(existingProduct);
	}

	@DeleteMapping("/{id}")
	public void deleteProduct(@PathVariable long id) {
		productRepository.deleteById(id);
	}
}
