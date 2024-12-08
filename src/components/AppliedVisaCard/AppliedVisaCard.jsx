import React from "react";
import Swal from "sweetalert2";

const AppliedVisaCard = ({
  application,
  applications,
  setApplications,
}) => {
  const { _id, firstName, lastName, appliedDate, logInUser } = application;
  const {
    countryImage,
    countryName,
    visaType,
    processingTime,
    fee,
    validity,
    applicationMethod,
  } = application.visaDetails;

  const handleDeleteApplication = (id) => {
 
    fetch(`https://visa-navigator-server-wheat.vercel.app/deleteApplication/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
       
        if (data.deleteCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Application Cancelled successfully!",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
        const remaining = applications.filter(
          (appli) => appli._id !== id
        );
        setApplications(remaining);
      });
  };
  return (
    <div className="card bg-base-100 w-full shadow-xl lg:w-96">
      <figure className="px-10 pt-10">
        <img src={countryImage} alt="Country Image" className="rounded-xl" />
      </figure>
      <div className="card-body items-start space-y-2">
        <h2 className="card-title">Country Name : {countryName}</h2>
        <p>Visa Type : {visaType}</p>
        <p>Processing Time : Approx. {processingTime} Days</p>
        <p>Visa Fee: ${fee} </p>
        <p>Validity : For {validity} Months.</p>
        <p>Applied Date : On {appliedDate}</p>
        <p>Application Method : {applicationMethod}</p>
        <p>
          Applicant's Name :{firstName} {lastName}
        </p>
        <p>Applicant's Email : {logInUser}.</p>
        <div className="card-actions">
          <button
            onClick={() => handleDeleteApplication(_id)}
            className="btn btn-success text-white"
          >
            Cancel Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppliedVisaCard;
