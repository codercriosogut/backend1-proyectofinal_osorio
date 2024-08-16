import express from 'express';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';

const app = express();

mongoose.connect('mongodb+srv://cri2024:cri2024@cluster0.mswsapd.mongodb.net/ecommercedb?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(error => console.error('Error de conexión a MongoDB:', error));

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', viewsRouter);
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.get('/cart/:cid', async (req, res) => {
    const cartId = req.params.cid;

    try {
        const carrito = await cartsModel.findById(cartId).populate('products.product');

        if (!carrito) {
            return res.status(404).json({ mensaje: "Carrito no encontrado" });
        }

        res.render('cart', { products: carrito.products, cartId });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener el carrito" });
    }
});


app.listen(8080, () => console.log("Conectado PORT 8080"));