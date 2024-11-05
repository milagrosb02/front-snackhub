import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { SnackHubProvider } from './context/SnackHubProvider'
import './index.css'
import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(

        <SnackHubProvider>

            <RouterProvider router={router} />

        </SnackHubProvider>

)
