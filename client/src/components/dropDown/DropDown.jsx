import React from 'react'
import { useState, useEffect, useRef } from 'react';

export default function DropDown({ children, setOpen, value, Class, arrow }) {
  const [isOpen, setIsOpen] = useState(value);
  const dropdownRef = useRef(null);

  useEffect(() => {
      setIsOpen(value);
  }, [value]);

  const toggleIsOpen = (e) => {
      e.preventDefault();
      if(typeof setOpen === "function"){
        setOpen(value)
        return
      }
      setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const handleClickOutside = (event) => {
    
    if (dropdownRef.current && !dropdownRef.current.contains(event.target) || event.target.hasAttribute("data-close-on-click")) {
      setIsOpen(false);
    }
   };

   useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, []);

 const arrows = () => {

  if(!arrow) return

  return (
      isOpen ? 
      <i className="fa-solid fa-angle-up"></i> :
      <i className="fa-solid fa-angle-down"></i>
    )

 }

  return (
      <div ref={dropdownRef} className={`drop-down ${Class} ${isOpen ? 'open' : 'close'}`}>
          {React.Children.map(children, (child, index) => {
              if (index === 0 && React.isValidElement(child)) {
                  return React.cloneElement(child, { 
                    onClick: toggleIsOpen,
                    children: (
                      <>
                         {child.props.children}
                         {
                          arrows()
                          }
                      </>
                    )
                  
                  });
              }
              if (index === 1 && React.isValidElement(child)) {
                return React.cloneElement(child, { 
                  className: `${child.props.className} drop-down-window`
                });
            }
              return child;
          })}
      </div>
  );
}
