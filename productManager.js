class productoManager {
    constructor() {
        this.productos = [];
    }

    getProductos = () => {
        return this.productos;
    }

    addProducto = (titulo, descripcion, precio, thumbnail, codigo, stock) => {
        const producto = {
            titulo,
            descripcion,
            precio,
            thumbnail,
            codigo,
            stock,
            productos: []
        }

        if (this.productos.length === 0) {
            producto.id = 1
        } else {
            producto.id = this.productos[this.productos.length - 1].id + 1
        }

        this.productos.push(producto)
    }

    getProductoById = (idProducto) => {
        const productoIndex = this.productos.findIndex(producto => producto.id === idProducto);

        if (productoIndex === -1) {
            console.log("No encontrado");
            return;
        }

        const productoAdd = this.productos[productoIndex].productos.includes(idProducto);

        if (productoAdd) {
            console.log("El producto se agregó correctamente");
            return;
        }
        this.productos[productoIndex].productos.push(idProducto)
    }
};

const handleProductos = new productoManager ();
handleProductos.addProducto ('Pincel', 'Punta redonda', 32, 'sin imágen', 'xy181', 100 );
handleProductos.addProducto ('Lápiz', 'Punta gruesa', 45, 'sin imágen', 'xy182', 150 );
handleProductos.addProducto ('Birome', 'Azul', 78, 'sin imágen', 'xy183', 38 );


handleProductos.getProductById(1);
handleProductos.getProductById(2);
handleProductos.getProductById(3);


console.log(handleProductos.getProductos());