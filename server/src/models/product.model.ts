require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export interface IProduct extends Document {
  name: string;
  description: string;
  category: string;
  tags: string;
  originalPrice?: number;
  discountPrice: number;
  stock: number;
  images: [
    {
      public_id: string;
      url: string;
    }
  ];
  shopId: string;
  shop: object;
  sold_out: number;
}

const productSchema: Schema<IProduct> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your product name!"],
    },
    description: {
      type: String,
      required: [true, "Please enter your product description!"],
    },
    category: {
      type: String,
      required: [true, "Please enter your product category name!"],
    },
    tags: {
      type: String,
    },
    originalPrice: {
      type: Number,
      required: false,
    },
    discountPrice: {
      type: Number,
      required: [true, "Please enter your product discount price!"],
    },
    stock: {
      type: Number,
      required: [true, "Please enter your product stock!"],
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    shopId: {
      type: String,
      required: true,
    },
    shop: {
      type: Object,
      required: true,
    },
    sold_out: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product: Model<IProduct> = mongoose.model("product", productSchema);

export default Product;
