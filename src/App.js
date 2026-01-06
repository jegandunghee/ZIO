// src/App.js
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import MainPage from "./pages/MainPage";
import ReservationPage from "./pages/ReservationPage";
import PaymentPage from "./pages/PaymentPage";
import MyPage from "./pages/MyPage";
import Tip from "./pages/Tip";

import "./App.scss";

const App = () => {
  return (
    <Routes>
      {/* 공통 레이아웃 */}
      <Route element={<Layout />}>
        {/* 메인 홈 */}
        <Route path="/" element={<MainPage />} />

        {/* 주차장 상세/예약 */}
        <Route path="/parking/:parkingId" element={<ReservationPage />} />

        {/* 결제 페이지 */}
        <Route path="/payment" element={<PaymentPage />} />

        {/* 마이페이지 */}
        <Route path="/mypage" element={<MyPage />} />

        {/* 팁 페이지 */}
        <Route path="/tip" element={<Tip />} />
      </Route>
    </Routes>
  );
};

export default App;
