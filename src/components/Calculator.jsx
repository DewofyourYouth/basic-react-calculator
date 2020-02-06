import React, { Component } from 'react';
import { regexCheck, problemArr, doMath } from '../functions/calculate';

import './Calculator.css';
import { Buttons } from './Buttons';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { problemString: '', answer: null };
    this.submitHandler = this.submitHandler.bind(this);
  }

  getVal = val => {
    this.setState({ problemString: this.state.problemString + val });
  };

  submitHandler(event) {
    event.preventDefault();
    let ps = this.state.problemString.replace(/\s/g, '');
    console.log(ps);

    if (!regexCheck(ps)) {
      this.setState({ problemString: '' });
      alert('Invalid input');
      return;
    }
    let pArr = problemArr(this.state.problemString);
    let answer = doMath(pArr);

    console.log(this.state.answers);
    this.setState({ answer, problemString: answer.toString() });
  }

  render() {
    console.log(this.state.answers);
    return (
      <div id="calc-wrapper">
        <div id="calc">
          <form id="calc-form" onSubmit={this.submitHandler}>
            <input
              type="text"
              // onFocus={() => this.setState({ problemString: '' })}
              onChange={e => {
                this.setState({ problemString: e.target.value });
                console.log(this.state.problemString);
              }}
              value={this.state.problemString}
            />

            <Buttons getVal={this.getVal} />
          </form>{' '}
        </div>
        <button
          className="reset-btn"
          type="button"
          onClick={() => this.setState({ problemString: '' })}
        >
          RESET
        </button>
      </div>
    );
  }
}
