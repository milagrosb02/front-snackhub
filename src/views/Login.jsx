import { Link } from 'react-router-dom'

const Login = () => {
    return (
         // etiqueta fragment (retornar etiquetas sin html)
       <>
            <h1 className="text-4xl font-black">Iniciar Sesión</h1>
            <p>Para crear un pedido, inicia sesión</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">

                <form>

               
                    {/* email */}
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="email">
                        Email:
                        </label> 

                        <input type="email"
                            id="email"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="email"
                            placeholder="Tu Email"
                        />

                    </div>

                    {/* password */}
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="password">
                        Password:
                        </label> 

                        <input type="password"
                            id="password"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="password"
                            placeholder="Tu Password"
                        />

                    </div>


                    <input 
                        type="submit"
                        value="Iniciar Sesión"
                        className="bg-orange-400 hover:bg-orange-600 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    />   

                 </form>
           
             </div>

             {/* enlace */}
             <nav className="mt-5">

                <Link to="/auth/registro">
                    ¿No tienes cuenta? Crea una
                </Link>

             </nav>


         </>
    );
}

export default Login;
