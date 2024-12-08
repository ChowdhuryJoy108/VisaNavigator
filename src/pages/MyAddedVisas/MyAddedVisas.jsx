import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import MyAddedVisaCard from "../../components/MyAddedVisaCard/MyAddedVisaCard";

const MyAddedVisas = () => {

  const { user } = useContext(AuthContext);
  const loadedData = useLoaderData();
  const [ myAddedvisas, setMyAddedVisas] = useState(loadedData)
  const filteredData = myAddedvisas.filter((data) => data?.user === user?.email);
 

  return (
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            filteredData.map(visa => <MyAddedVisaCard key={visa._id}  visa={visa} myAddedvisas={myAddedvisas} setMyAddedVisas={setMyAddedVisas} />)
        }
      </div>
  );
};

export default MyAddedVisas;
