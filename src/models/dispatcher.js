import {setColumns, setNearAmount, setRows, setShowRightCell} from "../reducers/tableReducer";

const Dispatcher = {
    columns(columns) {
        return (dispatch) => {
            dispatch(setColumns(columns))
        }
    },
    rows(rows) {
        return (dispatch) => {
            dispatch(setRows(rows))
        }
    },
    nearAmount(nearAmount) {
        return (dispatch) => {
            dispatch(setNearAmount(nearAmount))
        }
    },
    showRightCell(cel) {
        return (dispatch) => {
            dispatch(setShowRightCell(cel))
        }
    }

}

export default Dispatcher;