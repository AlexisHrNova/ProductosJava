class Producto{
    constructor(nombre, precio, anyo){
        this.nombre = nombre;
        this.precio = precio;
        this.anyo = anyo;

    }

}

class Interfaz {
    anyadirProducto(producto){
        const listaProducto = document.getElementById("lista-producto");
        const elemento = document.createElement("div");
        elemento.innerHTML = `
            <div class="card text-center mb-4"> 
             <div class= "card-body">
                <strong>Nombre del Producto</strong>: ${producto.nombre}
                <strong>Precio del Producto</strong>: ${producto.precio}
                <strong>Año del Producto</strong>: ${producto.anyo}

                <a href="#" class = "btn btn-danger" name = "eliminar">
                    Eliminar
                </a>
             </div>
            </div>
        `;
        listaProducto.appendChild(elemento);
        this.restearFormulario();

    }

    restearFormulario(){
        document.getElementById("formulario").reset();
    }
    eliminarProducto(elemento){
        if(elemento.name === "eliminar"){
            elemento.parentElement.parentElement.parentElement.remove();
            this.mostrarMensaje("Producto Eliminado Correctamente", "info")
        }
        
    }

    mostrarMensaje(mensaje, cssClass){
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(mensaje));
        

        //mostrando en DOM
        const container = document.querySelector(".container");
        const apk = document.querySelector("#apk")
        container.insertBefore(div, apk);
        setTimeout(function(){
            document.querySelector(".alert").remove();
        }, 3000)


    }
}

//Eventos del DOM
document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const anyo = document.getElementById("anyo").value;
    
    const producto = new Producto(nombre, precio, anyo);

    const inter = new Interfaz();
    if(nombre === "" ){
        return inter.mostrarMensaje("Complete ponga un nombre", "warning")
    }
    else if (precio === ""){
        return inter.mostrarMensaje("Complete ponga un precio", "warning")
    }
    else if( anyo === ""){
        return inter.mostrarMensaje("Complete ponga un año", "warning")
    }

    inter.anyadirProducto(producto);
    inter.mostrarMensaje("Producto Agregado Correctamente", "success")


});

document.getElementById("lista-producto").addEventListener("click", function(e){
   const inter = new Interfaz();
   inter.eliminarProducto(e.target);
   
});