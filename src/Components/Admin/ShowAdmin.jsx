import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAdmin, adminSelectors } from "../../features/AdminSlice";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./ShowAdmin.css";
import { AiFillEdit } from "react-icons/ai";
import Scroll from "../Scroll/Scroll";
import NavAdmin from "../Navbar/NavAdmin";

const ShowAdmin = () => {
  const[counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const admin = useSelector(adminSelectors.selectAll);

  useEffect(() => {
    dispatch(getAdmin(counter));
  }, [counter,dispatch]);

  const previous = () => {
    setCounter(counter <=1 ? 1 : counter - 1);
  };

  const next = () => {
    setCounter(counter >= 11 ? 11 : counter + 1);
  };

  return (
    <div>
      <div>
        <NavAdmin />
      </div>
      <Scroll />
      <div className="container">
        <div className="titleTop">
          <h2>Data User</h2>
        </div>
        <div className="adminSearch">
          <div className="searchAdmin">
            <input
              type="text"
              placeholder="Search . . ."
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="ShowAdmin">
          <table>
            <thead>
              <tr>
                <th className="thNo">No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Balance Amount</th>
                <th>Coin Amount</th>
                <th className="thAct">actions</th>
              </tr>
            </thead>
            <tbody>
              {admin
                .filter((point) => {
                  if (searchTerm === "") {
                    return point;
                  } else if (
                    point.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return point;
                  } else {
                    return null;
                  }
                })
                .map((point, index) => (
                  <tr key={point.id}>
                    <td className="tdnumber">{(index + 1) + (counter - 1)*5}</td>
                    <td>{point.name}</td>
                    <td>{point.email}</td>
                    <td>{point.phone}</td>
                    <td>{point.balance.amount}</td>
                    <td>{point.coin.amount}</td>

                    <td>
                      <Link to={`edit/${point.id}`}>
                        <Button variant="primary" className="px-2 py-1">
                          <AiFillEdit></AiFillEdit>
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <Button
            variant="success"
            style={{ marginRight: "2rem" }}
            onClick={previous}
          >
            Previous
          </Button>
          <p className="text-page">{counter}/11</p>
          <Button
            variant="success"
            style={{ marginLeft: "2rem" }}
            onClick={next}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShowAdmin;
