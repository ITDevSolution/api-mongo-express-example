import express from "express";
import { productsController } from "../controllers/products.js";

const router = express.Router();

// localhost:3001/api/products
router.get("/", productsController.index);

// localhost:3001/api/products/dummy-data
router.get("/dummy-data", productsController.insertDummyData);

export default router;
