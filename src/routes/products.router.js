import { Router } from 'express';
import { getProducts, getProductsById, createProduct, deleteProduct} from '../controllers/products.controller.js';

const router = Router ()


router.get("/", getProducts);
router.get("/:id", getProductsById); 
router.post("/", createProduct);
router.delete("/:id", deleteProduct); 
    
export default router;
