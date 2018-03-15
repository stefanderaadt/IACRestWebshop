package iac.rest.webshop.controllers;

import iac.rest.webshop.persistence.Product;
import iac.rest.webshop.repositories.ApplicationUserRepository;
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

	public ProductController(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}

	@PostMapping
	public void addProduct(@RequestBody Product product) {
		productRepository.save(product);
	}

	@GetMapping
	public List<Product> getProducts() {
		return productRepository.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Product> getProduct(@PathVariable long id, HttpServletResponse response) {
		Product product = productRepository.getOne(id);

		// Return 204 when not found
		if (product == null) return new ResponseEntity<>(HttpStatus.NO_CONTENT);;

        return new ResponseEntity<>(product, HttpStatus.OK);
	}

	@PutMapping("/{id}")
	public void editProduct(@PathVariable long id, @RequestBody Product product) {
		Product existingProduct = productRepository.getOne(id);

		Assert.notNull(existingProduct, "Product not found");
		existingProduct.setName(product.getName());
		existingProduct.setDiscounts(product.getDiscounts());
		existingProduct.setPrice(product.getPrice());
		productRepository.save(existingProduct);
	}

	@DeleteMapping("/{id}")
	public void deleteProduct(@PathVariable long id) {
		productRepository.deleteById(id);
	}
}
