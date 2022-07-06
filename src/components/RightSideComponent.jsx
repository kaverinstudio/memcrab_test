import React, {useEffect} from 'react';
import RightSideCell from "./RightSideCell";
import {useDispatch, useSelector} from "react-redux";
import TableClass from "../models/tableClass";

const RightSideComponent = () => {
    const dispatch = useDispatch()
    const table = useSelector(state => state.table)

    useEffect(() => {
        dispatch(TableClass.sumRow(table.cells))
    }, [table.cells, dispatch])

    const selected = (index) => {
        dispatch(TableClass.percentShow(index))
    }

    const deSelected = () => {
        dispatch(TableClass.percentShow([]))
    }

    const rowDelete = (index) => {
        if (table.cells.length > 1) {
            dispatch(TableClass.rowDelete(index, table.cells))
        } else {
            alert('Can\'t delete all rows')
        }
    }

    return (
        <div className="right__side">
            <table className="right__side--table">
                {table.rowSum
                    .map((value, index) =>
                        <tr key={index}>
                            <td key={index} style={{padding: 0}}>
                                <RightSideCell
                                    selected={selected}
                                    deSelected={deSelected}
                                    key={index}
                                    index={value.id}
                                    value={value.sumItem}
                                    rowDelete={rowDelete}
                                />
                            </td>
                        </tr>
                    )}
            </table>
        </div>
    );
};

export default RightSideComponent;