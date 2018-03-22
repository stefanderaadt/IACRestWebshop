package iac.rest.webshop.repositories;

import iac.rest.webshop.persistence.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Timestamp;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCreatedAtBetween(Timestamp timestamp, Timestamp timestamp2);
}
