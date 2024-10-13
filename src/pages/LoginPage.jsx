import React, { useEffect } from 'react'
import LoginForm from '../components/login-signup components/LoginForm';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';

function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        navigate('/signedin');
      }
    });
  }, [navigate]);

  return (
    <div>
      <LoginForm />
    </div>
  )
}

export default LoginPage;