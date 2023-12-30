import { Outlet, Navigate } from "react-router-dom";
import "../globals.css";
import SideAuthLayout from "@/_components/SideAuthLayout";
import { useMatch } from "react-router-dom";

const AuthLayout = () => {
  const match = useMatch("/sign-up");
  const isAuth = false;
  return (
    <>
      {isAuth ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center bg-black">
            <Outlet />
          </section>

          {match ? (
            <SideAuthLayout
              heading="Hello, Friend!"
              text="Enter your personal details and start journey with us"
              uText="Have account already?"
              buttonText="Sign In"
              link="/sign-in"
            />
          ) : (
            <SideAuthLayout
              heading="Welcome Back"
              text="Enter your personal details and start journey with us"
              uText="Dont have an account?"
              buttonText="Sign Up"
              link="/sign-up"
            />
          )}
        </>
      )}
    </>
  );
};

export default AuthLayout;
