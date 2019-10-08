import React, { useState } from 'react';
import { LoginForm, RegisterForm } from './components';

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  if (isRegister) {
    return <RegisterForm />;
  }

  return <LoginForm />;
}

export default Login;
