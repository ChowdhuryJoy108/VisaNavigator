import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import AppliedVisaCard from "../../components/AppliedVisaCard/AppliedVisaCard";

const MyVisaApplications = () => {
  const { user } = useContext(AuthContext);
  const loadedVisaApplications = useLoaderData();
  const [allVisaApplications, setAllVisaApplications] = useState(
    loadedVisaApplications
  );
  const filteredApplications = allVisaApplications.filter(
    (application) => application.logInUser === user?.email
  );
  const [applications, setApplications] = useState(filteredApplications);
  const [search, setSearch] = useState("");
  console.log(search);

  useEffect(() => {
    fetch(`http://localhost:8080/allApplications?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => setApplications(data));
  }, [search]);
  return (
    <div className="px-2">
      <h1>This is my Visa Applications page! </h1>
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
