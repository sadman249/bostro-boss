import error from '../../assets/404.gif'

const ErrorPage = () => {
    return (
        <div className='flex justify-center'>
            <img src={error} alt="" />
        </div>
    );
};

export default ErrorPage;