import React, { SFC, useState } from 'react'
import { connect } from 'react-redux'
import { updateScore } from '../../redux/actions'
import { Dispatch } from 'redux'

interface ParentProp {
    label: string
    updateScore: (input: string) => void
}

interface EventProps {
    val: string
    cb: (val: string) => void
}

const ResultEntry: SFC<ParentProp> = ({ label, updateScore }) => {
    const [input, setInput] = useState('')
    return (
        <div>
            <p>{label}</p>
            <input
                type="text"
                placeholder="Player's name"
                value={input}
                onChange={({ target: { value } }) => setInput(value)}
            />
            <button onClick={() => updateScore(input)}>Submit</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({ updateScore: (input: string) => dispatch(updateScore(input)) })

const connectedComponent = connect(
    null,
    mapDispatchToProps,
)(ResultEntry)

export { ResultEntry }
export default connectedComponent
