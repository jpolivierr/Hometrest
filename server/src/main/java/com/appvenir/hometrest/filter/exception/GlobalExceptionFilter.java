package com.appvenir.hometrest.filter.exception;

import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.appvenir.hometrest.exception.user.UserNotFoundException;
import com.appvenir.hometrest.helper.paramBuilder.QueryParamBuilder;
import com.appvenir.hometrest.helper.validation.exception.ValidationException;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class GlobalExceptionFilter extends HttpFilter{

    @Override
    public void doFilter(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws IOException, ServletException {
         try {
            chain.doFilter(request, response);
        } catch (UserNotFoundException ex) {
            response.sendRedirect("/login?error=true&message=" + ex.getMessage());
        }
        catch(ValidationException e){

            var errors = e.getErrors();
            Map<String, String> params = new LinkedHashMap<>();
            params.put("emailError", errors.get("email"));
            params.put("passwordError", errors.get("password"));
            
            QueryParamBuilder.buildQueryString(params);

            response.sendRedirect("/login?" + QueryParamBuilder.buildQueryString(params));
            
        }
        catch (Exception ex) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Bad request");
        }
    }

}
