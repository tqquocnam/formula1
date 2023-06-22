import { useRoutes } from "react-router-dom";
import About from "../screens/About";
import Home from "../screens/Home";

const Router: React.FC = () => {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  return routeElements;
};

export default Router;
