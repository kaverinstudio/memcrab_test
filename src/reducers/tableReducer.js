const SET_CELLS = 'SET_CELLS'
const SET_ROWS_SUM = 'SET_ROWS_SUM'
const SET_AVERAGE_COLUMN = 'SET_AVERAGE_COLUMN'
const SET_SHOW_PERCENT = 'SET_SHOW_PERCENT'
const SET_ARR_NEAR_AMOUNT = 'SET_ARR_NEAR_AMOUNT'
const SET_PERCENTS = 'SET_PERCENTS'
const SET_COLUMNS = 'SET_COLUMNS'
const SET_ROWS = 'SET_ROWS'
const SET_NEAR_AMOUNT = 'SET_NEAR_AMOUNT'

const defaultState = {
    rows: 30,
    columns: 30,
    cells: [],
    rowSum: [],
    averageColumn: [],
    percents: [],
    showPercent: [],
    nearAmount: 30,
    arrNearAmount: [],
}

export default function tableReducers(state = defaultState, action) {

    switch (action.type) {
        case SET_CELLS:
            return {
                ...state,
                cells: [...action.payload],
            }
        case SET_ROWS_SUM:
            return {
                ...state,
                rowSum: action.payload,
            }
        case SET_AVERAGE_COLUMN:
            return {
                ...state,
                averageColumn: action.payload,
            }
        case SET_SHOW_PERCENT:
            return {
                ...state,
                showPercent: action.payload,
            }
        case SET_ARR_NEAR_AMOUNT:
            return {
                ...state,
                arrNearAmount: action.payload,
            }
        case SET_PERCENTS:
            return {
                ...state,
                percents: action.payload,
            }
        case SET_COLUMNS:
            return {
                ...state,
                columns: action.payload,
            }
        case SET_ROWS:
            return {
                ...state,
                rows: action.payload,
            }
        case SET_NEAR_AMOUNT:
            return {
                ...state,
                nearAmount: action.payload,
            }
        default:
            return state
    }
}


export const setCells = (cells) => ({type: SET_CELLS, payload: cells})
export const setRowSum = (sum) => ({type: SET_ROWS_SUM, payload: sum})
export const setAverageColumn = (average) => ({type: SET_AVERAGE_COLUMN, payload: average})
export const setShowPercent = (percent) => ({type: SET_SHOW_PERCENT, payload: percent})
export const setArrNearAmount = (nearAmount) => ({type: SET_ARR_NEAR_AMOUNT, payload: nearAmount})
export const setPercents = (percents) => ({type: SET_PERCENTS, payload: percents})
export const setColumns = (columns) => ({type: SET_COLUMNS, payload: columns})
export const setRows = (rows) => ({type: SET_ROWS, payload: rows})
export const setNearAmount = (nearAmount) => ({type: SET_NEAR_AMOUNT, payload: nearAmount})

