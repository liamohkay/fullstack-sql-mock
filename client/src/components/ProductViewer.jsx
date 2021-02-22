import React from 'react';
import axios from 'axios';

export default class ProductViewer extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {
      newBid: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ newBid: e.target.value }, () => console.log(this.state));
  }

  handleSubmit() {
    axios.put(`/api/products/${this.props.products[this.props.index].id}`, { curr_bid: this.state.newBid });
  }

  render() {
    const products = this.props.products;
    const index = this.props.index;
    return (
      <div>
        {
          products === null ? null :
          <div className="product-viewer">
            <img src={ products[index].image }/>
            <h3>{ products[index].item }</h3>
            <br></br>
            Current Bid: ${products[index].curr_bid}
            <br></br>
            Original Posting Pirce: ${products[index].min_cost}
            <br></br>
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
              <label htmlFor="bid">New Bid: </label>
              <input type="text" name="bid"></input>
              <button type="submit">Submit</button>
            </form>
          </div>
        }
      </div>
    );
  }
}