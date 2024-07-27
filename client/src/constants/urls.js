const HOST = "http://localhost:8080"
const API_VERSION = "/api/v1"

const URL = {
    LOGIN : HOST + "/login",
    LOGOUT : HOST + "/process-login",
    GET_USER : HOST + "/api/users",
    SEARCH : HOST + "/api/v1/property_search/list",
    SINGLE_PROPERTY : HOST + API_VERSION + "/property_search/details?id=", 
    SIGNUP : HOST + "/process_registration",
    SCHEDULE_TOUR : HOST + API_VERSION + "/schedule_tour",
    MESSAGING : HOST + API_VERSION + "/messaging",
    GET_ACCOUNT : HOST + "/api/secure/v1/user",
    UPDATE_ACCOUNT : HOST + "/api/secure/v1/user",
    DELETE_ACCOUNT : HOST + "/api/secure/v1/user",
    LIKE_PROPERTY : HOST + "/api/liked_properties",
    SIMILAR_PROPS : HOST + API_VERSION + "/property_search/similar_properties?prop_features="
}

export default URL