import React from 'react';
import Product from './Product';

const ProductList = props => {
   return(
    <div className='product-list' >
      { props.products.map((product, key) =>
          <Product
            index={key}
            item={product.item}
            image={product.image}
            curr_bid={product.curr_bid}
            ends_in={product.ends_in}
            handleClick={props.handleClick}
          />
      ) }
    </div>
  )
}

export default ProductList;