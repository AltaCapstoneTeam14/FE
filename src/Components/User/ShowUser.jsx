import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, userSelectors, deleteUser } from "../../features/userSlice"
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./ShowUser.css"
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import NavAdmin from '../Navbar/NavAdmin'

const ShowUser = () => {
  const dispatch = useDispatch();
  const users = useSelector(userSelectors.selectAll);

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <div>
      <div>
      <NavAdmin/>
      <div className='showUser'>
        <table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Username</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>
                    <Link to={`edit/${user.id}`}><Button variant="success" className='px-2 py-1'><AiFillEdit></AiFillEdit></Button></Link>
                    <Button onClick={() => dispatch(deleteUser(user.id))} variant="danger" className='px-2 py-1 ms-2'><RiDeleteBin5Fill></RiDeleteBin5Fill></Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}

export default ShowUser
