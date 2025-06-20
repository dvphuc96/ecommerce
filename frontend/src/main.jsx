import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@styles/main.scss'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
