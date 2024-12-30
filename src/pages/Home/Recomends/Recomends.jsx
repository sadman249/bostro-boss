import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import card1 from '../../../assets/home/slide1.jpg'
import card2 from '../../../assets/home/slide1.jpg'
import card3 from '../../../assets/home/slide1.jpg'



const Recomends = () => {
    return (
        <section className="my-20">
            <SectionTitle
                subHeading="Should Try"
                heading={'Chef Recommends'}
            ></SectionTitle>

            <div className="lg:flex lg:justify-between">
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={card1}
                            alt="Shoes"
                            className="w-[425px] h-[300px] rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 mt-4 text-yellow-600 bg-slate-100 uppercase font-bold">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={card2}
                            alt="Shoes"
                            className="w-[425px] h-[300px] rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 mt-4 text-yellow-600 bg-slate-100 uppercase font-bold">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={card3}
                            alt="Shoes"
                            className="w-[425px] h-[300px] rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 mt-4 text-yellow-600 bg-slate-100 uppercase font-bold">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recomends;