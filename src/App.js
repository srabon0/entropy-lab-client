import { Route, Routes } from "react-router-dom";
import Blogs from "./components/pages/Blogs/Blogs";
import Home from "./components/pages/Home/Home/Home";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import Login from "./components/pages/Authentication/Login/Login";
import Signup from "./components/pages/Authentication/Signup/Signup";
import RequireAuth from "./components/pages/Authentication/RequireAuth/RequireAuth";
import About from "./components/pages/About/About";

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
        <Route path="/about" element={<RequireAuth>
          <About></About>
        </RequireAuth>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
