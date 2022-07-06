import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import CellComponent from "./CellComponent";
import BottomSideCell from "./BottomSideCell";
import TableClass from "../models/tableClass";
import {useCallback, useEffect} from "react";

export default function TableComponent() {
    const table = useSelector(state => state.table)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(TableClass.averageColumn())
    }, [table.cells, dispatch])

    const amountPlus = (id) => {
        dispatch(TableClass.amountAdd(id, table.cells))
    }

    const showNearAmount = (amount, id) => {
        dispatch(TableClass.showNearAmount(table.cells, table.nearAmount, amount, id))
    }

    const deselected = () => {
        dispatch(TableClass.showNearAmount(table.cells))
    }

    const handleScroll = useCallback(() => {
            const leftEl = document.querySelector('.table__background');
            const rightEl = document.querySelector('.right__side');
            rightEl.scrollTop = leftEl.scrollTop
        },
        []);

    useEffect(() => {
        document.querySelector(".table__background").addEventListener("scroll", handleScroll);
        return () => document.querySelector(".table__background").removeEventListener("scroll", handleScroll)
    }, [handleScroll])

    return (
        <div className="table">
            <div className="table__wrapper">
                <div className="table__background">
                    <div className="table__top">
                        <table className="table__top--table">
                            <tbody>
                            {table.cells
                                .map((row, index) => {
                                    return (
                                        <tr key={index}>
                                            {row.map((cell) => {
                                                    return (
                                                        <td key={cell.id} style={{padding: 0}}>
                                                            <CellComponent
                                                                deselected={deselected}
                                                                amountPlus={amountPlus}
                                                                showPercent={table.showPercent}
                                                                key={cell.id}
                                                                id={cell.id}
                                                                percent={table.percents.filter(per => per.id === cell.id)}
                                                                amount={cell.amount}
                                                                showNearAmount={showNearAmount}
                                                            />
                                                        </td>
                                                    );
                                                },
                                            )}
                                        </tr>
                                    );
                                })}
                            </tbody>
                            <tfoot className="table__bottom">
                            <tr>
                                {table.averageColumn.map((value, index) =>
                                    <th key={index} style={{padding: 0}}>
                                        <BottomSideCell
                                            key={index}
                                            value={value}
                                        />
                                    </th>
                                )}
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
