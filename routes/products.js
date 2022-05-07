import express from "express";
import { productsController } from "../controllers/products.js";

const router = express.Router();

//Lista de ENDPOINTS
// GET = localhost:3001/api/products
router.get("/", productsController.index);

// GET = localhost:3001/api/products/dummy-data
router.get("/dummy-data", productsController.insertDummyData);

// GET = localhost:3001/api/products/:id
router.get("/:id", productsController.detail);

//Delete = localhost:3001/api/products/:id
router.delete("/:id", productsController.delete);

export default router;
