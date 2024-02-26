import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NabvarComponents/NavbarComponent";
import FooterComponent from "./components/FooterComponents/FooterComponent";

import HomePage from "./pages/HomePages/HomePage";
import KelasPage from "./pages/KelasPages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage/TestimonialPage";
import SyaratKetenPage from "./pages/SyaratKetenPage/SyaratKetenPage";
import FaqPage from "./pages/FaqPages/FaqPage";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratketen" Component={SyaratKetenPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
