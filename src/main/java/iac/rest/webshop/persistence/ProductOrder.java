package iac.rest.webshop.persistence;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class ProductOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@OneToOne
	private Adress adress;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "order_id")
	private List<ProductOrderRow> orderRows = new ArrayList<>();

	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "application_user_id")
	private ApplicationUser user;

	protected ProductOrder() {}

	public ProductOrder(Adress adress, ArrayList<ProductOrderRow> orderRows) {
		this.adress = adress;
		this.orderRows = orderRows;
	}

	public long getId() {
		return id;
	}

	public Adress getAdress() {
		return adress;
	}

	public void setAdress(Adress adress) {
		this.adress = adress;
	}

	public List<ProductOrderRow> getOrderRows() {
		return orderRows;
	}

	public void setOrderRows(List<ProductOrderRow> orderRows) {
		this.orderRows = orderRows;
	}

	public ApplicationUser getUser() {
		return user;
	}

	public void setUser(ApplicationUser user) {
		this.user = user;
	}
}
