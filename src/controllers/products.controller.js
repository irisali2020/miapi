const products = [
    { id: 1, name: "Smartphone Galaxy S24", price: 850 },
    { id: 2, name: "iPhone 15 Pro", price: 1000 },
    { id: 3, name: "Laptop MacBook Air M3", price: 1200 },     
];

import { fetchProducts, getProductById as getProductByIdModel, createProduct as createProductModel, updateProduct as updateProductModel, deleteProduct as deleteProductModel } from "../models/Product.js";

export const getProducts = async (req, res) => {
    const products = await fetchProducts();
    res.json(products);
};

export const getProductsById = async(req, res) => {  
     
    const { id } = req.params;
    const productoEncontrado = await getProductByIdModel(id)
    if (productoEncontrado) {
        res.json(productoEncontrado);
            } else {
                res.status(404).json({mensaje: "Producto no encontrado" });
            };        
        
};

export const createProduct = async(req, res) => {
    const { title, price, category } = req.body;

    if (!title || !price || !category) {
        return res.status(400).json({
            message: "Faltan datos obligatorios",
        });
    }

    const newProduct = await createProductModel({
        title,
        price,
        category, 
    });

     res.status(201).json(newProduct);

};

export const updateProduct = async (req, res) => {
    const {id} = req.params;

    {
    const { title, price, category } = req.body;

    if (!title || !price || !category) {
        return res.status(400).json({
            message: "Faltan datos obligatorios",
        });
    }

    const updatedProduct = await updateProductModel(id, {
        title,
        price,
        category});

    if(!updatedProduct) {
        return res.status(404).json({message:"Producto no encontrado"})
    }
    res.json(updatedProduct);
}};


export const deleteProduct = async (req, res) => {
        const { id } = req.params;
        
        const deletedProduct = await deleteProductModel(id)

        if(!deleteProduct) {
            return res.status(404).json({message: "Producto no encontrado"});
        }

        res.json({
             message: "Producto eliminado",
            product: deletedProduct,
        });
};  