

const Home = () => {
    console.log(import.meta.env.VITE_apiKey)
    return (
        <div>
            <h1 className="text-4xl text-red-800"> This is going to homepage </h1>
        </div>
    );
};

export default Home;