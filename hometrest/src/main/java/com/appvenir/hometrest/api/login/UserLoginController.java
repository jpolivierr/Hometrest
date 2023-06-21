package com.appvenir.hometrest.api.login;


import java.util.UUID;

import org.springframework.boot.autoconfigure.web.ServerProperties.Reactive.Session;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.appvenir.hometrest.Exceptions.SessionExistException;
import com.appvenir.hometrest.RedirectResponse.RedirectResponse;
import com.appvenir.hometrest.SessionManagement.SessionManagement;
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

        private UserLoginService userLoginService;
        private SessionManagement sessionMng;
        private RedirectResponse redirectResponse;

        public UserLoginController(
                      UserLoginService userLoginService, 
                      SessionManagement sessionMng,
                      RedirectResponse redirectResponse
                      ){

            this.userLoginService = userLoginService;
            this.sessionMng = sessionMng;
            this.redirectResponse = redirectResponse;

        }

        @ResponseStatus(HttpStatus.NO_CONTENT)
        @GetMapping(path = "")
        public void logout(HttpSession session){

            if(session != null) {
               session.invalidate();
               session = null;
            }

        }

        @ResponseStatus(HttpStatus.FOUND)
        @PostMapping(path = "")
        public RedirectResponse login(
                           @Valid @RequestBody UserLogin userLogin, 
                             HttpSession session,
                             HttpServletResponse response
                           ){

            User user = userLoginService.authenticate(userLogin.getEmail(), userLogin.getPassword());

            sessionMng.create(user.getEmail(), session, response);

            redirectResponse.setRedirect(true);
            redirectResponse.setRedirectLink("/");
            return redirectResponse;


        }
    
}
