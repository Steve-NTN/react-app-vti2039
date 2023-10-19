import styled from "styled-components";

const Input = ({
  label,
  placeholder = "",
  type = "text",
  options = [],
  value = "",
  onChange = () => {},
}) => {
  return (
    <>
      <p className="input_label">{label}</p>

      {type === "text" && (
        <StyledInput>
          <input value={value} placeholder={placeholder} onChange={onChange} />
        </StyledInput>
      )}

      {type === "select" && (
        <StyledSelect
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        >
          {options.map((option, i) => {
            return (
              <option key={i} value={option?.value}>
                {option?.label}
              </option>
            );
          })}
        </StyledSelect>
      )}
    </>
  );
};

const StyledInput = styled.div`
  .input_label {
  }

  input {
    width: 100%;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 8px;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  background-color: #fff;
  padding: 8px;
  border-radius: 4px;
`;

export default Input;
