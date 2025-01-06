import { Link } from 'react-router-dom';
import error from '../../assets/404.gif'
import { FaHome } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <>
            <div className='items-center'>
            <div className='flex justify-center mt-20'>
                <img className='w-96' src={error} alt="" />

            </div>
            <div className='text-center font-semibold mt-5 items-center '>
                <Link to="/"><button className='btn bg-orange-300'>Back Home <FaHome></FaHome></button></Link>
            </div>
            </div>
        </>

    );
};

export default ErrorPage;