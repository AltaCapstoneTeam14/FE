import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, userSelectors, deleteUsers } from "../../features/userSlice"
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
                    <Button variant="primary mx-3">Edit</Button>
                    <Button onClick={()=> dispatch(deleteUsers(user.id))} variant="danger">Delete</Button>
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
