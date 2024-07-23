import React from 'react'
import DropDown from '../dropDown/DropDown';
import { propertyTypeList } from '../../constants/listOptions/propertyType';

export default function Filter({data, setData}) {

    const setCityZip =(e) =>{
        setData(({ ...data, city: e.target.value}));
    }

    const setPropertyType = (type) => {
        setData((prevData) => {
            const newTypeArray = prevData.type.includes(type)
                ? prevData.type.filter((item) => item !== type)
                : [...prevData.type, type];
            return { ...prevData, type: newTypeArray };
        });
    };

    const isTypeSelected = (type) => {
        return data.type.includes(type);
    };

    const submit = (e) => {
        e.preventDefault();
    }

    return (
        <form className="property-filter stick">

            <fieldset className='field-city-zip'>
                <i className="fa-solid fa-location-dot"></i>
                <input 
                    placeholder="Enter city, state or zip" 
                    name="city_zip"
                    onChange={setCityZip}
                    value={data.city}
                    />
                <i className="iicon fa-solid fa-magnifying-glass"></i>
            </fieldset>

            <fieldset >
                <DropDown value={false} Class={"filter-dropdown home-type-option"}>
                    <button className='drop-down-button'>
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
                            <button onClick={submit} className='button main-btn'>Done</button>
                        </div>
                    </div>
                </DropDown>
            </fieldset>


        </form>
      )
}
