import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Hero from "./Hero";
import About from "./About";
import Fact from "./Fact";
import NotFound from "./NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Hero></Hero>,
      children: [
        {
          path: "about",
          element: <About></About>,
          children: [{ path: ":id", element: <Fact></Fact> }],
        },
      ],
      errorElement: <NotFound></NotFound>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
