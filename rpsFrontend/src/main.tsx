import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { MoveHistoryProvider } from './context/MoveHistory/MoveHistoryContextComponent.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MoveHistoryProvider>
        <App />
      </MoveHistoryProvider>
    </BrowserRouter>
  </StrictMode>,
)
