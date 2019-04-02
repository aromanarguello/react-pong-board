import React from 'react'
import { ResultEntry } from './ResultEntry.component'
import { render } from 'react-testing-library'

test('test result entry receives props', () => {
    const {
        container: { innerHTML },
    } = render(<ResultEntry label="alex" updateScore={() => console.log()} />)
    expect(innerHTML).toMatch('alex')
})
