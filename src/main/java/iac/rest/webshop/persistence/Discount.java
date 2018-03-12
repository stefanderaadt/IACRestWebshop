package iac.rest.webshop.persistence;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Discount {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private Date beginDate;
	private Date endDate;

	protected Discount() {}

	public Discount(Date beginDate, Date endDate) {
		this.beginDate = beginDate;
		this.endDate = endDate;
	}

	public long getId() {
		return id;
	}

	public Date getBeginDate() {
		return beginDate;
	}

	public void setBeginDate(Date beginDate) {
		this.beginDate = beginDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
}
