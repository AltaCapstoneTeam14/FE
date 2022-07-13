import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getQuotas, quotaSelectors, deleteQuota } from "../../features/QuotaSlice"
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./ShowQuota.css"
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import NavAdmin from '../Navbar/NavAdmin'
import Scroll from "../Scroll/Scroll"

const ShowQuota = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('')
  const quotas = useSelector(quotaSelectors.selectAll);

  useEffect(() => {
    dispatch(getQuotas())
  }, [dispatch]) 

  return (
    <div>
      <div>
      <NavAdmin/>
      </div>
      <Scroll />
      <div className='titleTop'>
        <h2>Quota Product</h2>
      </div>
      <div className='quotaSearch'>
        <div className='searchQuota'>
          <input type="text" placeholder="Search . . ." onChange={e => {setSearchTerm(e.target.value)}}></input>
        </div>
        <div className="btnQuota">
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
              <th className='thdesc'>Description</th>
              <th>Stock</th>
              <th>Provider Id</th>
              <th>Gross Amount</th>
              <th>Provider Name</th>
              <th className="thAct">actions</th>
            </tr>
          </thead>
          <tbody>
            {
              quotas.filter((quota) => {
                if (searchTerm === "") {
                  return quota
                } else if (quota.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return quota
                } else {
                  return null
                }
              }).map((quota, index) => (
                <tr key={quota.id}>
                  <td className="tdnumber">{index + 1}</td>
                  <td>{quota.name}</td>
                  <td>{quota.description}</td>
                  <td>{quota.stock}</td>
                  <td>{quota.provider_id}</td>
                  <td>{quota.gross_amount}</td>
                  <td>{quota.provider_name}</td>
                  <td>
                    <Link to={`edit/${quota.id}`}><Button variant="primary" className='px-2 py-1'><AiFillEdit></AiFillEdit></Button></Link>
                    <Button onClick={() => dispatch(deleteQuota(quota.id))} variant="danger" className='px-2 py-1 ms-2'><RiDeleteBin5Fill></RiDeleteBin5Fill></Button>
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

export default ShowQuota;
