import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VisaCard from "../../components/VisaCard/VisaCard";

const Visas = () => {
  const laodedData = useLoaderData();
  const [visas, setVisas] = useState(laodedData);

  const visaTypes = [
    "Tourist visa",
    "Student visa",
    "Official visa",
    "Business visa",
    "Transit visa",
  ];


  const handleSortByVisaTypes = (type) =>{
    fetch('http://localhost:8080/addVisa')
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      const filterByVisaType = data.filter(visa => visa.visaType === type);
      setVisas(filterByVisaType)
    })
   
  }

  return (
    <div>
      <p>{laodedData.length}</p>
      <div className="flex items-center justify-center">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By Visa Types
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            {
                visaTypes.map((type, index) =>  <li onClick={()=>handleSortByVisaTypes(type)} className="p-2 text-black hover:bg-black hover:text-white rounded-xl" key={index}>{type}</li>)
            }

          </ul>
        </div>
      </div>
      <h1>All added visas by all users will be displayed here!</h1>
      <div className="grid gap-4 mt-4 px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {visas.map((item) => (
          <VisaCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Visas;
