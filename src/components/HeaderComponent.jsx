import React, {useEffect, useState} from 'react';
import SelectSmall from "./SelectComponent";
import {useDispatch, useSelector} from "react-redux";
import Dispatcher from "../models/dispatcher";

const HeaderComponent = () => {
    const [arrValue, setArrValue] = useState([])
    const table = useSelector(state => state.table)
    const dispatch = useDispatch()

    const generator = () => {
        const init = []
        for (let i = 1; i < 101; i++) {
            init.push(i)
        }
        setArrValue(init)
    }
    useEffect(() => {
        generator()
    }, [])


    const handleChange = (event) => {
        if (event.target.name === 'columns') {
            dispatch(Dispatcher.columns(event.target.value))
        }
        if (event.target.name === 'rows') {
            dispatch(Dispatcher.rows(event.target.value))
        }
        if (event.target.name === 'nearAmount') {
            dispatch(Dispatcher.nearAmount(event.target.value))
        }

    };

    return (
        <div>
            <SelectSmall
                labelId="columns"
                name="columns"
                value={table.columns}
                label="Columns"
                arrValue={arrValue}
                handleChange={handleChange}
            />
            <SelectSmall
                labelId="rows"
                name="rows"
                value={table.cells.length}
                label="Rows"
                arrValue={arrValue}
                handleChange={handleChange}
            />
            <SelectSmall
                labelId="nearAmount"
                name="nearAmount"
                value={table.nearAmount}
                label="Closest values"
                arrValue={arrValue.slice(0, 10)}
                handleChange={handleChange}
            />
        </div>
    );
};

export default HeaderComponent;