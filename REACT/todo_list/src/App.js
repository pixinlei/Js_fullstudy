import React, { Component } from 'react'
import './index.css'
class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['列表1', '列表2']
        }
    }
    inputChange(e) {
        // 这样是错误的吗
        this.setState({
            inputValue: e.target.value
        })
    }
    addList() {
        this.setState({ list: [...this.state.list, this.state.inputValue] })
        this.setState({ inputValue: '' })
    }
    delectList(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
    render() {
        return (
            <div>
                <div><input value={this.state.inputValue} onChange={this.inputChange.bind(this)} /> <button onClick={this.addList.bind(this)}> 增加服务 </button></div>
                {this.state.list.map((item, index) => {
                    return (<li key={index} onClick={this.delectList.bind(this, index)}>{item}</li>)
                })}
            </div>
        )
    }
}
export default Xiaojiejie