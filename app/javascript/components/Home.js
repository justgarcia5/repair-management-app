import React from "react"

class Home extends React.Component {
  state = {
    greeting: "Hello World!"
  }
  render () {
    return (
      <div>
        {this.state.greeting}
      </div>
    );
  }
}

export default Home
