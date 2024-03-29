'use client';

import React, { useState, useEffect } from "react";
import NavBar from "../nav";
import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:8000/user/login/?Content-Type=application/json', obj);
      console.log(response.data); 
      const accData = {
        id: response.data.id,

      }
      localStorage.setItem('accData', JSON.stringify(accData));
      localStorage.setItem('loggedIn', true);
      setEmail('');
      setPassword('');
      setError('');

      router.push('/dashboard');
      
    } catch (err) {
      console.error(err);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  useEffect(() => {
    const logged = localStorage.getItem("loggedIn");
    if (logged == "true"){
      router.push('/dashboard');
    }
    
  }, []); 

  return (

    <div>
      <NavBar />
      <div className="flex h-screen w-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">Sign in to your account</h2>
          {error && <p className="text-red-500 text-sm align-center">{error}</p>}
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium leading-6 text-white-900">Email address</label>
              <div className="mt-2">
                <input  id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-white-900">Password</label>
              <div className="mt-2">
                <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3" />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">Sign in</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link href="/register">
              <p className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register Now</p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
