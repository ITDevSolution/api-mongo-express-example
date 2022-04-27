//Product Model
import ProductModel from "../models/products.js";

export const productsController = {
  insertDummyData: async (req, res) => {
    await ProductModel.create([
      {
        name: "Test 01",
        category: "Cat 01",
        description: "Probando objeto",
        images: ["img-01.jpg", "img-02.jpg"],
        createdAt: new Date(),
      },
      {
        name: "Test 02",
        category: "Cat 02",
        description: "Probando objeto 2",
        images: ["img-02.jpg", "img-02.jpg"],
        createdAt: new Date(),
      },
    ]);

    res.send("Dummy Data insert!");
  },

  index: async (req, res) => {
    const ProductArray = await ProductModel.find({});

    res.status(200).json({
      status: "success",
      data: ProductArray,
    });
  },
};
