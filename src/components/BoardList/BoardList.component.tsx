import React, { SFC, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchPlayers } from '../../redux/actions'
import { Dispatch } from 'redux'

type StoreProps = {
    name: string
    score: number
}[]

type Players = {
    name: string
    score: number
}

const BoardList: SFC<any> = ({ getPlayers, players: { boards } }) => {
    useEffect(() => {
        getPlayers()
    }, [])

    console.log(boards)
    return (
        <div>
            <ul>
                {boards.map(({ name, score }: Players, index: number) => (
                    <div key={index}>
                        <p>{name}</p>
                        <p>{score}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state: StoreProps) => ({ players: state })

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getPlayers: () => dispatch(fetchPlayers()),
})

const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps,
)(BoardList)

export default connectedComponent
