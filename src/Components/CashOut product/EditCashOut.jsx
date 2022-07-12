import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCashOut, cashOutSelectors, updateCashOut } from "../../features/CashOutSlice";
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from "react-bootstrap";
import "./EditCashOut.css"


const EditCashOut = () => {
  const [name, setName] = useState('');
  const [coin_amount, setCoin_amount] = useState('');
  const [balance_amount, setBalance_amount] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const cashout = useSelector((state) => cashOutSelectors.selectById(state, id));

  useEffect(() => {
    dispatch(getCashOut());
  },[dispatch]);

  useEffect(() => {
    if(cashout){
      setName(cashout.name);
      setCoin_amount(cashout.coin_amount);
      setBalance_amount(cashout.balance_amount);}
  },[cashout]);

  const handleUpdated = (e) => {
    e.preventDefault();
    dispatch(updateCashOut({id, name, coin_amount, balance_amount }));
    navigate('/CashOutPage');
  }

  return (
    <div>
      
      <Card className="cardCashEdit">
      <Card.Body>
        <h3>Edit Data</h3>
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
          <Button variant="success" type="submit">Update</Button>
        </div>
      </Form>
      </Card.Body>
    </Card>
    
    </div>
  );
};

export default EditCashOut;
