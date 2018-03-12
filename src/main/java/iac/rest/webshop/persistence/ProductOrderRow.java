package iac.rest.webshop.persistence;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
public class ProductOrderRow {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private int amount;

    private float price;

    @OneToOne(fetch = FetchType.LAZY)
    private Product product;

    protected ProductOrderRow() {}

    public long getId() {
        return id;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
