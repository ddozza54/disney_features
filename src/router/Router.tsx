import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFoundPage from './NotFoundPage';
import Home from './Home';
import Detail from './Detail';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFoundPage />,
        children: [{
            path: "",
            element: <Home />
        },
        {
            path: "character/:id",
            element: <Detail />
        }]
    }
])

export default router;