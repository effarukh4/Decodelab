import { useState, useEffect } from "react";

// Reused for both "create" and "edit" flows.
// If `editingItem` is passed in, the form pre-fills and submits an update.
export default function ItemForm({ onSubmit, editingItem, onCancelEdit }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
    quantity: 1,
  });

  useEffect(() => {
    if (editingItem) {
      setFormData({
        title: editingItem.title || "",
        description: editingItem.description || "",
        status: editingItem.status || "pending",
        quantity: editingItem.quantity ?? 1,
      });
    }
  }, [editingItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    onSubmit(formData);
    setFormData({ title: "", description: "", status: "pending", quantity: 1 });
  };

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <h2>{editingItem ? "Edit Item" : "Add New Item"}</h2>

      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        value={formData.title}
        onChange={handleChange}
        placeholder="e.g. Finish Project 3 report"
        required
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Optional details..."
        rows={3}
      />

      <label htmlFor="status">Status</label>
      <select id="status" name="status" value={formData.status} onChange={handleChange}>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <label htmlFor="quantity">Quantity</label>
      <input
        id="quantity"
        name="quantity"
        type="number"
        min="0"
        value={formData.quantity}
        onChange={handleChange}
      />

      <div className="form-actions">
        <button type="submit">{editingItem ? "Update Item" : "Add Item"}</button>
        {editingItem && (
          <button type="button" className="secondary" onClick={onCancelEdit}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
