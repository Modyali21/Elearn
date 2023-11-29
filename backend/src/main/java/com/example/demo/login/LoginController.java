package com.example.demo.login;

import com.example.demo.config.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
public class LoginController {
	
	private final AuthenticationManager authenticationManager;

	@Autowired
	private CustomUserDetailsService cuds;
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
	@RequestMapping("/oauth2/signin/{role}")
	public ResponseEntity<Object> Oauth2_login(@PathVariable String role,@AuthenticationPrincipal OAuth2User oauth2User) {
		System.out.println("output is = "+oauth2User.getAttributes());
		Map<String,Object> data =oauth2User.getAttributes();
		System.out.println("email is = "+data.get("email"));
		System.out.println("role is = "+role);
		try {
			UserDetails ud =cuds.loadUserByUsername(data.get("email").toString());
			System.out.println("user details = "+ud.toString());
			return ResponseEntity.status(200).body("welcome back");
		} catch (UsernameNotFoundException e) {
			return ResponseEntity.status(401).body("email has not registered yet");
		}



	}
}
