import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveQuota } from "../../features/QuotaSlice";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from "react-bootstrap";
import "./AddQuota.css"

const AddQuota = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [provider_id, setProvider_id] = useState('');
  const [gross_amount, setGross_amount] = useState('');
  const [provider_name, setProvider_name] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createTopUp = (e) => {
    e.preventDefault();
    dispatch(saveQuota({ name, description, stock, provider_id, gross_amount, provider_name }));
    navigate('/QuotaPage');
  }

  return (
    <div>
      <Card className="cardQuota">
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
          <label>Description</label>
          <div>
            <input 
            type="text" 
            className="input" 
            placeholder="Description"
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            />
          </div>
        </div>
        <div className="inputEdit">
          <label>Stock</label>
          <div>
            <input 
            type="text" 
            className="input" 
            placeholder="Stock" 
            value={stock} 
            onChange={(e) => setStock(e.target.value)}
            />
          </div>
        </div>
        <div className="inputEdit">
          <label>Provider Id</label>
          <div>
            <input 
            type="text" 
            className="input" 
            placeholder="Provider Id"
            value={provider_id} 
            onChange={(e) => setProvider_id(e.target.value)} 
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
          <label>Provider Name</label>
          <div>
            <input 
            type="text" 
            className="input" 
            placeholder="Provider Name"
            value={provider_name} 
            onChange={(e) => setProvider_name(e.target.value)} 
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

export default AddQuota;
