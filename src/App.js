import "./App.css"
import React, { useState } from 'react';


function App()
{
  const[name,setName]=useState("");
  const[number,setNumber]=useState("");
  const[email,setemail]=useState("");
  const[date,setdate]=useState();
  const[gender,setgender]=useState("");
  const[status,setstatus]=useState("");
  const[age,setage]=useState();



  return(
    <div className="App" >
      <hi>hello world</hi>
      <input type="text" placeholder="name" value={name} onChange={(event)=>setName(event.target.value)}/>
      <input type="number" placeholder="number" value={number} onChange={(event)=>setNumber(event.target.value)}/>
      <input type="email" placeholder="email" value={email} onChange={(event)=>setemail(event.target.value)}/>
      <input type="DATE" placeholder="DATE" value={date} onChange={(event)=>setdate(event.target.value)}/>
      <input type="number" placeholder="AGE" value={age} onChange={(event)=>setage(event.target.value)}/>
      <input type="text" placeholder="GENDER" value={gender} onChange={(event)=>setgender(event.target.value)}/>
      <input type="text" placeholder="STATUS" value={status} onChange={(event)=>setstatus(event.target.value)}/>
      <div>
        <h1>name:{name}</h1>
        <h1>number:{number}</h1>
        <h1>email:{email}</h1>
        <h1>date:{date}</h1>
        <h1>age:{age}</h1>
        <h1>gender:{gender}</h1>
        <h1>status:{status}</h1>

      </div>

    </div>
    

  )
  
}
export default App;