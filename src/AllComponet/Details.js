import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/UseContext';

const Details = () => {
    const data = useLoaderData()

    var [count, setCount] = useState(0);
    const { loader } = useContext(AuthContext)
    const [idd, setid] = useState()
    console.log();

    const hadleLogingSubmit = (data, id) => {

        let all = data++;
        setCount(all);
        const updateLikeLove = {
            role: parseInt(count),
            servise: id

        }
        console.log(updateLikeLove, count);

        console.log(updateLikeLove);
        fetch('http://localhost:5000/loveLikes', {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateLikeLove)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    if (loader) {
        return <h1>Loader</h1>
    }
    return (
        <div>
            {
                data.map(imgtex => <><div >
                    { }
                </div>
                    <div key={imgtex?._id} className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={imgtex?.img} className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <p className="py-6 text-xl font-bold">{imgtex?.message}</p>
                                <div>
                                    <select name='value' onChange={(e, id) => hadleLogingSubmit(e.target.value)} className="select select-primary w-full max-w-xs">
                                        <option selected  >Youre Comments</option>
                                        <option value="1">Love</option>
                                        <option value="2">Like</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </>)
            }
            <div className="card-actions justify-center my-3">
                <button className="btn btn-primary"><Link to="/">Home</Link></button>
            </div>
        </div>
    );
};

export default Details;