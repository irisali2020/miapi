import { Router } from 'express';
import { getProducts,
 getProductsById,
 createProduct,
 updateProduct,
 deleteProduct} from '../controllers/products.controller.js';
import { auth } from "../middlewares/auth.middleware.js";

const router = Router ()


router.get("/", getProducts);
router.get("/:id", getProductsById); 
router.post("/", auth, createProduct);
router.put("/:id", auth, updateProduct)
router.delete("/:id", auth, deleteProduct); 
    
export default router;
