import React from 'react'

class Jobs extends React.Component {
  state = {
    clients: [
      {
        clientName: 'Justin',
        clientPhone: '444-444-4444',
        clientPhone2: '555-555-5555',
        make: 'Toyota',
        model: 'Tacoma',
        year: 2000,
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



  render () {
    return (
      <div>
        { this.state.clients.map(client => {
          <
        })}
      </div>
    )
  }
}

export default Jobs
