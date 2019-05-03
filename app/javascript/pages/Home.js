import React from "react"

class Home extends React.Component {
  state = {
    greeting: "Home Page"
  }
  render () {
    return (
      <div className='home'>
        <h1>{this.state.greeting}</h1>
      </div>
    );
  }
}

export default Home
