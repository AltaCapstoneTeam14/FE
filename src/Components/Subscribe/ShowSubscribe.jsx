import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getSubscribe, subscribeSelectors, deleteSubscribe } from "../../features/SubscribeSlice"
import { Button } from 'react-bootstrap';
import "./ShowSubscribe.css"
import { RiDeleteBin5Fill } from "react-icons/ri";
import NavAdmin from '../Navbar/NavAdmin'

const ShowSubscribe = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('')
  const subscribes = useSelector(subscribeSelectors.selectAll);

  useEffect(() => {
    dispatch(getSubscribe())
  }, [dispatch]) 

  return (
    <div>
      <div>
      <NavAdmin/>
      </div>
      <div className='titleTop'>
        <h2>Subscribe</h2>
      </div>
      <div className='subscribeSearch'>
        <div className='searchSubscribe'>
          <input type="text" placeholder="Search . . ." onChange={e => {setSearchTerm(e.target.value)}}></input>
        </div>
      </div>
      <div className='ShowTopUp'>
        <table>
          <thead>
            <tr>
              <th className="thNo">No</th>
              <th>Email</th>
              <th className="thAct">actions</th>
            </tr>
          </thead>
          <tbody>
            {
              subscribes.filter((subscribe) => {
                if (searchTerm === "") {
                  return subscribe
                } else if (subscribe.email.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return subscribe
                }
              }).map((subscribe, index) => (
                <tr key={subscribe.id}>
                  <td className="tdnumber">{index + 1}</td>
                  <td className='tdEmail'>{subscribe.email}</td>
                  <td>
                    <Button onClick={() => dispatch(deleteSubscribe(subscribe.id))} variant="danger" className='px-2 py-1 ms-2'><RiDeleteBin5Fill></RiDeleteBin5Fill></Button>
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

export default ShowSubscribe;
