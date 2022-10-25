import Auth from "../context/Auth";
import App from '../../src/App';
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import Subjects from "../pages/Subjects";
import Category from "../components/Category";
import SingleSubject from "../components/SingleSubject";

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
                loader: ()=> fetch('https://wow-learning-server-saiemaziz.vercel.app/courses'),
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
                        path: '/courses/subject/:id',
                        loader: ({params})=> fetch(`https://wow-learning-server-saiemaziz.vercel.app/courses/subject/${params.id}`),
                        element: <SingleSubject/>
                    },
                ]
            }
        ]
    }
])