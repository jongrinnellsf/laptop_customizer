
import React, { Component } from 'react';
import './App.css';
import CustomizationList from './CustomizationList';
import Cart from './Cart';
import Header from './Header'
import Total from './Total'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <Header>
          ELF Computing | Laptops
        </Header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {<CustomizationList 
              features={this.props.features}
              selected={this.state.selected}
              onChange={this.updateFeature}
              USCurrencyFormat={USCurrencyFormat}
            />}
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            {<Cart
              selected={this.state.selected}
              USCurrencyFormat={USCurrencyFormat}
            />}
            <Total>
            {USCurrencyFormat.format(total)}
            </Total>
          </section>
        </main>
      </div>
    );
  }
}

export default App;