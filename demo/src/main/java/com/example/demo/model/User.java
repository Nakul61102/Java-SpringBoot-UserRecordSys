package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.*;



@Entity
@Table(name = "users") // <- Avoids conflict with reserved keyword "user"
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increment ID
    private int id;

    @NotBlank(message = "Name is mandatory")
    @Size(min = 2, message = "Name must be at least 2 characters")
    private String name;

    @NotBlank(message = "Email is mandatory")
    @Email(message = "Email should be valid")
    private String email;

    // Getters and setters
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
  
}
