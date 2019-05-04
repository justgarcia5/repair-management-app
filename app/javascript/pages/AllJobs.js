import React from 'react'

class AllJobs extends React.Component {
  state = {
    clients: []
  }

  componentDidMount = () => {
    fetch('/clients.json')
    .then((response) => response.json())
    .then((clients) => {
      this.setState({clients: clients})
    })
  }

  render () {
    return (
      <div>
        <h1>Jobs</h1>
        <div>
          {this.state.clients.map((client, index) =>
          <div key={index}>
            <p>{client.name}</p>
            <p>{client.phone}</p>
            <p>{client.phone2}</p>
            <p>{client.make}</p>
            <p>{client.model}</p>
            <p>{client.year}</p>
            <p>{client.jobDescription}</p>
            <p>{client.estimate}</p>
            <p>{client.partsList}</p>
            <p>{client.partsOrdered}</p>
            <p>{client.startDate}</p>
            <p>{client.started}</p>
            <p>{client.completed}</p>
            <p>{client.paid}</p>
          </div>
          )}
        </div>
      </div>
    )
  }
}

export default AllJobs
