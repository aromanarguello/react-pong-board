import {combineReducers, Reducer} from 'redux'
import BoardReducer from './Board.reducer'


const combinedReducers: Reducer = combineReducers({
    boards: BoardReducer
})

export default combinedReducers