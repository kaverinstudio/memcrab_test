import React, {useEffect} from 'react';
import RightSideCell from "./RightSideCell";
import {useDispatch, useSelector} from "react-redux";
import TableClass from "../models/tableClass";
import {Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";

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
            <TableContainer>
                <Table style={{borderSpacing: 0}}>
                    <TableBody>
                        {table.rowSum
                            .slice(table.showRightCell.page * table.showRightCell.rowsPerPage, table.showRightCell.page * table.showRightCell.rowsPerPage + table.showRightCell.rowsPerPage)
                            .map((value, index) =>
                                <TableRow key={index}>
                                    <TableCell key={index} style={{padding: 0}}>
                                        <RightSideCell
                                            selected={selected}
                                            deSelected={deSelected}
                                            key={index}
                                            index={value.id}
                                            value={value.sumItem}
                                            rowDelete={rowDelete}
                                        />
                                    </TableCell>
                                </TableRow>
                            )}
                    </TableBody>
                </Table>
            </TableContainer>
            <p style={{textAlign: 'center', paddingTop: 10}}>Sum <br/> each <br/> line</p>
        </div>
    );
};

export default RightSideComponent;