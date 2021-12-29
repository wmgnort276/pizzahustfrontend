import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';

function App() {
  const [userDatas, setUserDatas] = useState([]);
  const userApi = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    fetch(userApi)
      .then((respone) => respone.json())
      .then((userData) => {
        setUserDatas(userData);
        // console.log(userDatas);
      });
  }, []);

  const [error, setError] = useState('');

  const Login = (details) => {
    console.log(details);

    if (
      userDatas.some(
        (e) => e.email === details.email && e.username === details.password
      )
    ) {
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
