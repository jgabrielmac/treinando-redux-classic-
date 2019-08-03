import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { bindActionCreators } from 'redux';
import { clickButton, clickButtonDelete } from './Actions';

class App extends Component {
  state = {
    inputValue: ''
  }
  
  inputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const { newValue, clickButton, clickButtonDelete } = this.props;
    const { inputValue } = this.state;

    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <input type='text' onChange={(e) => this.inputChange(e)} value={inputValue}/>
        <button onClick={() => clickButton(inputValue)}>
          Click me!
        </button> &nbsp;
        <button onClick={(e) => clickButtonDelete(e)}>
          DELETE!
        </button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

  const mapStateToProps = store => ({
    newValue: store.clickState.newValue
  });
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickButton, clickButtonDelete }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(App);