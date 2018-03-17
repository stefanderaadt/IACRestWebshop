package iac.rest.webshop.repositories;

import iac.rest.webshop.persistence.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    Category findByPathName(String name);
}
