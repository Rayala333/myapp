import React from 'react';
import { NavLink } from 'react-router-dom';


const Home = (props) => {
    const navdata = [
                    {
                        name:"section",
                        link:"/"
                    },
                    {
                        name:"about",
                        link:"/about"
                    }
                ]
  return (
    <>
    <header>
       {/* <Link to='/'>Section</Link>
       <Link to='/about'>About</Link> */}
       {
        navdata.map((e,i)=>(
            <div style={{display:"flex",border:"1px solid black",margin:"10px"}}>
                <NavLink to={e.link} key={i} style={{width:"100px",}} >{e.name}</NavLink>
            </div>
            
        ))
       }
    </header>
    <section>
            {props.children}
    </section>

    </>
   
  )
}

export default Home