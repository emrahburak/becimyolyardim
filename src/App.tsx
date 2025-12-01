import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy"; // Bunu birazdan oluşturacağız
import ScrollToTop from "./utils/ScrollToTap";

export default function App() {
  return (
    <>
      {/* Sayfa değişince en yukarı kaydıran sihirli bileşen */}
      <ScrollToTop />

      <Routes>
        {/* Tüm sayfalar MainLayout iskeletini kullanacak */}
        <Route element={<MainLayout />}>

          {/* "/" adresine gidilince Home bileşeni Outlet yerine geçer */}
          <Route path="/" element={<Home />} />

          {/* "/gizlilik" adresine gidilince Privacy bileşeni Outlet yerine geçer */}
          <Route path="/gizlilik" element={<Privacy />} />

        </Route>
      </Routes>
    </>
  );
}
