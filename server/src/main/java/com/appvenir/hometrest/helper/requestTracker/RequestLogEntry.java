package com.appvenir.hometrest.helper.requestTracker;

import java.time.LocalDateTime;

public class RequestLogEntry {
    private final String clientIp;
    private final LocalDateTime requestTime;

    public RequestLogEntry(String clientIp, LocalDateTime requestTime) {
        this.clientIp = clientIp;
        this.requestTime = requestTime;
    }

    public String getClientIp() {
        return clientIp;
    }

    public LocalDateTime getRequestTime() {
        return requestTime;
    }
}