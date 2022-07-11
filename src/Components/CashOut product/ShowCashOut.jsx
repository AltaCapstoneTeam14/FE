import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getCashOut, cashOutSelectors, deleteCashOut } from "../../features/CashOutSlice"
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./ShowCashOut.css"
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import NavAdmin from '../Navbar/NavAdmin'

const ShowCashOut = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('')
  const cashout = useSelector(cashOutSelectors.selectAll);

  useEffect(() => {
    dispatch(getCashOut())
  }, [dispatch]) 

  return (
    <div>
      <div>
      <NavAdmin/>
      </div>
      <div className='titleTop'>
        <h2>Cashout Product</h2>
      </div>
      <div className='cashoutSearch'>
        <div className='searchCashout'>
          <input type="text" placeholder="Search . . ." onChange={e => {setSearchTerm(e.target.value)}}></input>
        </div>
        <div className="btnCash">
          <Link to="add">
            <Button variant="success">Add New</Button>
          </Link>
        </div>
        </div>
      <div className='ShowTopUp'>
        <table>
          <thead>
            <tr>
              <th className="thNo">No</th>
              <th>Name</th>
              <th>Coin Amount</th>
              <th>Balance Amount</th>
              <th className="thAct">actions</th>
            </tr>
          </thead>
          <tbody>
            {
              cashout.filter((cash) => {
                if (searchTerm === "") {
                  return cash
                } else if (cash.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return cash
                } else {
                  return null
                }
              }).map((cash, index) => (
                <tr key={cash.id}>
                  <td className="tdnumber">{index + 1}</td>
                  <td>{cash.name}</td>
                  <td>{cash.coin_amount}</td>
                  <td>{cash.balance_amount}</td>
                  <td>
                    <Link to={`edit/${cash.id}`}><Button variant="primary" className='px-2 py-1'><AiFillEdit></AiFillEdit></Button></Link>
                    <Button onClick={() => dispatch(deleteCashOut(cash.id))} variant="danger" className='px-2 py-1 ms-2'><RiDeleteBin5Fill></RiDeleteBin5Fill></Button>
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

export default ShowCashOut;
