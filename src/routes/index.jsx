/* eslint-disable no-unused-vars */
import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '../hooks/auth.jsx'
import { AppRoutes } from './app.routes.jsx'
import { AppAuth } from './auth.routes.jsx'

export function Routes() {
    const { user } = useAuth()
    return(
        <BrowserRouter>
            {user?<AppRoutes></AppRoutes>:<AppAuth></AppAuth>}
        </BrowserRouter>
    )
}