package iac.rest.webshop.repositories;

import iac.rest.webshop.persistence.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
