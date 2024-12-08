import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import MyAddedVisaCard from "../../components/MyAddedVisaCard/MyAddedVisaCard";
import { Typewriter } from "react-simple-typewriter";

const MyAddedVisas = () => {
  const { user } = useContext(AuthContext);

  const [myAddedvisas, setMyAddedVisas] = useState([]);
  

  useEffect(()=>{
    fetch('https://visa-navigator-server-wheat.vercel.app/addVisa')
    .then(res => res.json())
    .then(data => {
      const filteredData = data.filter(
        (visa) => visa?.user === user?.email
      );
      setMyAddedVisas(filteredData)
    })
  },[])


  return (
    <div className="px-2">
      <div className="flex flex-col items-center space-y-4">
        <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }} className="text-xl px-4 lg:text-4xl lg:p-0" >Welcome to Your Added Visa page - {""} 

        <span style={{ color: 'green', fontWeight: 'bold' }}>
          <Typewriter
            words={["Your Visas!","Your Journey!", "Simplified"]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        </h1>
        <p className="w-full text-center text-gray-600 lg:w-[700px] ">This Page allows users to view, manage, and track all the visas they’ve added seamlessly, ensuring a personalized and hassle-free visa experience."</p>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {myAddedvisas.map((visa) => (
          <MyAddedVisaCard
            key={visa._id}
            visa={visa}
            myAddedvisas={myAddedvisas}
            setMyAddedVisas={setMyAddedVisas}
          />
        ))}
      </div>
    </div>
  );
};

export default MyAddedVisas;
