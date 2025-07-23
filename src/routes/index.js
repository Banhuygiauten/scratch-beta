import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Course from '../pages/Course';
import Document from '../pages/Document';
import Register from '../pages/Register';
import Solve from '../pages/Solve';

import About from '../pages/About';

const AppRoutes = [
    {
        element: <DefaultLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/blog', element: <Blog /> },
            { path: '/contact', element: <Contact /> },
            { path: '/course', element: <Course /> },
            { path: '/document', element: <Document /> },
            { path: '/register', element: <Register /> },
            { path: '/solve', element: <Solve /> },
            { path: '/about', element: <About /> },
        ],
    },
];

export default AppRoutes;
