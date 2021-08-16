
import { model, Schema } from 'mongoose';

const ProductSchema = new Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: "ProductCategory",
    },
    description: String,
    discountPrice: Number,
    discountEndDate: Date,
    discountStartDate: Date,
    images: [String],
    isSelectedProduct: {
      type: Boolean,
      required: true,
    },
    isInSale: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      validate: {
        validator(value: number) {
          return value >= 0;
        },
        message: "El precio de tu producto debe ser un numero positivo.",
      },
    },
    sku: String,
    stock: {
      type: Number,
      validate: {
        validator(value: number) {
          return value >= 0;
        },
        message: "El stock de tu producto debe ser un numero positivo.",
      },
    },
  },
  { timestamps: true }
);



module.exports=model("Product",ProductSchema);
