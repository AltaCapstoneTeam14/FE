import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
<<<<<<< HEAD
import { getUsers, userSelectors, deleteUsers } from "../../features/userSlice"
=======
import { getUsers, userSelectors } from "../../features/userSlice"
import { Link } from 'react-router-dom';
>>>>>>> e90fb304033d5ca52fca9fdb6fa694c1a5db9c10
import { Button, Table } from 'react-bootstrap';
import "./ShowUser.css"


const ShowUser = () => {
  const dispatch = useDispatch();
  const users = useSelector(userSelectors.selectAll);

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <div>
      <div className='showUser'>
        <Table striped bordered hover>
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
<<<<<<< HEAD
                    <Button variant="primary mx-3">Edit</Button>
                    <Button onClick={()=> dispatch(deleteUsers(user.id))} variant="danger">Delete</Button>
=======
                    <Link to={`edit/${user.id}`} ><Button variant="primary mx-3">Edit</Button></Link>
                    <Button variant="danger">Delete</Button>
>>>>>>> e90fb304033d5ca52fca9fdb6fa694c1a5db9c10
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default ShowUser
