import React, { SFC } from 'react'
import { Home } from './pages'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App: SFC<any> = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    </Provider>
)

export default App
