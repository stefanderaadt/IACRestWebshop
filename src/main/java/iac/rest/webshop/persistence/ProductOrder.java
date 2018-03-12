package iac.rest.webshop.persistence;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
public class ProductOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@OneToOne(fetch = FetchType.LAZY)
	private Adress adress;

	private ArrayList<OrderRow> orderRows;

	protected ProductOrder() {}

	public ProductOrder(Adress adress, ArrayList<OrderRow> orderRows) {
		//this.adress = adress;
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

	@OneToMany(fetch = FetchType.LAZY)
	public ArrayList<OrderRow> getOrderRows() {
		return orderRows;
	}

	public void setOrderRows(ArrayList<OrderRow> orderRows) {
		this.orderRows = orderRows;
	}
}
