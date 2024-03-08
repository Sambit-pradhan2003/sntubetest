import { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
// import Test1 from "./Test1"


function Test() {
    const [email,setEmail]=useState()
    const [username,setusername]=useState()
    const [password,setpassword]=useState()
    const[loggedin,setlogedin]=useState(false)
    const navigate = useNavigate()
    
    const [count, setCount] = useState()
  const [count1, setCount1] = useState()

  const  hsubmit=async()=>{
    
    
    try {
       const response= await axios.post("/api/v1/users/login",{
          "username":username,
          "email":email,
          "password":password


        //   "username":"sambitp",
        //   "email":"snd2003.com",
        //   "password":"12345"
        })
        const count2=await response.data;
        setCount(count2);
        console.log(count)
        if(count!==undefined&&count!==null){
          setlogedin(true)
          console.log(loggedin)
      }
      
      
      if(loggedin){
        navigate('/test1')
      }
        
    } catch (error) {
        // console.log("error fetching data",error)
    }
  }




  const curentuser=async ()=>{
    
   try {
    const response=await axios.get("/api/v1/users/currentuser")
    if (response.data && response.data.data && response.data.data.username) {
        setCount1(response);
        console.log(count1);
        console.log("User's username:", count1.data.data.username)}
     

   } catch (error) {
    console.log("error fetching data",error)
    
   }
  }
  
  return (
    <div>
    {/* {loggedin?<Redirect to="/Test1"/>:console.log("null")}
      <h1>sn</h1> */}

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email"value={email} onChange={(e) => setEmail(e.target.value)}  required />

      <label htmlFor="username">Username</label>
      <input type="username" name="username" id="username"value={username} onChange={(e) => setusername(e.target.value)}  required />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password"value={password} onChange={(e) => setpassword(e.target.value)}  required />

    <button  onClick={hsubmit}>submit</button>
    <button  onClick={curentuser}>curentuser</button>
    </div>
  )
}

export default Test
