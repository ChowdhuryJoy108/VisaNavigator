import { Link } from "react-router-dom";

const VisaCard = ({item}) => {
  const {_id, CountryImage, countryName, visaType, processingTime, fee, validity, } = item
  console.log(_id)
  return (
    <div className="card bg-base-100 w-full shadow-xl lg:w-96">
      <figure className="px-10 pt-10">
        <img
          src={CountryImage}
          alt="Country Image"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-start space-y-2">
        <h2 className="card-title">Country Name : {countryName}</h2>
        <p>Visa Type : {visaType}</p>
        <p>Processing Time : Approx. {processingTime} Days</p>
        <p>Visa Fee: ${fee} </p>
        <p>Validity : For {validity} Months.</p>
        <div className="card-actions">
          <Link to={`/details/${_id}`}>
            <button className="btn btn-success text-white">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
