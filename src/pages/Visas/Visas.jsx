import { useLoaderData } from "react-router-dom";


const Visas = () => {
    const laodedData = useLoaderData()
    return (
        <div>
            <p>{laodedData.length}</p>
            <h1>All added visas by all users will be displayed here!</h1>
        </div>
    );
};

export default Visas;