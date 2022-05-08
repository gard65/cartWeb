import React from "react";
import {useState} from 'react';
import {Card, ListGroup, ListGroupItem} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { THUNK_editUserInfo } from '../../redux/thunk/thunkUserInfo'
const divStile = {maxWidth:'700px',
height:'40vh'
}
function PersonalAcc(props) {
  const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('M');
    const [passport, setPassport] = useState('')
    const [number, setNumber] = useState('')
    const [avto, setAvto] = useState('')
    const userId = useSelector(state => state.user?.id)

    const dispatch = useDispatch() 

    const nameHandler = (e) => setName(e.target.value)
    const telephoneHandler = (e) => setTelephone(e.target.value)
    const ageHandler = (e) => setAge(e.target.value)
    const genderHandler = (e) => setGender(e.target.value)
    const passportHandler = (e) => setPassport(e.target.value)
    const numberHandler = (e) => setNumber(e.target.value)
    const avtoHandler = (e) => setAvto(e.target.value)

    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(THUNK_editUserInfo({name, telephone, age, gender, passport, number, avto, userId}))
     
    }
  return (
    <>
     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
      <form onSubmit={submitHandler}>

    <ListGroupItem>
    <div className="mb-3">
      <label htmlFor="exampleInputName1" className="form-label">ФИО</label>
      <input type="text" 
        className="form-control"
        id="exampleInputName1" 
        aria-describedby="nameHelp" 
        onChange={nameHandler}
        value={name}/>

    </div>
    </ListGroupItem>
    <ListGroupItem>
      <div className="mb-3">
    <label htmlFor="exampleInputNumber1" className="form-label">Номер Телефона</label>
    <input type="text" 
    className="form-control" 
    id="exampleInputNumber1"
    aria-describedby="numberHelp"
    onChange={telephoneHandler}
    value = {telephone}
    />
  </div>
  </ListGroupItem>

    <ListGroupItem>
      <div className="mb-3">
    <label htmlFor="exampleInputAge1" className="form-label">Возраст</label>
    <input type="text" 
    className="form-control" 
    id="exampleInputAge1"
    aria-describedby="ageHelp"
    onChange={ageHandler}
    value = {age}
    />
  </div>
  
  </ListGroupItem>
    <ListGroupItem>
      <div className="form-check">
  <input 
      className="form-check-input" 
      type="radio"
      name="flexRadioDefault" 
      id="flexRadioDefault1"
      onChange={genderHandler}
      value={"М"}
      checked={gender === 'М'} 
   />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
   М
  </label>
</div>
<div className="form-check">
  <input 
      className="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault2"
      onChange={genderHandler}
      value={"Ж"}
      checked={gender === 'Ж'} 
   />
  <label className="form-check-label" htmlFor="flexRadioDefault2">
   Ж
  </label> 
 </div>
  </ListGroupItem>
 <ListGroupItem>
   <div className="mb-3">
      <label htmlFor="exampleInputPassport1" className="form-label">Номер паспорта</label>
      <input type="text" 
        className="form-control"
        id="exampleInputPassport1" 
        aria-describedby="PassportHelp" 
        onChange={passportHandler}
        value={passport}/>

    </div>
 </ListGroupItem>

 <ListGroupItem>
      <div className="mb-3">
      <label htmlFor="exampleInputPassport1" className="form-label">Водительское удостоверение</label>
      <input type="text" 
        className="form-control"
        id="exampleInputPassport1" 
        aria-describedby="PassportHelp" 
        onChange={numberHandler}
        value={number}/>

    </div>
 </ListGroupItem>
 <ListGroupItem>
      <div className="mb-3">
      <label htmlFor="exampleInputPassport1" className="form-label">Номер автомобиля</label>
      <input type="text" 
        className="form-control"
        id="exampleInputPassport1" 
        aria-describedby="PassportHelp" 
        onChange={avtoHandler}
        value={avto}/>

    </div>
 </ListGroupItem>
 <ListGroup>
   </ListGroup>
 <ListGroup>

    </ListGroup>
    <button type="submit"> dsds</button>
      </form>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
    </>
  );
}

export default PersonalAcc;
