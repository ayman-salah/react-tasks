import { Routes, Route } from "react-router-dom";
import Home from "../home/home";
import Login from "../Login/Login";
import Dashboard from "../dashboard/dashboard";
import Revenue from "../revenue/revenue";
import Notifications from "../notifications/notifications";
import Analytics from "../analytics/analytics";
import Likes from "../likes/likes";
import Wallets from "../wallets/wallets";


function MainRoutes() {
  return (
    <div className="mainroutes">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="revenue" element={<Revenue />}></Route>
          <Route path="notifications" element={<Notifications />}></Route>
          <Route path="analytics" element={<Analytics />}></Route>
          <Route path="likes" element={<Likes />}></Route>
          <Route path="wallets" element={<Wallets />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default MainRoutes;
