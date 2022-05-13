import React from 'react';
import axios from 'axios';
import './avatar.css'
import logoo from './logoo.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ACTION_setUser } from '../../../redux/actions/userActions';
import { THUNK_getUserInfo } from '../../../redux/thunk/thunkUserInfo';
import { Button, Form} from "react-bootstrap";

function Avatar() {
  const [img, setImg] = React.useState(null)
  const [avatar, setAvatar] = React.useState(null)
  const user = useSelector(s => s.user)
  const dispatch = useDispatch();

  useEffect (async()=>{
    if (user?.id){

      const res = await axios.get(`http://localhost:3001/avatar/${user.id}`)
      setAvatar(res.data?.img)
    }

  }, [user])

  const sendFile = React.useCallback(async () => {
    try {
      const data = new FormData()
      data.append('img', img)
      await axios.post(`http://localhost:3001/avatar/${user.id}`, data, {
        headers: {
          'content-type': 'mulpipart/form-data'

        }

      })
      const res = await axios.get(`http://localhost:3001/avatar/${user.id}`)
    setAvatar(res.data.img)
    dispatch(THUNK_getUserInfo(user?.id));
      
    } catch (error) {
      console.log(error);
    }
  }, [img])

  return (

      <div className="avatar">
        {
          avatar
          ? <img className="logo" src={`http://localhost:3001/img/${avatar}`} alt="avatar" />
          : <img className="logo" src={`${logoo}`} alt="avatar" />
        
        }
  <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>{user?.name}</Form.Label>
    
    <Form.Control type="file" size="sm" className='inputAva'  onChange={e => setImg(e.target.files[0])} />
  </Form.Group>
      {/* <input type="file"  onChange={e => setImg(e.target.files[0])} /> */}
      <Button className='btn1' variant="outline-success " onClick={sendFile}>Изменить аватар</Button>
      </div>
    
  );
}

export default Avatar;
