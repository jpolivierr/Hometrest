
const usePageVisibility = () =>{

    const handleVisibilityChange = () =>{

        if (document.hidden) {

            notVisible()
        
          } else {

            visible();
          }
        
    }

    const visible = () =>{

        console.log("page is visible")

    }

    const notVisible = () =>{

        console.log("page not visible")

    }

    if (typeof document.hidden !== "undefined") {
       
        document.addEventListener("visibilitychange", handleVisibilityChange, false);

      } else {

        console.log("Page Visibility API is not supported in this browser");
        
      }


}

export default usePageVisibility