import Item from "../models/item.js";

// @desc    Get all items
// @route   GET /api/items
export const getItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Dashboard Statistics
// @route   GET /api/items/stats
export const getDashboardStats = async (req, res) => {
  try {
    const totalItems = await Item.countDocuments();

    const lostItems = await Item.countDocuments({
      type: "lost",
    });

    const foundItems = await Item.countDocuments({
      type: "found",
    });

    const returnedItems = await Item.countDocuments({
      status: "returned",
    });

    res.status(200).json({
      totalItems,
      lostItems,
      foundItems,
      returnedItems,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single item
// @route   GET /api/items/:id
export const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create new item
// @route   POST /api/items
export const createItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Mark item as returned
// @route   PUT /api/items/:id/return
export const markItemReturned = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    item.status = "returned";

    await item.save();

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update item
// @route   PUT /api/items/:id
export const updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete item
// @route   DELETE /api/items/:id
export const deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({
      message: "Item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};