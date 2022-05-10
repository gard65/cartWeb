import React from 'react';
import axios from 'axios';
import './avatar.css'
import logoo from './logoo.png';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Avatar() {
  const [img, setImg] = React.useState(null)
  const [avatar, setAvatar] = React.useState(null)
  const user = useSelector(s => s.user)

  useEffect (async()=>{
    if (user.id){

      const res = await axios.get(`http://localhost:3001/avatar/${user.id}`)
      setAvatar(res.data.img)
    }

  }, [])

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
      
    } catch (error) {
      console.log(error);
    }
  }, [img])

  return (
    <div className='PersonalAcc'>
      <div className="avatar">
        {
          avatar
          ? <img className="logo" src={`http://localhost:3001/img/${avatar}`} alt="avatar" />
          : <img className="logo" src={`${logoo}`} alt="avatar" />
        
        }

      </div>
      <input type="file" onChange={e => setImg(e.target.files[0])} />
      <button className='btn' onClick={sendFile}>Изменить аватар</button>
    </div>
  );
}

export default Avatar;
