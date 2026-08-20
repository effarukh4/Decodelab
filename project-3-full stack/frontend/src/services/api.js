// Base URL: Vite dev server proxies /api to the backend (see vite.config.js),
// so relative paths work in both dev and most production setups.
const BASE_URL = "/api/items";

async function handleResponse(res) {
  const body = await res.json();
  if (!res.ok || body.success === false) {
    throw new Error(body.message || "Request failed");
  }
  return body.data;
}

export const getItems = async () => {
  const res = await fetch(BASE_URL);
  return handleResponse(res);
};

export const getItemById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return handleResponse(res);
};

export const createItem = async (item) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return handleResponse(res);
};

export const updateItem = async (id, item) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return handleResponse(res);
};

export const deleteItem = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return handleResponse(res);
};
