import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='my-app' >
        <Item/>
      </div>
    );
  }
}

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {amount:0};
    this.buy = this.buy.bind(this);
  }

  buy() {
    this.setState({amount: this.state.amount + 1});
  }

  render() {
    return (

    <div>
  <h4>Laptop</h4>
  <p>Core i7 - 8gb ram - 256gb SSD</p>
  <button onClick={this.buy}>Buy</button>
  <span> $500</span>
  <span> (Cart: {this.state.amount} items.)</span>
  <hr/>
</div>

);
}
}

export default App;
