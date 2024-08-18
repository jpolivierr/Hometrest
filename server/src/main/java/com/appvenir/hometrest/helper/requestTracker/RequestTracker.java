package com.appvenir.hometrest.helper.requestTracker;

import java.util.Optional;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class RequestTracker {

    private final JdbcTemplate jdbcTemplate;
    private final int REQUEST_PER_DAY = 5;
    private final int MAX_REQUEST = 5;

    public int incrementRequestCount(String clientIp) {

        if(getTotalRequestCount() == MAX_REQUEST) throw new RequestLimitReachedException();

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

    public int getTotalRequestCount() {
        try {
            Integer totalCount = jdbcTemplate.queryForObject("SELECT SUM(count) FROM request_count", Integer.class);
            return totalCount != null ? totalCount : 0;
        } catch (Exception e) {
            return 0;
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
