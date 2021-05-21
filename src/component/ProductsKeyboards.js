import React, { memo } from 'react';
import Product from './Products';

const ProductsKeyboards = ({ products }) => (
    <div>
      <Product products={products} />
    </div>
  );

export default memo(ProductsKeyboards);
