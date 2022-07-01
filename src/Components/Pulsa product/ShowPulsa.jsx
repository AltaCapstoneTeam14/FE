import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getPulsas, pulsaSelectors, deletePulsa } from "../../features/PulsaSlice"
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./ShowPulsa.css"
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";

// import NavAdmin from '../Navbar/NavAdmin'

const ShowPulsa = () => {
  const dispatch = useDispatch();

  const pulsa = useSelector(pulsaSelectors.selectAll);

  useEffect(() => {
    dispatch(getPulsas())
  }, [dispatch]) 

  return (
    <div>
      <div>
      {/* <NavAdmin/> */}
      </div>
      <div className='titleTop'>
        <h2>Pulsa Product</h2>
      </div>
      <div className='btnPulsa'>
      <Link to="add"><Button variant="success">Add New</Button></Link>
      </div>
      <div className='ShowTopUp'>
        <table>
          <thead>
            <tr>
              <th className="thNo">No</th>
              <th>Name</th>
              <th>Denom</th>
              <th>Stock</th>
              <th>Provider Id</th>
              <th>Gross Amount</th>
              <th>Provider Name</th>
              <th className="thAct">actions</th>
            </tr>
          </thead>
          <tbody>
            {
              pulsa.map((key, index) => (
                <tr key={key.id}>
                  <td className="tdnumber">{index + 1}</td>
                  <td>{key.name}</td>
                  <td>{key.denom}</td>
                  <td>{key.stock}</td>
                  <td>{key.provider_id}</td>
                  <td>{key.gross_amount}</td>
                  <td>{key.provider_name}</td>
                  <td>
                    <Link to={`edit/${key.id}`}><Button variant="primary" className='px-2 py-1'><AiFillEdit></AiFillEdit></Button></Link>
                    <Button onClick={() => dispatch(deletePulsa(key.id))} variant="danger" className='px-2 py-1 ms-2'><RiDeleteBin5Fill></RiDeleteBin5Fill></Button>
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

export default ShowPulsa;
