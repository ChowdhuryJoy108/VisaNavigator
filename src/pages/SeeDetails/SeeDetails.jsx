import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SeeDetails = () => {
  // const {id } = useParams()
  const visaData = useLoaderData();
  const [visaDetails, setVisaDetails] = useState(visaData)
  console.log(visaData);
  console.log(visaDetails);
  const {countryName, visaType, processingTime, fee, validity} = visaDetails
  return (
    <div className="card card-side bg-base-100 shadow-xl w-[800px] mx-auto">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Country Name : {countryName}</h2>
        <p>Visa Type : {visaType}</p>
        <p>Processing Time : {processingTime} days</p>
        <p>Visa Type : {visaType}</p>
        <p>Visa Fee : ${fee}</p>
        <p>Visa Validity :  For {validity} Months.</p>
        <div className="card-actions justify-start">
          <button className="btn btn-success">Apply For Visa</button>
        </div>
      </div>
    </div>
  );
};

export default SeeDetails;
