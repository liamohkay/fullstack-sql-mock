import React from 'react';

var Search = props => (
  <form onClick={props.handleSearch}>
    <input type="text" name="searchText" onChange={props.handleChange}></input>
    <button type="button" className="btn hidden-sm-down" on>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </form>
);

export default Search;