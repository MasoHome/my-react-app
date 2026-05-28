import { useQuery } from '@tanstack/react-query';
import type { User } from '../types/user'; 
import { ENDPOINTS } from '../config/api.ts';

export const useUsers = () => {

  return useQuery<User[], Error>({ 

    // 1. Define the return type here
    queryKey: ['users'],
    queryFn: async (): Promise<User[]> => { 
      
      // 2. Define the Promise type here
      const response = await fetch(ENDPOINTS.USERS);
      
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      
      return response.json(); 
    }
  });

};