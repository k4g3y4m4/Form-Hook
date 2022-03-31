import React, { useState } from 'react';
import FormUser from './Components/FormUser';
import ResultUser from './Components/ResultUser';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });


  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-md-6 py-1'>
          <FormUser inputs={user} setInputs={setUser}/>
        </div>
        <div className='col-md-6 py-1'>
          <ResultUser data={user}/>
        </div>
      </div>
    </div>
  );
}

export default App;