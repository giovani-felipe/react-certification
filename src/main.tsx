import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.scss';
import Routers from './Routers.tsx';

createRoot(document.getElementById('root')!).render(  
  <StrictMode>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>  
  </StrictMode>
);
