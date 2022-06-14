import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./EditUser.css"
//Untuk dapat memanggil data dari store, dapat menggunakan useSelector

const EditUser = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <Card className="cardEdit">
      <Card.Body>
        <form>
        <div className="inputEdit">
          <label>Name</label>
          <div>
            <input 
            type="text" 
            className="input" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
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
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
            />
          </div>
        </div>
        <div className="inputEdit">
          <Button variant="success">Update</Button>
        </div>
      </form>
      </Card.Body>
    </Card>
    </div>
  );
};

export default EditUser;
