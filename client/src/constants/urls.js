const HOST = "http://localhost:8081"

const URL = {

    SEARCH : HOST + "/api/v1/property_search/list",
    SINGLE_PROPERTY : HOST + "/single_property",
    LOGIN : HOST + "/process-login", 
    LOGOUT : HOST + "/process-login",
    SIGNUP : HOST + "/process_registration",
    GET_ACCOUNT : HOST + "/api/secure/v1/user",
    UPDATE_ACCOUNT : HOST + "/api/secure/v1/user",
    DELETE_ACCOUNT : HOST + "/api/secure/v1/user",
    LIKE_PROPS : HOST + "/api/like_property",
    UNLIKE_PROPS : HOST + "/api/unlike_property",
    SIMILAR_PROPS : HOST + "/similar_property",
    
}

export default URL