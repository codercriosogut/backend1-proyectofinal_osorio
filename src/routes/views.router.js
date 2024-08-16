import { Router } from 'express';
import productsModel from '../models/products.js';

const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/add-product', (req, res) => {
    res.render('addProduct');
});

router.post('/add-product', async (req, res) => {
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
        thumbnails: thumbnails ? thumbnails.split(',').map(url => url.trim()) : []
    };

    try {
        const productoCreado = await productsModel.create(nuevoProducto);
        res.status(201).json(productoCreado);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear el producto" });
    }
});

router.get('/products', async (req, res) => {
    let { page = 1, category, sort, search } = req.query;
    let query = {};

    if (category) {
        query.category = category;
    }

    if (search) {
        query.title = { $regex: search, $options: 'i' };
    }

    let options = {
        page: parseInt(page),
        limit: 3,
        lean: true,
        sort: sort ? { price: sort } : {}
    };

    try {
        let result = await productsModel.paginate(query, options);
        result.prevLink = result.hasPrevPage ? `http://localhost:8080/products?page=${result.prevPage}` : '';
        result.nextLink = result.hasNextPage ? `http://localhost:8080/products?page=${result.nextPage}` : '';
        result.isValid = !(page <= 0 || page > result.totalPages);
        res.render('products', result);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener productos" });
    }
});

export default router;
