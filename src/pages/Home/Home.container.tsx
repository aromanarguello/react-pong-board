import React, { SFC } from 'react'
import { BoardList, ResultEntry } from '../../components'

export const Home: SFC<any> = () => {
    return (
        <div>
            <BoardList />
            <ResultEntry label="Lost to:" />
        </div>
    )
}

export default Home
