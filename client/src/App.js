import React, {Component} from 'react';

import './App.css';

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hits: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:5000')
      .then(response => response.json())
      .then(data => this.setState({hits: data}))
  }
  
  render() {
    const {hits} = this.state

    return (
      <ul>
        {hits.map(hit =>
        <li>{hit}
        </li>
          
          )}
      </ul>
    )
  }
}

export default App;
