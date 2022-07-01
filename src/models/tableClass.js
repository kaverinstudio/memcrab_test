import {
    setArrNearAmount,
    setAverageColumn,
    setCells,
    setPercents,
    setRowSum,
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
                table[i].map(cell => {
                        sumItem += cell.amount
                        itemId.push(cell.id)
                    }
                )
                sumRows.push({id: itemId, sumItem: sumItem})
            }
            dispatch(setRowSum(sumRows))
            for (let j = 0; j < sumRows.length; j++) {
                table[j].map(cell => percent.push({
                    id: cell.id,
                    percent: (cell.amount / sumRows[j].sumItem * 100).toFixed(1)
                }))
            }
            dispatch(setPercents(percent))

        }
    },

    averageColumn(table, columns) {
        let sumCol = 0
        const averageCol = []
        let index = 0
        return (dispatch) => {
            for (let i = 0; i < columns; i++) {
                for (let j = 0; j < table.length; j++) {
                    sumCol += table[j][index].amount
                }
                averageCol.push(sumCol / table.length)
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

    rowDelete(arrDel, table) {
        return (dispatch) => {
            let index = 0;
            for (let k = 0; k < table.length; k++) {
                for (let j = 0; j < table[k].length; j++) {
                    if (arrDel.some((el) => el === table[k][j].id)) {
                        index = k;
                    }
                }
            }
            table.splice(index, 1)
            dispatch(setCells(table))
        }
    },

    addRow(table) {
        return (dispatch) => {
            const newRow = []

            let startId = table[table.length - 1].slice(-1)[0].id;

            for (let i = 0; i < table[table.length - 1].length; i++) {
                startId++;
                newRow.push({id: startId.toString(), amount: Math.floor(Math.random() * 900) + 100})
            }
            table.push(newRow)
            dispatch(setCells(table))

        }
    }

}

export default TableClass;
