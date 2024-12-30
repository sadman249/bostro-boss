import { Parallax } from 'react-parallax';

const Cover = ({ img, title, text }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[700px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content bg-black bg-opacity-30 lg:w-8/12 lg:py-10">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{text}</p>

                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;