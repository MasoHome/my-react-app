import { useUsers } from '../services/userService';

export default function UserList() {
  
  // We call our hook here. The component re-renders automatically
  // when the data state changes (e.g., from loading to success).
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users?.map((user: any) => (

          <li key={user.id}>
            {user.name} - {user.role}
          </li>

        ))}
      </ul>
    </div>
  );
}