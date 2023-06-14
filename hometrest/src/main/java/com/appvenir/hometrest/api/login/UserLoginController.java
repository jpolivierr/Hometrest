package com.appvenir.hometrest.api.login;


import java.util.UUID;

import org.springframework.boot.autoconfigure.web.ServerProperties.Reactive.Session;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.appvenir.hometrest.Exceptions.SessionExistException;
import com.appvenir.hometrest.api.user.User;
import com.appvenir.hometrest.sessionConfig.MySesionConfig;

import jakarta.servlet.ServletRequest;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/process-login")
public class UserLoginController {

        public UserLoginService userLoginService;

        public UserLoginController(UserLoginService userLoginService){

            this.userLoginService = userLoginService;

        }

        @ResponseStatus(HttpStatus.NO_CONTENT)
        @PostMapping(path = "")
        public void login(
                           @Valid @RequestBody UserLogin userLogin, 
                           ServletRequest request,
                           HttpServletResponse response
                           ){

         HttpServletRequest httpRequest = (HttpServletRequest) request;
         HttpSession activeSession = httpRequest.getSession();

         String email = (String) activeSession.getAttribute(MySesionConfig.EMAIL);

         if(email == null){

            HttpSession session = httpRequest.getSession(true);
            String token = UUID.randomUUID().toString();

            Cookie cookie = new Cookie(MySesionConfig.USER_AUTH_TOKEN, token);
            cookie.setHttpOnly(false);
            cookie.setSecure(false);

            response.addCookie(cookie);

            User user = userLoginService.authenticate(userLogin.getEmail(), userLogin.getPassword());
      
            System.out.println(user.getEmail());
            session.setAttribute(MySesionConfig.EMAIL, user.getEmail());
            session.setAttribute(MySesionConfig.COOKIE_VALUE, token);
            session.setAttribute(MySesionConfig.JSESSION_ID, session.getId());
            session.setMaxInactiveInterval(MySesionConfig.MAX_INERVAL);

         }else{

            throw new SessionExistException();

         }

        }
    
}
