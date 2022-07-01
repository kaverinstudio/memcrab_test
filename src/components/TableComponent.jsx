import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {useDispatch, useSelector} from "react-redux";
import CellComponent from "./CellComponent";
import BottomSideCell from "./BottomSideCell";
import TableClass from "../models/tableClass";
import {useEffect} from "react";
import Dispatcher from "../models/dispatcher";
import {Typography} from "@mui/material";

export default function TableComponent() {
    const table = useSelector(state => state.table)
    const dispatch = useDispatch()
    const [page, setPage] = React.useState(0);
    const [numberRows, setNumberRows] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        setNumberRows((rowsPerPage * newPage))
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);

    };

    useEffect(() => {
        dispatch(Dispatcher.showRightCell({page: page, rowsPerPage: rowsPerPage}))
    }, [dispatch, page, rowsPerPage])

    useEffect(() => {
        setTimeout(() => {
            dispatch(TableClass.averageColumn(table.cells, table.columns))
        }, 200)
    }, [table.cells, table.columns, dispatch])

    const amountPlus = (id) => {
        dispatch(TableClass.amountAdd(id, table.cells))
    }

    const showNearAmount = (amount, id) => {
        dispatch(TableClass.showNearAmount(table.cells, table.nearAmount, amount, id))
    }

    const deselected = () => {
        dispatch(TableClass.showNearAmount(table.cells))
    }

    let i = numberRows;
    return (
        <div className="table">
            <div className="table__wrapper">
                <Paper sx={{maxWidth: 1200, overflow: 'hidden'}}>
                    <TableContainer sx={{height: 'auto'}}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableBody>
                                {table.cells
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        return (
                                            <TableRow key={index}>
                                                {table.cells[i].map((col) => {
                                                        return (
                                                            <TableCell key={col.id} style={{padding: 0}}>
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
                                                            </TableCell>
                                                        );
                                                    },
                                                    i++,
                                                )}
                                            </TableRow>
                                        );
                                    })}

                            </TableBody>
                        </Table>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography>Average value for each column</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                        <Table>
                            <TableBody>
                                <TableRow style={{marginTop: 20}}>
                                    {table.averageColumn.map((value, index) =>
                                        <TableCell key={index} style={{padding: 0}}>
                                            <BottomSideCell
                                                key={index}
                                                value={value}
                                            />
                                        </TableCell>
                                    )}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={table.cells.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </div>
    );
}
