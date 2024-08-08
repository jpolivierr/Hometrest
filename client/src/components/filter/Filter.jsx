import React, { useEffect, useState } from 'react'
import DropDown from '../dropDown/DropDown';
import { propertyTypeList } from '../../constants/listOptions/propertyType';
import { salePriceOptions } from '../../constants/listOptions/priceRange';
import { numberList } from '../../constants/listOptions/numberList';
import { statusList } from '../../features/filter/lists/statusList';
import { convertToDollars, abbreviateNumber, removeNoneNumericValue } from '../../Util/ConvertToDollars';
import Autocomplete from '../map/AutoComplete';

export default function Filter({data, setData}) {

    const setLocation =(location) =>{
        setData(({ ...data, ...location}));
    }

    const setPropertyType = (type) => {
        setData((prevData) => {
            const newTypeArray = prevData.type.includes(type)
                ? prevData.type.filter((item) => item !== type)
                : [...prevData.type, type];
            return { ...prevData, type: newTypeArray };
        });
    };

    const setStatus = (status) => {
        setData((prevData) => {
            const newTypeArray = prevData.status.includes(status)
                ? prevData.status.filter((item) => item !== status)
                : [...prevData.status, status];
            return { ...prevData, status: newTypeArray };
        });
    };

      const [minimum, setMinimum] = useState({text: "", number: 0})
      const [maximum, setMaximum] = useState({text: "", number: 0})

      useEffect(()=>{
        const min = parseInt(data.list_price.min)
        const max = parseInt(data.list_price.max)

        if (!isNaN(min) && min !== null && min >= 0) {
            setMinimum({
              ...minimum,
              text: convertToDollars(min),
              number: min,
            });
          }

          if (!isNaN(max) && max !== null && max >= 0) {
            setMaximum({
              ...maximum,
              text: convertToDollars(max),
              number: max,
            });
          }

      },[data])

      const setMinPrice = (minPrice) => {
        setData((prevSearch) => ({
          ...prevSearch,
          list_price: { ...prevSearch.list_price, min: minPrice },
        }));
      };

      const updateMinPrice = (e) => {
        const value = e.target.value;
        const numericValue = removeNoneNumericValue(value)
        setMinimum({...minimum, 
                       text: convertToDollars(parseInt(numericValue)),
                       number: parseInt(numericValue)
                    });
      };


      const setMaxPrice = (maxPrice) => {
        setData((prevSearch) => ({
          ...prevSearch,
          list_price: { ...prevSearch.list_price, max: maxPrice },
        }));
      };

      const updateMaxPrice = (e) => {
        const value = e.target.value;
        const numericValue = removeNoneNumericValue(value)
        setMaximum({...maximum, 
                       text: convertToDollars(parseInt(numericValue)),
                       number: parseInt(numericValue)
                    });
      };

      const setMinBed = (minBed) => {
        setData((prevSearch) => ({
          ...prevSearch,
          beds: { ...prevSearch.beds, min: minBed },
        }));
      };

      const setMaxBed = (maxBed) => {
        setData((prevSearch) => ({
          ...prevSearch,
          beds: { ...prevSearch.beds, max: maxBed },
        }));
      };

      const setMinBath = (minBath) => {
        setData((prevSearch) => ({
          ...prevSearch,
          baths: { ...prevSearch.baths, min: minBath },
        }));
      };

      const setMaxBath = (maxBath) => {
        setData((prevSearch) => ({
          ...prevSearch,
          baths: { ...prevSearch.baths, max: maxBath },
        }));
      };

    const getPriceLabel = () => {
        const min = parseInt(data.list_price.min)
        const max = parseInt(data.list_price.max)

        if(min === 0 && max === 0) return "Price"

        if(min > 0 && max > 0) return `${abbreviateNumber(min)} - ${abbreviateNumber(max)}`

        if(min > 0 || max > 0) {

            if(min && min > 0){
                return convertToDollars(min)
            }

            if(max && max > 0){
                return convertToDollars(max)
            }

            return "Price"   
        }

        return "Price"
    }

    const getBedLabel = () => {
        const min = parseInt(data.beds.min)
        const max = parseInt(data.beds.max)

        if(min === 0 && max === 0) return "Beds"

        if(min > 0 && max > 0) return `${min} - ${max} Beds`

        if(min > 0 || max > 0) {

            if(min && min > 0){
                return min > 1 ? `${min} Beds` : `${min} Bed`
            }

            if(max && max > 0){
                return max > 1 ? `${max} Beds` : `${max} Bed`
            }

            return "Beds"   
        }

        return "Beds"
    }

    const getBathLabel = () => {
        const min = parseInt(data.baths.min)
        const max = parseInt(data.baths.max)

        if(min === 0 && max === 0) return "Baths"

        if(min > 0 && max > 0) return `${min} - ${max} Baths`

        if(min > 0 || max > 0) {

            if(min && min > 0){
                return min > 1 ? `${min} Baths` : `${min} Baths`
            }

            if(max && max > 0){
                return max > 1 ? `${max} Baths` : `${max} Bath`
            }

            return "Baths"   
        }

        return "Baths"
    }

    const isBedSelected = () => {
        return data.beds.min > 0 || data.beds.max > 0
    };

    const isBathSelected = () => {
        return data.baths.min > 0 || data.baths.max > 0
    };

    const isPriceSelected = () => {
        return data.list_price.min > 0 || data.list_price.max > 0
    };

    const isTypeSelected = (type) => {
        return data.type.includes(type);
    };

    const isStatusSelected = (type) => {
        return data.status.includes(type);
    };

    const submit = (e) => {
        console.log(e)
        e.preventDefault();
        console.log("Fetching property")
    }

    return (
        <form className="property-filter stick">

            <fieldset className='field-city-zip'>
                <i className="fa-solid fa-location-dot"></i>
                <Autocomplete setLocation={setLocation} data={data}/>
                <i className="iicon fa-solid fa-magnifying-glass"></i>

            </fieldset>

            <fieldset >
                <DropDown value={false} arrow={true} Class={"filter-dropdown home-type-option"}>
                    <button className={`drop-down-button ${data.type.length === 0 ? "" : "has-value"}`}>
                        <h4>Home Type</h4> <span>{data.type.length === 0 ? "" : `(${data.type.length})`}</span>
                    </button>
                    <div className='filter-dropdown-window'>
                        <header >
                            <h3>Home Type</h3>
                        </header>
                        <ul className='list-option'>
                            {
                                propertyTypeList.map((list, index) => (
                                    <li 
                                        key={index}
                                        id={list.id}
                                        onClick={() => setPropertyType(list.id)}
                                        >
                                        {
                                            isTypeSelected(list.id) ? 
                                            <i className="fa-solid fa-square-check"></i> :
                                            <i className="fa-regular fa-square"></i> 
                                        }
                                        {list.name}
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='filter-drop-down-footer'>
                            <button onClick={submit} data-close-on-click className='button main-btn'>Done</button>
                        </div>
                    </div>
                </DropDown>
            </fieldset>

            <fieldset >
                <DropDown Class={"filter-dropdown status-option"} arrow={true}>
                    <button className={`drop-down-button ${data.status.length === 0 ? "" : "has-value"}`}>
                        <h4>Property Status</h4> <span>{data.status.length === 0 ? "" : `(${data.status.length})`}</span>
                    </button>
                    <div className='filter-dropdown-window'>
                        <header >
                            <h3>Property Status</h3>
                        </header>
                        <ul className='list-option'>
                            {
                                statusList.map((list, index) => (
                                    <li 
                                        key={index}
                                        id={list.id}
                                        onClick={() => setStatus(list.id)}
                                        >
                                        {
                                            isStatusSelected(list.id) ? 
                                            <i className="fa-solid fa-square-check"></i> :
                                            <i className="fa-regular fa-square"></i> 
                                        }
                                        {list.name}
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='filter-drop-down-footer'>
                            <button onClick={submit} data-close-on-click className='button main-btn'>Done</button>
                        </div>
                    </div>
                </DropDown>
            </fieldset>

            <fieldset >
                <DropDown value={false} Class={"filter-dropdown price-option"} arrow={true}>
                    <button className={`drop-down-button ${!isPriceSelected() ? "" : "has-value"}`}>
                        <h4>{getPriceLabel()}</h4>
                    </button>
                    <div className='filter-dropdown-window'>
                        <header >
                            <h3>Price Range</h3>
                        </header>
                        <div className={"input-filter-dropdown"}>
                           <DropDown value={false} arrow={true}>
                            <div className='drop-down-input'>
                                 <input 
                                    onBlur={() => setMinPrice(minimum.number)} 
                                    onChange={updateMinPrice} 
                                    name='min-price' 
                                    value={minimum.text === "$0" ? "Any" : minimum.text}
                                    placeholder='Minimum Price'
                                    />
                            </div>
                            <div className='filter-dropdown-window'>
                            <ul className='drop-down-min-height'>
                            <li
                                id={0}
                                onClick={() => setMinPrice(0)}
                                >
                                Any
                            </li>
                                {
                                    salePriceOptions.map((price, index) => (
                                        <li
                                        key={index}
                                        id={price}
                                        onClick={() => setMinPrice(price)}
                                        >
                                        {convertToDollars(price)}
                                        </li>
                                    ))
                                }
                            </ul>
                            </div>
                        </DropDown> 

                        <DropDown value={false} arrow={true}>
                            <div className='drop-down-input'>
                                 <input 
                                    onBlur={() => setMaxPrice(maximum.number)} 
                                    onChange={updateMaxPrice} 
                                    name='max-price' 
                                    value={maximum.text === "$0" ? "Any" : maximum.text}
                                    placeholder='Maximum Price'
                                    />
                            </div>
                            <div className='filter-dropdown-window'>
                                <ul className='drop-down-min-height'>
                                <li
                                    id={0}
                                    onClick={() => setMaxPrice(0)}
                                >
                                    Any
                               </li>
                                    {
                                        salePriceOptions.map((price, index) => (
                                                <li
                                                key={index}
                                                id={price}
                                                onClick={() => setMaxPrice(price)}
                                                >
                                                {convertToDollars(price)}
                                                </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </DropDown> 
                        </div>    
                        <div className='filter-drop-down-footer'>
                            <button onClick={submit} data-close-on-click className='button main-btn close-on-click'>Done</button>
                        </div>
                    </div>
                </DropDown>
            </fieldset>

            <fieldset >
                <DropDown value={false} Class={"filter-dropdown bed-option"} arrow={true}>
                    <button className={`drop-down-button ${!isBedSelected() ? "" : "has-value"}`}>
                        <h4>{getBedLabel()}</h4>
                    </button>
                    <div className='filter-dropdown-window'>
                        <header >
                            <h3>Beds</h3>
                        </header>
                        <div className={"input-filter-dropdown"}>
                           <DropDown value={false} arrow={true}>
                           <button className={`drop-down-button bed-option-button`}>    
                                {
                                 `
                                    ${data.beds.min === 0 ? "Any" : data.beds.min}
                                    ${data.beds.min === 1 ? 'Bed' : ''}
                                    ${data.beds.min > 1 ? 'Beds' : ''}
                                 ` 
                                }
                           </button>
                            <div className='filter-dropdown-window bed-count-option'>
                            <ul className='drop-down-min-height'>
                                <li id={0} onClick={() => setMinBed(0)}>
                                    Any
                                </li>
                                {
                                    numberList.map((count, index) => (
                                        <li
                                        key={index}
                                        id={count}
                                        onClick={() => setMinBed(count)}
                                        >
                                        {count}
                                        </li>
                                    ))
                                }
                            </ul>
                            </div>
                        </DropDown> 

                        <DropDown value={false} arrow={true}>
                           <button className={`drop-down-button bed-option-button`}>
                               {       
                                 `
                                    ${data.beds.max === 0 ? "Any" : data.beds.max}
                                    ${data.beds.max === 1 ? 'Bed' : ''}
                                    ${data.beds.max > 1 ? 'Beds' : ''}
                                 ` 
                                }
                           </button>
                            <div className='filter-dropdown-window bed-count-option'>
                            <ul className='drop-down-min-height'>
                                <li id={0} onClick={() => setMaxBed(0)}>
                                    Any
                                </li>
                                {
                                    numberList.map((count, index) => (
                                        <li
                                        key={index}
                                        id={count}
                                        onClick={() => setMaxBed(count)}
                                        >
                                        {count}
                                        </li>
                                    ))
                                }
                            </ul>
                            </div>
                        </DropDown> 
                        </div>    
                        <div className='filter-drop-down-footer'>
                            <button onClick={submit} data-close-on-click className='button main-btn close-on-click'>Done</button>
                        </div>
                    </div>
                </DropDown>
            </fieldset>

            <fieldset >
                <DropDown value={false} Class={"filter-dropdown bath-option"} arrow={true}>
                    <button className={`drop-down-button ${!isBathSelected() ? "" : "has-value"}`}>
                        <h4>{getBathLabel()}</h4>
                    </button>
                    <div className='filter-dropdown-window'>
                        <header >
                            <h3>Baths</h3>
                        </header>
                        <div className={"input-filter-dropdown"}>
                           <DropDown value={false} arrow={true}>
                           <button className={`drop-down-button bath-option-button`}>
                                {       
                                    `
                                    ${data.baths.min === 0 ? "Any" : data.baths.min}
                                    ${data.baths.min === 1 ? 'Bath' : ''}
                                    ${data.baths.min > 1 ? 'Baths' : ''}
                                    ` 
                                }
                           </button>
                            <div className='filter-dropdown-window bed-count-option'>
                            <ul className='drop-down-min-height'>
                                    <li id={0} onClick={() => setMinBath(0)}>
                                            Any
                                    </li>
                                {
                                    numberList.map((count, index) => (
                                        <li
                                        key={index}
                                        id={count}
                                        onClick={() => setMinBath(count)}
                                        >
                                        {count}
                                        </li>
                                    ))
                                }
                            </ul>
                            </div>
                        </DropDown> 

                        <DropDown value={false} arrow={true}>
                           <button className={`drop-down-button bath-option-button`}>
                           {       
                                `
                                ${data.baths.max === 0 ? "Any" : data.baths.max}
                                ${data.baths.max === 1 ? 'Bath' : ''}
                                ${data.baths.max > 1 ? 'Baths' : ''}
                                ` 
                            }
                           </button>
                            <div className='filter-dropdown-window bath-count-option'>
                            <ul className='drop-down-min-height'>
                                <li id={0} onClick={() => setMaxBath(0)}>
                                    Any
                                </li>
                                {
                                    numberList.map((count, index) => (
                                        <li
                                        key={index}
                                        id={count}
                                        onClick={() => setMaxBath(count)}
                                        >
                                        {count}
                                        </li>
                                    ))
                                }
                            </ul>
                            </div>
                        </DropDown> 
                        </div>    
                        <div className='filter-drop-down-footer'>
                            <button onClick={submit} data-close-on-click className='button main-btn close-on-click'>Done</button>
                        </div>
                    </div>
                </DropDown>
            </fieldset>


        </form>
      )
}
