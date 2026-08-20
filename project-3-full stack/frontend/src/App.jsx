import { useState, useEffect, useCallback } from "react";
import ItemForm from "./components/ItemForm.jsx";
import ItemList from "./components/ItemList.jsx";
import * as api from "./services/api.js";

export default function App() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const loadItems = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await api.getItems();
      setItems(data);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  const handleCreateOrUpdate = async (formData) => {
    try {
      if (editingItem) {
        await api.updateItem(editingItem._id, formData);
        setEditingItem(null);
      } else {
        await api.createItem(formData);
      }
      await loadItems();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this item?")) return;
    try {
      await api.deleteItem(id);
      await loadItems();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (item) => setEditingItem(item);
  const handleCancelEdit = () => setEditingItem(null);

  return (
    <div className="app">
      <header>
        <h1>Project 3 — CRUD App</h1>
        <p>React + Express + MongoDB</p>
      </header>

      {error && <div className="error-banner">{error}</div>}

      <main>
        <ItemForm
          onSubmit={handleCreateOrUpdate}
          editingItem={editingItem}
          onCancelEdit={handleCancelEdit}
        />
        <ItemList
          items={items}
          onEdit={handleEdit}
          onDelete={handleDelete}
          isLoading={isLoading}
        />
      </main>
    </div>
  );
}
