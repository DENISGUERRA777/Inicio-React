import React from "react";

const Producto = ({producto,carrito,agregarProducto,productos}) => {
    const {nombre, precio, id} = producto
    const seleccionarProducto = id =>{
        const producto = productos.filter(producto =>producto.id ===id) [0];
        agregarProducto([
            ...carrito,
            producto
        ])
    }

        //eliminar el producto 
    const eliminarProducto = id =>{
            const producto = carrito.filter(producto =>producto.id !==id)
            //coloca los states
            agregarProducto(producto)
    }

    return(

        <div>
            <h2>{producto.nombre}</h2>
            <p>{precio}</p>
            {productos
                ?(<button
                type="button"
                onClick={()=>seleccionarProducto(id)}
                >Comprar
                </button>)
                :
                (
                    <button
                type="button"
                onClick={()=>eliminarProducto(id)}
                >Eliminar
                </button>
                )
            }
        </div>
    )
}

export default Producto
