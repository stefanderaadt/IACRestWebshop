package iac.rest.webshop.controllers;

import iac.rest.webshop.persistence.Category;
import iac.rest.webshop.persistence.Discount;
import iac.rest.webshop.persistence.Product;
import iac.rest.webshop.repositories.ApplicationUserRepository;
import iac.rest.webshop.repositories.CategoryRepository;
import iac.rest.webshop.repositories.ProductRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

	private ProductRepository productRepository;
	private CategoryRepository categoryRepository;

	private long DAY_IN_MS = 1000 * 60 * 60 * 24;

	public ProductController(ProductRepository productRepository,
                             CategoryRepository categoryRepository) {
		this.productRepository = productRepository;
		this.categoryRepository = categoryRepository;
	}

	@PostMapping
	public void addProduct(@RequestBody Product product) {
	    //Add category when set
	    if(product.getCategory() != null){
            Category category = categoryRepository.getOne(product.getCategory().getId());

            //Add category to product and product to category
            product.setCategory(category);
            category.getProducts().add(product);
        }

		productRepository.save(product);
	}

	@GetMapping
	public List<Product> getProducts() {
		return productRepository.findAll();
	}

    @GetMapping("/new")
    public List<Product> getNewProducts() {
	    Date lastWeek = new Date(System.currentTimeMillis() - (2 * DAY_IN_MS));

        return productRepository.findByCreatedAtBetween(
                new Timestamp(lastWeek.getTime()), new Timestamp(new Date().getTime()));
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
		if(product.getName() != null && !product.getName().isEmpty()) {
            existingProduct.setName(product.getName());
        }

        if(product.getDescription() != null && !product.getDescription().isEmpty()) {
            existingProduct.setDescription(product.getDescription());
        }

        if(product.getDiscounts() != null){
            //existingProduct.setDiscounts(product.getDiscounts());
            for(Discount discount: product.getDiscounts()){
                existingProduct.getDiscounts().add(discount);
            }
        }

        if(product.getPrice() != 0){
            existingProduct.setPrice(product.getPrice());
        }

		existingProduct.setCategory(product.getCategory());

        System.out.println(product);
		System.out.println(existingProduct);
		productRepository.save(existingProduct);
	}

	@DeleteMapping("/{id}")
	public void deleteProduct(@PathVariable long id) {
		productRepository.deleteById(id);
	}
}
