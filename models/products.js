import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
  },
  // Soft Delete
  // isDeleted: {
  //   type: Boolean,
  //   default: false,
  // },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updateAt: { type: Date },
  deleteAt: { type: Date, default: null },
});

const ProductModel = mongoose.model("Product", schema);

export default ProductModel;
