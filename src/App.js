import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    current: {}
  }

  pizzaURL = 'http://localhost:3000/pizzas'

  componentDidMount() {
    fetch(this.pizzaURL).then(r => r.json()).then(pizzas => this.setState({pizzas}))
  }

  setCurrentPizza = (pizza) => {
    this.setState({current: pizza})
  }

  render() {
    let pizzas = this.state.pizzas
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.current} />
        <PizzaList setCurrentPizza={this.setCurrentPizza} pizzas={pizzas} />
      </Fragment>
    );
  }
}

export default App;
