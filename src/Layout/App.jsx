import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar'
const App = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <Navbar />
            <Outlet />
            
        </div>
    );
};

export default App;