package iac.rest.webshop.controllers;

import iac.rest.webshop.persistence.ProductOrder;
import iac.rest.webshop.repositories.OrderRepository;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.security.Principal;

@RestController
@RequestMapping("/orders/")
public class OrderController {

	private OrderRepository orderRepository;

	public OrderController(OrderRepository orderRepository) {
		this.orderRepository = orderRepository;
	}

	@PostMapping
	public void addOrder(@RequestBody ProductOrder order) {
		orderRepository.save(order);
	}

	@GetMapping("/{id}")
	public ProductOrder getOrder(@PathVariable long id, HttpServletResponse response, Principal principal) {
		ProductOrder order = orderRepository.getOne(id);

		// Return 204 when not found
		if (order == null) {
			response.setStatus(HttpServletResponse.SC_NO_CONTENT);
			return null;
		}

		//Check if order is from user
		if (!order.getUser().getUsername().equals(principal.getName())){
			response.setStatus(HttpServletResponse.SC_FORBIDDEN);
			return null;
		}


		return order;
	}

	@PutMapping("/{id}")
	public void editOrder(@PathVariable long id, @RequestBody ProductOrder order) {
		ProductOrder existingOrder = orderRepository.getOne(id);

		Assert.notNull(existingOrder, "Order not found");
		existingOrder.setAdress(order.getAdress());
		existingOrder.setOrderRows(order.getOrderRows());
		orderRepository.save(existingOrder);
	}

	@DeleteMapping("/{id}")
	public void deleteOrder(@PathVariable long id) {
		orderRepository.deleteById(id);
	}
}
