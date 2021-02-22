import React from 'react';
import axios from 'axios';

export default class ProductViewer extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {}
  }

  render() {
    const products = this.props.products;
    const index = this.props.index;
    return (
      <div>
        {
          products.length === 0 ? null :
          <div className="product-viewer">
            <img src={ products[index].image }/>
            <h3>{ products[index].item }</h3>
            <br></br>
            Current Bid: ${products[index].curr_bid}
            <br></br>
            Original Posting Pirce: ${products[index].min_cost}
          </div>
        }
      </div>
    );
  }
}