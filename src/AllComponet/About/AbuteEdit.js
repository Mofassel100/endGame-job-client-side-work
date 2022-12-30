import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContext';


const AbuteEdit = () => {
  const { user, loader } = useContext(AuthContext)
  const data = useLoaderData()
  const {_id}=data;
  console.log(data);
  const navigate =useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname

  const [updatesData, setUpdateData] = useState()

  const handleEditInformation = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value;
    const university = form.university.value;
    const address = form.address.value;
    


    const aboutEdit = {
      name: name,
      university: university,
      address: address,
      service:_id,
    }
    console.log(aboutEdit,data);
    setUpdateData(aboutEdit)
    fetch("http://localhost:5000/about", {
      method: "PUT", headers: { "content-type": "application/json" },
      body: JSON.stringify(aboutEdit)
    }).then((res) => res.json()

    ).then((data) => {
      toast.success("Updata Success full")

      if(loader){
        return 
      }
    navigate("/aboute") })
      navigate(from, {replace:true});
    console.log(updatesData);
   
  }
  if (loader) {
    return <h1 className='text-5xl animate-bounce'>Loader </h1>
    
  }
  return (
    <div>
      <div className="hero  ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Infomation Update</h1>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleEditInformation} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" defaultValue={data?.name} name='name' placeholder="Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" readOnly defaultValue={user?.email} placeholder="Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Education</span>
                </label>
                <input type="text" defaultValue={data?.university} name='university' placeholder="Education" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input type="text" defaultValue={data?.address} name='address' placeholder="addree" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbuteEdit;