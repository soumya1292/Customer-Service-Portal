package com.cognizant.serviceportal.model;

import jakarta.persistence.*;

import java.util.Calendar;
import java.util.Date;

@Entity
@Table(name = "customer_request")
public class ServiceRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "service_id")
    private String serviceId;
    @Column(name = "description")

    private String description;
    @Column(name = "service_name")
    private String serviceName;
    @Column(name = "type")

    private String type;

    @Column(name = "status")
    private String status;

    @Column(name = "date")
     Date date=new Date();

    @Column(name="complete_by")
   private Date complete_by;




    public ServiceRequest() {
    }

    public ServiceRequest(int id, String serviceId, String description, String serviceName, String type, String status, Date date, Date complete_by) {
        this.id = id;
        this.serviceId = serviceId;
        this.description = description;
        this.serviceName = serviceName;
        this.type = type;
        this.status = status;
        this.date = date;
        this.complete_by=complete_by;
    }

    public Date getComplete_by() {
        return complete_by;
    }

    public void setComplete_by(Date complete_by) {
        Calendar today = Calendar.getInstance();
        if (complete_by.before(today.getTime())) {
            throw new IllegalArgumentException("Complete by date cannot be in the past.");
        }
        this.complete_by = complete_by;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getServiceId() {
        return serviceId;
    }

    public void setServiceId(String serviceId) {
        this.serviceId = serviceId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
