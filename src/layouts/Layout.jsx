// desde este archivo el usuario va a realizar las ordenes
import { Outlet } from 'react-router-dom'
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Sidebar from '../components/Sidebar';
import Resumen from '../components/Resumen';
import useSnack from '../hooks/useSnack';
import ModalProducto from '../components/ModalProducto';

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };


//   con esto elimino el error de la consola
Modal.setAppElement('#root')



const Layout = () => {

    const { modal } = useSnack();

    return (

        <>
            <div className='md:flex'>

                <Sidebar />

                <main className='flex-1 h-screen overflow-scroll bg-gray-100 p-3'>
                    <Outlet />
                </main>


                <Resumen />

            </div>

            
            <Modal isOpen={modal} style={customStyles}>
                <ModalProducto/>
            </Modal>


            <ToastContainer />
            

         </>
    );
}

export default Layout;
