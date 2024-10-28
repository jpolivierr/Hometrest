package com.appvenir.hometrest;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.appvenir.hometrest.domain.user.factory.UserFactory;
import com.appvenir.hometrest.domain.user.service.UserService;

import lombok.RequiredArgsConstructor;

// @SpringBootApplication
@SpringBootApplication(scanBasePackages = {"com.appvenir"})
@RequiredArgsConstructor
public class App implements CommandLineRunner{

	private final UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(App.class, args);

	}

	@Override
	public void run(String... args) throws Exception {
		
		var userRegistrationDto = UserFactory.getUserRegistrationDto();

		userService.saveUser(userRegistrationDto);

	}

}
