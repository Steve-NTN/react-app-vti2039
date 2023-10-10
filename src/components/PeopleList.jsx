// import styled from "styled-components";
import { FaBeer } from "react-icons/fa";
import userIcon from "../assets/icons/Icon-A.png";
import Button from "./Button";
import { MdDeleteOutline } from "react-icons/md";

const PeopleList = () => {
  const peopleData = [
    { name: "ABC", age: 24 },
    { name: "XYZ", age: 24 },
    { name: "XYZ", age: 24 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {peopleData.map((p, i) => (
          <People people={p} key={i} />
        ))}
      </tbody>

      {/* <img src={userIcon} alt="icon" /> */}
    </table>
  );
};

const People = (props) => {
  const { people } = props;

  return (
    <tr>
      <td>
        <FaBeer /> {people.name}
      </td>
      <td>{people.age}</td>
      <td>
        <Button text="Edit" bgColor="orange" />
      </td>
      <td>
        <Button
          text={
            <>
              <MdDeleteOutline />
              Delete
            </>
          }
          bgColor="red"
        />
      </td>
    </tr>
  );
};

export default PeopleList;