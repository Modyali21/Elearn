package com.example.demo.login;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class LoginController {
	
	private final AuthenticationManager authenticationManager;

	public LoginController(AuthenticationManager authenticationManager) {
		this.authenticationManager = authenticationManager;
	}

	@PostMapping("/login")
	public ResponseEntity<Object> login(@RequestBody LoginDTO loginRequest) {
		Authentication authenticationRequest = UsernamePasswordAuthenticationToken
				.unauthenticated(loginRequest.getEmail(), loginRequest.getPassword());
		try {
			this.authenticationManager.authenticate(authenticationRequest);
			return ResponseEntity.status(200).body("welcome back");
		} catch (BadCredentialsException e) {
			return ResponseEntity.status(401).body("the email or password is wrong");
		} catch (LockedException e) {
			return ResponseEntity.status(401).body("the account is locked, contact the admin");
		} catch (DisabledException e) {
			return ResponseEntity.status(401).body("the account is disabled, contact the admin");
		}
	}
}
