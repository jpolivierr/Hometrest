package com.appvenir.hometrest.helper.httpHandler;

import java.net.http.HttpResponse;
import java.util.function.Function;
import java.util.function.Supplier;

import org.springframework.http.HttpStatus;

import com.appvenir.hometrest.exception.realtyApiException.RealtyApiException;

public class ResponseHandler {

     public static <T> T onSuccess(HttpResponse<T> response, Function<T,T> handleResponse)
     {
        if(HttpStatus.Series.valueOf(response.statusCode()) == HttpStatus.Series.SUCCESSFUL){
            return handleResponse.apply(response.body());
        }else{
            throw new RealtyApiException("Request failed with status code: ", response.statusCode(), response.body());
        }
    }

    public static <T> void onStatusCode(int statusCode, HttpResponse<T> response, Runnable handleResponse){
        if(statusCode == response.statusCode()){
             handleResponse.run();
        }
    }

    public static <T> void onFailure(HttpResponse<T> response, Supplier<RuntimeException> handleResponse){
        int statusCode = response.statusCode();
        if ((statusCode >= 400 && statusCode < 600)) {
            throw handleResponse.get();
        }
    }
    
    
}
