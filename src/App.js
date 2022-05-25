import { Route, Routes } from "react-router-dom";
import Blogs from "./components/pages/Blogs/Blogs";
import Home from "./components/pages/Home/Home/Home";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import Login from "./components/pages/Authentication/Login/Login";
import Signup from "./components/pages/Authentication/Signup/Signup";
import RequireAuth from "./components/pages/Authentication/RequireAuth/RequireAuth";
import About from "./components/pages/About/About";
import NotFound from "./components/Shared/NotFound";

import Dashboard from "./components/Dashboard/Dashboard";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Additem from "./components/Dashboard/Additem";
import SingleItem from "./components/SingleItem/SingleItem";
import Myprofile from "./components/Dashboard/Myprofile";
import Addreview from "./components/Dashboard/Addreview";
import Myorders from "./components/Dashboard/Myorders";
import Alluser from "./components/Dashboard/Alluser";
import ManageOrder from "./components/Dashboard/ManageOrder";
import RequireAdmin from "./components/pages/Authentication/RequireAuth/RequireAdmin";
import ManageProduct from "./components/Dashboard/ManageProduct";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/item/:id" element={<SingleItem />} />
        <Route
          path="/about"
          element={
            <RequireAuth>
              <About></About>
            </RequireAuth>
          }
        />
       
       
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<Myprofile />} />
         
          <Route path="/dashboard/myorders" element={<Myorders />} />
          <Route path="/dashboard/addreview" element={<Addreview />} />
          <Route path="/dashboard/additem" element={<RequireAdmin>
            <Additem />
          </RequireAdmin>} />
          <Route path="/dashboard/alluser" element={<RequireAdmin>
            <Alluser />
          </RequireAdmin>} />
          <Route path="/dashboard/manageitem" element={<RequireAdmin>
            <ManageProduct />
          </RequireAdmin>} />
          <Route path="/dashboard/manageorder" element={<RequireAdmin>
            <ManageOrder />
          </RequireAdmin>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
