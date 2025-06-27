package com.example.demo.exception;

public class ResourceNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L; // ✅ Add this line

    public ResourceNotFoundException(String message) {
        super(message);
    }
}
