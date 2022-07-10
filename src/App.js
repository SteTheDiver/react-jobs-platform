import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Landing, Error, Register } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Profile,
  AllJobs,
  AllJobs,
  Statics,
  SharedLayout,
} from "./pages/Dashboard";
import NewJob from "./pages/Dashboard/NewJob";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Statics />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="new-job" element={<NewJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
        <Route />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
