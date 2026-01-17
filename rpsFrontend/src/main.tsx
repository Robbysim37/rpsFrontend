import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MoveHistoryProvider } from './context/MoveHistory/MoveHistoryContextComponent.tsx'
import { ChartDataProvider } from './context/ChartData/ChartDataContextComponent.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import { AuthProvider } from './context/Auth/AuthProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ChartDataProvider>
        <MoveHistoryProvider>
          <RouterProvider router={router} />
        </MoveHistoryProvider>
      </ChartDataProvider>
      </AuthProvider>
  </StrictMode>,
)
