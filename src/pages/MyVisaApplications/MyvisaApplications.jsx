import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import AppliedVisaCard from "../../components/AppliedVisaCard/AppliedVisaCard";

const MyVisaApplications = () => {
  const { user } = useContext(AuthContext);
 
  const [applications, setApplications] = useState([]);
  useEffect(()=>{
    fetch('https://visa-navigator-server-wheat.vercel.app/allApplications')
    .then(res => res.json())
    .then(data => {
        const filterData = data.filter(appli => appli?.logInUser === user?.email)
        setApplications(filterData)
    })
    
  },[])

  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(`https://visa-navigator-server-wheat.vercel.app/allApplications?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => {
        const filterData = data.filter(appli => appli?.logInUser === user?.email)
        setApplications(filterData)
      });
  }, [search]);
  return (
    <div className="px-2">
      <div className="flex flex-col items-center gap-4 my-[50px]">
        <h1 className="text-xl text-center font-bold lg:text-4xl">Seamless Management for Your Visa Applications.</h1>
        <p className="text-center w-full text-gray-600 lg:w-[700px]">Manage your visa applications effortlessly. View all your applied visas, track progress, and cancel applications easily. Stay in control with a user-friendly experience.</p>
      </div>
      <div className="flex justify-center mb-10">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          placeholder="Search your Applications...."
          className="input input-bordered w-full max-w-lg"
        />
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {applications.map((application) => (
          <AppliedVisaCard
            key={application._id}
            application={application}
            applications={applications}
            setApplications={setApplications}
          />
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplications;
