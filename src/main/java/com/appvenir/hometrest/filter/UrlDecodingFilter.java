package com.appvenir.hometrest.filter;

import java.io.IOException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletRequestWrapper;
import jakarta.servlet.http.HttpServletResponse;

@Component
@Order(1)
public class UrlDecodingFilter extends OncePerRequestFilter {

    @SuppressWarnings("null")
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        Map<String, String[]> decodedParams = new HashMap<>();

        // Decode all parameters
        for (Map.Entry<String, String[]> entry : request.getParameterMap().entrySet()) {
            String[] decodedValues = decodeParamValues(entry.getValue());
            decodedParams.put(entry.getKey(), decodedValues);
        }

        // Create a new HttpServletRequestWrapper to override the parameter methods
        var wrappedRequest = new HttpServletRequestWrapper(request) {

            public String getParameter(String name) {
                String[] values = decodedParams.get(name);
                return values != null && values.length > 0 ? values[0] : null;
            }

            public String[] getParameterValues(String name) {
                return decodedParams.get(name);
            }

            public Map<String, String[]> getParameterMap() {
                return decodedParams;
            }
        };

        // Proceed with the next filter in the chain
        filterChain.doFilter(wrappedRequest, response);
    }

    private String[] decodeParamValues(String[] values) {
        if (values == null) {
            return null;
        }
        String[] decodedValues = new String[values.length];
        for (int i = 0; i < values.length; i++) {
            decodedValues[i] = URLDecoder.decode(values[i], StandardCharsets.UTF_8);
        }
        return decodedValues;
    }
}
