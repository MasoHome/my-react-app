import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div>
      <h1>Welcome to my App!</h1>
      <p>This is the home page.</p>
      
      {/* Adding the link here */}
      <Link to="/users">Go to User List</Link>
      <br/>
      <Link to="/products">Go to Product List</Link>
    </div>
  );
}