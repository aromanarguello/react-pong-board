import { AnyAction } from 'redux'
import { FETCH_PLAYERS } from '../actions/ActionTypes'

type State = {
    name: string
    score: number
}[]

const initialState: State = [{ name: 'Alex', score: 0 }, { name: 'Martin', score: 0 }, { name: 'Alan', score: 0 }]

export default function(state = initialState, action: AnyAction) {
    const { type } = action
    const reducer = {
        [FETCH_PLAYERS]: [...state],
    }
    return reducer[type] || state
}
