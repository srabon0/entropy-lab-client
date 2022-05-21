import { Route, Routes } from "react-router-dom";
import Blogs from "./components/pages/Blogs/Blogs";
import Home from "./components/pages/Home/Home/Home";
import Navbar from "./components/Shared/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  );
}

export default App;
