package com.appvenir.hometrest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// @SpringBootApplication
@SpringBootApplication(scanBasePackages = {"com.appvenir"})
public class App {

	public static void main(String[] args) {
		SpringApplication.run(App.class, args);

	}

}
