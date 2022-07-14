import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdmin, adminSelectors, updateAdmin } from "../../features/AdminSlice";
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from "react-bootstrap";
import "./EditAdmin.css"


const EditAdmin = () => {
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');
  const [coin, setCoin] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const admin = useSelector((state) => adminSelectors.selectById(state, id));

  useEffect(() => {
    dispatch(getAdmin());
  },[dispatch]);

  useEffect(() => {
    if(admin){
      setName(admin.name);
      setBalance(admin.balance.amount);
      setCoin(admin.coin.amount);
      setPhone(admin.phone);
    }
  },[admin]);

  const handleUpdated = (e) => {
    e.preventDefault();
    dispatch(updateAdmin({id, name, balance, phone, coin }));
    navigate('/User');
  }

  return (
    <div>
      
      <Card className="cardAdminData">
      <Card.Body>
        <h3>Edit Data Admin</h3>
        <hr></hr>
        <Form onSubmit={handleUpdated}>
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
          <label>Balance</label>
          <div>
            <input 
            type="number" 
            className="input" 
            placeholder="Balance" 
            value={balance} 
            onChange={(e) => {setBalance(e.target.value);}}
            />
          </div>
        </div>
        <div className="inputEdit">
          <label>Phone</label>
          <div>
            <input 
            type="number" 
            className="input" 
            placeholder="Phone"
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            />
          </div>
          </div>
           <div className="inputEdit">
          <label>Coin</label>
          <div>
            <input 
            type="number" 
            className="input" 
            placeholder="Coin"
            value={coin} 
            onChange={(e) => setCoin(e.target.value)} 
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

export default EditAdmin;
