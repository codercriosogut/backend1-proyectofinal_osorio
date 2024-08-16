import { Router } from 'express';
import productsModel from '../models/products.js';

const router = Router();

router.post('/', async (req, res) => {
    const { title, description, code, price, stock, category, thumbnails } = req.body;

    if (!title || !description || !code || !price || !stock || !category) {
        return res.status(400).json({
            mensajes: [
                "Debe ingresar todos los campos: title, description, code, price, stock, category",
                "A excepción de thumbnails y status que por defecto es true",
            ]
        });
    }

    const nuevoProducto = {
        title,
        description,
        code,
        price,
        status: true,
        stock,
        category,
        thumbnails: thumbnails || []
    };

    try {
        const productoCreado = await productsModel.create(nuevoProducto);
        res.status(201).json(productoCreado);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear el producto" });
    }
});

router.get('/:pid', async (req, res) => {
    const productoID = req.params.pid;
    try {
        const producto = await productsModel.findById(productoID);
        if (producto) {
            res.json(producto);
        } else {
            res.status(404).json({ mensaje: "Producto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener el producto" });
    }
});

router.put('/:pid', async (req, res) => {
    const productoID = req.params.pid;
    const updates = req.body;

    try {
        const productoActualizado = await productsModel.findByIdAndUpdate(productoID, updates, { new: true });
        if (productoActualizado) {
            res.json(productoActualizado);
        } else {
            res.status(404).json({ mensaje: "Producto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar el producto" });
    }
});

router.delete('/:pid', async (req, res) => {
    const productoID = req.params.pid;

    try {
        const productoEliminado = await productsModel.findByIdAndDelete(productoID);
        if (productoEliminado) {
            res.json({ mensaje: `Producto ${productoID} eliminado` });
        } else {
            res.status(404).json({ mensaje: "Producto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar el producto" });
    }
});

router.get('/', async (req, res) => {
    const { name, price, category, page = 1, limit = 3 } = req.query;
    let query = {};

    if (name) {
        query.title = new RegExp(name, 'i');
    }

    if (price) {
        query.price = { $lte: parseFloat(price) };
    }

    if (category) {
        query.category = new RegExp(category, 'i');
    }

    try {
        const productos = await productsModel.paginate(query, { page, limit, lean: true });

        res.render('products', {
            products: productos.docs,
            currentPage: productos.page,
            totalPages: productos.totalPages,
            hasNextPage: productos.hasNextPage,
            hasPrevPage: productos.hasPrevPage,
            nextPage: productos.nextPage,
            prevPage: productos.prevPage,
            limit,
            filters: { name, price, category },
        });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener productos" });
    }
});

export default router;
