package com.example.demo.systemUser;

import java.sql.Date;

public record filterOptions(
        String firstName,
        String lastName,
        String email,
        String phone,
        String school,
        String degree,
        String ssn,
        Date birthDate,
        boolean isAscending,
        boolean useAnd,
        String sortBy
) {
}
