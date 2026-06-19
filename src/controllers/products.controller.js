const products = [
    { id: 1, name: "Smartphone Galaxy S24", price: 850 },
    { id: 2, name: "iPhone 15 Pro", price: 1000 },
    { id: 3, name: "Laptop MacBook Air M3", price: 1200 },     
];

import { fetchProducts } from "../models/Product.js";

export const getProducts = async (req, res) => {
    const products = await fetchProducts();
    res.json(products);
};

export const getProductsById = (req, res) => {  
     
    const idBuscar = Number(req.params.id);
    const productoEncontrado = products.find(p => p.id === idBuscar);
    if (productoEncontrado) {
        res.json(productoEncontrado);
            } else {
                res.status(404).json({mensaje: "Producto no encontrado" });
            };        
        
};

export const createProduct = (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({
            message: "Faltan datos obligatorios",
        });
    }

    const newProduct = {
        id: products.length + 1,
        name,
        price,        
    };

    products.push(newProduct);

    res.status(201).json(newProduct);

};

export const deleteProduct = (req, res) => {
        const id = Number(req.params.id);
        const productIndex = products.findIndex((product) => product.id === id);

        if (productIndex == -1) {
            return res.status(404).json({
                message: "Producto no encontrado",
                
            });
        }

        const deleteProduct = products.splice(productIndex, 1);

        res.json({
             message: "Producto eliminado",
            product: deleteProduct[0],
        });
    };  