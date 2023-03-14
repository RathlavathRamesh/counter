// Write your code here
import {Component} from 'react'

import './index.css'

class clickCounter extends Component {
  state = {count: 0}

  increase = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1 className="heading">
          The Button has been clicked <br />
          <span className="sp">{count}</span>
          times
        </h1>
        <p className="para">Click the Button To Increase the Count</p>
        <div className="bu">
          <button className="but" onClick={this.increase}>
            Click Me
          </button>
        </div>
      </div>
    )
  }
}

export default clickCounter
