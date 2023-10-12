// import styled from "styled-components";
import { FaBeer } from "react-icons/fa";
import Button from "./Button";
import { MdDeleteOutline } from "react-icons/md";
import Dialog from "./Dialog";
import { useState } from "react";

const PeopleList = () => {
  const [showDialog, setShowDialog] = useState(false);
  const peopleData = [
    { name: "ABC", age: 24 },
    { name: "XYZ", age: 24 },
    { name: "XYZ", age: 24 },
  ];

  const onClickEdit = () => {
    setShowDialog(true);
  };

  const onCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <>
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
            <People people={p} key={i} {...{ onClickEdit }} />
            // <People people={p} key={i} onClickEdit={onClickEdit}/>
          ))}
        </tbody>

        {/* <img src={userIcon} alt="icon" /> */}
      </table>

      {showDialog && (
        <Dialog
          onClose={onCloseDialog}
          title="Create new account"
          footer={<h1>Footer</h1>}
        >
          <h1>Hello</h1>
        </Dialog>
      )}
    </>
  );
};

const People = (props) => {
  const { people, onClickEdit } = props;

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
          bgColor="red"
        />
      </td>
    </tr>
  );
};

export default PeopleList;
