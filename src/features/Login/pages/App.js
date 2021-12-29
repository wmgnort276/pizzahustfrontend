import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import LoginForm from "./LoginForm"
import {useEffect} from 'react'
import HomePage from 'features/HomePage';

function App() {
   
 

  const [userDatas,setUserDatas] = useState([])
  const userApi = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    fetch(userApi)
      .then((respone) => respone.json())
      .then((userData) => {
        setUserDatas(userData);
        // console.log(userDatas);
      });
  }, []);

  const [user, setUser] = useState({ email: '' });
  const [error, setError] = useState('');

  const Login = (details) => {
    console.log(details);

    if (
      userDatas.some(
        (e) => e.email == details.email && e.username == details.password
      )
    ) {
      setError('No error');
    } else {
      // console.log("Infor not correct");
      setError('error');
    }
  }

  const navigate = useNavigate();
  function Nav(){

    setTimeout(() => {
      navigate('/home', { replace: true });
    }, 1200);
  }

  return (
    <div className="App">
    
      {(error === "No error") 
       ? Nav() 
       :
       (<LoginForm Login={Login} error={error}/>)
      }
    </div>
  );
}

export default App;