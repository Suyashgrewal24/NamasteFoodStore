import Body from "./components/Hero/Body"

import ReactDOM from 'react-dom/client';
import Header from "./components/head/Header"
import ErrorPage from './components/pages/ErrorPage'
import './App.css'
import About from "./components/pages/AboutUS"
import ResturantMenu from "./components/pages/ResturantMenu";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";


function App() {
  return (
    <>
      <Header />
    <Outlet/>
    </>
  )

}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // errorElement: <ErrorPage/> ,

  children: [
    {
      path: '/',
      element: <Body/>
    },
    {
      path:'/about',
      element: <About/>

    },
    {
      path: "/ResturantMenu/:id",
      element: <ResturantMenu/>

    }
  ]
}, 

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);
 