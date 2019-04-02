import React, { SFC, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchPlayers } from '../../redux/actions'
import { Dispatch } from 'redux'

type StoreProps = {
    boards: {
        initialPlayers: {
            name: string
            score: number
        }[]
        activeBoard: {}[]
    }
}

type Players = {
    name: string
    score: number
    index: number
}

const BoardList: SFC<any> = ({ getPlayers, players, scoreBoard }) => {
    useEffect(() => {
        getPlayers()
    }, [])

    const boardData = scoreBoard.length > 0 ? scoreBoard : players
    return (
        <div>
            <ul>
                {boardData.map(({ name, score }: Players, index: number) => (
                    <div key={index}>
                        <p>{name}</p>
                        <p>{score}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = ({ boards: { initialPlayers, activeBoard } }: StoreProps) => ({
    players: initialPlayers,
    scoreBoard: activeBoard,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getPlayers: () => dispatch(fetchPlayers()),
})

const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps,
)(BoardList)

export default connectedComponent
