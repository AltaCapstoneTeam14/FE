import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPulsas, pulsaSelectors, updatePulsa } from "../../features/PulsaSlice";
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from "react-bootstrap";
import "./EditPulsa.css"


const EditPulsa = () => {
  const [name, setName] = useState('');
  const [denom, setDenom] = useState('');
  const [stock, setStock] = useState('');
  const [provider_id, setProvider_id] = useState('');
  const [gross_amount, setGross_amount] = useState('');
  const [provider_name, setProvider_name] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const pulsa = useSelector((state) => pulsaSelectors.selectById(state, id));

  useEffect(() => {
    dispatch(getPulsas());
  },[dispatch]);

  useEffect(() => {
    if(pulsa){
      setName(pulsa.name);
      setDenom(pulsa.denom);
      setStock(pulsa.stock);
      setProvider_id(pulsa.provider_id);
      setGross_amount(pulsa.gross_amount);
      setProvider_name(pulsa.provider_name);}
  },[pulsa]);

  const handleUpdated = (e) => {
    e.preventDefault();
    dispatch(updatePulsa({id, name, denom, stock, provider_id, gross_amount, provider_name}));
    navigate('/PulsaPage');
  }

  return (
    <div>
      
      <Card className="cardEdit">
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
          <label>Denom</label>
          <div>
            <input 
            type="text" 
            className="input" 
            placeholder="Denom"
            value={denom} 
            onChange={(e) => setDenom(e.target.value)} 
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

export default EditPulsa;
