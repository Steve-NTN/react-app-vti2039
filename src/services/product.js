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

export { apiGetProducts, apiGetProductCategories };
