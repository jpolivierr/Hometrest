package com.appvenir.hometrest.interceptor;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.appvenir.hometrest.helper.requestTracker.RequestTracker;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Component
public class RequestTrackingInterceptor implements HandlerInterceptor{

    private final RequestTracker requestTracker;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String clientIp = request.getRemoteAddr();
        int requestCount = requestTracker.incrementRequestCount(clientIp);
        System.out.println("Client IP: " + clientIp + " has made " + requestCount + " requests.");
        return true;
    }
    
}
