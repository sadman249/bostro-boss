
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }

    return (
        <div className=''>
            <div className='flex mx-auto gap-5 mt-2'>
                <p className='border rounded-full p-1 border-black hover:border-white'><FaFacebook className='size-5' /></p>
                <p onClick={handleGoogleSignIn} className='border rounded-full p-1 border-black hover:border-white'><FaGoogle className='size-5' /></p>
                <p className='border rounded-full p-1 border-black hover:border-white'><FaGithub className='size-5' /></p>
            </div>

        </div>
    );
};

export default SocialLogin;