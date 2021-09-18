import React from 'react';
import ReactDOM from 'react-dom'

class Son extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() { 
        console.log(this.props.add)
        return <div onClick={this.props.add}>子组件 --- {this.props.fatherToSon}</div>;
    }
}
 

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fatherToSon: '父传给子的参数',
            fatherData: 1
        }

    }
    add() {
        console.log(this, '1111111')
        // let temp = this.state.fatherData + 1
        // this.setState({fatherData: temp})
    }
    render() { 
        return (<div>
            父组件 ---- {this.state.fatherData}
            <Son fatherToSon={this.state.fatherToSon} add={this.add} />
            </div>)
    }
}
 


ReactDOM.render(<App />, document.getElementById('root'))