// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 1. Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    {/* 2. Provide the client to your App */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  // </React.StrictMode>,
);