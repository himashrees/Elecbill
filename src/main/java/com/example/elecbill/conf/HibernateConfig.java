package com.example.elecbill.conf;

import org.hibernate.boot.model.naming.PhysicalNamingStrategy;
import org.hibernate.cfg.Configuration;

import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;


public class HibernateConfig {
    private static final String PERSISTENCE_UNIT_NAME = "your-persistence-unit-name";

    public static EntityManagerFactory getEntityManagerFactory() {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory(PERSISTENCE_UNIT_NAME);
        return emf;
    }

    public static void main(String[] args) {
        // Initialize Hibernate with custom naming strategy
        Configuration configuration = new Configuration();
        configuration.setPhysicalNamingStrategy(new CustomNamingStrategy());

        EntityManagerFactory emf = configuration.configure().buildSessionFactory();
        // ...
    }
}

