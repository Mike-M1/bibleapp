import React, { useEffect } from 'react'
import "../index.css"
import { useState } from 'react';
import mongoose from 'mongoose'
import axios from 'axios';


export default function Credentials() {

//  async function connectDB() {
//    const conn = new MongoClient(import.meta.env.VITE_REACT_APP_MONGO_URL);
//    const data = await conn.db().collection("People").find({}).toArray();
//    return data;
//  }
let [dbinfo, setDbinfo] = useState("")
let [newPerson, setNewPerson] = useState(null)


let [event1, setEvent] = useState("")
  

function update_event(e){
    e.preventDefault()
    let person = {
      email: e.target[0].value,
      password: e.target[1].value,
      name: "Mike"
    };
    setNewPerson(person)
    
    
  }

useEffect(() => {
    if (newPerson !== null) {
      axios
        .post("https://bibleapp-bz5q.onrender.com/createuser", { data: newPerson })
        .then(() => {
          console.log("good");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [newPerson])

  let [currentForm, setChangeForm1] = useState("")
  
  function updateForm(e){
    let formType = e.target.innerHTML
    setChangeForm1(formType)
    console.log(currentForm)
  }

  return (
    <div className='flex flex-col justify-center h-screen w-screen items-center'>

      <div className='flex flex-row mb-[200px]'>
        <button className='border-4 bg-slate-200 mr-[100px] text-[50px] p-[30px]' onClick={updateForm}>Log In</button>
        <button className='border-4 bg-slate-200 text-[50px] p-[30px]' onClick={updateForm}>Register</button>
      </div>



    {

      currentForm == "Log In" ? 
        <div id="LogIn" className="border-4 w-fit p-[20px] h-fit">
                <form action="/UserHome" className="flex flex-col">
                  <input type="email" name="Email" className="w-[100px] border-2" />
                  <input
                    type="password"
                    name="Password"
                    className="w-[100px] border-2"
                  />
                  <button type="submit">Log In</button>
                </form>
              </div>

      :
          <div id="Register" className="border-4 w-fit p-[20px] h-fit">
                  <form action="/UserHome" className="flex flex-col w-[200px]" onSubmit={update_event}>
                    <input
                      type="email"
                      name="Email"
                      placeholder="email"
                      className="w-fill border-2 flex flex-col items-center"
                    />

                    <input
                      type="password"
                      name="Password"
                      placeholder="Password"
                      className="w-[100px] border-2"
                    />

                    <input
                      type="password"
                      placeholder="Password"
                      name="confirmed"
                      className="w-[100px] border-2"
                    />
                    <button type="submit" onClick={(e)=>{e.preventDefault}} >Log In</button>
                  </form >
                </div>

    }

      
    </div>
  );
}
