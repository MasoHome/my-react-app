import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome'; // Assuming you move it there
import UserList from './pages/UserList';
import ProductList from './pages/ProductList';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}