// src/services/userService.ts
import { useQuery } from '@tanstack/react-query';

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      // Point this to your local Express server
      const response = await fetch('http://localhost:3000/api/users');
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    }
  });
};