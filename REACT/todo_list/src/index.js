import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import store from './store'
import {Provider, connect} from 'react-redux'

const stateToProps = (state)=> {
    return {
        inputValue: state.inputValue
    }
}

class UseConnect extends React.Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
    }
    render() { 
        console.log(this.props, '怎么用哪个');
        return <div>{this.props.inputValue}</div>;
    }
}
 
// export {connect(UseConnect, null)(UseConnect)};
export default connect(stateToProps, null)(UseConnect)

function Home() {
    return <div>
        <UseConnect />
        <h1>home页面</h1>
    </div>
}
function About() {
    return <h1>About页面</h1>
}

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
    }
    render() { 
        return (<div>
            <Router>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">About</Link></li>
                <Route path="/" exact component={Home}></Route>
                <Route path="/about" exact component={About}></Route>
            </Router>
        </div>)
    }
}
const App = (
    <Provider store={store}>
        <Index />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'))
// export default App;

