const Registro = () => {
    return (

        // etiqueta fragment (retornar etiquetas sin html)
       <>
            <h1 className="text-4xl font-black">Crea tu Cuenta</h1>
            <p>Registrate llenando el formulario</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">

                <form>

                    {/* nombre */}
                    <div className="mb-4">
                       <label className="text-slate-800" htmlFor="name">
                        Nombre:
                        </label> 

                        <input type="text"
                            id="name"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="name"
                            placeholder="Tu Nombre"
                        />

                    </div>

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


                    {/* Repetir password */}
                    <div className="mb-4">
                       <label className="text-slate-800" htmlFor="password_confirmation">
                        Repetir password:
                        </label> 

                        <input type="password"
                            id="password_confirmation"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="password_confirmation"
                            placeholder="Repetir Password"
                        />

                    </div>


                    <input 
                        type="submit"
                        value="Crear Cuenta"
                        className="bg-orange-400 hover:bg-orange-600 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    />

                </form>
                
            </div>
       </>
       
    );
}

export default Registro;
