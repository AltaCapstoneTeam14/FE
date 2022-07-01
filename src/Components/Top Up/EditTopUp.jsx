import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopUps, topUpSelectors, updateTopUp } from "../../features/TopUpSlice";
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from "react-bootstrap";
import "./EditTopUp.css"


const EditTopUp = () => {
  const [amount, setAmount] = useState('');
  const [gross_amount, setGross_amount] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const topup = useSelector((state) => topUpSelectors.selectById(state, id));

  useEffect(() => {
    dispatch(getTopUps());
  },[dispatch]);

  useEffect(() => {
    if(topup){
      setAmount(topup.amount);
      setGross_amount(topup.gross_amount);}
  },[topup]);

  const handleUpdated = (e) => {
    e.preventDefault();
    dispatch(updateTopUp({id, amount, gross_amount }));
    navigate('/TopUpPage');
  }

  return (
    <div>
      
      <Card className="cardEdit">
      <Card.Body>
        <h3>Edit Data</h3>
        <hr></hr>
        <Form onSubmit={handleUpdated}>
        <div className="inputEdit">
          <label>Amount</label>
          <div>
            <input 
            type="text" 
            className="input" 
            placeholder="Amount" 
            value={amount} 
            onChange={(e) => {setAmount(e.target.value);}}
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
          <Button variant="success" type="submit">Update</Button>
        </div>
      </Form>
      </Card.Body>
    </Card>
    
    </div>
  );
};

export default EditTopUp;
