import React from 'react';

const BottomSideCell = (props) => {
    return (
        <div className="cell">
            {props.value.toFixed(1)}
        </div>
    );
};

export default BottomSideCell;