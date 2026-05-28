
// src/pages/UserList.tsx
import { useProducts } from '../services/productService';

const ProductList = () => {

  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Our Products</h1>
      <ul>
        {products?.map((product: any) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;