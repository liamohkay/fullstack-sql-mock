import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div className="product-viewer">
        <img src={this.props.selected.image}/>
        <br></br>
        <h3>{this.props.selected.item}</h3>
        <div className="selectedInfo">
          Current Bid: ${this.props.selected.curr_bid}
          <br></br>
          Original Posting Pirce: ${this.props.selected.min_cost}
        </div>
      </div>
    );
  }
}