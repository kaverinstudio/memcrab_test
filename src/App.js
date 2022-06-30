import React, {useEffect} from "react";
import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import TableClass from "./models/tableClass";
import RightSideComponent from "./components/RightSideComponent";
import HeaderComponent from "./components/HeaderComponent";
import TableComponent from "./components/TableComponent";

function App() {
    const table = useSelector(state => state.table)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(TableClass.tableInit(table.rows, table.columns))
    }, [table.rows, table.columns, dispatch])

    const addRow = () => {
        dispatch(TableClass.addRow(table.cells))
    }


    return (
        <div className="app">
            <div className="header">
                <HeaderComponent/>

            </div>
            <div className="wrapper">
                <button onClick={addRow}>Add row</button>
                <RightSideComponent/>
                <TableComponent/>
            </div>
        </div>
    );
}

export default App;
