import React, { useEffect } from "react";
import { useState } from "react";
import { ButtonGroup, FormGroup, Card, Form, ListGroup, ListGroupItem, ToggleButton, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import History from "./History";
import { THUNK_editUserInfo, THUNK_getUserInfo } from '../../redux/thunk/thunkUserInfo'
import Avatar from "./Avatar/Avatar";

import "./personal.css"
// const divStile = {maxWidth:'700px',
// height:'40vh'
// }



function PersonalAcc(props) {
  const user = useSelector((state) => state.user);
  const [name, setName] = useState(user?.name);
  const [telephone, setTelephone] = useState(user?.telephone);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const [passport, setPassport] = useState(user?.passport);
  const [number, setNumber] = useState(user?.number);
  const [avto, setAvto] = useState(user?.avto);


  useEffect(() => {
    setName(user?.name);
    setTelephone(user?.telephone);
    setAge(user?.age);
    setGender(user?.gender);
    setPassport(user?.passport);
    setNumber(user?.number);
    setAvto(user?.avto);
  }, [user]);


  const dispatch = useDispatch();

  const nameHandler = (e) => setName(e.target.value);
  const telephoneHandler = (e) => setTelephone(e.target.value);
  const ageHandler = (e) => setAge(e.target.value);
  const genderHandler = (e) => setGender(e.target.value);
  const passportHandler = (e) => setPassport(e.target.value);
  const numberHandler = (e) => setNumber(e.target.value);
  const avtoHandler = (e) => setAvto(e.target.value);



  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      THUNK_editUserInfo({
        name,
        telephone,
        age,
        gender,
        passport,
        number,
        avto,
        userId: user.id,
      })
    );
  };

  useEffect(() => {
    dispatch(THUNK_getUserInfo(user?.id));
  }, []);
 

  return (
<>

    <div className="allInfo">
      <History/>
  

    <div className="personallAc">
     <Form onSubmit={submitHandler} className="mt-5 per">
    <div>
      <Avatar/>
    </div>

    
     <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label> Фамилия Имя</Form.Label>
            <Form.Control
              type="text"
              
              onChange={nameHandler}
              value={name}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
     <Form.Group className="mb-1" controlId="formBasicNumber">
            <Form.Label> Номер Телефона</Form.Label>
            <Form.Control
              type="text"
           
              onChange={telephoneHandler}
              value={telephone}
              />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
     <Form.Group className="mb-1" controlId="formBasicAge">
            <Form.Label> Возраст</Form.Label>
            <Form.Control
              type="text"
          
              onChange={ageHandler}
              value={age}
              />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <ListGroupItem>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onChange={genderHandler}
                  value={"М"}
                  checked={gender === "М"}
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
                  checked={gender === "Ж"}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Ж
                </label>
              </div>
            </ListGroupItem>
          <Form.Group className="mb-1" controlId="formBasicPas">
            <Form.Label> Номер Паспорта</Form.Label>
            <Form.Control
              type="text"
            
              onChange={passportHandler}
              value={passport}
              />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicNumLi">
            <Form.Label> Водительское Удостоверение</Form.Label>
            <Form.Control
              type="text"
              
              onChange={numberHandler}
              value={number}
              />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicAvto">
            <Form.Label> Номер Автомобиля</Form.Label>
            <Form.Control
            
              type="text"
            
              onChange={avtoHandler}
              value={avto}
              />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <button type="submit" id="but" class="btn btn-outline-success">Сохранить</button>
          </Form>
          </div>
  </div>
              </>



/* <>
    <div className="history">
      <History/>
    </div>
    </>
    
    
    <div className="personAcc">
        <Card style={{ height: '18rem' }}> </Card>
    </div>
        <form onSubmit={submitHandler}>
    </>
        <>
        <Avatar />
        </>
 
            <ListGroupItem>
              <div className="mb-1">
                <label htmlFor="exampleInputName1" className="form-label">
                  ФИО
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName1"
                  aria-describedby="nameHelp"
                  onChange={nameHandler}
                  value={name}
                />
              </div>
            </ListGroupItem>
            <ListGroupItem>
              <div className="mb-1">
                <label htmlFor="exampleInputNumber1" className="form-label">
                  Номер Телефона
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputNumber1"
                  aria-describedby="numberHelp"
                  onChange={telephoneHandler}
                  value={telephone}
                />
              </div>
            </ListGroupItem>

            <ListGroupItem>
              <div className="mb-1">
                <label htmlFor="exampleInputAge1" className="form-label">
                  Возраст
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputAge1"
                  aria-describedby="ageHelp"
                  onChange={ageHandler}
                  value={age}
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
                  checked={gender === "М"}
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
                  checked={gender === "Ж"}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Ж
                </label>
              </div>
            </ListGroupItem>
            <ListGroupItem>
              <div className="mb-1">
                <label htmlFor="exampleInputPassport1" className="form-label">
                  Номер паспорта
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassport1"
                  aria-describedby="PassportHelp"
                  onChange={passportHandler}
                  value={passport}
                />
              </div>
            </ListGroupItem>

            <ListGroupItem>
              <div className="mb-1">
                <label htmlFor="exampleInputPassport1" className="form-label">
                  Водительское удостоверение
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassport1"
                  aria-describedby="PassportHelp"
                  onChange={numberHandler}
                  value={number}
                />
              </div>
            </ListGroupItem>
            <ListGroupItem>
              <div className="mb-1">
                <label htmlFor="exampleInputPassport1" className="form-label">
                  Номер автомобиля
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassport1"
                  aria-describedby="PassportHelp"
                  onChange={avtoHandler}
                  value={avto}
                />
              </div>
            </ListGroupItem>
     
            <button type="submit" class="btn btn-outline-success"> Сохранить</button>
          </form>
        
      </div>
        
    
</> */
  );
}

export default PersonalAcc;
