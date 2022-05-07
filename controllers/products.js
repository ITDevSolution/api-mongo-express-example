import { faker } from "@faker-js/faker";
import { response } from "express";

// console.log(faker.name.findName());

//Product Model
import ProductModel from "../models/products.js";

export const productsController = {
  insertDummyData: async (req, res) => {
    // Generate dummy data
    let fakeData = [];

    for (let i = 0; i <= 50; i++) {
      let newProductData = {
        name: faker.commerce.productName(),
        category: faker.commerce.department(),
        description: faker.commerce.productDescription(),
        images: faker.image.business()
      };
      fakeData = [...fakeData, newProductData];
    }

    await ProductModel.create(fakeData);

    res.json({
      status: "All good !"
    });
  },

  index: async (req, res) => {
    const ProductArray = await ProductModel.find(
      {},
      "-createdAt -updateAt -deleteAt"
    );

    res.status(200).json({
      status: "success",
      count: ProductArray.length,
      data: ProductArray
    });
  },

  detail: async (req, res) => {
    // console.log(req.params.id);
    const { id } = req.params;

    try {
      const product = await ProductModel.find(
        { _id: id },
        "-createdAt -deleteAt -updateAt"
      );
      return res.status(200).json({
        status: "success",
        data: product,
        id: req.params.id
      });
    } catch (err) {
      return res.status(404).json({
        status: "error",
        message: "Product not found"
      });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const product = await ProductModel.deleteOne({ _id: id });
      return res.status(200).json({
        status: "success",
        data: product
      });
    } catch (err) {
      return res.status(404).json({
        status: "error",
        message: "Could not delete product"
      });
    }
  }
};
