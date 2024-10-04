function agregarProducto() {
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const año = document.getElementById('año').value;

    if (nombre && precio) {
        const lista = document.getElementById('lista-productos');
        const producto = document.createElement('li');
        producto.textContent = Producto: ${nombre}, Precio: Q${precio}, Año: ${año};
        lista.appendChild(producto);

        // Limpiar campos
        document.getElementById('nombre').value = '';
        document.getElementById('precio').value = '';
    } else {
        alert('Por favor, complete todos los campos');
    }
}