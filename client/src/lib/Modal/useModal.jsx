import { useState } from 'react';


const useModal = () => {

  const [isShowing, setIsShowing] = useState(false);
  const [motion, setMotion] = useState(false);

  function toggle(time) {

    if(isShowing && Number(time) > 0){

        setMotion(false)

        setTimeout(()=>{

            setIsShowing(false);

        },time)

    }else{

        setMotion(!motion)

        setIsShowing(!isShowing);

    }

    

  }

  return {
    isShowing,
    toggle,
    motion
  }
};

export default useModal