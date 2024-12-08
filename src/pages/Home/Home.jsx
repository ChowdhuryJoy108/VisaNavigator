import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import VisaCard from "../../components/VisaCard/VisaCard";
import SwiperSliders from "../../components/Swiper/SwiperSliders";
import Reviews from "../../components/Reviews/Reviews";
import Thoughts from "../../components/Thoughts/Thoughts";
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  const loadedata = useLoaderData();
  const [data, setData] = useState(loadedata);
  const slicedData = data.slice(0, 6);
  console.log(slicedData);

  
  return (
    <div className="w-full px-2 lg:p-0">
      <div >

        <SwiperSliders />
        <div className="flex flex-col items-center space-y-4">

        <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }} className="text-2xl px-4  text-[#111111] lg:text-4xl"> Explore Latest {" "}

        <span style={{ color: 'green', fontWeight: 'bold' }}>
         
          <Typewriter
            words={["Tourist visa","Student visa", "Official visa","Business visa", "Transit visa",]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        </h1>
        <p className="text-base px-2 w-full  text-gray-600 text-center lg:w-[800px]">Discover the latest visa updates, including new policies, application procedures, and travel requirements. Stay informed to ensure smooth and efficient visa applications, making your international travel plans easier and more efficient.</p>
        </div>
        <div className="grid gap-4 mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {slicedData.map((item) => (
            <VisaCard key={item._id} item={item} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-10 mb-[50px]">
        <Link to={"/allVisas"} >
          <button className="btn btn-success text-white">See All Visas</button>
        </Link>
        </div>
        {/* <Reviews />
        <Thoughts /> */}
      </div>
    </div>
  );
};

export default Home;
