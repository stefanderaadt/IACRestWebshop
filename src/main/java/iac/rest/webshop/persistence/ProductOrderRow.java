package iac.rest.webshop.persistence;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class ProductOrderRow {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private int amount;

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

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @Override
    public String toString() {
        return "ProductOrderRow{" +
                "id=" + id +
                ", amount=" + amount +
                ", product=" + product +
                '}';
    }
}
