import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

function nextHeight(current) {
  const posNeg = Math.random() > 0.5 ? 1 : -1;
  const next = current + Math.round(Math.random() * 5) * posNeg

  if (next < 10) {
    return 10
  }else if (next > 99) {
    return 99
  } else {
    return next;
  }
}

class GameSVG extends Component {

  constructor(props) {
    super(props);
    const list = [50]
    for (let i = 0; i < 200; i++) {
      list.push(nextHeight(list[list.length - 1]))
    }

    this.state = { list, pause: true }
    this.pauseTimer = this.pauseTimer.bind(this)
    this.startTimer = this.startTimer.bind(this)
  }

  startTimer() {
    this.timerID = setInterval(
      () => this.addLine(),
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

  addLine(n) {
    this.setState((prevState, props) => {
      const last = prevState.list[prevState.list.length - 1] || 50;
      return { list: prevState.list.slice(1, 200).concat(nextHeight(last)) };
    });
  }

  render() {
    return <div>
      <p>
        &nbsp;
        {
          this.state.pause ?
            <Button onClick={this.startTimer}>Start</Button>
            :
            <Button onClick={this.pauseTimer}>Pause</Button>
        }
      </p>
      <svg  width={600} height={100} >
        {this.state.list.map((line, i) => <line key={i} x1={i*5} y1={400} x2={i*5} y2={line} stroke="green" strokeWidth={3} />)}
      </svg>
    </div>
  }
}

export default GameSVG;
