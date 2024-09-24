package com.appvenir.hometrest.helper.requestTracker;

public class RequestLimitReachedException extends RuntimeException {

    public RequestLimitReachedException(){
        super("Sorry, but the maximum number of requests allowed for today has been reached. Please try again tomorrow.");
    }

}
