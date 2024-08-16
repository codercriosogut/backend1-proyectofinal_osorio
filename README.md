<div align="center" id="top"> 
  <img src="./logo.png" alt="logo" />
</div>
<h1 align="center">Proyecto Final</h1>
<p align="center">
  <a href="#01-acerca">Acerca</a> &#xa0; | &#xa0; 
  <a href="#02-caracteristicas">Caracteristicas</a> &#xa0; | &#xa0;
  <a href="#03-tecnologias">Tecnologías</a> &#xa0; | &#xa0;
  <a href="#04-rutas-productos">Ruta Productos</a> &#xa0; | &#xa0;
  <a href="#05-rutas-carritos">Ruta Carritos</a> &#xa0; | &#xa0;
  <a href="#06-vistas">Vistas</a> &#xa0; | &#xa0;
  <a href="#07-estructura_del_proyecto">Estructura</a> &#xa0; | &#xa0;
  <a href="#08-instrucciones">Instrucciones</a> &#xa0; | &#xa0;
</p>

<br>

## :01: Acerca ##
Este proyecto utiliza diversas tecnologías para gestionar productos y carritos de compras a través de una API REST y vistas renderizadas en el cliente.


## :02: Caracteristicas ##
:heavy_check_mark: Feature 1;\
:heavy_check_mark: Feature 2;\
:heavy_check_mark: Feature 3;

## :03: Tecnologias ##
- **MongoDB**: Utilizado para almacenar productos y carritos de compras.
- **Mongoose**: Permite la interacción con MongoDB a través de esquemas y modelos.
- **Express**: Maneja las rutas y endpoints de la API.
- **Handlebars**: Renderiza las vistas del cliente, como la lista de productos y formularios.


## :04: Rutas-Productos ##
- **GET /api/products/**: Obtiene un producto por su ID.
- **POST /api/products**: Crea un nuevo producto.
- **PUT /api/products/**: Actualiza un producto existente.
- **DELETE /api/products/**: Elimina un producto.

## :05: Rutas-Carritos
- **GET /api/carts/**: Obtiene un carrito por su ID, con los productos relacionados.
- **POST /api/carts/**/product/**: Agrega un producto a un carrito.
- **DELETE /api/carts/**/product/**: Elimina un producto de un carrito.

## :06: vistas
- **/views/products**: Muestra una lista paginada de productos, permitiendo buscar y filtrar.
- **/views/addProduct**: Muestra un formulario para agregar nuevos productos.


## :07: Estructura_del_proyecto
- `src/app.js`
- `src/routes/carts.router.js`
- `src/routes/products.router.js`
- `views/form.handlebars`
- `views/realtimeproducts.handlebars`
- `views/layouts/main.handlebars`
- `carritos.json`
- `package.json`
- `productos.json`


## :08: Instrucciones ##


```bash
# Clonar el repositorio:
$ git clone https://github.com/codercriosogut/backend1-proyectofinal_osorio.git

# Acceder
$ cd backend1-proyectofinal_osorio

# Instalar dependencias
$ npm install express express-handlebars mongoose mongoose-paginate-v2

# Correr proyecto
$ npm start

# Acceso Sitio Web
$ http://localhost:8080
```
