import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const loadedata = useLoaderData()
    const [data, setData] = useState(loadedata)
    const slicedData = data.slice(0, 6);
    console.log(slicedData.length)
    return (
        <div>
            <h1 className="text-4xl text-red-800"> This is going to homepage </h1>
            <p>{slicedData.length}</p>
        </div>
    );
};

export default Home;