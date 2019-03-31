import { FETCH_PLAYERS, UPDATE_SCORE } from './ActionTypes'

export const fetchPlayers = () => ({ type: FETCH_PLAYERS })

export const updateScore = (user?: string) => ({ type: UPDATE_SCORE, user })
