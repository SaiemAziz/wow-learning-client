import Auth from "../context/Auth";
import App from '../../src/App';
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import Subjects from "../pages/Subjects";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Auth><App/></Auth>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/courses',
                element: <Subjects/>
            }
        ]
    }
])