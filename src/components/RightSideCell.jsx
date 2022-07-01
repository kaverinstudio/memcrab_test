import React from 'react';

const RightSideCell = ({value, index, selected, deSelected, rowDelete}) => {

    return (
        <div
            className="cell"
            title="Click to delete a row"
            onMouseLeave={deSelected}
            onMouseEnter={() => selected(index)}
            onClick={() => rowDelete(index)}
        >
            {value}
        </div>
    );
};

export default RightSideCell;