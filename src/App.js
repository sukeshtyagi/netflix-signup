import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/registeration"
          element={<SignUp child="registeration" />}
        />
        <Route
          path="/registeration/form"
          element={<SignUp child="registerationform" />}
        />
        <Route path="/signup" element={<SignUp child="choosePlan" />} />
        <Route path="/signup/planform" element={<SignUp child="planForm" />} />
        <Route
          path="/signup/paymentPicker"
          element={<SignUp child="paymentPicker" />}
        />

        <Route
          path="/signup/creditoption"
          element={<SignUp child="creditOption" />}
        />
        <Route
          path="/signup/upiOption"
          element={<SignUp child="upiOption" />}
        />
        <Route
          path="/signup/upiorderconfirm/"
          element={<SignUp child="upiorderconfirm" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
