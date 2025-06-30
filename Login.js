import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost/crm-backend/api/login.php', {
        email,
        password,
      });
      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
      } else {
        alert('Invalid login');
      }
    } catch (error) {
      console.error(error);
      alert('Server error');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl mb-4 font-bold">Admin Login</h2>
      <input type="email" className="border p-2 mb-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="border p-2 mb-4" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLogin}>Login</button>
    </div>
  );
}
