import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [1000, "Description cannot exceed 1000 characters"],
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },
    quantity: {
      type: Number,
      min: [0, "Quantity cannot be negative"],
      default: 1,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;
