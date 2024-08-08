package com.appvenir.hometrest.api.realty;

import java.util.concurrent.CompletableFuture;

public interface RealtyApi {

    public CompletableFuture<String>findPropertyById(String id);

    public CompletableFuture<String> findSimilarProperties(String id);

    public Object findPropertyList(String propertySearch);
    
}
