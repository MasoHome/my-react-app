import { useUsers } from '../services/userService';

export default function UserList() {
  const { data, isLoading, error } = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users!</div>;

  return (
    <ul>
      {data.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}