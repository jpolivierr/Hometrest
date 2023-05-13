import React, { useState, useEffect, useRef } from 'react';
import "./style.css"

const Carousel = (props) => {

  const {children} = props

  console.log(children)

  const [currentPosition, setCurrentPosition] = useState(0);

  const slideRef = useRef(null);

  const slideWidth = slideRef.current ? slideRef.current.getBoundingClientRect().width : 0;


  // Move the carousel to show the next slide
  function moveToNextSlide() {

    if (currentPosition === children.length - 1) {

      setCurrentPosition(0);

    } else {

      setCurrentPosition(currentPosition + 1);

    }
  }

  // Move the carousel to show the previous slide
  function moveToPrevSlide() {

    if (currentPosition === 0) {

      setCurrentPosition(children.length - 1);

    } else {

      setCurrentPosition(currentPosition - 1);

    }
  }

  // Move the carousel to the current slide
  function moveToCurrentSlide() {

    slideRef.current.style.transform = `translateX(-${slideWidth * currentPosition}px)`;

  }

  // Set up event listeners for the prev and next buttons
  useEffect(() => {

    moveToCurrentSlide();

  }, [currentPosition]);

  return (
   children && <div className="carousel-container">
      <div className="carousel" ref={slideRef}>
        {children.map((child, index) => (
          <div className={`slide`} key={index}>
              {child}
          </div>
        ))}
      </div>
      <button className="prev-button" onClick={moveToPrevSlide}><i className="fa-solid fa-chevron-left arrow-icons"></i></button>
      <button className="next-button" onClick={moveToNextSlide}><i className="fa-solid fa-chevron-right arrow-icons"></i></button>
    </div>
  );
}

export default Carousel;
