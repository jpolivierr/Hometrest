package com.appvenir.hometrest.helper.requestTracker;

import java.util.Optional;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import io.github.cdimascio.dotenv.Dotenv;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class RequestTracker {

    private final JdbcTemplate jdbcTemplate;

    private final int MAX_REQUEST = getMaxRequestCount();

    private int getMaxRequestCount() {
        Dotenv dotenv = Dotenv.configure().load();
        String count = dotenv.get("REQUEST_TRACKER_MAX_REQUEST");
        return count != null ? Integer.parseInt(count) : 100;
    }

    public int incrementRequestCount(String clientIp) {

        if(getTotalRequestCount() == MAX_REQUEST) throw new RequestLimitReachedException();

        Optional<Integer> currentCount = getRequestCount(clientIp);
        if (currentCount.isPresent()) {
            int newCount = currentCount.get() + 1;
            jdbcTemplate.update("UPDATE request_count SET count = ? WHERE client_ip = ?", newCount, clientIp);
            return newCount;
        } else {
            jdbcTemplate.update("INSERT INTO request_count (client_ip, count) VALUES (?, ?)", clientIp, 1);
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
