/* Definicion de rutas */
import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';
import Inicio from './views/Inicio';
import Login from './views/Login';
import Registro from './views/Registro';

const router = createBrowserRouter([
    {
        /* pagina principal */
        path: '/',

        /* componente(que componente de react deseo subir al cargar la pagina) */
        element: <Layout />,

        /* los componentes que usen layout vienen aca */
        children:[{
            index: true,
            element: <Inicio />
        }]
        
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children:[{
            path: '/auth/login',
            element: <Login />
        },
        {
            path: '/auth/registro',
            element: <Registro />
        }]
    },
    
])


export default router;