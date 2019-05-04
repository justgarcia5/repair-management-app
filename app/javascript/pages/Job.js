import React from 'react'

import Errors from '../components/Errors'

class Jobs extends React.Component {
  state = {
    message: null,
    errors: null,
    responseOk: false,
    clients: [
      {
        name: '',
        phone: '',
        phone2: '',
        make: '',
        model: '',
        year: null,
        estimate: '',
        partsList: '',
        partsOrdered: null,
        startDate: '4-4-2019',
        started: null,
        completed: null,
        paid: null,
      }
    ]
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("Job successfully submitted");
    fetch('/clients/new.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({client: this.state.clients})
    }).then((response) => {
      return response.json().then((json) => {
        if(response.status === 201) {
          this.setState({responseOk: true})
          // console.log(response)
        } else {
          this.setState({responseOk: false, errors: json})
        }
        return json
      })
    }).catch((errors) => {
      this.setState({responseOk: false, errors: {"System Error": ["Unknown problem has occurred"]}})
    })
  }

  handleChange = (event) => {
    const { clients } = this.state
    clients[event.target.name] = event.target.value
    this.setState({clients: clients})
  }

  render () {
    const { clients, responseOk, errors } = this.state

    return (
      <div>
        <h1>Add Job</h1>
        {responseOk &&
        <Redirect to='/all_jobs' />
        }
        <Errors errors={errors}/>
        <input
          value={clients.name}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Jobs
