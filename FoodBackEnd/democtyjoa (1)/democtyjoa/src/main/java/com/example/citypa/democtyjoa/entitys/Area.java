package com.example.citypa.democtyjoa.entitys;
// Generated Jan 8, 2020 9:50:27 PM by Hibernate Tools 4.3.1


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * Area generated by hbm2java
 */
@Entity
@Table(name = "area", catalog = "senior_app"
)
public class Area implements java.io.Serializable {

	private Integer id;

        private City city;
	private String nameAr;
	private String nameEn;
	private Set<ConsumerAddress> consumerAddresses = new HashSet<ConsumerAddress>(0);
	private Set<DeliveryArea> deliveryAreas = new HashSet<DeliveryArea>(0);
	private Set<Order> orders = new HashSet<Order>(0);
	private Set<Branch> branches = new HashSet<Branch>(0);

	public Area() {
	}

	public Area(City city, String nameAr, String nameEn) {
		this.city = city;
		this.nameAr = nameAr;
		this.nameEn = nameEn;
	}

	public Area(City city, String nameAr, String nameEn, Set<ConsumerAddress> consumerAddresses, Set<DeliveryArea> deliveryAreas, Set<Order> orders, Set<Branch> branches) {
		this.city = city;
		this.nameAr = nameAr;
		this.nameEn = nameEn;
		this.consumerAddresses = consumerAddresses;
		this.deliveryAreas = deliveryAreas;
		this.orders = orders;
		this.branches = branches;
	}

    public Area(String nameAr, String nameEn) {
        this.nameAr = nameAr;
        this.nameEn = nameEn;
    }

    

    
        

	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "id", unique = true, nullable = false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "city_id", nullable = false)
	public City getCity() {
		return this.city;
	}

	public void setCity(City city) {
		this.city = city;
	}

	@Column(name = "name_ar", nullable = false, length = 100)
	public String getNameAr() {
		return this.nameAr;
	}

	public void setNameAr(String nameAr) {
		this.nameAr = nameAr;
	}

	@Column(name = "name_en", nullable = false, length = 100)
	public String getNameEn() {
		return this.nameEn;
	}

	public void setNameEn(String nameEn) {
		this.nameEn = nameEn;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "area")
	public Set<ConsumerAddress> getConsumerAddresses() {
		return this.consumerAddresses;
	}

	public void setConsumerAddresses(Set<ConsumerAddress> consumerAddresses) {
		this.consumerAddresses = consumerAddresses;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "area")
	public Set<DeliveryArea> getDeliveryAreas() {
		return this.deliveryAreas;
	}

	public void setDeliveryAreas(Set<DeliveryArea> deliveryAreas) {
		this.deliveryAreas = deliveryAreas;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "area")
	public Set<Order> getOrders() {
		return this.orders;
	}

	public void setOrders(Set<Order> orders) {
		this.orders = orders;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "area")
	public Set<Branch> getBranches() {
		return this.branches;
	}

	public void setBranches(Set<Branch> branches) {
		this.branches = branches;
	}

}
