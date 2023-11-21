import {
  Box,
  Dialog,
  IconButton,
  Pagination,
  Rating,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import { apiDeleteProduct, apiGetProducts } from "../../../services/product";
import { Loading } from "../../../components";
import { formatImg } from "../../../utils/imgHelpers";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import ProductForm from "./ProductForm";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [metaData, setMetaData] = useState({
    limit: 20,
    page: 1,
  });
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [selectedProduct, setSelectProduct] = useState();
  const [reloadProducts, setReloadProducts] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      apiGetProducts(metaData.page, metaData.limit)
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
  }, [metaData, reloadProducts]);

  const onChangePagination = (value) => {
    setMetaData({ ...metaData, page: value });
  };

  const onClickEdit = (product) => {
    setEditPopup(true);
    setSelectProduct(product);
  };

  const onCloseEditPopup = () => {
    setEditPopup(false);
  };

  const refreshProducts = () => {
    setReloadProducts(!reloadProducts);
  };

  const onClickDelete = (product) => {
    apiDeleteProduct(product?.productId)
      .then((res) => {
        refreshProducts();
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledProducts>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Product name</TableCell>
              <TableCell>Product price</TableCell>
              <TableCell>Product Info</TableCell>
              <TableCell>Rating star</TableCell>
              <TableCell>Product image</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((product, id) => (
              <TableRow key={id}>
                <TableCell>{product?.productId}</TableCell>
                <TableCell>{product?.productName}</TableCell>
                <TableCell>{product?.productPrice}</TableCell>
                <TableCell>{product?.productInfo}</TableCell>
                <TableCell>
                  <Rating value={product?.ratingStar} readOnly />
                </TableCell>
                <TableCell>
                  <img
                    src={formatImg(product?.productImage)}
                    className="product_img"
                  />
                </TableCell>
                <TableCell>
                  <Stack spacing={2} direction="row">
                    <Tooltip title="Edit">
                      <IconButton onClick={() => onClickEdit(product)}>
                        <MdModeEditOutline />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete">
                      <IconButton onClick={() => onClickDelete(product)}>
                        <MdDelete />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack justifyContent="center">
        {loading && <Loading sx={{ m: "0 auto" }} />}
      </Stack>

      <Stack justifyContent="center">
        <Pagination
          count={Math.ceil(total / metaData.limit)}
          onChange={(e, value) => onChangePagination(value)}
        />
      </Stack>

      <Dialog
        open={editPopup}
        onClose={onCloseEditPopup}
        PaperProps={{ sx: { width: "100%" } }}
      >
        <ProductForm
          {...{ selectedProduct, onCloseEditPopup, refreshProducts }}
        />
      </Dialog>
    </StyledProducts>
  );
};

const StyledProducts = styled(Box)({
  ".product_img": {
    width: 48,
    height: 48,
    objectFit: "cover",
  },
});

export default Products;
