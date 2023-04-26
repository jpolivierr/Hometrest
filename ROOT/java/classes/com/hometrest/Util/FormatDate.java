package com.hometrest.Util;
import java.sql.Date;
import java.text.SimpleDateFormat;

public class FormatDate {

    public static String format(long originalFormat, String format){

        Date creationdate = new Date(originalFormat);

        SimpleDateFormat simpleDate = new SimpleDateFormat(format);

        return simpleDate.format(creationdate);

    }
    
}
