import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';
import Login from './Login';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      selectedIndex: null,
      newBid: null,
      searchText: null,
      username: null,
      password: null,
      isLoggedIn: false
    }

    // Bind functions + listeners
    this.getProducts = this.getProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    return axios.get('/api/products')
      .then(resp => this.setState({ products: resp.data, selectedIndex: this.state.selectedIndex ?? 0 }))
      .catch(err => alert(err))
  }

  handleClick(e) {
    this.setState({ selectedIndex: e }, () => console.log(this.state));
  }

  handleSearch(e) {
    let searchText = this.state.searchText;
    let searchResults = _.filter(this.state.products,
      product => product.item.toLowerCase().includes(searchText.toLowerCase()));
    this.setState({ products: searchResults });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value }, () => console.log(this.state));
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.put(
      `/api/products/${this.state.products[this.state.selectedIndex].id}`,
      { curr_bid: this.state.newBid }
    )
    .then(() => {
      axios.get('/api/products')
        .then(resp => this.setState({ products: resp.data }))
        .catch(err => alert(err))
    })
    .catch(err => alert(err))
  }

  handleLogin(e) {
    e.preventDefault();

  }

  render(){
    return(
      <div>
        <div>
          <h1>Leebay</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <br></br>
        <Login handleChange={this.handleChange}/>
        <br></br>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleChange={this.handleChange} handleSearch={this.handleSearch}/>
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer product={this.state.products[this.state.selectedIndex]}/>
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
              <label htmlFor="newBid">New Bid: </label>
              <input type="text" name="newBid"></input>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList products={this.state.products} handleClick={this.handleClick}/>
          </div>
        </div>
      </div>
    )
  }
}