package com.example.demo.systemUser;

import java.util.Optional;

public abstract class SystemUserService<T extends SystemUser, R extends SystemUserRepository<T>> {

    protected R repository;

    public SystemUserService(R repository){
        this.repository = repository;
    }

    public void saveUser(T user){
        repository.save(user);
    }

    public boolean emailTaken(String email){
        return repository.existsByEmail(email);
    }

    public boolean ssnTaken(String ssn){
        return repository.existsBySsn(ssn);
    }

    public Optional<T> findByEmail(String email){
        return repository.findByEmail(email);
    }
}
