import React from 'react';

const Product = props => {
   return(
    <div className='product-list-entry' onClick={() => props.handleClick(props.index)}>
      <img src={props.image}/>
      {props.item}
      <br></br>
      Current Bid: ${props.curr_bid}
      <br></br>
      Time Left: {props.ends_in} day(s)
    </div>
  )
}

export default Product;