import React, { memo } from 'react';
import Product from './Product';


const ProductsHeadPhones = ({ products }) => (
    <div>
      <Product products={products} />
    </div>
  );

export default memo(ProductsHeadPhones);
