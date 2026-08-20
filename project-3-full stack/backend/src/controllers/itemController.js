import Item from "../models/Item.js";
import { success, failure } from "../utils/response.js";

// @desc    Create a new item
// @route   POST /api/items
export const createItem = async (req, res, next) => {
  try {
    const item = await Item.create(req.body);
    return success(res, 201, item, "Item created successfully");
  } catch (error) {
    next(error);
  }
};

// @desc    Get all items
// @route   GET /api/items
export const getItems = async (req, res, next) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    return success(res, 200, items, "Items retrieved successfully");
  } catch (error) {
    next(error);
  }
};

// @desc    Get a single item by ID
// @route   GET /api/items/:id
export const getItemById = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return failure(res, 404, "Item not found");
    }
    return success(res, 200, item, "Item retrieved successfully");
  } catch (error) {
    next(error);
  }
};

// @desc    Update an item
// @route   PUT /api/items/:id
export const updateItem = async (req, res, next) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // return the updated document
      runValidators: true, // enforce schema validation on update
    });
    if (!item) {
      return failure(res, 404, "Item not found");
    }
    return success(res, 200, item, "Item updated successfully");
  } catch (error) {
    next(error);
  }
};

// @desc    Delete an item
// @route   DELETE /api/items/:id
export const deleteItem = async (req, res, next) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) {
      return failure(res, 404, "Item not found");
    }
    return success(res, 200, item, "Item deleted successfully");
  } catch (error) {
    next(error);
  }
};
