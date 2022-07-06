import {setColumns, setNearAmount, setRows} from "../reducers/tableReducer";

const Dispatcher = {
    columns(columns) {
        return (dispatch) => {
            dispatch(setColumns(parseInt(columns)))
        }
    },
    rows(rows) {
        return (dispatch) => {
            dispatch(setRows(parseInt(rows)))
        }
    },
    nearAmount(nearAmount) {
        return (dispatch) => {
            dispatch(setNearAmount(parseInt(nearAmount)))
        }
    }
}

export default Dispatcher;