package com.appvenir.hometrest.config.security.jwt;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import javax.crypto.SecretKey;

import java.util.Date;

@Component
public class JwtUtil {
       private final SecretKey SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public static final long validityInMilliseconds = 360000;

    public String generateToken(UserDetails userDetails) {
            Claims claims = Jwts.claims().setSubject(userDetails.getUsername());
            claims.put("roles", userDetails.getAuthorities());

            Date now = new Date();
            Date validity = new Date(now.getTime() + validityInMilliseconds);

            return Jwts.builder()
                       .setClaims(claims)
                       .setIssuedAt(now)
                       .setExpiration(validity)
                       .signWith(SECRET_KEY)
                       .compact();
    }

    public String generateToken(Authentication authentication) {
        Claims claims = Jwts.claims().setSubject(authentication.getName());
        claims.put("roles", authentication.getAuthorities());

        Date now = new Date();
        Date validity = new Date(now.getTime() + validityInMilliseconds);

        return Jwts.builder()
                   .setClaims(claims)
                   .setIssuedAt(now)
                   .setExpiration(validity)
                   .signWith(SECRET_KEY)
                   .compact();
    }

    public Claims getClaims(String token) {
        return Jwts.parserBuilder()
                   .setSigningKey(SECRET_KEY)
                   .build()
                   .parseClaimsJws(token)
                   .getBody();
    }

    public String getUsername(String token)
    {
        return getClaims(token).getSubject();
    }

    public boolean isTokenExpired(String token)
    {
        return getClaims(token).getExpiration().before(new Date());
    }

    public boolean isValidToken(String token, String username)
    {
        final String currentUsernamae = getUsername(token);
        return (username.equals(currentUsernamae)) && !isTokenExpired(token);
    }
}
