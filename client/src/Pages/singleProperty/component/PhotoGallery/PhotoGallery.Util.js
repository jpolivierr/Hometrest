export const getClass = (photos) =>{

    switch(true)
           {
            case photos.length === 1:
                return "prop_photos_1"
            case photos.length === 2:
                return "prop_photos_2"
            case photos.length >= 3:
                return "prop_photos"

    }
}