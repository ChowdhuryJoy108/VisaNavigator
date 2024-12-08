import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import MyAddedVisaCard from "../../components/MyAddedVisaCard/MyAddedVisaCard";
import { Typewriter } from "react-simple-typewriter";

const MyAddedVisas = () => {
  const { user } = useContext(AuthContext);
  const loadedData = useLoaderData();
  const [myAddedvisas, setMyAddedVisas] = useState(loadedData);
  const filteredData = myAddedvisas.filter(
    (data) => data?.user === user?.email
  );

  const handleType = (count) => {
    // access word count number
    console.log(count)
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <div className="px-2">
      <div className="flex flex-col items-center space-y-4">
        <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }} className="text-xl px-4 lg:text-4xl lg:p-0" >Welcome to Your Added Visa page - {""} 

        <span style={{ color: 'green', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["Your Visas!","Your Journey!", "Simplified"]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
        </h1>
        <p className="w-full text-center lg:w-[700px] ">This Page allows users to view, manage, and track all the visas they’ve added seamlessly, ensuring a personalized and hassle-free visa experience."</p>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((visa) => (
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
