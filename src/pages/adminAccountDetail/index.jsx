import { useParams, useSearchParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();

  console.log(searchParams.get('page'), searchParams.get('abc'));
  // console.log(params, searchParams.get('page'));

  return <h1>Product Detail: {params?.id}</h1>;
};

export default ProductDetail;
