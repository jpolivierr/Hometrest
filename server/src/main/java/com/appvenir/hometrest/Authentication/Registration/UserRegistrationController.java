package com.appvenir.hometrest.Authentication.Registration;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.appvenir.hometrest.Authentication.SessionManagement.SessionManagement;
import com.appvenir.hometrest.entryPoint.Private.user.User;
import com.appvenir.hometrest.entryPoint.Private.user.UserService;
import com.appvenir.hometrest.exception.user.UserNotFoundException;
import com.appvenir.hometrest.process.RedirectResponse.RedirectResponse;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
@RequestMapping(path="/process_registration")
public class UserRegistrationController {

    private UserService userService;
    private SessionManagement sessionMng;
    private RedirectResponse redirectResponse;

    UserRegistrationController(
                    UserService userService,
                    SessionManagement sessionMng,
                    RedirectResponse redirectResponse){
        this.userService = userService;
        this.sessionMng = sessionMng;
        this.redirectResponse = redirectResponse;
    }
    
    // Create a new user
    @ResponseStatus(HttpStatus.FOUND)
    @PostMapping(path="")
    public @ResponseBody RedirectResponse addNewUser(@Valid @RequestBody User user,
                                    HttpSession session,
                                    HttpServletResponse response){

         Boolean userFound = userService.userExist(user.getEmail());

          if(userFound) throw new UserNotFoundException();

        userService.createUser(user);
        
        sessionMng.create(user.getEmail(), session, response);

        redirectResponse.setRedirect(true);
        redirectResponse.setRedirectLink("/");
        return redirectResponse;
    }
}
