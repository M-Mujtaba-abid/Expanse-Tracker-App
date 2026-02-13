import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend)

createRoot(document.getElementById('root')!).render(
  <StrictMode>

     <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

      <App />
      </PersistGate>
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
