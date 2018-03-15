package iac.rest.webshop.persistence;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Adress {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String street;

	private String housenumber;

	protected Adress() {}

	public Adress(String street, String housenumber) {
		this.street = street;
		this.housenumber = housenumber;
	}

	public long getId() {
		return id;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getHousenumber() {
		return housenumber;
	}

	public void setHousenumber(String housenumber) {
		this.housenumber = housenumber;
	}

	@Override
	public String toString() {
		return "Adress{" +
				"id=" + id +
				", street='" + street + '\'' +
				", housenumber='" + housenumber + '\'' +
				'}';
	}
}
