import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Landing from "./modules/landing/pages/Landing";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="latest-news" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
