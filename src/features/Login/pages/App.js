import axios from 'axios';
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';

function App() {
  const [token, setToken] = useState();
  // const userApi = 'http://127.0.0.1:8000/api/login/';

  const [error, setError] = useState('');

  const Login = (details) => {
    axios
      .post('http://127.0.0.1:8000/api/login/', {
        username: details.userName,
        password: details.password,
      })
      .then((respond) => {
        setToken(respond.data);
      })
      .catch((error) => {
        console.log(error);
      });

    if (token) {
      console.log(token);
      setError('No error');
    } else {
      // console.log("Infor not correct");
      setError('error');
    }
  };

  const navigate = useNavigate();
  function Nav() {
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 1200);
  }

  return (
    <div className="App">
      {error === 'No error' ? Nav() : <LoginForm Login={Login} error={error} />}
    </div>
  );
}

export default App;
