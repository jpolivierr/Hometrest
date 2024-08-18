package com.appvenir.hometrest.helper.requestTracker;

import java.util.Optional;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class RequestTracker {

    private final JdbcTemplate jdbcTemplate;

    public int incrementRequestCount(String clientIp) {
        Optional<Integer> currentCount = getRequestCount(clientIp);
        if (currentCount.isPresent()) {
            int newCount = currentCount.get() + 1;
            jdbcTemplate.update("UPDATE request_count SET count = ? WHERE client_ip = ?", newCount, clientIp);
            System.out.println("Client IP: " + clientIp + " Visits: " + newCount);
            return newCount;
        } else {
            jdbcTemplate.update("INSERT INTO request_count (client_ip, count) VALUES (?, ?)", clientIp, 1);
            System.out.println("Client IP: " + clientIp + " Visits: " + 1);
            return 1;
        }
    }

    public Optional<Integer> getRequestCount(String clientId) {
        try {
            Integer count = jdbcTemplate.queryForObject(
                    "SELECT count FROM request_count WHERE client_ip = ?",
                    Integer.class,
                    clientId
            );
            return Optional.ofNullable(count);
        } catch (Exception e) {
            return Optional.empty();
        }
    }
    
}
