import React, { useState } from 'react';
import FormSignup from './RegistForm';
import PersonnalInfor from './PersonalInfor'

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  console.log(user)
  return (
    <div className="form-container">
      {!isSubmitted ? <FormSignup submitForm={submitForm} setUser={setUser} setEmail={setEmail}/> : <PersonnalInfor user={user} email={email}/>}
    </div>
  );
};

export default App;
