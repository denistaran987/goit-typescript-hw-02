import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'modern-normalize';
import './index.css';
import App from './components/App';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="bottom-right" reverseOrder={false} />
    <App />
  </StrictMode>
);
