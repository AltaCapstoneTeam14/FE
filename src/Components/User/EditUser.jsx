import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, userSelectors, updateUser } from "../../features/userSlice";
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from "react-bootstrap";
import "./EditUser.css"
//Untuk dapat memanggil data dari store, dapat menggunakan useSelector


const EditUser = () => {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const user = useSelector((state) => userSelectors.selectById(state, id));

  useEffect(() => {
    dispatch(getUsers());
  },[dispatch]);

  useEffect(() => {
    if(user){
      setName(user.name);
      setUserName(user.username);}
  },[user]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({id, name, username}));
    navigate('/CustomerData');
  }

  return (
    <div>
      
      <Card className="cardEdit">
      <Card.Body>
        <h3>Edit Data</h3>
        <hr></hr>
        <Form onSubmit={handleUpdate}>
        <div className="inputEdit">
          <label>Name</label>
          <div>
            <input 
            type="text" 
            className="input" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => {setName(e.target.value);}}
            />
          </div>
        </div>
        <div className="inputEdit">
          <label>User Name</label>
          <div>
            <input 
            type="text" 
            className="input" 
            placeholder="UserName"
            value={username} 
            onChange={(e) => setUserName(e.target.value)} 
            />
          </div>
        </div>
        <div className="inputEdit">
          <br></br>
          <Button variant="success" type="submit">Update</Button>
        </div>
      </Form>
      </Card.Body>
    </Card>
    
    </div>
  );
};

export default EditUser;
