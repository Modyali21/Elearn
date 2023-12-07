package com.example.demo.systemUser;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public abstract class SystemUserService<T extends SystemUser, R extends SystemUserRepository<T>> {

    protected R repository;
    @PersistenceContext
    protected EntityManager entityManager;

    public SystemUserService(R repository) {
        this.repository = repository;
    }

    public void saveUser(T user) {
        repository.save(user);
    }

    public boolean emailTaken(String email) {
        return repository.existsByEmail(email);
    }

    public boolean ssnTaken(String ssn) {
        return repository.existsBySsn(ssn);
    }

    public T findByEmail(String email) throws UsernameNotFoundException {
        Optional<T> user = repository.findByEmail(email);
        if (user.isPresent()) {
            return user.get();
        } else {
            throw new UsernameNotFoundException("email isn't registered");
        }
    }

    public abstract Class<T> getEntityClass();

    public List<T> find(filterOptions filterOptions) {
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<T> criteriaQuery = criteriaBuilder.createQuery(getEntityClass());
        Root<T> root = criteriaQuery.from(getEntityClass());
        List<Predicate> predicates = new ArrayList<>();
        if (filterOptions.firstName() != null) {
            predicates.add(criteriaBuilder.like(root.get("firstName"), "%" + filterOptions.firstName() + "%"));
        }
        if (filterOptions.lastName() != null) {
            predicates.add(criteriaBuilder.like(root.get("lastName"), "%" + filterOptions.lastName() + "%"));
        }
        if (filterOptions.ssn() != null) {
            predicates.add(criteriaBuilder.like(root.get("ssn"), "%" + filterOptions.ssn() + "%"));
        }
        if (filterOptions.phone() != null) {
            predicates.add(criteriaBuilder.like(root.get("phone"), "%" + filterOptions.phone() + "%"));
        }
        if (filterOptions.email() != null) {
            predicates.add(criteriaBuilder.like(root.get("email"), "%" + filterOptions.email() + "%"));
        }
        if (filterOptions.degree() != null) {
            predicates.add(criteriaBuilder.like(root.get("degree"), "%" + filterOptions.degree() + "%"));
        }
        if (filterOptions.school() != null) {
            predicates.add(criteriaBuilder.like(root.get("school"), "%" + filterOptions.school() + "%"));
        }
        criteriaQuery.orderBy(criteriaBuilder.asc(root.get("firstName")));
        criteriaQuery.select(root).where(criteriaBuilder.or(predicates.toArray(Predicate[]::new)));
        TypedQuery<T> query = entityManager.createQuery(criteriaQuery);
        query.setMaxResults(8).setFirstResult(0);
        return query.getResultList();
    }
}
