import Dialog from "./Dialog";
import { useState } from "react";
import People from "./People";
import { DEPARTMENTS } from "../constants/account";

const PeopleList = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [myInfos, setMyInfos] = useState({
    email: "",
    department: 0,
  });

  const peopleData = [
    { name: "ABC", age: 24 },
    { name: "XYZ", age: 24 },
    { name: "XYZ", age: 24 },
  ];

  const onClickEdit = () => {
    setShowDialog(true);
    // showDialog = true
  };

  const onClickDelete = () => {
    setShowDeleteDialog(true);
    // showDialog = true
  };

  const onCloseDialog = () => {
    setShowDialog(false);
  };

  const onCloseDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const onClickGetInfos = () => {
    // console.log("first");
    // const name = document.getElementById("name");
    // const age = document.getElementById("age");
    // console.log(name?.value, age?.value);

    console.log(myInfos);
  };

  const onChangeField = () => {
    console.log("first");
  };

  // Hàm update chung
  const onChangeCommonField = (updateData = {}) => {
    setMyInfos({ ...myInfos, ...updateData });
  };

  console.log(myInfos);

  return (
    <>
      <div style={{ margin: "32px 0" }}>
        {/* <input
          value={myInfos.email}
          onChange={(e) => onChangeCommonField({ email: e.target.value })}
        /> */}
        <input
          value={myInfos.email}
          onChange={(e) => setMyInfos({ ...myInfos, email: e.target.value })}
        />
        <select
          value={myInfos.department}
          onChange={(e) =>
            setMyInfos({ ...myInfos, department: Number(e.target.value) })
          }
        >
          {DEPARTMENTS.map((department) => (
            <option key={department.value} value={department.value}>
              {department.label}
            </option>
          ))}
        </select>
        <button onClick={onClickGetInfos}>Get infos</button>
      </div>

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
            // <People people={p} key={i} {...{ onClickEdit }} />
            <People
              people={p}
              key={i}
              onClickEdit={onClickEdit}
              onClickDelete={onClickDelete}
            />
          ))}
        </tbody>
      </table>

      {showDialog && (
        <Dialog
          onClose={onCloseDialog}
          title="Edit account"
          // footer={<h1>Footer</h1>}
        >
          <h1>Edit</h1>
        </Dialog>
      )}

      {showDeleteDialog && (
        <Dialog
          onClose={onCloseDeleteDialog}
          title="Delete account"
          // footer={<h1>Footer</h1>}
        >
          <h1>Delete</h1>
        </Dialog>
      )}
    </>
  );
};

export default PeopleList;
