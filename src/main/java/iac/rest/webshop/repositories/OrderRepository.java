package iac.rest.webshop.repositories;

import iac.rest.webshop.persistence.ProductOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<ProductOrder, Long> {
}
