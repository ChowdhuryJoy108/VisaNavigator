import { useState } from "react";
import UpdateVisaForm from "../UpdateVisaForm/UpdateVisaForm";

const MyAddedVisaCard = ({visa, myAddedvisas, setMyAddedVisas
}) => {
  const {
    _id,
    CountryImage,
    countryName,
    visaType,
    processingTime,
    fee,
    validity,
  } = visa;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  
  const handleDelete = (id) =>{
        console.log(id);
        fetch(`http://localhost:8080/delete/${id}`,
          {
            method:'DELETE',
            headers:{

              'content-type':'application/json'
            }
          }
        )
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.deleteCount > 0){
            Swal.fire({
              title: 'Success!',
              text: 'Visa Deleted successfully!',
              icon: 'success',
              confirmButtonText: 'Close'
            })
            const remaining = myAddedvisas.filter(myVisa => myVisa._id !== _id);
            console.log(remaining);
            setMyAddedVisas(remaining)
          }
        })
  }
  return (
    <div className="card bg-base-100 w-full shadow-xl lg:w-96">
      <figure className="px-10 pt-10">
        <img src={CountryImage} alt="Country Image" className="rounded-xl" />
      </figure>
      <div className="card-body items-start space-y-2">
        <h2 className="card-title">Country Name : {countryName}</h2>
        <p>Visa Type : {visaType}</p>
        <p>Processing Time : Approx. {processingTime} Days</p>
        <p>Visa Fee: ${fee} </p>
        <p>Validity : For {validity} Months.</p>
        <div className="card-actions">
         
            <button onClick={openModal} className="btn btn-success text-white">
              Update
            </button>
            <button onClick={()=>handleDelete(_id)} className="btn btn-success text-white">
              Delete
            </button>
          
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed z-20 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="modal modal-open">
            <div className="modal-box">
              <UpdateVisaForm visaId={_id} visa={visa} setIsModalOpen={setIsModalOpen} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddedVisaCard;
