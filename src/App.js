import React, { Component } from 'react';
import List from './List'
import ListItem from './ListItem'
import fetchPokemons from './fetchPokemons'
import lazyLoadImage, { config } from './lazyLoadImage'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { pokemons: [] }
  
  observer = new window.IntersectionObserver(lazyLoadImage, config)
  
  async componentDidMount () {
    const pokemons = await fetchPokemons()

    this.setState({
      pokemons
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lazy load</h1>
        </header>
        <List>
          {
            this.state.pokemons.map(({ id, sprite }) => 
              <ListItem key={id} sprite={sprite} observer={this.observer} />
            )
          }
        </List>
      </div>
    );
  }
}

export default App;
