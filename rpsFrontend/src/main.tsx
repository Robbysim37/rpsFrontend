import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { MoveHistoryProvider } from './context/MoveHistory/MoveHistoryContextComponent.tsx'
import { ChartDataProvider } from './context/ChartData/ChartDataContextComponent.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ChartDataProvider>
        <MoveHistoryProvider>
          <App />
        </MoveHistoryProvider>
      </ChartDataProvider>
    </BrowserRouter>
  </StrictMode>,
)
