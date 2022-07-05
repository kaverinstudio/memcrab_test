import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import CellComponent from "./CellComponent";
import BottomSideCell from "./BottomSideCell";
import TableClass from "../models/tableClass";
import {useEffect} from "react";
import Dispatcher from "../models/dispatcher";
import PaginationComponent from "./PaginationComponent";
import SelectPerPage from "./SelectPerPage";

export default function TableComponent() {
    const table = useSelector(state => state.table)
    const dispatch = useDispatch()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    const callPages = Math.ceil(table.cells.length / rowsPerPage)

    if (callPages <= page && page !== 0) {
        setPage(callPages - 1)
    }

    const increment = () => {
        if (page + 1 < callPages) {
            setPage(page + 1)
        }
    }

    const decrement = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        dispatch(Dispatcher.showRightCell({page: page, rowsPerPage: rowsPerPage}))
    }, [dispatch, page, rowsPerPage])

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

    let indexForRender = 0;

    indexForRender = page * rowsPerPage;

    return (
        <div className="table">
            <div className="table__wrapper">
                <div className="table__background">
                    <div style={{height: 'auto', overflowX: 'scroll'}}>
                        <table>
                            {table.cells
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    return (
                                        <tr key={index}>
                                            {table.cells[indexForRender].map((col) => {
                                                    return (
                                                        <td key={col.id} style={{padding: 0}}>
                                                            <CellComponent
                                                                deselected={deselected}
                                                                amountPlus={amountPlus}
                                                                showPercent={table.showPercent}
                                                                key={col.id}
                                                                id={col.id}
                                                                percent={table.percents.filter(per => per.id === col.id)}
                                                                amount={col.amount}
                                                                showNearAmount={showNearAmount}
                                                            />
                                                        </td>
                                                    );
                                                },
                                                indexForRender++,
                                            )}
                                        </tr>
                                    );
                                })}
                        </table>
                        <table>
                            <tr>
                                <td>
                                    <p style={{padding: '10px'}}>Average value for each column</p>
                                </td>
                            </tr>
                        </table>
                        <table>
                            <tr style={{marginTop: 20}}>
                                {table.averageColumn.map((value, index) =>
                                    <td key={index} style={{padding: 0}}>
                                        <BottomSideCell
                                            key={index}
                                            value={value}
                                        />
                                    </td>
                                )}
                            </tr>
                        </table>
                    </div>
                    <div className="pagination">
                        <div>
                            <SelectPerPage
                                rowsPerPage={handleChangeRowsPerPage}
                                value={rowsPerPage}
                            />
                        </div>
                        <div>
                            <p>Rows {page * rowsPerPage} - {(page + 1 === callPages) ? table.cells.length : (page * rowsPerPage + rowsPerPage)} of {table.cells.length}</p>
                        </div>
                        <PaginationComponent
                            page={page}
                            callPages={callPages}
                            increment={increment}
                            decrement={decrement}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
