// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    return (
      <div { isDarkMode ? className="container" : className="cart"}>
        <h1 {isDarkMode? className="heading" : className="head"}>Click To Change Mode</h1>
        <button className="btn" onClick={this.onClickButton}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    )
  }
}
export default LightDarkMode
