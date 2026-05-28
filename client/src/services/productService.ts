import { useQuery } from '@tanstack/react-query';
import type { Product } from '../types/product'; // Using the type-only import you fixed
import { ENDPOINTS } from '../config/api.ts';

export const useProducts = () => {

  return useQuery<Product[], Error>({ 

    // 1. Define the return type here
    queryKey: ['products'],
    queryFn: async (): Promise<Product[]> => { 
      
      // 2. Define the Promise type here
      const response = await fetch(ENDPOINTS.PRODUCTS);
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      return response.json(); 
    }
  });

};