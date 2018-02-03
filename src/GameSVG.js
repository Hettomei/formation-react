import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

const width = 600
const height = 200

const startAt = height / 2
const minHeight = 50
const spaceToFly = 50;
const randomSpike = 6;
const sizeRound = 10;

function nextHeight(current) {
  const sens = Math.random() > 0.5 ? 1 : -1;
  const next = current + Math.round(Math.random() * randomSpike) * sens

  if (next < minHeight) {
    return minHeight
  }else if (next > height) {
    return height
  } else {
    return next;
  }
}

class GameSVG extends Component {

  constructor(props) {
    super(props);
    const list = [startAt]
    const maxI = width / 5
    for (let i = 0; i < maxI; i++) {
      list.push(nextHeight(list[i]))
    }
    const roundX = 30
    const roundY = startAt - sizeRound - 10

    this.state = { list, roundX, roundY, pause: true }

    this.dx = 0;
    this.dy = 0;

    this.pauseTimer = this.pauseTimer.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
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
      const last = prevState.list[prevState.list.length - 1];
      return {
        list: prevState.list.slice(1, 200).concat(nextHeight(last)),
        roundX: prevState.roundX + this.dx,
        roundY: prevState.roundY + this.dy,
      };
    });
  }

  handleKeyDown(event) {
    if(event.key === 'ArrowUp'){
      this.dy = -3
    } else if(event.key === 'ArrowDown'){
      this.dy = 3
    } else if(event.key === 'ArrowLeft'){
      this.dx = -2
    } else if(event.key === 'ArrowRight'){
      this.dx = 2
    }
  }

  handleKeyUp(event) {
    if(event.key === 'ArrowUp'){
      this.dy = 0
    } else if(event.key === 'ArrowDown'){
      this.dy = 0
    } else if(event.key === 'ArrowLeft'){
      this.dx = 0
    } else if(event.key === 'ArrowRight'){
      this.dx = 0
    }
  }

  render() {
    return <div onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp}>
      <p>
        {
          this.state.pause ?
            <Button onClick={this.startTimer}>Start</Button>
            :
            <Button onClick={this.pauseTimer}>Pause</Button>
        }
      </p>
      <svg style={{border: '3px solid'}} width={width} height={height} >
        <circle cx={this.state.roundX} cy={this.state.roundY} r={sizeRound} fill="black" />
        {this.state.list.map((line, i) => (
          <g key={i} stroke="purple" strokeWidth={4} >
          <line x1={i*5} y1={height} x2={i*5} y2={line} />
          <line x1={i*5} y1={0} x2={i*5} y2={line - spaceToFly} />
        </g>
      ))}
      </svg>
      </div>
      }
}

export default GameSVG;
