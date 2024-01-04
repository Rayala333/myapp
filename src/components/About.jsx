import React, { useState } from 'react'
import Home from './Home'

const About = () => {
  const [user,setUser] = useState({
    name:"",
    email:"",
    password:''
  })
  const [data,setData] = useState([])
  const [index,setIndex] = useState(null)
  console.log(index)
  const changeHandler = (e)=>{
      setUser({...user,[e.target.name]:e.target.value})
  }
  const submiHandler = (e)=>{
        e.preventDefault()
        console.log(user)
        if(index !==null){
              const updateData = [...data]
              updateData[index]=user
              setData(updateData)
              setIndex(null)
              setUser({
                name:"",
                email:""
              })
        }else{
          const myuser = [...data,user]
            setData(myuser)
            setUser({
              name:"",
              email:"",
              password:""
            })

        }
        
  }
  const editeHandler = (e,i)=>{
      setUser({name:e.name,email:e.email})
      setIndex(i)
  }
  const deleteHandler = (Index)=>{
     let mydelete = data.filter((e,i)=>i!==Index)
     setData(mydelete)
     console.log(mydelete)
  }
  return (
    <Home>
        <form style={{marginLeft:'200px'}} onSubmit={submiHandler}>
          <input type='text' name='name' value={user.name} onChange={changeHandler} placeholder='name' /><br/><br/>
          <input type='email' name='email' value={user.email} onChange={changeHandler} placeholder='email' /><br/><br/>
          <input type='password' name='password' value={user.password} onChange={changeHandler} placeholder='password' /><br/><br/>
          <input type='submit' value="submit" />
        </form>
        <div style={{display:"flex",justifyContent:"center"}}>
          {
            data.map((e,i)=>(
              <div style={{width:"300px"}}>
                <p>{e.name}</p> 
                <p>{e.email}</p>
                <button onClick={()=>editeHandler(e,i)}>edit</button>
                <button onClick={()=>deleteHandler(i)}>Delete</button>
              </div>
            ))
          }
        </div>
    </Home>
  )
}

export default About