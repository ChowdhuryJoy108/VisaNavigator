import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UserApplicationCard = ({visaDetails,setIsModalOpen}) => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    visaDetails,
    email: visaDetails?.user,
    firstName: "",
    lastName: "",
    appliedDate: new Date().toISOString().split("T")[0], // Current date
    fee: visaDetails?.fee,
    logInUser: user?.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://visa-navigator-server-wheat.vercel.app/applyVisa',{
        method:'POST',
        headers:{
          "content-type": "application/json",
        },
        body:JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
     
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Visa Application successfull!',
                icon: 'success',
                confirmButtonText: 'Close'
              })
              setIsModalOpen(false)
              navigate('/myVisaApplications')
        }
    }).catch(err => {
        Swal.fire({
            title: 'Error!',
            text: 'Visa Application Failed!',
            icon: 'error',
            confirmButtonText: 'Close'
          })
          setIsModalOpen(false)
    })

  };
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Apply for Visa</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.visaDetails.user}
            readOnly
            className="w-full border border-gray-300 rounded-lg p-2 bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Applied Date
          </label>
          <input
            type="date"
            name="appliedDate"
            value={formData.appliedDate}
            readOnly
            className="w-full border border-gray-300 rounded-lg p-2 bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Fee</label>
          <input
            type="number"
            name="fee"
            value={formData.fee}
            required
            placeholder="Re-Enter visa fee from visa card"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            
          />
        </div>
        <button
          type="submit"
          className="w-full btn btn-success text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default UserApplicationCard;
