import React from 'react';

const SelectOptions = ({label, labelId, name, value, arrValue, handleChange}) => {
    return (
        <div className="select">
            <label htmlFor={labelId}>{label}</label>
            <select onChange={handleChange} name={name} value={value}>
                {arrValue.map((opt, ind) =>
                    <option key={ind} value={opt}>{opt}</option>
                )}
            </select>
        </div>
    );
};

export default SelectOptions;