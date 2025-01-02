import { Link } from 'react-router-dom';
import error from '../../assets/404.gif'

const ErrorPage = () => {
    return (
        <>
            <div className='items-center'>
            <div className='flex justify-center mt-20'>
                <img className='w-96' src={error} alt="" />

            </div>
            <div className='text-center mt-5'>
                <Link to="/"><button className='btn'>Go To BackPage</button></Link>
            </div>
            </div>
        </>

    );
};

export default ErrorPage;