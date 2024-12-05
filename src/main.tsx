import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { WishlistProvider } from './contexts/wishContext.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>

    <BrowserRouter>
    <WishlistProvider>
      <App />
    </WishlistProvider>
    </BrowserRouter>
  </StrictMode>
);
