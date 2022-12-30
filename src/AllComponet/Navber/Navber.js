import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import UseContext, { AuthContext } from '../../Context/UseContext';
// import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navber = () => {
//   const { LogOutUser, user,googleLogIn } = useContext(AuthContext)

// const googleLogin =()=>{

// //   googleLogIn()
//   .then(
//     result=>{
//       const user = result.user;

//       const usersdata ={
//         name:user.displayName,
//         email:user.email,
//         role:'buyer'
//       }
//       fetch('https://final-resale-project-assignment.vercel.app/usersInfo',{
//         method:"POST",
//         headers:{
//           "content-type":"application/json"
//         },
//         body:JSON.stringify(usersdata)
//       })
//       .then(result =>{
//         toast.success('Google Login Succefull')

//         console.log(result);
//       })
//       .catch(error=>{
//         toast.error(error.message)
//       })
//     }

//   )
//   .catch(error=>{
//     toast.error(error.message)
//   })
// }
const {user,logOutsPage}=useContext(AuthContext)
  const myInfo = <React.Fragment>
    
   
       
        <li><Link >{user?.displayName}</Link></li> 
        {
          user?.email?<> <li><Link ><button onClick={logOutsPage}>Log Out</button></Link></li></>:<>  <li> <Link to='/login'>Login</Link></li>
          <li><Link to='/register'>Register</Link></li> </>
        }        
      
     
    
    <li ><Link to='/'>Home</Link></li>
    <li ><Link to='/media'>Media</Link></li>
    <li ><Link to='/message'>Message</Link></li>
    <li ><Link to='/aboute'>Aboute</Link></li>
  </React.Fragment>
 
  return (
    <div>
       
        <div   className="navbar bg-red-200" >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {myInfo}

          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-cyan-400">RE-SALES MOTOR BIKE</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {
            myInfo
          }
        </ul>
      </div>
    
    </div>
    </div>
    


  //   <div className="navbar-end">
  //   <div className="navbar-end hidden lg:flex">
  //     <ul className="menu menu-horizontal p-0">
  //       {/* {
  //         deshbord
  //       } */}
  //     </ul>
  //   </div>

  //   <div className="dropdown">
  //     <label tabIndex={0} className="btn btn-ghost lg:hidden">
  //       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  //     </label>
  //     <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
  //       {/* {deshbord} */}
  //     </ul>
  //   </div>
  // </div>
  );
};

export default Navber;