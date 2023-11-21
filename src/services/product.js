import { http } from "./http";

const apiGetProducts = (
  page = 1,
  limit = 10,
  search = "",
  categoryId = null
) => {
  return http.get(`products`, { params: { page, limit, search, categoryId } });
};

const apiGetProductCategories = () => {
  return http.get(`product-categories`);
};

const apiUpdateProduct = (id, data) => {
  return http.put(`products/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

const apiDeleteProduct = (id) => {
  return http.delete(`products/${id}`);
};

export {
  apiGetProducts,
  apiGetProductCategories,
  apiUpdateProduct,
  apiDeleteProduct,
};
