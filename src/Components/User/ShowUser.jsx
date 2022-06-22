import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, userSelectors, deleteUser } from "../../features/userSlice"
import { Link } from 'react-router-dom';
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
                    <Link to={`edit/${user.id}`}><Button variant="primary mx-3">Edit</Button></Link>
                    <Button onClick={() => dispatch(deleteUser(user.id))} variant="danger">Delete</Button>
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
