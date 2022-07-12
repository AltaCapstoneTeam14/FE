import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getTopUps, topUpSelectors, deleteTopUp } from "../../features/TopUpSlice"
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./ShowTopUp.css"
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";

import NavAdmin from '../Navbar/NavAdmin'

const ShowTopUp = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('')
  const topup = useSelector(topUpSelectors.selectAll);


  useEffect(() => {
    dispatch(getTopUps())
  }, [dispatch]) 

  

  return (
    <div>
      <div>
        <NavAdmin />
      </div>
      <div className="container">
        <div className="titleTop">
          <h2>Top Up Product</h2>
        </div>
        <div className='topUpSearch'>
        <div className='searchTopUp'>
          <input type="text" placeholder="Search . . ." onChange={e => {setSearchTerm(e.target.value)}}></input>
        </div>
        <div className="btnTop">
          <Link to="add">
            <Button variant="success">Add New</Button>
          </Link>
        </div>
        </div>
        <div className="ShowTopUp">
          <table>
            <thead>
              <tr>
                <th className="thNo">No</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Groos Amount</th>
                <th className="thAct">actions</th>
              </tr>
            </thead>
            <tbody>
              {topup.filter((item) => {
                if (searchTerm === "") {
                  return item
                } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return item
                } else {
                  return null
                }
              }).map((item, index) => (
                <tr key={item.id}>
                  <td className="tdnumber">{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td>{item.gross_amount}</td>
                  <td>
                    <Link to={`edit/${item.id}`}><Button variant="primary" className='px-2 py-1'><AiFillEdit></AiFillEdit></Button></Link>
                    <Button onClick={() => dispatch(deleteTopUp(item.id))} variant="danger" className='px-2 py-1 ms-2'><RiDeleteBin5Fill></RiDeleteBin5Fill></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowTopUp;
