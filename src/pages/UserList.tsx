// src/pages/UserList.tsx
import { useUsers } from '../services/userService';

export default function UserList() {
  // We call our hook here. The component re-renders automatically
  // when the data state changes (e.g., from loading to success).
  const { data, isLoading, error } = useUsers();

  if (isLoading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data.map((user: any) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}