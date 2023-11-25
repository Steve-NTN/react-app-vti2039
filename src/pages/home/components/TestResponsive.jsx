import {
  Box,
  Collapse,
  IconButton,
  Stack,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Products } from "../../../components";
import { apiGetProductCategories } from "../../../services/product";

const TestResponsive = () => {
  const isMobileView = useMediaQuery("(max-width:600px)");
  const [showedCollapses, setShowedCollapses] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiGetProductCategories()
      .then((res) => setCategories(res?.data?.data))
      .catch((err) => console.log(err));
  }, []);

  const onToggleCollapse = (id) => {
    if (showedCollapses.indexOf(id) > -1) {
      setShowedCollapses(showedCollapses.filter((idd) => idd !== id));
    } else {
      setShowedCollapses([...showedCollapses, id]);
    }
  };

  return (
    <StyledStack spacing={2}>
      {categories?.map((category) => {
        let isExpended = showedCollapses.indexOf(category?.categoryId) > -1;

        return (
          <Box key={category?.categoryId}>
            <Stack
              className="collapse_header"
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography>{category?.categoryName}</Typography>
              <IconButton
                onClick={() => onToggleCollapse(category?.categoryId)}
                sx={{
                  transform: `rotate(${isExpended ? "180deg" : "0deg"})`,
                  transition: "all 0.5s",
                }}
              >
                <IoIosArrowDown />
              </IconButton>
            </Stack>

            <Collapse in={isExpended}>
              <Products selectedCategory={category?.categoryId} />
            </Collapse>
          </Box>
        );
      })}
    </StyledStack>
  );
};

const StyledStack = styled(Stack)(({ theme }) => ({
  h1: {
    fontSize: 32,
  },
  [theme.breakpoints.down("md")]: {},
  "@media screen and (max-width:600px)": {
    h1: {
      fontSize: 16,
    },
  },
  ".collapse_header": {
    backgroundColor: "#ddd",
    borderRadius: 8,
    padding: 16,
  },
}));

export default TestResponsive;
