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
            ]
    }
]);


export default Routes;