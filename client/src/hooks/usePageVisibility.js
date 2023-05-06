import { useState, useEffect, useRef, useCallback } from "react";


const useInactivityTimer = (inactivityTime, logoutCallback) => {

  const [timerId, setTimerId] = useState(null);

  const [activityTimer, startActivityTimer] = useState(false)

  const timerIdRef = useRef(null);

  const [pageVisibility, setPageVisibility] = useState({
      inactive : null,
      active : null
  })


  const visibilityManagement = () => {

    if (typeof document.hidden !== "undefined") {

      document.addEventListener("visibilitychange", function () {

        if (document.hidden) {

          setPageVisibility(prevState => {

            return {...prevState, inactive: Date.now()};

          });

        } else {

          setPageVisibility(prevState => {

            return {...prevState, active: Date.now()};

          });

        }
      });
    }
  }
  

  const getInactiveTime = () => {

    if (pageVisibility.active && pageVisibility.inactive) {

      const inactiveTime = Math.round((pageVisibility.inactive - pageVisibility.active) / 1000);

      return Math.abs(inactiveTime);

    }

    return null;
  };

  useEffect(()=>{

    console.log(getInactiveTime())

    const userInactiveTime = getInactiveTime()

    if(userInactiveTime >= inactivityTime){

      logoutCallback()

    }

  },[pageVisibility])


  const setActivityTimer = () =>{

    if(!activityTimer){

      startActivityTimer(true)

    }

  }


  const startTimer = () => {

    return setTimeout(() => {


      timerIdRef.current = null

      startActivityTimer(false)

      logoutCallback();


    }, inactivityTime * 1000);

  };



  const resetTimer = () => {

    

    if (timerIdRef.current) {

      console.log(timerIdRef.current)
      clearTimeout(timerIdRef.current);
      timerIdRef.current = null

    }

        console.log("::::setting timer::::")
        timerIdRef.current = startTimer()



    

  };


  useEffect(() => {

    const date = new Date();

    setPageVisibility({

      inactive: null,

      active: date.getTime()

    });

  }, []);

  useEffect(() => {

    const handleActivity = () => {

      resetTimer();

    };

    if(activityTimer){

          document.addEventListener("mousemove", handleActivity);

          document.addEventListener("keydown", handleActivity);

          handleActivity()

           visibilityManagement()

    }

    

    return () => {

      document.removeEventListener("mousemove", handleActivity);

      document.removeEventListener("keydown", handleActivity);

      clearTimeout(timerId);

    };

  }, [activityTimer]);

  return { resetTimer, setActivityTimer };
};

export default useInactivityTimer;

