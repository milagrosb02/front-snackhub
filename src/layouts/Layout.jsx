// desde este archivo el usuario va a realizar las ordenes
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar';
import Resumen from '../components/Resumen';

const Layout = () => {
    return (
        <div className='md:flex'>
            <Sidebar />

            <main className='flex-1 h-screen overflow-scroll bg-gray-100 p-3'>
                <Outlet />
            </main>

           

            <Resumen />
        </div>
    );
}

export default Layout;
