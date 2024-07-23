import React from 'react'
import { useState, useEffect, useRef } from 'react';

export default function DropDown({ children, value, Class }) {
  const [isOpen, setIsOpen] = useState(value);
  const dropdownRef = useRef(null);

  useEffect(() => {
      setIsOpen(value);
  }, [value]);

  const toggleIsOpen = (e) => {
      e.preventDefault();
      setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
    }
   };

   useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, []);

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
                          isOpen ? 
                          <i className="fa-solid fa-angle-up"></i> :
                          <i className="fa-solid fa-angle-down"></i>
                          }
                      </>
                    )
                  
                  });
              }
              return child;
          })}
      </div>
  );
}
