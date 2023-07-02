package com.appvenir.hometrest.Authentication.login;


import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.appvenir.hometrest.Authentication.SessionManagement.SessionManagement;
import com.appvenir.hometrest.entryPoint.Private.user.User;
import com.appvenir.hometrest.process.RedirectResponse.RedirectResponse;

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

        @ResponseStatus(HttpStatus.FOUND)
        @GetMapping(path = "")
        public @ResponseBody RedirectResponse logout(HttpSession session){

          System.out.println("=========================");
           System.out.println("loginout");

         if( session == null ) throw new AccessDeniedException("Unauthorized here");

         
          session.invalidate();
          session = null;
            

            redirectResponse.setRedirect(true);
            redirectResponse.setRedirectLink("/");
            return redirectResponse;

        }

        @ResponseStatus(HttpStatus.FOUND)
        @PostMapping(path = "")
        public @ResponseBody RedirectResponse login(
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
