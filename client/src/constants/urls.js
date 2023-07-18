const HOST = "http://localhost:8081"
const API_VERSION = "/api/v1"

const URL = {

    SEARCH : HOST + "/api/v1/property_search/list",
    SINGLE_PROPERTY : HOST + + API_VERSION + "/property_search/details?id=",
    LOGIN : HOST + "/process-login", 
    LOGOUT : HOST + "/process-login",
    SIGNUP : HOST + "/process_registration",
    SCHEDULE_TOUR : HOST + API_VERSION + "/schedule_tour",
    MESSAGING : HOST + API_VERSION + "/messaging",
    GET_ACCOUNT : HOST + "/api/secure/v1/user",
    UPDATE_ACCOUNT : HOST + "/api/secure/v1/user",
    DELETE_ACCOUNT : HOST + "/api/secure/v1/user",
    LIKE_PROPS : HOST + "/api/secure/v1/like_property",
    SIMILAR_PROPS : HOST + API_VERSION + "/property_search/similar_properties?id=",
    
}

export default URL