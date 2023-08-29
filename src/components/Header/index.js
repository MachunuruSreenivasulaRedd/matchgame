import {Component} from 'react'
import './index.css'

class Header extends Component {
  state = {
    timerCounter: 60,
  }

  componentDidMount() {
    this.startId = setInterval(() => {
      this.setState(prevState => ({
        timerCounter: prevState.timerCounter - 1,
      }))
    }, 1000)

    setTimeout(() => {
      clearInterval(this.startId)
    }, 60000)
  }

  componentWillUnmount() {
    clearInterval(this.startId)
  }

  render() {
    const {timerCounter} = this.state
    const {score, displayScoreCard} = this.props
    if (timerCounter === 0) {
      displayScoreCard()
    }
    return (
      <div className="header">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="logo"
          />
        </div>
        <div className="scoreSection">
          <p className="score">Score: {score}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="timer">{timerCounter} sec</p>
        </div>
      </div>
    )
  }
}

export default Header
