import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor() {
    super();

    this.state = {
      name: {firstName: 'Alexandra', lastName: 'Sirois'},
      compagnie : 'Machinage Piche'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi, i'm {this.state.name.firstName} {this.state.name.lastName} and I work at {this.state.compagnie}</p>
          <button onClick={() => {
            this.setState(
              () => {
                return {
                  name : {firstName:'Un',lastName:'Oiseau'},
                };
              } ,
              () => {
                console.log(this.state);
              }
              );
          }
        }
          >
            Change name</button>
        </header>
      </div>
    );
  }
 
}

export default App;
