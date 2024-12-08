import { useState } from "react";
import { useLoaderData, useNavigate} from "react-router-dom";
import UserApplicationCard from "../../components/UserApplicationCard/UserApplicationCard";

const SeeDetails = () => {
  const navigate= useNavigate()
  const visaData = useLoaderData();
  const [visaDetails, setVisaDetails] = useState(visaData);
 
  const { countryImage, countryName, visaType, processingTime, fee, validity } = visaDetails;

  const [isModalOpen, setIsModalOpen] = useState(false);

 
  const handleApplyForVisa = () =>{
    setIsModalOpen(true)
  }
  return (
    <div className="px-2">
      <div className="flex flex-col space-y-4 items-center my-[50px]">
        <h1 className="text-xl text-center font-bold lg:text-4xl">
          "Visa Navigator – Your Gateway to the World."
        </h1>
        <p className="w-full text-base text-center text-gray-600 lg:w-[700px]">
          Get precise visa information, requirements, and guidance for all types
          of visas. Simplify your journey with trusted details and expert
          support.
        </p>
      </div>
      <div className="card flex-col w-full  card-side bg-base-100 shadow-xl my-[50px] lg:w-[800px] mx-auto lg:flex-row">
        <figure >
          <img
            src={countryImage}
            alt="Movie"
            className="w-full lg:w-[400px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Country Name : {countryName}</h2>
          <p>Visa Type : {visaType}</p>
          <p>Processing Time : {processingTime} days</p>
          <p>Visa Type : {visaType}</p>
          <p>Visa Fee : ${fee}</p>
          <p>Visa Validity : For {validity} Months.</p>
          <div className="card-actions justify-start">
            <button onClick={handleApplyForVisa} className="btn btn-success">
              Apply For Visa
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed z-20 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="modal modal-open">
          <div className="modal-box">
            <UserApplicationCard  setIsModalOpen={setIsModalOpen} visaDetails={visaDetails}/>        
          </div>
        </div>
      </div>
     )}
    </div>
  );
};

export default SeeDetails;
