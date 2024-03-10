import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import Error from "./components/Error/Error";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/"
          element={<Home />}
        >
          <Route
            path="/login"
            element={<Login />}
          >
          </Route>
        </Route>
        <Route
          path="*"
          element={<Error />}
        >
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
