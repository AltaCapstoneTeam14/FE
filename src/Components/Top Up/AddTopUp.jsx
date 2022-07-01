import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTopUp } from "../../features/TopUpSlice";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from "react-bootstrap";
import "./AddTopUp.css"

const AddTopUp = () => {
  const [amount, setAmount] = useState('');
  const [gross_amount, setGross_amount] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createTopUp = (e) => {
    e.preventDefault();
    dispatch(saveTopUp({ amount, gross_amount}));
    navigate('/TopUpPage');
  }

  return (
    <div>
      <Card className="cardEdit">
      <Card.Body>
        <h3>Add Data</h3>
        <hr></hr>
        <Form onSubmit={createTopUp}>
        <div className="inputEdit">
          <label>Amount</label>
          <div>
            <input 
            type="text" 
            className="input" 
            placeholder="Amount" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="inputEdit">
          <label>Gross Amount</label>
          <div>
            <input 
            type="text" 
            className="input" 
            placeholder="Gross Amount"
            value={gross_amount} 
            onChange={(e) => setGross_amount(e.target.value)} 
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

export default AddTopUp;
