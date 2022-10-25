import Auth from "../context/Auth";
import App from '../../src/App';
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import Subjects from "../pages/Subjects";
import Category from "../components/Category";

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
                element: <Subjects/>,
                children: [
                    {
                        index: true,
                        loader: ()=> fetch('https://wow-learning-server-saiemaziz.vercel.app/courses'),
                        element: <Category/>
                    },
                    {
                        path: '/courses/all',
                        loader: ()=> fetch('https://wow-learning-server-saiemaziz.vercel.app/courses'),
                        element: <Category/>
                    },
                    {
                        path: '/courses/:category',
                        loader: ({params})=> fetch(`https://wow-learning-server-saiemaziz.vercel.app/courses/${params.category}`),
                        element: <Category/>
                    }
                ]
            }
        ]
    }
])