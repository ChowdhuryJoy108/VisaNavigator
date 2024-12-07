import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VisaCard from "../../components/VisaCard/VisaCard";


const Home = () => {
    const loadedata = useLoaderData()
    const [data, setData] = useState(loadedata)
    const slicedData = data.slice(0, 6);
    console.log(slicedData)

    return (
        <div>
            <h1 className="text-4xl text-red-800"> Latest Visas </h1>
            <div className="grid gap-4 mt-4 px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    slicedData.map(item => <VisaCard key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default Home;