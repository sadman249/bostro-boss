import { FaAd, FaBook, FaCalendar, FaCalendarAlt, FaEnvelope, FaHistory, FaHome, FaList, FaShopify, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import logo from '../assets/logo.png';
import { FiMenu } from "react-icons/fi";


const Dashboard = () => {
    const [cart] = useCart();

    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <div className="sticky top-0 z-10">
                    <div className="flex p-4 gap-2 items-center">
                        <img className="w-10 h-10 bg-white rounded-full" src={logo} alt="" />
                        <h1 className="text-3xl font-bold">Bistro Boss</h1>
                    </div>
                    <ul className="menu p-4 space-y-1 font-semibold">
                        {
                            isAdmin ? <>
                                <li>
                                    <NavLink to="/dashboard/adminHome">
                                        <FaHome></FaHome>
                                        Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addItems">
                                        <FaUtensils></FaUtensils>
                                        Add Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageItems">
                                        <FaList></FaList>
                                        Manage Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings">
                                        <FaBook></FaBook>
                                        Manage Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/users">
                                        <FaUsers></FaUsers>
                                        All Users</NavLink>
                                </li>
                            </>
                                :
                                <>
                                    <li>
                                        <NavLink to="/dashboard/userHome">
                                            <FaHome></FaHome>
                                            User Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/reservation">
                                            <FaCalendarAlt />
                                            Reservation</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/paymentHistory">
                                            <FaHistory></FaHistory>
                                            Payment History</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/cart">
                                            <FaShoppingCart></FaShoppingCart>
                                            My Cart ({cart.length})</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/review">
                                            <FaAd></FaAd>
                                            Add a Review</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/my booking">
                                            <FaCalendar></FaCalendar>
                                            My Booking</NavLink>
                                    </li>
                                </>
                        }
                        {/* shared nav links */}
                        <div className="divider"></div>
                        <li>
                            <NavLink to="/">
                                <FaHome></FaHome>
                                Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/order/salad">
                                <FiMenu />
                                Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to="/order/shop">
                                <FaShopify />
                                Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to="/order/contact">
                                <FaEnvelope></FaEnvelope>
                                Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;