import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  


  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    
  };

  const userApi = "http://127.0.0.1:8000/api/register/";

  const postApi = (userInp) => {
    var e = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInp)
    }
    fetch(userApi, e)
      .then(res => res.json());
  }

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
        var [a,b,c] = [values.username, values.email,values.password];
        var userInp = {
          username: a,
          email: b,
          password: c
        }
        console.log(userInp);  // nhận được kết quả
        console.log(values);
        postApi(userInp);
        // setTimeout(() => {
        //     navigate('/home', { replace: true });
        //   }, 1000);
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;