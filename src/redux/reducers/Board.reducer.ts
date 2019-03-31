import { FETCH_PLAYERS, UPDATE_SCORE } from '../actions/ActionTypes'

type State = {
    initialPlayers: { name: string; score: number }[]
    activeBoard: { name: string; score: number }[]
}

type FetchAction = {
    type: string
    user: string
}

const initialState: State = {
    initialPlayers: [{ name: 'Alex', score: 0 }, { name: 'Martin', score: 0 }, { name: 'Alan', score: 0 }],
    activeBoard: [],
}

const renderData = (name: string, score: number) => {
    return {
        name,
        score,
    }
}

export default function(state = initialState, action: FetchAction) {
    const { type, user } = action
    const reducer = {
        [FETCH_PLAYERS]: { ...state },
        [UPDATE_SCORE]: {
            ...state,
            activeBoard: state.initialPlayers.map(({ name, score }) => {
                return name === user ? renderData(name, (score += 1)) : renderData(name, score)
            }),
        },
    }
    return reducer[type] || state
}
