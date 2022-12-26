import "./style_carousel.css"
import image_1 from "../../media/images/img-1.jpg"
import image_2 from "../../media/images/img-2.jpg"
import image_3 from "../../media/images/img-3.jpg"
import image_4 from "../../media/images/img-4.jpg"
import image_5 from "../../media/images/img-5.jpg"
import image_6 from "../../media/images/img-6.jpg"
import image_7 from "../../media/images/img-7.jpg"
import { useEffect, useState, useRef } from "react"
import { initCarousel } from "../../functions/Carousel"
import Listings from "../Cards/Listings"
import { NumberFormat } from "../../functions/NumberFormat"

const Carousel = ({relatedHomes, setPropertyId}) =>{

    const [carouselWidth, setCarouselWidth] = useState(null)
    const [divideBy, setDivideBy] =useState(null)
    const [wrapperWidth, setWrapperWidth] = useState(null)
    const [initNum, setInitNum] =useState(null)
    const [gap, setGap] = useState(null)

    const carouselRef = useRef("")
    const wrapperRef = useRef("")

        // const carousel = carouselRef.current
        // const wrapper = wrapperRef.current
        let initialWidth 
        let divide

    useEffect(()=>{
        const carousel = carouselRef.current
        const wrapper = wrapperRef.current
    
        
        if(wrapper){

           switch(true){
            case wrapper.clientWidth < 779 && wrapper.clientWidth > 400 :
                setInitNum(2)
                setWrapperWidth(wrapper.clientWidth)
                setGap(14)
                break
            case wrapper.clientWidth < 400 :
                setInitNum(1)
                setWrapperWidth(wrapper.clientWidth)
                setGap(15)
                break
            case wrapper.clientWidth > 1107 :
                setInitNum(4)
                setWrapperWidth(wrapper.clientWidth)
                setGap(42)
                break
            default :
                setInitNum(3)
                setWrapperWidth(wrapper.clientWidth)
                setGap(28)
                break
           }
        }

    },[])

        const formatImg = (img) =>{
            return img.replace("s.jpg","od-w480_h360_x2.jpg")
         }


            const carousel = document.querySelector(".carousel")
            const wrapper = document.querySelector(".wrapper")
            

        if(!carousel){
            
        }else{
    

             initialWidth = wrapper.clientWidth
             window.addEventListener("resize", ()=>{
               const wrapper = document.querySelector(".wrapper")


               if(wrapper){

                switch(true){
                 case wrapper.clientWidth < 779 && wrapper.clientWidth > 400 :
                     setInitNum(2)
                     setWrapperWidth(wrapper.clientWidth)
                     setGap(14)
                     break
                 case wrapper.clientWidth < 400 :
                     setInitNum(1)
                     setWrapperWidth(wrapper.clientWidth)
                     setGap(15)
                     break
                 case wrapper.clientWidth > 1107 :
                     setInitNum(4)
                     setWrapperWidth(wrapper.clientWidth)
                     setGap(42)
                     break
                 default :
                     setInitNum(3)
                     setWrapperWidth(wrapper.clientWidth)
                     setGap(28)
                     break
                }
             }
               
                

             })
               const firstImg = carousel.querySelectorAll(".slider-block")[0],
                arrowIcons = document.querySelectorAll(".wrapper i");
                let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;


                const showHideIcons = () => {
                    // showing and hiding prev/next icon according to carousel scroll left value
                    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
                    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
                    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
                }

                arrowIcons.forEach(icon => {
                    icon.addEventListener("click", () => {
                        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
                        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
                        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
                        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
                    });
                });


                const autoSlide = () => {
                    // if there is no image left to scroll then return from here
                    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
                    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
                    let firstImgWidth = firstImg.clientWidth + 14;
                    // getting difference value that needs to add or reduce from carousel left to take middle img center
                    let valDifference = firstImgWidth - positionDiff;
                    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
                        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
                    }


                    // if user is scrolling to the left
                    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
                }

                const dragStart = (e) => {
                    // updatating global variables value on mouse down event
                    isDragStart = true;
                    prevPageX = e.pageX || e.touches[0].pageX;
                    prevScrollLeft = carousel.scrollLeft;
                }

                const dragging = (e) => {
                    // scrolling images/carousel to left according to mouse pointer
                    if(!isDragStart) return;
                    e.preventDefault();
                    isDragging = true;
                    carousel.classList.add("dragging");
                    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
                    carousel.scrollLeft = prevScrollLeft - positionDiff;
                    showHideIcons();
                }
                const dragStop = () => {
                    isDragStart = false;
                    carousel.classList.remove("dragging");
                    if(!isDragging) return;
                    isDragging = false;
                    autoSlide();
                }

                carousel.addEventListener("mousedown", dragStart);
            carousel.addEventListener("touchstart", dragStart);
            document.addEventListener("mousemove", dragging);
            carousel.addEventListener("touchmove", dragging);
            document.addEventListener("mouseup", dragStop);
            carousel.addEventListener("touchend", dragStop);
        } 
         
        // console.log(carouselRef.current)

    return (
        <div ref={wrapperRef} className="wrapper">
            <i id="left" style={{left: "-45px"}}  className="fa-solid fa-chevron-left arrow-icons"></i>
              <div ref={carouselRef} className="carousel">
                {
                  relatedHomes.map((listing, index) => (                   
                    <Listings 
                        callBack={setPropertyId}
                        key={index}
                        id={listing.property_id}
                      //   classname={isLoading && `` }
                        style={{minWidth:`calc(${wrapperWidth - gap}px / ${initNum})`}}
                        status={listing.status}
                        img={formatImg(listing.primary_photo.href)}
                        price={NumberFormat.formatNumberWithCommas(listing.list_price) }
                        beds={!listing.description.beds ? 0 : listing.description.beds }
                        baths={!listing.description.baths ? 0 : listing.description.baths}
                        sqft={listing.description.sqft}
                        street={listing.location.address.line}
                        city={listing.location.address.city}
                        state={listing.location.address.state_code}
                        zip={listing.location.address.postal_code}
                       />
              
          ))
                 
                }
              </div>
            <i id="right"  style={{right: "-45px"}} className="fa-solid fa-chevron-right arrow-icons"></i>
        </div>
    )

}

export default Carousel