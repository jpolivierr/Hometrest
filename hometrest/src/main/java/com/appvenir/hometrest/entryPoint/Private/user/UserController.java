package com.appvenir.hometrest.entryPoint.Private.user;

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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.appvenir.hometrest.Authentication.SessionManagement.SessionManagement;
import com.appvenir.hometrest.Exceptions.UserNotFoundException;
import com.appvenir.hometrest.constants.SessionConstants;
import com.appvenir.hometrest.process.ApiResponse.ApiResponse;
import com.appvenir.hometrest.process.RedirectResponse.RedirectResponse;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Controller
@RequestMapping(path="/api/secure/v1/user")
public class UserController {

    private ApiResponse apiResponse;
    private UserService userService;
    private SessionManagement sessionMng;
    private RedirectResponse redirectResponse;

    UserController(
                    ApiResponse apiResponse,
                    UserService userService,
                    SessionManagement sessionMng,
                    RedirectResponse redirectResponse){
        this.apiResponse = apiResponse;
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

    // Update user
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping(path="")
    public void updateUser(@Valid @RequestBody User user){
        userService.updateUser(user);
    }

    // Find user
    @GetMapping(path="")
    public ResponseEntity<Object> findUser(HttpSession session) throws AccessDeniedException{

        String email = (String) session.getAttribute(SessionConstants.EMAIL);

        if(email == null) throw new AccessDeniedException("UNAUTHORIZED");

        UserDTO userFound = userService.findUserDTO(email);

        return apiResponse.create(200, "success", userFound);
    }

    // delete user
    @ResponseStatus(HttpStatus.FOUND)
    @DeleteMapping(path="")
    @Transactional
    public @ResponseBody RedirectResponse  deleteUser(HttpSession session) throws AccessDeniedException{

        String email = (String) session.getAttribute(SessionConstants.EMAIL);
         System.out.println("=============");
         System.out.println("DELETING");
        if(email == null) throw new AccessDeniedException("UNAUTHORIZED");

        session.invalidate();
        session = null;

        userService.deleteUser(email);

        redirectResponse.setRedirect(true);
        redirectResponse.setRedirectLink("/");
        return redirectResponse;

    }
    
}
