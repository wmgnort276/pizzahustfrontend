import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Infor from './Infor';

function App({user, email}) {
  const [error, setError] = useState('');
  let data = {}
  var url_post = 'http://127.0.0.1:8000/profile/';
  const postApi = (userInp) => {
    var e = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInp),
    };
    fetch(url_post, e)
      .then((res) => {
        if(res.ok) {
          res.json()
        }else{
          alert("Khong thanh cong")
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const Login = (details) => {
    // if(userDatas.some(e =>
    //    (e.email == details.email && e.username == details.password))
    //    )
    if (
      details.userName !== '' &&
      details.phoneNumber !== '' &&
      details.address !== '' &&
      details.dob !== ''
    ) {
      data = {
        user: user,
        name: details.userName,
        number_phone: details.phoneNumber,
        address: details.address,
        pub_date: details.dob,
        email: email,
        image: null,
      }
      console.log(data);
      postApi(data);
      // setTimeout(() => {
      //     navigate('/home', { replace: true });
      //   }, 1000);
      // },[])
      setError('No error');
    } else {
      // console.log("Infor not correct");
      setError('error');
    }
  };

  const navigate = useNavigate();
  function Done() {
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 1200);
  }

  return (
    <div className="App">
      {error === 'No error' ? Done() : <Infor Login={Login} error={error}/>}
    </div>
  );
}

export default App;
