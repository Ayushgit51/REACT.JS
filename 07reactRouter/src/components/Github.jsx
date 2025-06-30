/* eslint-disable react-refresh/only-export-components */
//import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()


    // const[data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Ayushgit51')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data);
    //     })
    // },[])


    return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/15 lg:w-5/24">
            <img
            className="w-60 h-60"
            src={data.avatar_url}
            alt="Github Profile"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-orange-600 font-bold md:text-4xl">
              {data.name}
            </h2>
            <p className="mt-6 text-green-600 text-2xl">
              Github Followers: {data.followers}
            </p>
            <p className="mt-4 text-gray-600">
              {data.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Ayushgit51')
    return response.json()
}