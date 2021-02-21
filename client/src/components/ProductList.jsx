import React from 'react';
import Product from './Product';

const ProductList = props => {
   return(
    <div className='product-list'>
      { props.products.map(product =>
          <Product
            key={product.id}
            item={product.item}
            image={product.image}
            curr_bid={product.curr_bid}
            ends_in={product.ends_in}
          />
      ) }
    </div>
  )
}

export default ProductList;