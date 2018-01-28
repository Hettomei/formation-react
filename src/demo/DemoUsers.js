import React, { Component } from 'react';

class DemoUsers extends Component {

  constructor(props) {
    super(props);
    this.state = {counter: 0, betterCounter: 0};
    this.incCounter = this.incCounter.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.startTimer = this.startTimer.bind(this)
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer() {
    this.timerID = setInterval(
      () => this.incCounter(10),
      1000
    );
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  stopTimer() {
    clearInterval(this.timerID);
  }

  incCounter(n) {
    this.setState({
      counter: this.state.counter + n
    })

    this.setState((prevState, props) => ({
      betterCounter: prevState.betterCounter + n
    }));
  }

  render() {
    return <div>
      <p>Ma forme</p>
      <p>Mon state {this.state.counter}</p>
      <p>Mon better state {this.state.betterCounter}</p>
    <p>Same state ? {(this.state.counter === this.state.betterCounter).toString()}</p>
    <p>
      <button onClick={() => this.incCounter(-5)}>-</button>
    <button onClick={() => this.incCounter(5)}>+</button>
    <button onClick={this.stopTimer}>STOP</button>
    <button onClick={this.startTimer}>START</button>
  </p>
</div>
  }
}

export default DemoUsers;
