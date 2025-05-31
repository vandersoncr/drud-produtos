import { Router } from "express";
import productController from "../controllers/product";

const router = Router()

// Rotas do Controllers Product
router.get ("/", productController.index);
router.get ("/products/", productController.index);
router.all ("/products/create", productController.create);
router.get ("/products/:id", productController.read);
router.all ("/products/update/:id", productController.update);
router.get ("/products/remove/:id", productController.remove);
router.post("/products/remove/:id", productController.remove);

export default router;