import React, { useState } from 'react';

const GostItem = ({gost, addGostToArray}: {gost: any, addGostToArray: (checked: boolean, gost: any) => void}) => {
    const [ checked, setChecked ] = useState<boolean>(false)

    const checkHandler = (e: any) => {
        setChecked(e.target.checked)
        addGostToArray(e.target.checked, gost)
    }

    return (
        <li className="gosts-item">
            <label className={'gosts-link ' + (checked ? 'current' : '')}>
                <input onClick={(e) => {checkHandler(e)}} className='visuallyhidden' type="checkbox" value={gost}  />{gost}
            </label>
        </li>
    );
};

export default GostItem;