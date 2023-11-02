import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Pagination = ({ metaData, onClickNext, total, onClickPrevios }) => {
  const { limit, page } = metaData;
  const pageQuantity = Math.ceil(total / limit);

  // const pageContent = () => {
  //   const rows = [];
  //   for (let index = 0; index < pageQuantity; index++) {
  //     rows.push(<h1>Hello</h1>);
  //   }
  //   return rows
  // };

  return (
    <StyledPagination>
      <button onClick={onClickPrevios}>
        <AiOutlineArrowLeft />
      </button>

      {[...Array(pageQuantity)].map((_, i) => (
        <span
          key={i}
          className={`page_box ${i === page - 1 ? "selected" : ""}`}
        >
          {i + 1}
        </span>
      ))}

      {/* {pageContent()} */}

      <button onClick={onClickNext}>
        <AiOutlineArrowRight />
      </button>
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  .page_box {
  }

  .page_box.selected {
    color: red;
  }
`;

export default Pagination;
