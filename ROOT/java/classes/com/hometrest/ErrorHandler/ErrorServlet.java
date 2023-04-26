package com.hometrest.ErrorHandler;

import java.io.IOException;

import com.hometrest.JsonHttpResponse;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.annotation.WebServlet;

@WebServlet(urlPatterns = "/error")
public class ErrorServlet extends HttpServlet {

    class ErrorProps {

        // Throwable throwable;
         private Integer statusCode;
         private String servletName;
         private String requestUri;
         private String exceptionClass;
         private String message;
         private StackTraceElement[] stackTrace;

        ErrorProps(HttpServletRequest request){

            // this.throwable = (Throwable) request.getAttribute("jakarta.servlet.error.exception");
        setThrowable(request);    
        this.statusCode = (Integer) request.getAttribute("jakarta.servlet.error.status_code");
        this.servletName = (String) request.getAttribute("jakarta.servlet.error.servlet_name");
        this.requestUri = (String) request.getAttribute("jakarta.servlet.error.request_uri");

        }

        public void setThrowable(HttpServletRequest request){
            Throwable throwable = (Throwable) request.getAttribute("jakarta.servlet.error.exception");

            if(throwable != null){
                this.exceptionClass= throwable.toString();
                // this.stackTrace = throwable.getStackTrace();
                this.message = throwable.getMessage();
            }

        }

        public String getMessage() {
            return message;
        }

        public StackTraceElement[] getStackTrace() {
            return stackTrace;
        }

        public String getexceptionClass() {
            return exceptionClass;
        }

        public Integer getStatusCode() {
            return statusCode;
        }

        public String getServletName() {
            return servletName;
        }

        public String getRequestUri() {
            return requestUri;
        }

        public void setStatusCode(Integer statusCode) {
            this.statusCode = statusCode;
        }

        public void setServletName(String servletName) {
            this.servletName = servletName;
        }

        public void setRequestUri(String requestUri) {
            this.requestUri = requestUri;
        }

        public void setExceptionClass(String exceptionClass) {
            this.exceptionClass = exceptionClass;
        }

        public void setStackTrace(StackTraceElement[] stackTrace) {
            this.stackTrace = stackTrace;
        }

        public void setMessage(String message) {
            this.message = message;
        }


    }

    // Method to handle GET method request.
   public void doGet(HttpServletRequest request, HttpServletResponse response)
   throws ServletException, IOException {

    response.setContentType("text/html");

     // Analyze the servlet exception       
     Throwable throwable = (Throwable) request.getAttribute("jakarta.servlet.error.exception");

     var errorProps = new ErrorProps(request);

     if (errorProps.servletName == null) {
        errorProps.setServletName("Unknown");
     }

     if (errorProps.requestUri == null) {
        errorProps.setRequestUri("Unknown");
     }

     if (throwable == null && errorProps.statusCode == null) {
        JsonHttpResponse.send(response, 500, "unknown error", errorProps);
     }

     if(errorProps.statusCode != null){
        JsonHttpResponse.send(response, errorProps.statusCode, "error", errorProps);
     }

          

   }

   public void doPost(HttpServletRequest request, HttpServletResponse response)
   throws ServletException, IOException{
      doGet(request, response);
   }
    
}
