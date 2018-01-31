import React, { Component } from 'react';
import { Label, Button } from 'react-bootstrap';

class Chrono extends Component {

  constructor(props) {
    super(props);
    this.state = { counter: 0, pause: true }
    this.incCounter = this.incCounter.bind(this)
    this.incByOne = this.incCounter.bind(this, 1)
    this.pauseTimer = this.pauseTimer.bind(this)
    this.startTimer = this.startTimer.bind(this)
  }

  startTimer() {
    this.timerID = setInterval(
      () => this.incCounter(0.05),
      50
    );
    this.setState({ pause: false })
  }

  pauseTimer() {
    clearInterval(this.timerID);
    this.setState({ pause: true })
  }

  componentWillUnmount() {
    this.pauseTimer();
  }

  incCounter(n) {
    this.setState((prevState, props) => ({
      counter: prevState.counter + n
    }));
  }

  render() {
    return <p><Label bsStyle="primary">{this.state.counter.toFixed(2)} secs</Label>
      &nbsp;
      {
        this.state.pause ?
          <Button onClick={this.startTimer}>Continue Timer</Button>
          :
          <Button onClick={this.pauseTimer}>Pause Timer</Button>
      }
    </p>
  }
}

export default Chrono;
