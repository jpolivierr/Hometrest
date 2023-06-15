import React from 'react'
import { useEffect, useState, useRef } from 'react';

export default function activityMng() {

    const [activityTimer, startActivityTimer] = useState(false)

    const [timerId] = useState(null);

    const [pageVisibility, setPageVisibility] = useState({
        inactive : null,
        active : null
    })

    const timerIdRef = useRef(null);

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

      useEffect(() => {

        const date = new Date();
    
        setPageVisibility({
    
          inactive: null,
    
          active: date.getTime()
    
        });
    
      }, []);


      const getClientInactiveTime = () => {

        if (pageVisibility.active && pageVisibility.inactive) {
    
          const inactiveTime = Math.round((pageVisibility.inactive - pageVisibility.active) / 1000);
    
          return Math.abs(inactiveTime);
    
        }
    
        return null;
      };

      const startTimer = () => {

        return setTimeout(() => {
    
    
          timerIdRef.current = null
    
          startActivityTimer(false)
    
          deleteStorageData();
    
    
        }, getServerInactiveTime() * 1000);
    
      };


      const setActivityTimer = () =>{

        if(!activityTimer){
    
          startActivityTimer(true)
    
        }
    
      }


      useEffect(()=>{

        if(activityTimer && getServerInactiveTime() > 0){

             const userInactiveTime = getClientInactiveTime()
    
        if(userInactiveTime >= getServerInactiveTime()){
    
          deleteStorageData()
    
        }

        }
    
       
    
      },[pageVisibility])



      const resetTimer = () => {

        if (timerIdRef.current) {
    
          clearTimeout(timerIdRef.current);
    
          timerIdRef.current = null
    
        }
    
            timerIdRef.current = startTimer()
    
      };


      useEffect(() => {

        const handleActivity = () => {
    
          resetTimer();
    
        };
    
        if(activityTimer && getServerInactiveTime() > 0){
    
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
  return (
    <div>activityMng</div>
  )
}
