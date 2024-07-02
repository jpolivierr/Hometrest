package com.appvenir.hometrest.helper.httpResponseHandler;

import java.net.http.HttpResponse;
import java.util.function.Function;

import org.springframework.http.HttpStatus;

public class ResponseHandler {

     public static <T> T onSuccess(HttpResponse<T> response, Function<T,T> handleResponse){

        if(HttpStatus.Series.valueOf(response.statusCode()) == HttpStatus.Series.SUCCESSFUL){
            return handleResponse.apply(response.body());
        }else{
            throw new RuntimeException("Request failed with status code: " + response.statusCode());
        }
    }
    
}
