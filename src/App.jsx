import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import AccountType from "./pages/AccountType";
import PersonalSignup from "./pages/Signup/PersonalSignup";
import BusinessSignup from "./pages/Signup/BusinessSignup";
import DeveloperSignup from "./pages/Signup/DeveloperSignup";
import SignIn from "./pages/SignIn";
import Learn from "./pages/Learn";
import AssetDetail from "./pages/AssetDetail";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import { WarningBanner } from "./components/layout/WarningBanner.jsx";
import FooterDisclaimer from "./components/layout/FooterDisclaimer";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ["/signup", "/signup/personal", "/signup/business", "/signup/developer", "/signin"];

  return (
    <>
      <WarningBanner />
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:id" element={<AssetDetail />} />
        <Route path="/signup" element={<AccountType />} />
        <Route path="/signup/personal" element={<PersonalSignup />} />
        <Route path="/signup/business" element={<BusinessSignup />} />
        <Route path="/signup/developer" element={<DeveloperSignup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
       <FooterDisclaimer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;