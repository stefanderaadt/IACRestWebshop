package iac.rest.webshop.persistence;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String pathName;

	private String name;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "category_id")
    @JsonIgnore
	private List<Product> products = new ArrayList<>();

	protected Category() {}

    public Category(String pathName, String name, List<Product> products) {
        this.pathName = pathName;
        this.name = name;
        this.products = products;
    }

    public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPathName() {
		return pathName;
	}

	public void setPathName(String pathName) {
		this.pathName = pathName;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", pathName='" + pathName + '\'' +
                ", name='" + name + '\'' +
                ", products=" + products +
                '}';
    }
}
