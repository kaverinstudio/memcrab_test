import React from 'react';

const SelectPerPage = ({rowsPerPage, value}) => {
    const options = [5, 10, 15, 20]

    return (
        <div>
            <label htmlFor="rowsPerPage">Rows per page</label>
            <select onChange={rowsPerPage} name="rowsPerPage" value={value}>
                {options.map((opt, ind) =>
                    <option key={ind} value={opt}>{opt}</option>
                )}
            </select>
        </div>
    );
};

export default SelectPerPage;