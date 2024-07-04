package com.appvenir.hometrest.api.realty.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class RealtyErrorResponseDto {
    
    private String name;
    private String message;
    private String path;
    private String errorCode;
    private String code;
    private String eCode;
    private String error;
    private String timeThrown;
    private String description;

    public int getCodeAsInt(){

        if(errorCode != null && errorCode.matches("\\d{3}")){
            return Integer.parseInt(errorCode);
        }

        if (code == null) return 400;
        
        if (code.matches("\\d{3}")) {
            return Integer.parseInt(code);
        }

        if (code.matches("\\dxx")) {
            char firstChar = code.charAt(0);
            return Integer.parseInt(firstChar + "00");
        }

        return 400;

    }

}
