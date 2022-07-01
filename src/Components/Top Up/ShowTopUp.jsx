import React, { useEffect } from 'react'
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

  const topup = useSelector(topUpSelectors.selectAll);

  useEffect(() => {
    dispatch(getTopUps())
  }, [dispatch]) 

  return (
    <div>
      <div>
       <NavAdmin/>
      </div>
      <div className='titleTop'>
        <h2>Top Up Product</h2>
      </div>
      <div className='btnTop'>
      <Link to="add"><Button variant="success">Add New</Button></Link>
      </div>
      <div className='ShowTopUp'>
        <table>
          <thead>
            <tr>
              <th className="thNo">No</th>
              <th>Amount</th>
              <th>Groos Amount</th>
              <th className="thAct">actions</th>
            </tr>
          </thead>
          <tbody>
            {
              topup.map((item, index) => (
                <tr key={item.id}>
                  <td className="tdnumber">{index + 1}</td>
                  <td>{item.amount}</td>
                  <td>{item.gross_amount}</td>
                  <td>
                    <Button onClick={() => dispatch(deleteTopUp(item.id))} variant="danger" className='px-2 py-1 ms-2'><RiDeleteBin5Fill></RiDeleteBin5Fill></Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ShowTopUp;
