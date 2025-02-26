import {useState } from "react";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UpdateVisaForm = ({visaId, visa, setIsModalOpen}) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(visa);

  const visaTypes = [
    "Tourist visa",
    "Student visa",
    "Official visa",
    "Business visa",
    "Transit visa",
  ];

  const requiredDocumentsOptions = [
    "Valid passport",
    "Visa application form",
    "Recent passport-sized photograph",
    "Cover letter",
    "Bank statement",
  ];



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      let updatedDocuments = [...prev.requiredDocuments];
      if (checked) {
        updatedDocuments.push(value);
      } else {
        updatedDocuments = updatedDocuments.filter((doc) => doc !== value);
      }
      return {
        ...prev,
        requiredDocuments: updatedDocuments,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://visa-navigator-server-wheat.vercel.app/updateVisa/${visaId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Visa updated:", data);

      
        if(data.modifiedCount > 0){
            Swal.fire({
                title: 'Success!',
                text: 'Visa Updated successfully!',
                icon: 'success',
                confirmButtonText: 'Close'
              })
              setIsModalOpen(false);
              navigate('/allVisas')
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Error Updating Visa : ${error.message}`,
        })
        setIsModalOpen(false);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Update Visa</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Country Image */}
        <div>
          <label
            htmlFor="countryImage"
            className="block text-sm font-medium mb-2"
          >
            Country Image
          </label>
          <input
            type="text"
            name="countryImage"
            Value={formData.countryImage}
            onChange={handleChange}
            placeholder="Country Image"
            className="border p-2 rounded-md w-full"
          />
        </div>
        
        {/* Country Name */}
        <div>
          <label
            htmlFor="countryName"
            className="block text-sm font-medium mb-2"
          >
            Country Name
          </label>
          <input
            type="text"
            name="countryName"
            Value={formData.countryName}
            onChange={handleChange}
            placeholder="Country Name"
            className="border p-2 rounded-md w-full"
          />
        </div>

        {/* Visa Type */}
        <div>
          <label htmlFor="visaType" className="block text-sm font-medium mb-2">
            Visa Type
          </label>
          <select
            name="visaType"
            id="visaType"
            value={formData.visaType}
            onChange={handleChange}
            className="border p-2 rounded-md w-full"
          >
            {visaTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Processing Time */}
        <div>
          <label
            htmlFor="processingTime"
            className="block text-sm font-medium mb-2"
          >
            Processing Time (days)
          </label>
          <input
            type="number"
            name="processingTime"
            value={formData.processingTime}
            onChange={handleChange}
            placeholder="Processing Time"
            className="border p-2 rounded-md w-full"
          />
        </div>

        {/* Required Documents */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Required Documents
          </label>
          {requiredDocumentsOptions.map((document) => (
            <div
              key={document}
              className="flex items-center space-y-2 space-x-2"
            >
              <input
                type="checkbox"
                value={document}
                checked={formData.requiredDocuments.includes(document)}
                onChange={handleCheckboxChange}
                className="h-5 w-5"
              />
              <label className="text-sm">{document}</label>
            </div>
          ))}
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-2"
          >
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Visa description"
            className="border p-2 rounded-md w-full"
            rows="4"
          />
        </div>

        {/* Age Restriction */}
        <div>
          <label
            htmlFor="ageRestriction"
            className="block text-sm font-medium mb-2"
          >
            Age Restriction
          </label>
          <input
            type="number"
            name="ageRestriction"
            value={formData.ageRestriction}
            onChange={handleChange}
            placeholder="Age Restriction"
            className="border p-2 rounded-md w-full"
          />
        </div>

        {/* Fee */}
        <div>
          <label htmlFor="fee" className="block text-sm font-medium mb-2">
            Fee (in USD)
          </label>
          <input
            type="number"
            name="fee"
            value={formData.fee}
            onChange={handleChange}
            placeholder="Fee"
            className="border p-2 rounded-md w-full"
          />
        </div>

        {/* Validity */}
        <div>
          <label htmlFor="validity" className="block text-sm font-medium mb-2">
            Validity (months)
          </label>
          <input
            type="number"
            name="validity"
            value={formData.validity}
            onChange={handleChange}
            placeholder="Validity"
            className="border p-2 rounded-md w-full"
          />
        </div>

        {/* Application Method */}
        <div>
          <label
            htmlFor="applicationMethod"
            className="block text-sm font-medium mb-2"
          >
            Application Method
          </label>
          <input
            type="text"
            name="applicationMethod"
            value={formData.applicationMethod}
            onChange={handleChange}
            placeholder="Application Method"
            className="border p-2 rounded-md w-full"
          />
        </div>

        {/* Update Visa Button */}
        <div>
          <button
            type="submit"
            className="bg-success text-white py-2 px-4 rounded-md w-full"
          >
            Update Visa
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateVisaForm;
