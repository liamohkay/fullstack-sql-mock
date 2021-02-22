import React from 'react';
import axios from 'axios';

export default class ProductViewer extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {}
  }

  render() {
    const products = this.props.product;
    if (!this.props.product) {
      return (
        <div></div>
      );
    } else {
      return (
        <div className="product-viewer">
          <img src={ products.image }/>
          <h3>{ products.item }</h3>
          <br></br>
          Current Bid: ${products.curr_bid}
          <br></br>
          Original Posting Pirce: ${products.min_cost}
        </div>
      );
    }
  }
}