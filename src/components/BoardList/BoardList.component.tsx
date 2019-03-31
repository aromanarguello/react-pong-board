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
    }
}

type Players = {
    name: string
    score: number
    index: number
}

const BoardList: SFC<any> = ({ getPlayers, players }) => {
    useEffect(() => {
        getPlayers()
    }, [])

    return (
        <div>
            <ul>
                {players.map(({ name, score }: Players, index: number) => (
                    <div key={index}>
                        <p>{name}</p>
                        <p>{score}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = ({ boards: { initialPlayers } }: StoreProps) => ({ players: initialPlayers })

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getPlayers: () => dispatch(fetchPlayers()),
})

const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps,
)(BoardList)

export default connectedComponent
