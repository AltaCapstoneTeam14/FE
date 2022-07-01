import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveCashOut } from "../../features/CashOutSlice";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from "react-bootstrap";
import "./AddCashOut.css"

const AddCashOut = () => {
  const [name, setName] = useState('');
  const [coin_amount, setCoin_amount] = useState('');
  const [balance_amount, setBalance_amount] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createTopUp = (e) => {
    e.preventDefault();
    dispatch(saveCashOut({ name, coin_amount, balance_amount }));
    navigate('/CashOutPage');
  }

  return (
    <div>
      <Card className="cardEdit">
      <Card.Body>
        <h3>Add Data</h3>
        <hr></hr>
        <Form onSubmit={createTopUp}>
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
          <label>Coin Amount</label>
          <div>
            <input 
            type="text" 
            className="input" 
            placeholder="Coin Amount"
            value={coin_amount} 
            onChange={(e) => setCoin_amount(e.target.value)} 
            />
          </div>
        </div>
        <div className="inputEdit">
          <label>Balance Amount</label>
          <div>
            <input 
            type="text" 
            className="input" 
            placeholder="Balance Amount" 
            value={balance_amount} 
            onChange={(e) => setBalance_amount(e.target.value)}
            />
          </div>
        </div>
        <div className="inputEdit">
          <br></br>
          <Button variant="success" type="submit">Submit</Button>
        </div>
      </Form>
      </Card.Body>
    </Card>
    
    </div>
  );
};

export default AddCashOut;
