import React from 'react'

const products = [
  { title: 'Col', isFruit: false, id: 1 },
  { title: 'Ajo', isFruit: false, id: 2 },
  { title: 'Manzana', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <ol
      key={product.id}
      style={{
        color: product.isFruit ? 'white' : 'yellow'
      }}
    >
      {product.title}
    </ol>
  );
  return (
    <ul>{listItems}</ul>
  );
}