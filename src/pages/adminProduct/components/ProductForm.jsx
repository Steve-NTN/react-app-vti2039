import { Box, Stack, TextField, Typography, styled } from "@mui/material";
import { useFormik } from "formik";
import { object, string } from "yup";
import { AppButton } from "../../../components";
import { formatImg } from "../../../utils/imgHelpers";
import { apiUpdateProduct } from "../../../services/product";
import { useEffect } from "react";

let productSchema = object({
  productName: string().required(),
  productPrice: string().required(),
  productInfo: string(),
  productImage: string(),
});

const ProductForm = (props) => {
  const { selectedProduct, onCloseEditPopup, refreshProducts } = props;

  const onSubmitProduct = (values) => {
    apiUpdateProduct(selectedProduct?.productId, values)
      .then((res) => {
        onCloseEditPopup();
        refreshProducts();
      })
      .catch((err) => console.log(err));
  };

  const formik = useFormik({
    initialValues: {
      productName: selectedProduct?.productName || "",
      productPrice: selectedProduct?.productPrice || "",
      productInfo: selectedProduct?.productInfo || "",
      productImage: selectedProduct?.productImage || "",
    },
    // validate: validate,
    validationSchema: productSchema,
    onSubmit: onSubmitProduct,
  });

  useEffect(() => {
    let productImg = document.getElementById("product-img-preview");
    productImg.setAttribute("src", formatImg(formik.values.productImage));
  }, []);

  return (
    <StyledProductForm>
      <Stack spacing={2} component="form" onSubmit={formik.handleSubmit}>
        <Typography align="center">
          {selectedProduct?.productId ? "Update product" : "Create new product"}
        </Typography>
        <TextField
          label="Product name"
          name="productName"
          placeholder="Enter product name"
          value={formik.values.productName}
          onChange={formik.handleChange}
          error={!!formik.errors.productName}
          helperText={formik.errors.productName}
        />
        <TextField
          label="Product price"
          name="productPrice"
          placeholder="Enter product price"
          value={formik.values.productPrice}
          onChange={formik.handleChange}
          error={!!formik.errors.productPrice}
          helperText={formik.errors.productPrice}
        />
        <TextField
          label="Product infor"
          name="productInfo"
          placeholder="Enter product infor"
          value={formik.values.productInfo}
          onChange={formik.handleChange}
          error={!!formik.errors.productInfo}
          helperText={formik.errors.productInfo}
        />

        <label className="product_img" htmlFor="product-img">
          <img alt="img" id="product-img-preview" />
        </label>

        <input
          type="file"
          id="product-img"
          onChange={(e) => {
            var reader = new FileReader();
            reader.onload = function (e) {
              let productImg = document.getElementById("product-img-preview");
              console.log(e.target.result);
              productImg.setAttribute("src", e.target.result);
            };

            reader.readAsDataURL(e.target?.files[0]);
            formik.setFieldValue("productImage", e.target?.files[0]);
          }}
        />

        <AppButton type="submit">Submit</AppButton>
      </Stack>
    </StyledProductForm>
  );
};

const StyledProductForm = styled(Box)({
  padding: 32,
  ".product_img": {
    width: "100%",
    height: 248,
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    cursor: "pointer",
  },
  "#product-img": {
    display: "none",
  },
});
export default ProductForm;
