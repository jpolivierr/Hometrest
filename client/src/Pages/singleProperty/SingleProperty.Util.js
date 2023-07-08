
export const getStatusColor = (status) =>{

    switch(status){
        case "for_sale" :
            return "status-for-sale"
        case "for_rent" :
            return "status-for-rent"
        case "sold" :
            return "status-sold"
        case "ready_to_build" :
            return "status-ready-to-build"
        case "off_market" :
            return "status-off-market"
        case "new_community" :
        return "status-new-community"

    }
}