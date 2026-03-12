import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

let _root = document.getElementById('root');
if (!_root) _root = document.getElementById('react-poc-root');
createRoot(_root!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
