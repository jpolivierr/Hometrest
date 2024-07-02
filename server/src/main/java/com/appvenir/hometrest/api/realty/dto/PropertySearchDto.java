package com.appvenir.hometrest.api.realty.dto;

import java.util.ArrayList;
import java.util.HashMap;

import lombok.Data;

@Data
public class PropertySearchDto {

    private String city = "";
    private String state = "";
    private String state_code = "";
    private String postal_code = "";
    private ArrayList<String> type = new ArrayList<>();
    private ArrayList<String> status = new ArrayList<>();
    private HashMap<String, Integer> list_price;
    private HashMap<String, Integer> baths;
    private HashMap<String, Integer> beds;
    
}
