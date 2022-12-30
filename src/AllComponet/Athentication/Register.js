import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContext';
import { toast } from 'react-hot-toast';

const Register = () => {
    const{newUserCreate,loader} =useContext(AuthContext)
    const navigate =useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"
    const handleRegister =(event)=>{

        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password =  form.password.value;
       newUserCreate(email,password)
        .then((data)=>{
            console.log(data);
          navigate(from, {replace:true});

            toast.success("Login Success Fill Submited")
            form.reset()
        })
        .catch(error=>{
            console.log(error);

            toast.error(error.message)
        })
    }

    return (
        <div>
              <div className="hero min-h-screen bg-slate-600">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-white font-bold">Register now!</h1>
          
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' required placeholder=" Please Enter your Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' required placeholder="Please Enter password" className="input input-bordered" />
                <label className="label">
           
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <br/>
              <p>Are you New Register? Please <Link className='text-fuchsia-500' to='/login'>Login</Link></p>
            </form>
          </div>
        </div>
      </div>

        </div>
    );
};

export default Register;