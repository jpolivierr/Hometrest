package com.appvenir.hometrest.api.user;

import java.nio.file.AccessDeniedException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.appvenir.hometrest.ApiResponse.ApiResponse;
import com.appvenir.hometrest.Exceptions.UserNotFoundException;
import com.appvenir.hometrest.SessionManagement.SessionManagement;
import com.appvenir.hometrest.sessionConfig.MySesionConfig;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Controller
@RequestMapping(path="/api/v1/user")
public class UserController {

    private ApiResponse apiResponse;
    private UserService userService;
    private SessionManagement sessionMng;

    UserController(
                    ApiResponse apiResponse,
                    UserService userService,
                    SessionManagement sessionMng){
        this.apiResponse = apiResponse;
        this.userService = userService;
        this.sessionMng = sessionMng;
    }

    // Create a new user
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(path="")
    public void addNewUser(@Valid @RequestBody User user, 
                                    HttpSession session,
                                    HttpServletResponse response){

         Boolean userFound = userService.userExist(user.getEmail());

         System.out.println(userFound);

         if(userFound) throw new UserNotFoundException();

        
        userService.createUser(user);
        
        sessionMng.create(user.getEmail(), session, response);
    }

    // Update user
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping(path="")
    public void updateUser(@Valid @RequestBody User user){
        userService.updateUser(user);
    }

    // Find user
    @GetMapping(path="")
    public ResponseEntity<Object> findUser(HttpSession session) throws AccessDeniedException{

        String email = (String) session.getAttribute(MySesionConfig.EMAIL);

        if(email == null) throw new AccessDeniedException("UNAUTHORIZED");

        User userFound = userService.findUser(email);

        return apiResponse.create(200, "success", userFound);
    }

    // delete user
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping(path="")
    @Transactional
    public void deleteUser(HttpSession session) throws AccessDeniedException{

        String email = (String) session.getAttribute(MySesionConfig.EMAIL);

        if(email == null) throw new AccessDeniedException("UNAUTHORIZED");

        session.invalidate();
        session = null;

        userService.deleteUser(email);

    }
    
}
