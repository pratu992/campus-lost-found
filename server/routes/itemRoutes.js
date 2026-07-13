import express from "express";

import {
  getItems,
  getDashboardStats,
  createItem,
  getItemById,
  updateItem,
  deleteItem,
  markItemReturned,
} from "../controllers/itemController.js";

const router = express.Router();

// Dashboard Statistics
router.get("/stats", getDashboardStats);

// Get all items
router.get("/", getItems);

// Create new item
router.post("/", createItem);

// Get one item
router.get("/:id", getItemById);

// Mark item as returned
router.put("/:id/return", markItemReturned);

// Update item
router.put("/:id", updateItem);

// Delete item
router.delete("/:id", deleteItem);

export default router;