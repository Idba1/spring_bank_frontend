import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Registration from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/LogIn";
import Home from "../Pages/Home/Home/Home";
import GetInTouch from "../Pages/GetInTouch/GetInTouch";
import FAQSection from "../Pages/FAQSection/FAQSection";
import CustomerDetails from "../Pages/Customer/CustomerDetails/CustomerDetails";
import CustomerInfo from "../Pages/Customer/CustomerDetails/CustomerInfo";
import TransactionHistory from "../Pages/Customer/TransactionHistory/TransactionHistory";
import Services from "../Pages/Services/Services/Services";
import About from "../Pages/About/About/About";
import News from "../Pages/News/News/News";
import ApplyNow from "../Pages/ApplyNow/ApplyNow/ApplyNow";
import DebitCard from "../Pages/DebitCard/DebitCard/DebitCard";
import AdminDashboard from "../Pages/Admin/AdminDashboard/AdminDashboard";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:
            [
                {
                    path: '/',
                    element: <Home></Home>,
                },
                {
                    path: '/registration',
                    element: <Registration></Registration>,
                },
                {
                    path: '/login',
                    element: <Login></Login>,
                },
                {
                    path: '/get-in-touch',
                    element: <GetInTouch></GetInTouch>,
                },
                {
                    path: '/faqs',
                    element: <FAQSection></FAQSection>,
                },
                {
                    path: '/customer-dashboard',
                    element: <CustomerDetails></CustomerDetails>,
                },
                {
                    path: '/customer-info',
                    element: <CustomerInfo></CustomerInfo>,
                },
                {
                    path: '/transaction-history',
                    element: <TransactionHistory></TransactionHistory>,
                },
                {
                    path: '/services',
                    element: <Services></Services>,
                },
                {
                    path: '/about',
                    element: <About></About>,
                },
                {
                    path: '/news',
                    element: <News></News>,
                },
                {
                    path: '/apply',
                    element: <ApplyNow></ApplyNow>,
                },
                {
                    path: '/debit-card',
                    element: <DebitCard></DebitCard>,
                },
            ]
    },
    {
        path: 'admin-dashboard',
        element: <AdminDashboard></AdminDashboard>,
        children: [
            {
                path: 'admin-dashboard',
                element: <AdminDashboard></AdminDashboard>
            },
        ]
    }
]);


export default Routes;