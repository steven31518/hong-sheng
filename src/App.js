import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import DashBoard from "./pages/admin/DashBoard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminCoupons from "./pages/admin/AdminCoupons";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<DashBoard />}>
          <Route path="products" element={<AdminProducts />} />
          <Route path="coupons" element={<AdminCoupons />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
