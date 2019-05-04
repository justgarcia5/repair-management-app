import React from 'react'

class AllJobs extends React.Component {
  state = {
    clients: [
      {
        name: 'Justin',
        phone: '444-444-4444',
        phone2: '555-555-5555',
        make: 'Toyota',
        model: 'Tacoma',
        year: 2000,
        jobDescription: 'head gasket',
        estimate: '2,330',
        partsList: 'n/a',
        partsOrdered: false,
        startDate: '4-4-2019',
        started: false,
        completed: false,
        paid: false,
      }
    ]
  }

  // componentDidMount = (e) => {
  //   const client = this.state.clients[e.target.value]


  // }
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
