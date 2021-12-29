import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormSignup from './RegistForm';

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  const navigate = useNavigate();
  function Nav() {
    setTimeout(() => {
      navigate('/login', { replace: true });
    }, 1200);
  }

  return (
    <div className="form-container">
      {!isSubmitted ? <FormSignup submitForm={submitForm} /> : Nav()}
    </div>
  );
};

export default App;
