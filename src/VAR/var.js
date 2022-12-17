export const SERVER = {
        MESSAGE: "serverMessage",
        ERROR_PAGE: "errorPage"
}

export const MODAL_TYPE = {
    FLOATING : 'floating',
    SIDE: 'side',
    SELECT: 'select'
}

export const COMPONENT = {
     RECURRING_UPDATE_FORM : "recurring-update-form",
     RECURRING_CREATE_FORM : "recurring-create-form",
     TRANSACTION_UPDATE_FORM : "transaction-update-form",
     TRANSACTION_CREATE_FORM : "transaction-create-form",
     ADD_LIST: "add-list",
     SIDE_NAVIGATION: "side-navigation"
}

export const ANIMATION = {

    FADE_IN : "fade-in",
    FADE_OUT : "closeModal",
    CLOSE_MODAL : "closeModal",
    SLIDE_UP : "slide-up",
    SLIDE_DOWN : "slide-down",
    SLIDE_RIGHT : "slide-right",
    SLIDE_LEFT : "slide-left",
    FLOAT_DOWN: "float-down",
    FLOAT_UP: "float-up"
}

export const PATH_TYPE = {

    TRANSACTION : "transaction",
    RECURRING : "recurringbill",
    ACCOUNT: "account"

}

export const URL = {

    CREATE_RECURRING : `http://localhost:8080/process/${PATH_TYPE.RECURRING}?type=CREATE`,

    DELETE_RECURRING : `http://localhost:8080/process/${PATH_TYPE.RECURRING}?type=DELETE`,

    UPDATE_RECURRING : `http://localhost:8080/process/${PATH_TYPE.RECURRING}?type=UPDATE`,

    CREATE_TRANSACTION: `http://localhost:8080/process/${PATH_TYPE.TRANSACTION}?type=CREATE`,

    DELETE_TRANSACTION : `http://localhost:8080/process/${PATH_TYPE.TRANSACTION}?type=DELETE`,

    UPDATE_TRANSACTION : `http://localhost:8080/process/${PATH_TYPE.TRANSACTION}?type=UPDATE`,

    GET_ACCCOUNT : `http://localhost:8080/process/${PATH_TYPE.ACCOUNT}`,

}