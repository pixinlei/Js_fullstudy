import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, hashHistory } from 'react-router';
import test from './test.js'
// import {Link} from 'react-router-dom'

class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={() => { this.props.onClick() }}>
                {/* TODO */}
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Squares: Array(9).fill(null),
            xIsNext: true,
        }
    }

    handleClick(i) {
        const squares = this.state.Squares.slice()
        if(calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({ Squares: squares, xIsNext: !this.state.xIsNext })
    }
    renderSquare(i) {
        return <Square value={this.state.Squares[i]} onClick={() => this.handleClick(i)} />;
    }

    render() {
        const winner = calculateWinner(this.state.Squares)
        let status;

        if(winner) {
            status = 'winner ' + winner
        } else {
            status = `Next player is ${this.state.xIsNext ? 'X' : 'O'}`
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
function goTestRouter() {
    // function goTest() {
    //     history.push('/')
    // }
    return (
        <div>
            <Router history={hashHistory}>
                <Route path="/test" component={test} />
            </Router>
            {/* <button><Link to="/test">路由跳转</Link></button> */}
        </div>
    )
}

class Game extends React.Component {
    componentDidMount() {
        console.log('完成挂载');
    }
    componentDidUpdate() {
        console.log('更新完成');
    }
    componentWillUnmount() {
        console.log('即将卸载');
    }
    render() {
        console.log('渲染函数');
        return (
            <div className="game">
                <div className="game-board">

                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }