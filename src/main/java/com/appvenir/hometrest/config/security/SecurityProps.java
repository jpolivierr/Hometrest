package com.appvenir.hometrest.config.security;

public class SecurityProps {
    
    public static String[] allowedPath(){
        return new String[]{
                            "/error",
                            "/logout/**",
                            "/signup/**",
                            "/login/**",
                            "/assets/**",
                            "/api/v1/property_search/**",
                            "/",
                            "/index.html",
                            "/static/js/**",
                            "/static/css/**",
                            "/static/media/**",
                            "/listings/**",
                            "/single_property/**",
                            "/favicon.ico",
                            "/favicon.icon",
                            "/manifest.json",
                        };
    }

}
