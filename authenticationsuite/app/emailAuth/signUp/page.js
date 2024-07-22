"use client"
import { useState } from "react";
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "@/app/firebase";
export default function SignUp() {
    const [input ,setInput] = useState({
        email:"",
        password:""
    })
    const [data ,setData] = useState([])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    
    const auth = getAuth(app)

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, input.email, input.password);
          const user = userCredential.user;
          console.log("User signed up:", user);
          setData([...data, input]);
          console.log("Email:", input.email);
          console.log("Password:", input.password);
          // Clear the input fields
          setInput({
            email: "",
            password: ""
          });
        } catch (error) {
          console.error("Error signing up:", error.code, error.message);
        }
      };

    return (
      <>
       
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight  text-indigo-600">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={submitHandler} method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6  text-indigo-600">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={input.email}
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-indigo-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6  text-indigo-600">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={input.password}
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5  text-indigo-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  