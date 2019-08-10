import React, {Component} from 'react';
import {List} from 'semantic-ui-react'

import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      isLoading: false,
    }
  }
  componentDidMount() {
    this.setState({isLoading:true})
    fetch('http://localhost:5000')
      .then(response => response.json())
      .then(data => this.setState({number: data, isLoading: false}))
  }
  
  render() {
    const {number, isLoading} = this.state
    if (isLoading) {
      return <p>Loading...</p>
    }
    return (
      <p>{number}</p>
    )
  }
}



// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       hits: [],
//       isLoading: false,
//     }
//   }
//   componentDidMount() {
//     this.setState({isLoading:true})
//     fetch('http://localhost:5000')
//       .then(response => response.json())
//       .then(data => this.setState({hits: data, isLoading: false}))
//   }
  
//   render() {
//     const {hits, isLoading} = this.state
//     if (isLoading) {
//       return <p>Loading...</p>
//     }
//     return (
//       <List>
//         {hits.map(hit =>
//         <List.Item>{hit}</List.Item>
          
//           )}
//       </List>
//     )
//   }
// }

export default App;
