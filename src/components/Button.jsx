import styled from "styled-components";

const Button = (props) => {
  const { bgColor = "blue", text = "Button", ...otherProps } = props;
  return (
    <StyledButton style={{ backgroundColor: bgColor }} {...otherProps}>
      {text}
    </StyledButton>
  );
};



const StyledButton = styled.button`
  color: #fff;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
`;


export default Button;
