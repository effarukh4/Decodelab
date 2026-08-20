import ItemCard from "./ItemCard.jsx";

export default function ItemList({ items, onEdit, onDelete, isLoading }) {
  if (isLoading) {
    return <p className="empty-state">Loading items...</p>;
  }

  if (!items || items.length === 0) {
    return <p className="empty-state">No items yet. Add your first one above.</p>;
  }

  return (
    <div className="item-list">
      {items.map((item) => (
        <ItemCard key={item._id} item={item} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
