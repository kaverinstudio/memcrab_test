import {
    setArrNearAmount,
    setAverageColumn,
    setCells,
    setPercents, setRowSum,
    setShowPercent
} from "../reducers/tableReducer";


const TableClass = {
    tableInit(rows, columns) {
        return (dispatch) => {
            const cells = []
            let id = 0;
            for (let i = 0; i < rows; i++) {
                const rows = []
                for (let j = 0; j < columns; j++) {
                    rows.push({id: id, amount: Math.floor(Math.random() * 900) + 100})
                    id++
                }
                cells.push(rows)
            }
            dispatch(setCells(cells))
        }

    },

    sumRow(table) {
        return (dispatch) => {
            const sumRows = []
            const percent = [];
            for (let i = 0; i < table.length; i++) {
                let sumItem = 0;
                let itemId = []
                table[i].forEach(cell => {
                        sumItem += cell.amount
                        itemId.push(cell.id)
                    }
                )
                sumRows.push({id: itemId, sumItem: sumItem})
            }
            dispatch(setRowSum(sumRows))
            for (let j = 0; j < sumRows.length; j++) {
                table[j].forEach(cell => percent.push({
                    id: cell.id,
                    percent: (cell.amount / sumRows[j].sumItem * 100).toFixed(1)
                }))
            }
            dispatch(setPercents(percent))

        }
    },

    averageColumn() {
        let sumCol = 0
        const averageCol = []
        let index = 0
        return (dispatch, getState) => {
            const state = getState()
            const columns = state.table.columns
            const table = state.table

            for (let i = 0; i < columns; i++) {
                for (let j = 0; j < table.cells.length; j++) {
                    sumCol += table.cells[j][index].amount
                }
                averageCol.push(sumCol / table.cells.length)
                sumCol = 0;
                index++;
            }
            dispatch(setAverageColumn(averageCol))
        }
    },

    amountAdd(id, table) {
        return (dispatch) => {
            table.forEach((row) => {
                row.forEach((cell) => {
                    if (cell.id === id) {
                        cell.amount++;
                    }
                })
            })
            dispatch(setCells(table))
        }
    },

    percentShow(index) {
        return (dispatch) => {
            dispatch(setShowPercent(index))
        }
    },

    showNearAmount(table, nearAmount, amount, id) {
        if (!id) {
            return (dispatch => {
                dispatch(setArrNearAmount([]))
            })
        }
        return (dispatch) => {
            const right = [];
            table.forEach(row => {
                row.forEach((el) => {
                    if (id !== el.id) {
                        right.push({id: el.id, diff: Math.abs(el.amount - amount)})
                    }
                });
            })
            right.sort((el, el2) => {
                return el.diff - el2.diff
            })
            const arrNearAmount = []
            arrNearAmount.push(right.slice(0, nearAmount))
            dispatch(setArrNearAmount(arrNearAmount))
        }
    },

    rowDelete(arrDel) {
        return (dispatch, getState) => {
            const state = getState()
            const table = state.table
            let index = 0;
            for (let k = 0; k < table.cells.length; k++) {
                for (let j = 0; j < table.cells[k].length; j++) {
                    if (arrDel.some((el) => el === table.cells[k][j].id)) {
                        index = k;
                    }
                }
            }
            table.cells.splice(index, 1)
            dispatch(setCells(table.cells))
        }
    },

    addRow() {
        return (dispatch, getState) => {
            const newRow = []
            const state = getState()
            const table = state.table

            let startId = table.cells[table.cells.length - 1].slice(-1)[0].id;

            for (let i = 0; i < table.cells[table.cells.length - 1].length; i++) {
                startId++;
                newRow.push({id: startId.toString(), amount: Math.floor(Math.random() * 900) + 100})
            }
            table.cells.push(newRow)
            dispatch(setCells(table.cells))

        }
    }

}

export default TableClass;

