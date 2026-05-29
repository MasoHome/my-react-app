import { useProducts } from '../services/productService';

export default function ProductList() {

  // We call our hook here. The component re-renders automatically
  // when the data state changes (e.g., from loading to success).
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
