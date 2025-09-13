package com.example.elecbill.conf;

import org.hibernate.boot.model.naming.Identifier;
import org.hibernate.boot.model.naming.PhysicalNamingStrategy;
import org.hibernate.engine.jdbc.env.spi.JdbcEnvironment;

public class CustomNamingStrategy implements PhysicalNamingStrategy {

    @Override
    public Identifier toPhysicalTableName(Identifier name, JdbcEnvironment context) {
        if (name != null && name.getText() != null) {
            return Identifier.toIdentifier(name.getText());
        }
        return name;
    }

    @Override
    public Identifier toPhysicalColumnName(Identifier name, JdbcEnvironment context) {
        if (name != null && name.getText() != null) {
            return Identifier.toIdentifier(name.getText());
        }
        return name;
    }

    @Override
    public Identifier toPhysicalSchemaName(Identifier name, JdbcEnvironment context) {
        if (name != null && name.getText() != null) {
            return Identifier.toIdentifier(name.getText());
        }
        return name;
    }

    @Override
    public Identifier toPhysicalCatalogName(Identifier name, JdbcEnvironment context) {
        if (name != null && name.getText() != null) {
            return Identifier.toIdentifier(name.getText());
        }
        return name;
    }

    @Override
    public Identifier toPhysicalSequenceName(Identifier name, JdbcEnvironment context) {
        if (name != null && name.getText() != null) {
            return Identifier.toIdentifier(name.getText());
        }
        return name;
    }
}
