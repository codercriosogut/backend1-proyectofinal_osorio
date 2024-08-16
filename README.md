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
Este proyecto es basado en Node.js que implementa un backend para la gestión de productos y carritos de compras. Utiliza Express para manejar las rutas, Mongoose para la conexión con la base de datos, y Handlebars para renderizar las vistas. Este proyecto permite agregar, ver y gestionar productos y carritos de compras.


## :02: Caracteristicas ##
- **Gestión de productos**: Visualización, adición y eliminación de productos.
- **Gestión de carritos**: Visualización y administración de carritos de compras.
- **Interfaz amigable**: Utiliza Handlebars para crear vistas dinámicas.
- **Arquitectura modular**: Basado en Express, con rutas separadas para productos y carritos.


## :03: Tecnologias ##
- **Node.js**: Entorno de ejecución para JavaScript.
- **Express.js**: Framework para la construcción de aplicaciones web en Node.js.
- **Mongoose**: Librería para modelar datos en MongoDB.
- **Handlebars**: Motor de plantillas para generar vistas dinámicas.
- **MongoDB**: Base de datos NoSQL para almacenar productos y carritos.


## :04: Rutas-Productos ##
- **Ver productos**: `GET /products`
- **Agregar producto**: `GET /add-product`
- **Guardar producto**: `POST /add-product`
- **Eliminar producto**: `DELETE /products/:id`

## :05: Rutas-Carritos
- **Ver carrito**: `GET /carts/:id`
- **Agregar producto al carrito**: `POST /carts/:id/add`
- **Eliminar producto del carrito**: `DELETE /carts/:id/remove/:productId`

## :06: vistas
- **Inicio**: `http://localhost:8080/`
- **Lista de Productos**: `http://localhost:8080/products`
- **Agregar Nuevo Producto**: `http://localhost:8080/add-product`
- **Ver carritos**: `http://localhost:8080/carts`

## :07: Estructura_del_proyecto
├──
- `src/app.js`
- `src/utils.js`

- `src/models/carts.js`
- `src/models/products.js`
│
- `src/routes/carts.router.js`
- `src/routes/products.router.js`
- `src/routes/views.router.js`

- `src/views/addProduct.handlebars`
- `src/views/cart.handlebars`
- `src/views/index.handlebars`
- `src/views/products.handlebars`

- `src/views/layouts/main.handlebars`

- `package-lock.json`
- `package.json`
- `README.md`


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
