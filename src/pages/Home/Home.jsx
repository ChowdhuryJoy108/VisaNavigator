import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import VisaCard from "../../components/VisaCard/VisaCard";
import SwiperSliders from "../../components/Swiper/SwiperSliders";

const Home = () => {
  const loadedata = useLoaderData();
  const [data, setData] = useState(loadedata);
  const slicedData = data.slice(0, 6);
  console.log(slicedData);

  return (
    <div>
      <div>

        <SwiperSliders />
        <div className="flex flex-col items-center space-y-2">

        <h1 className="text-4xl font-bold text-[#111111]"> Explore Latest Visas </h1>
        <p className="text-base w-[800px] text-gray-600 text-center">Discover the latest visa updates, including new policies, application procedures, and travel requirements. Stay informed to ensure smooth and efficient visa applications, making your international travel plans easier and more efficient.</p>
        </div>
        <div className="grid gap-4 mt-4 px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {slicedData.map((item) => (
            <VisaCard key={item._id} item={item} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-10">
        <Link to={"/allVisas"} >
          <button className="btn btn-success text-white">See All Visas</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
