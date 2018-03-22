package iac.rest.webshop.controllers;

import iac.rest.webshop.persistence.ApplicationUser;
import iac.rest.webshop.persistence.ProductOrder;
import iac.rest.webshop.repositories.ApplicationUserRepository;
import iac.rest.webshop.repositories.OrderRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.security.Principal;

@RestController
@RequestMapping("/orders")
public class OrderController {

	private OrderRepository orderRepository;
	private ApplicationUserRepository applicationUserRepository;

	public OrderController(
	        OrderRepository orderRepository,
            ApplicationUserRepository applicationUserRepository) {
		this.orderRepository = orderRepository;
		this.applicationUserRepository = applicationUserRepository;
	}

	@PostMapping
	public void addOrder(@RequestBody ProductOrder order, Principal principal) {
		ApplicationUser user = applicationUserRepository.findByUsername(principal.getName());

		// Add new address to user check for id = 0

		order.setUser(user);

        orderRepository.save(order);
	}

	@GetMapping("/{id}")
	public ResponseEntity<ProductOrder> getOrder(@PathVariable long id, HttpServletResponse response, Principal principal) {
		ProductOrder order = orderRepository.getOne(id);

		// Return 204 when not found
		if (order == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}

		//Check if order is from user
		if (!order.getUser().getUsername().equals(principal.getName())){
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		}


		return new ResponseEntity<>(order, HttpStatus.OK);
	}

	@PutMapping("/{id}")
	public ResponseEntity<ProductOrder> editOrder(@PathVariable long id, @RequestBody ProductOrder order, Principal principal) {
		ProductOrder existingOrder = orderRepository.getOne(id);

        // Return 204 when not found
        if (existingOrder == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        //Check if order is from user
        if (!existingOrder.getUser().getUsername().equals(principal.getName())){
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

		Assert.notNull(existingOrder, "Order not found");
		existingOrder.setAdress(order.getAdress());
		existingOrder.setOrderRows(order.getOrderRows());
		orderRepository.save(existingOrder);

		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public void deleteOrder(@PathVariable long id) {
		orderRepository.deleteById(id);
	}
}
