import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProtectedRoute from "./routes/ProtectedRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import Rental from "./pages/Rental/Rental";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route element={<ProtectedRoute />}>
            <Route index element={<Rental />} />
            <Route path="dashboard" element={<Home />} />
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
