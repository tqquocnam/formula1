import { useRoutes } from "react-router-dom";
import Home from "../screens/Home";

const Router: React.FC = () => {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return routeElements;
};

export default Router;
