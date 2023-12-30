import "./globals.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./_auth/forms/SignIn";
import Signup from "./_auth/forms/Signup";
import Home from "./_root/pages/Home";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

const App = () => {
  const textStyle = {
    fontFamily: 'Montserrat, sans-serif'
};

  return (
    <>
      <main className="flex h-screen" style={textStyle}>
        <Routes>
          {/* public routes */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<Signup />} />
          </Route>

          {/* private routes */}
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
