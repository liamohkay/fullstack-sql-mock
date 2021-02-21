import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      selected: {}
    }

    // Bind functions + listeners
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts()
      .then(() => this.setState({ selected: this.state.products[0] }))
      .catch(err => alert(err))
  }

  getProducts() {
    return axios.get('/api/products')
      .then(resp => this.setState({ products: resp.data }, () => console.log(this.state.products)))
      .catch(err => alert(err))
  }

  render(){

    return(
      <div>
        <div>
          <h1>OK-bay</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer selected={this.state.selected}/>
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList products={this.state.products}/>
          </div>
        </div>
      </div>
    )
  }
}