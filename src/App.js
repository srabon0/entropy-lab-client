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
import Profile from "./components/pages/Profile/Profile";
import EditProfile from "./components/pages/Profile/EditProfile";
import Dashboard from "./components/Dashboard/Dashboard";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Additem from "./components/Dashboard/Additem";

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
        <Route
          path="/about"
          element={
            <RequireAuth>
              <About></About>
            </RequireAuth>
          }
        />
        <Route
          path="/editprofile"
          element={
            <RequireAuth>
              <EditProfile></EditProfile>
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile></Profile>
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
          <Route index element={<Additem />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
