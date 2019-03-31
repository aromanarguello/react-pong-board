import { FETCH_PLAYERS, UPDATE_SCORE } from '../actions/ActionTypes'

type State = {
    initialPlayers: { name: string; score: number }[]
    activeBoard: Array<Object>
}

type FetchAction = {
    type: string
    user: string
}

const initialState: State = {
    initialPlayers: [{ name: 'Alex', score: 0 }, { name: 'Martin', score: 0 }, { name: 'Alan', score: 0 }],
    activeBoard: [],
}

export default function(state = initialState, action: FetchAction) {
    const { type, user } = action
    const reducer = {
        [FETCH_PLAYERS]: { ...state },
        [UPDATE_SCORE]: {
            ...state,
            activeBoard: state.initialPlayers.forEach(({ name, score }) => {
                name === user ? (score += 1) : score
            }),
        },
    }
    console.log(reducer[type])
    return reducer[type] || state
}
