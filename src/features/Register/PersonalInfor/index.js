import React from 'react';
import App from './App';

function PersonnalInfor({user, email}) {
  return (
    <div>
      <App user={user} email={email}/>
    </div>
  );
}

export default PersonnalInfor;
