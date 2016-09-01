
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import LineChart from '../'

const a = [
  {
    description: '',
    scoreTeamA: 0,
    scoreTeamB: 0,
    firstName: '',
    lastName: ''
  },
  {
    description: 'Dig error',
    scoreTeamA: 0,
    scoreTeamB: 1,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Unforced error',
    scoreTeamA: 1,
    scoreTeamB: 1,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Dig error',
    scoreTeamA: 1,
    scoreTeamB: 2,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Unforced error',
    scoreTeamA: 2,
    scoreTeamB: 2,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Ace',
    scoreTeamA: 3,
    scoreTeamB: 2,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Service error',
    scoreTeamA: 3,
    scoreTeamB: 3,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Attack error',
    scoreTeamA: 3,
    scoreTeamB: 4,
    firstName: 'Markus',
    lastName: 'Böckermann'
  },
  {
    description: 'Attack error',
    scoreTeamA: 3,
    scoreTeamB: 5,
    firstName: 'Markus',
    lastName: 'Böckermann'
  },
  {
    description: 'Unforced error',
    scoreTeamA: 4,
    scoreTeamB: 5,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Unforced error',
    scoreTeamA: 5,
    scoreTeamB: 5,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Dig error',
    scoreTeamA: 5,
    scoreTeamB: 6,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Attack winner',
    scoreTeamA: 6,
    scoreTeamB: 6,
    firstName: 'Markus',
    lastName: 'Böckermann'
  },
  {
    description: 'Unforced error',
    scoreTeamA: 7,
    scoreTeamB: 6,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Block winner',
    scoreTeamA: 8,
    scoreTeamB: 6,
    firstName: 'Markus',
    lastName: 'Böckermann'
  },
  {
    description: 'Dig error',
    scoreTeamA: 8,
    scoreTeamB: 7,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Attack error',
    scoreTeamA: 8,
    scoreTeamB: 8,
    firstName: 'Markus',
    lastName: 'Böckermann'
  },
  {
    description: 'Attack winner',
    scoreTeamA: 9,
    scoreTeamB: 8,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Attack winner',
    scoreTeamA: 10,
    scoreTeamB: 8,
    firstName: 'Markus',
    lastName: 'Böckermann'
  },
  {
    description: 'Attack winner',
    scoreTeamA: 11,
    scoreTeamB: 8,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Unforced error',
    scoreTeamA: 12,
    scoreTeamB: 8,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Service error',
    scoreTeamA: 12,
    scoreTeamB: 9,
    firstName: 'Markus',
    lastName: 'Böckermann'
  },
  {
    description: 'Attack winner',
    scoreTeamA: 13,
    scoreTeamB: 9,
    firstName: 'Markus',
    lastName: 'Böckermann'
  },
  {
    description: 'Dig error',
    scoreTeamA: 13,
    scoreTeamB: 10,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Unforced error',
    scoreTeamA: 14,
    scoreTeamB: 10,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Dig error',
    scoreTeamA: 14,
    scoreTeamB: 11,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Reception error',
    scoreTeamA: 14,
    scoreTeamB: 12,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Attack winner',
    scoreTeamA: 15,
    scoreTeamB: 12,
    firstName: 'Markus',
    lastName: 'Böckermann'
  },
  {
    description: 'Dig error',
    scoreTeamA: 15,
    scoreTeamB: 13,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Attack error',
    scoreTeamA: 15,
    scoreTeamB: 14,
    firstName: 'Markus',
    lastName: 'Böckermann'
  },
  {
    description: 'Reception error',
    scoreTeamA: 15,
    scoreTeamB: 15,
    firstName: 'Markus',
    lastName: 'Böckermann'
  },
  {
    description: 'Attack winner',
    scoreTeamA: 16,
    scoreTeamB: 15,
    firstName: 'Markus',
    lastName: 'Böckermann'
  },
  {
    description: 'Attack error',
    scoreTeamA: 16,
    scoreTeamB: 16,
    firstName: 'Markus',
    lastName: 'Böckermann'
  },
  {
    description: 'Attack winner',
    scoreTeamA: 17,
    scoreTeamB: 16,
    firstName: 'Markus',
    lastName: 'Böckermann'
  },
  {
    description: 'Service error',
    scoreTeamA: 17,
    scoreTeamB: 17,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Attack winner',
    scoreTeamA: 18,
    scoreTeamB: 17,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Block error',
    scoreTeamA: 18,
    scoreTeamB: 18,
    firstName: 'Markus',
    lastName: 'Böckermann'
  },
  {
    description: 'Attack winner',
    scoreTeamA: 19,
    scoreTeamB: 18,
    firstName: 'Markus',
    lastName: 'Böckermann'
  },
  {
    description: 'Dig error',
    scoreTeamA: 19,
    scoreTeamB: 19,
    firstName: 'Lars',
    lastName: 'Flüggen'
  },
  {
    description: 'Attack winner',
    scoreTeamA: 20,
    scoreTeamB: 19,
    firstName: 'Markus',
    lastName: 'Böckermann'
  },
  {
    description: 'Ace',
    scoreTeamA: 21,
    scoreTeamB: 19,
    firstName: 'Markus',
    lastName: 'Böckermann'
  }
]

class App extends Component {

  componentDidMount () {
    this.lineChart = new LineChart({
      target: this.refs.svg
    })
    this.lineChart.render(a)
  }

  onClick = () => {
    // this.lineChart.update(b)
  }

  render () {
    return (
      <div style={{position: 'relative'}}>
        <div ref='svg' />
        <div>
          <button onClick={this.onClick}>
            Animate
          </button>
        </div>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'))
