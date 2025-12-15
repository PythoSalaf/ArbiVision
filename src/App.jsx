import { createBrowserRouter, RouterProvider } from "react-router";
import {
  Dashboard,
  DashboardLayout,
  Fauset,
  Home,
  LandingLayout,
  Portfolio,
  Swap,
} from "./pages";

const routes = [
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "swap",
        element: <Swap />,
      },
      {
        path: "fauset",
        element: <Fauset />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
