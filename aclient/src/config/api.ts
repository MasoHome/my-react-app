// client/src/config/api.ts
// Vite will replace this at build time
export const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const ENDPOINTS = {
  USERS: `${API_BASE}/users`,
  PRODUCTS: `${API_BASE}/products`,
};