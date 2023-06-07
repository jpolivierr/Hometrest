package com.appvenir.hometrest.api.AuthenticationProcess;

// import java.io.IOException;

// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;
// import org.springframework.web.bind.annotation.RestController;

// import com.appvenir.hometrest.ApiResponse.ApiResponse;
// import com.appvenir.hometrest.SessionManagement.SessionManagement;

// import jakarta.servlet.http.HttpServletRequest;
// import jakarta.servlet.http.HttpServletResponse;



// @RestController 
public class AuthenticationController {

  // private final AuthenticationRepository authenticationRepository;
  // private final ApiResponse apiResponse;

  // public AuthenticationController(ApiResponse apiResponse, AuthenticationRepository authenticationRepository){
  //      this.apiResponse = apiResponse;
  //      this.authenticationRepository = authenticationRepository;
  // }


  // @RequestMapping(path="/login", method = RequestMethod.POST)
  // public ResponseEntity<Object> logUser(@RequestBody Authentication login, HttpServletRequest request, HttpServletResponse response) throws IOException{

  //   login.validate();

  //   Boolean isLoggedin = authenticationRepository.logIn(login.getEmail(), login.getPassword());

  //   SessionManagement session = new SessionManagement(request, response);

  //   Boolean sessionValidation = session.Valid();
    
  //   if(isLoggedin && !sessionValidation){

  //           session.create(login.getEmail());

  //           return apiResponse.create(200, HttpStatus.OK.toString(), null);
  //   }


  //   return apiResponse.create(401, HttpStatus.UNAUTHORIZED.toString(), null);


  // }
}
