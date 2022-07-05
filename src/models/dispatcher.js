import {setColumns, setNearAmount, setRows, setShowRightCell} from "../reducers/tableReducer";

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
    },
    showRightCell(cel) {
        return (dispatch) => {
            dispatch(setShowRightCell(cel))
        }
    }

}

export default Dispatcher;