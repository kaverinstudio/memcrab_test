import React from 'react';
import {useSelector} from "react-redux";

const CellComponent = ({id, amount, percent, showNearAmount, amountPlus, showPercent, deselected}) => {
    const table = useSelector(state => state.table)

    return (
        <>
            <div
                className="cell"
                style={{
                    border: table.arrNearAmount[0] && table.arrNearAmount[0].some((el) => el.id === id) ? "2px solid red" : '',
                    background: showPercent && showPercent.some((el) => el === id) ? `linear-gradient(0deg, rgba(250,174,6,1) 0%, rgba(252,201,88,1) ${Math.ceil(percent[0].percent)}%, rgba(255,255,255,1) ${Math.ceil(percent[0].percent)}%)` : ''
                }}
                onMouseLeave={deselected} onMouseEnter={() => showNearAmount(amount, id)}
                onClick={() => amountPlus(id)} id={id}

            >
                {showPercent && showPercent.some((el) => el === id) ? percent[0].percent + '%' : amount}
            </div>
        </>
    );
};

export default CellComponent;