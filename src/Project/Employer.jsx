import { useState } from "react";
import { users } from "../Data";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, deleteEmployee } from "../Rdux/userSlice";

function Employer() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [salary, setSalary] = useState();
  const users = useSelector((state) => state.users.users);
  const disapatch = useDispatch();
  const addEmployeeToMyCompany = (e) => {
    e.preventDefault();
    disapatch(addEmployee({ name, email, salary }));
  };
  return (
    <div>
      <div className="myForm container-fluid mx-auto w-50 mt-5 bg-info text-white">
        <h1>Employee Form</h1>
        <form action="">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Enter Employee Name"
            name=""
            id=""
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-control w-50"
            type="email"
            placeholder="Enter Employee Email"
            name=""
            id=""
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="form-control w-50"
            type="text"
            placeholder="Enter Employee Salary"
            name=""
            id=""
            onChange={(e) => setSalary(e.target.value)}
          />
          <button onClick={addEmployeeToMyCompany}>Employ</button>
        </form>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Salary</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <>
                {" "}
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.salary}</td>

                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => disapatch(deleteEmployee(user.id))}
                    >
                      <FaTrash color="white" />
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Employer;
