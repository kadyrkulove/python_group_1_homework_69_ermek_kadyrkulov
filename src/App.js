import React, { Component } from 'react';
import {connect} from "react-redux";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='Box'>
         <div className={this.props.isRight === true ? 'green' : 'red'}>
           <p>{this.props.ctr}</p>
         </div>
          <div className='Tabs'>
            <button onClick={() => this.props.addNumber(9)}>9</button>
            <button onClick={() => this.props.addNumber(8)}>8</button>
            <button onClick={() => this.props.addNumber(7)}>7</button>
            <button onClick={() => this.props.addNumber(6)}>6</button>
            <button onClick={() => this.props.addNumber(5)}>5</button>
            <button onClick={() => this.props.addNumber(4)}>4</button>
            <button onClick={() => this.props.addNumber(3)}>3</button>
            <button onClick={() => this.props.addNumber(2)}>2</button>
            <button onClick={() => this.props.addNumber(1)}>1</button>
            <button onClick={this.props.clearNumber}>&lt;</button>
            <button onClick={() => this.props.addNumber(0)}>0</button>
            <button onClick={this.props.pressNumber}>E</button>
          </div>
        </div>
      </div>
    );
  }
}
const  mapStateToProps = state =>{
  return{
    ctr: state.stars,
    isRight: state.isRight,
  };
};
const mapDispatchToProps = dispatch=>{
  return{
    addNumber: (value)=> dispatch({type: 'ADD_NUMBER', value}),
    pressNumber: ()=> dispatch({type: 'PRESS'}),
    clearNumber: ()=> dispatch({type: 'CLEAR'}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps) (App);