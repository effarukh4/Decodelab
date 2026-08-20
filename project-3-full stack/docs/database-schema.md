# Database Schema — Project 3

## Database: MongoDB (`fullstack_p3`)

## Collection: `items`

| Field       | Type      | Constraints                                   | Description                          |
|-------------|-----------|------------------------------------------------|---------------------------------------|
| `_id`       | ObjectId  | Auto-generated primary key                    | Unique document identifier            |
| `title`     | String    | Required, trimmed, max 100 chars              | Name/title of the item                |
| `description` | String | Optional, trimmed, max 1000 chars, default ""  | Extra detail about the item           |
| `status`    | String    | Enum: `pending`, `in-progress`, `completed`; default `pending` | Current state of the item |
| `quantity`  | Number    | Min 0, default 1                              | Numeric count associated with the item |
| `createdAt` | Date      | Auto-managed by Mongoose (`timestamps: true`) | Creation timestamp                    |
| `updatedAt` | Date      | Auto-managed by Mongoose (`timestamps: true`) | Last modification timestamp           |

## Design Rationale

- **Schema validation at the model layer** (Mongoose) ensures data integrity before it ever
  reaches the database — required fields, length limits, and enums are enforced server-side,
  not just in the UI.
- **`timestamps: true`** removes the need to manually track `createdAt`/`updatedAt`, which is
  useful for sorting (`getItems` returns newest first) and auditing.
- **Generic naming (`Item`)** was chosen so the schema can be renamed/extended to fit whatever
  specific domain the assignment targets (tasks, products, notes, inventory, etc.) without
  restructuring the whole app — only the model fields and form inputs need to change.
- **Enum for `status`** keeps state transitions predictable, which is useful for future features
  like filtering or a kanban-style UI.

## Example Document

```json
{
  "_id": "666f1c2e8f1b2c3d4e5f6789",
  "title": "Finish Project 3 report",
  "description": "Write up database schema and CRUD documentation",
  "status": "in-progress",
  "quantity": 1,
  "createdAt": "2026-08-15T10:32:00.000Z",
  "updatedAt": "2026-08-18T09:10:00.000Z"
}
```

## CRUD Mapping

| Operation | HTTP Method | Endpoint          | Mongoose Call                          |
|-----------|-------------|-------------------|------------------------------------------|
| Create    | POST        | `/api/items`       | `Item.create(data)`                     |
| Read all  | GET         | `/api/items`       | `Item.find().sort({ createdAt: -1 })`   |
| Read one  | GET         | `/api/items/:id`   | `Item.findById(id)`                     |
| Update    | PUT         | `/api/items/:id`   | `Item.findByIdAndUpdate(id, data)`      |
| Delete    | DELETE      | `/api/items/:id`   | `Item.findByIdAndDelete(id)`            |
