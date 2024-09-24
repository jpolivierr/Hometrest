import HttpRequest from "../../httpRequest/HttpRequest"
import { useUserContext } from "../../context/user/UserContext"
import URL from "../../constants/urls"

const LikePropertyService = () => {

    const {userAuthenticated, getUserFavoriteProperties, updateProperty} = useUserContext()

    const {post, del, loading} = HttpRequest({headers: {
        'Content-Type': 'application/json'
      }})


    const saveProperty = async (likedPropertyData) => {
        const response = await post(URL.LIKE_PROPERTY, likedPropertyData);
        if(response.status === 200){
            updateProperty(response.body)
        }else{
            console.error("Could not save property")
        }
    }

    const deleteProperty = async (likedPropertyData) => {
        const response = await del(URL.LIKE_PROPERTY, likedPropertyData);
        if(response.status === 200){
            updateProperty(likedPropertyData)
        }else{
          console.error("Could not delete property")
        }
      }

    const likeProperty = (likedPropertyData) => {
        if(!userAuthenticated()) {
          return
        }
        const properties = getUserFavoriteProperties()
        const exist = properties.some(property => property.propertyId === likedPropertyData.propertyId)
        if(exist){
          deleteProperty(likedPropertyData)
        }else{
          saveProperty(likedPropertyData)
        }
      }


      const isFavorite = (id) => {
        if(!userAuthenticated()) return
        const properties = getUserFavoriteProperties()
        return properties.some(property => property.propertyId === id)
      } 

      return {
        likeProperty,
        isFavorite,
        loading,
        userAuthenticated
      }

}

export default LikePropertyService