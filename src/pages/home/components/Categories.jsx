import { Stack, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { apiGetProductCategories } from "../../../services/product";
import { useHome } from "../../../providers/home-provider";

const Categories = () => {
  const { setSelectedCategory, selectedCategory } = useHome();
  const [categories, setCategories] = useState([]);

  const handleChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  useEffect(() => {
    apiGetProductCategories()
      .then((res) => setCategories(res?.data?.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Stack>
      <Tabs value={selectedCategory} onChange={handleChange}>
        {categories.map((category) => (
          <Tab
            key={category?.categoryId}
            value={category?.categoryId}
            label={category?.categoryName}
          />
        ))}
      </Tabs>
    </Stack>
  );
};

export default Categories;
