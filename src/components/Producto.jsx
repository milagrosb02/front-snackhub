
function Producto({producto}) {
    
    const { nombre, imagen, precio } = producto

    return (
        <div className="border p-3 shadow bg-white">
            <img 
                alt={`imagen ${nombre}`}
                className="w-full"
                src={`/img/${imagen}.jpg`}
            />
            
        </div>
    );
}

export default Producto;