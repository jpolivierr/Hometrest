package com.appvenir.hometrest.utils.nullcheck;

import java.util.function.Supplier;

public class NullCheck {
    
    public static <T, X extends Throwable> void check(T value, Supplier<? extends X> exceptionSupplier) throws X
    {
        if(value == null)
            throw exceptionSupplier.get();
    }

}
