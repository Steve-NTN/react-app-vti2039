import { Box, Grid, Pagination, Stack } from "@mui/material";
import Product from "./Product";
import { useEffect, useState } from "react";
import { apiGetProducts } from "../services/product";
import Loading from "./Loading";
import { useHome } from "../providers/home-provider";
// import { FaShippingFast, FaPlaceOfWorship } from "react-icons/fa";
// import johnSmitth from "../assets/imgs/test.png";

const Products = () => {
  // const isMobile = useMediaQuery();
  const { selectedCategory } = useHome();
  const [products, setProducts] = useState([]);
  const [metaData, setMetaData] = useState({
    limit: 2,
    page: 1,
    search: "",
  });
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      apiGetProducts(
        metaData.page,
        metaData.limit,
        metaData.search,
        selectedCategory
      )
        .then((res) => {
          let data = res?.data;
          setProducts(data?.data);
          setTotal(data?.metadata?.total || 0);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }, 500);
  }, [metaData, selectedCategory]);

  const onChangePagination = (value) => {
    setMetaData({ ...metaData, page: value });
  };

  return (
    <Stack spacing={2}>
      <Box>
        <Grid container spacing={2}>
          {products.map((product, i) => (
            <Grid item xs={12} sm={6} md={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Stack justifyContent="center">
        {loading && <Loading sx={{ m: "0 auto" }} />}
      </Stack>

      <Stack justifyContent="center">
        <Pagination
          count={Math.ceil(total / metaData.limit)}
          onChange={(e, value) => onChangePagination(value)}
        />
      </Stack>
    </Stack>
  );
};

// const StyledTest = styled("div")({
//   width: "100%",
//   height: 300,
//   background: `orange url('${johnSmitth}') no-repeat center center`,
//   backgroundSize: "contain"
// });

export default Products;
