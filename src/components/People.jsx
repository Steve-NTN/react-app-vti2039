// import styled from "styled-components";
import { FaBeer } from "react-icons/fa";
import Button from "./Button";
import { MdDeleteOutline } from "react-icons/md";

const People = (props) => {
  const { people, onClickEdit, onClickDelete } = props;

  return (
    <tr>
      <td>
        <FaBeer /> {people.name}
      </td>
      <td>{people.age}</td>
      <td>
        <Button text="Edit" bgColor="orange" onClick={onClickEdit} />
      </td>
      <td>
        <Button
          text={
            <>
              <MdDeleteOutline />
              Delete
            </>
          }
          onClick={onClickDelete}
          bgColor="red"
        />
      </td>
    </tr>
  );
};

export default People;
