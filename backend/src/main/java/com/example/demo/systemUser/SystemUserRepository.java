package com.example.demo.systemUser;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface SystemUserRepository<T extends SystemUser> extends JpaRepository<T, Long> {

    Optional<T> findByEmail(String email);
    boolean existsByEmail(String email);
    boolean existsBySsn(String ssn);
}
