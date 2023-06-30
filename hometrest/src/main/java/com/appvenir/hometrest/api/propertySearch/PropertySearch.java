package com.appvenir.hometrest.api.propertySearch;

import java.util.ArrayList;
import java.util.HashMap;

public class PropertySearch {

    private String city = "";
    private String state = "";
    private String state_code = "";
    private String postal_code = "";
    private ArrayList<String> type = new ArrayList<>();
    private ArrayList<String> status = new ArrayList<>();
    private HashMap<String, Integer> list_price;
    private HashMap<String, Integer> baths;
    private HashMap<String, Integer> beds;


    public String getState() {
        return this.state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPostal_code() {
        return this.postal_code;
    }

    public void setPostal_code(String postal_code) {
        this.postal_code = postal_code;
    }


    public String getCity() {
        return this.city; 
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState_code() {
        return this.state_code;
    }

    public void setState_code(String state_code) {
        this.state_code = state_code;
    }

    public ArrayList<String> getType() {
        return this.type;
    }

    public void setType(ArrayList<String> type) {
        this.type = type;
    }

    public ArrayList<String> getStatus() {
        return this.status;
    }

    public void setStatus(ArrayList<String> status) {
        this.status = status;
    }

    public HashMap<String,Integer> getList_price() {
        return this.list_price;
    }

    public void setList_price(HashMap<String,Integer> list_price) {
        this.list_price = list_price;
    }

    public HashMap<String,Integer> getBaths() {
        return this.baths;
    }

    public void setBaths(HashMap<String,Integer> baths) {
        this.baths = baths;
    }

    public HashMap<String,Integer> getBeds() {
        return this.beds;
    }

    public void setBeds(HashMap<String,Integer> beds) {
        this.beds = beds;
    }



    @Override
    public String toString() {
        return "{" +
            " city='" + getCity() + "'" +
            ", state_code='" + getState_code() + "'" +
            ", type='" + getType() + "'" +
            ", status='" + getStatus() + "'" +
            ", list_price='" + getList_price() + "'" +
            ", baths='" + getBaths() + "'" +
            ", beds='" + getBeds() + "'" +
            "}";
    }
    
}
