import { async } from '@firebase/util';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContext';
import ImgTexl from './ImgTexl';

const Home = () => {
  const { loader } = useContext(AuthContext)
  const [lod, setLoader] = useState(true)
  const datas = useLoaderData()
  console.log(datas);
  const handleSumbmitedPoText = (event) => {
    event.preventDefault()
    const form = event.target
    const image = form.image.files[0];
    const message = form.message.value;
    const formData = new FormData()
    formData.append('image', image)
    const url = "https://api.imgbb.com/1/upload?key=c63defed2745bf0e70e3c0473b8f50d5"

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        const img = data.data.display_url
        const ImgText = {
          img: img,
          message: message
        }
        console.log(ImgText);
        fetch("https://job-server-work.vercel.app/imageTextUploadeds", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(ImgText)
        })
          .then(res => res.json())
          .then(data => {
            setLoader(false)
            toast.success('riview data successfull ')
            form.reset()
          })
      })
    if (lod) {
      return <h1>Loading</h1>
    }
    setLoader(false)
  }

  return (
    <div className=''>
      <div>
      <div className="hero">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text">
            <h1 className="text-3xl font-bold">TEXT & Photo Uploads</h1>

          </div>
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleSumbmitedPoText} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-bold text-xl">Message </span>
                </label>
                <textarea required className="textarea textarea-success" name='message' placeholder="Bio"></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-bold text-xl">Image Choose</span>
                </label>
                <input type="file" required className="file-input file-input-bordered file-input-accent w-full max-w-xs" name='image' />

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
     
<div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-7'>
{
      datas.map(imgAnText=><><div className=' grid justify-center items-center'><ImgTexl imgAnText={imgAnText}></ImgTexl></div>

  
  
      </>)
     }

</div>

   
    </div>
  );
};

export default Home;