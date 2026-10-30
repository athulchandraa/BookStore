import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ShareContext from './contextAPI/ShareContext.jsx'
import RouteGuard from './contextAPI/RouteGuard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='850751517845-870npq7p3oirfqqkh56lgopftflr9csl.apps.googleusercontent.com'>
        <ShareContext>
          <RouteGuard>
            <App />
          </RouteGuard>
        </ShareContext>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
