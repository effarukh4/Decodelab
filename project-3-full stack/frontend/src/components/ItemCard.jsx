export default function ItemCard({ item, onEdit, onDelete }) {
  return (
    <div className={`item-card status-${item.status}`}>
      <div className="item-card-header">
        <h3>{item.title}</h3>
        <span className="badge">{item.status}</span>
      </div>

      {item.description && <p className="item-description">{item.description}</p>}

      <div className="item-meta">
        <span>Qty: {item.quantity}</span>
        {item.createdAt && (
          <span>Added: {new Date(item.createdAt).toLocaleDateString()}</span>
        )}
      </div>

      <div className="item-actions">
        <button onClick={() => onEdit(item)}>Edit</button>
        <button className="danger" onClick={() => onDelete(item._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
