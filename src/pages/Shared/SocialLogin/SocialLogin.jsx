import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { SiFacebook, SiGithub, SiGoogle } from 'react-icons/si';

const SocialLogin = () => {
    const { singInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('in signIn page', location)
    const from = location.state || '/';

    const handleGoogleSignIn = () => {
        singInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(from);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className=''>
            <div className='flex mx-auto gap-5 mt-2'>
                <p className='border rounded-full p-1 border-black hover:border-white'><SiFacebook className='size-5' /></p>
                <p onClick={handleGoogleSignIn} className='border rounded-full p-1 border-black hover:border-white'><SiGoogle className='size-5' /></p>
                <p className='border rounded-full p-1 border-black hover:border-white'><SiGithub className='size-5' /></p>
            </div>

        </div>
    );
};

export default SocialLogin;