import styled from "styled-components";

const Search = (props) => {
  return <StyledInput placeholder="Search something..." {...props} />;
};

const StyledInput = styled.input`
  display: block;
  margin-bottom: 24px;
`;

export default Search;
