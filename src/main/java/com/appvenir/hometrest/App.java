package com.appvenir.hometrest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import io.github.cdimascio.dotenv.Dotenv;

// @SpringBootApplication
@SpringBootApplication(scanBasePackages = {"com.appvenir"})
public class App {

	public static void main(String[] args) {
		SpringApplication.run(App.class, args);

	}

	@Bean
	public Dotenv dotenv() {
		return Dotenv.configure().directory("./").load();
	}

}
