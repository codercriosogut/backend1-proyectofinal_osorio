import { Router } from 'express';
import cartsModel from '../models/carts.js';
import productsModel from '../models/products.js';

const router = Router();

router.post('/', async (req, res) => {
    try {
        const nuevoCarrito = new cartsModel();
        await nuevoCarrito.save();
        res.status(201).json(nuevoCarrito);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear el carrito" });
    }
});

router.get('/', async (req, res) => {
    try {
        const carritos = await cartsModel.find().populate('products.product');
        res.json(carritos);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener los carritos" });
    }
});

router.get('/:cid', async (req, res) => {
    const cartId = req.params.cid;

    try {
        const carrito = await cartsModel.findById(cartId).populate('products.product');
        if (!carrito) {
            return res.status(404).json({ mensaje: "Carrito no encontrado" });
        }
        res.json(carrito);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener el carrito" });
    }
});

router.post('/:cid/product/:pid', async (req, res) => {
    const cartId = req.params.cid;
    const productId = req.params.pid;

    try {
        const carrito = await cartsModel.findById(cartId);
        const producto = await productsModel.findById(productId);

        if (!carrito || !producto) {
            return res.status(404).json({ mensaje: "Carrito o producto no encontrado" });
        }

        const item = carrito.products.find(p => p.product.toString() === productId);
        if (item) {
            item.quantity += 1;
        } else {
            carrito.products.push({ product: productId, quantity: 1 });
        }

        await carrito.save();
        res.status(201).json(carrito);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al agregar producto al carrito" });
    }
});

router.delete('/:cid/product/:pid', async (req, res) => {
    const cartId = req.params.cid;
    const productId = req.params.pid;

    try {
        const carrito = await cartsModel.findById(cartId);

        if (!carrito) {
            return res.status(404).json({ mensaje: "Carrito no encontrado" });
        }

        const itemIndex = carrito.products.findIndex(p => p.product.toString() === productId);
        if (itemIndex > -1) {
            carrito.products.splice(itemIndex, 1);
            await carrito.save();
            res.status(200).json(carrito);
        } else {
            res.status(404).json({ mensaje: "Producto no encontrado en el carrito" });
        }
    } catch (error) {
        res.status(500).json({ mensaje: "Error al quitar producto del carrito" });
    }
});

export default router;