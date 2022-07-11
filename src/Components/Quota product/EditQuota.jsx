import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuotas, quotaSelectors, updateQuota } from "../../features/QuotaSlice";
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from "react-bootstrap";
import "./EditQuota.css"


const EditQuota = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [provider_id, setProvider_id] = useState('');
  const [gross_amount, setGross_amount] = useState('');
  const [provider_name, setProvider_name] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const quotas = useSelector((state) => quotaSelectors.selectById(state, id));

  useEffect(() => {
    dispatch(getQuotas());
  },[dispatch]);

  useEffect(() => {
    if(quotas){
      setName(quotas.name);
      setDescription(quotas.description);
      setStock(quotas.stock);
      setProvider_id(quotas.provider_id);
      setGross_amount(quotas.gross_amount);
      setProvider_name(quotas.provider_name);}
  },[quotas]);

  const handleUpdatedQuota = (e) => {
    e.preventDefault();
    dispatch(updateQuota({id, name, description, stock, provider_id, gross_amount, provider_name}));
    navigate('/QuotaPage');
  }

  return (
    <div>
      
      <Card className="cardQuotaData">
      <Card.Body>
        <h3>Edit Data</h3>
        <hr></hr>
        <Form onSubmit={handleUpdatedQuota}>
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
          <label>Provider id</label>
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
          <Button variant="success" type="submit">Update</Button>
        </div>
      </Form>
      </Card.Body>
    </Card>
    
    </div>
  );
};

export default EditQuota;
