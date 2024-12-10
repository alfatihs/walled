import { Link } from "react-router";
import loginBg from "../assets/login.png";
import logo from "../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import ActionButton from "../components/ActionButton";
import { useEffect } from "react";
// import useFetch from "../useFetch";
import Loading from "../components/Loading";
// import { use } from "react";

function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsLoading(true);

    try {
      //tambahin loading time
      // const minimumLoadingTime = new Promise((resolve) => {
      //   setTimeout(resolve, 1500); // Delay for 1.5 seconds
      // });

      // Fetch user data from the API
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();

      // Validate user credentials
      const userValid = users.find(
        (u) =>
          u.email === loginForm.email && u.password === loginForm.password
      );

      if (userValid) {
        console.log("Login successful");
        localStorage.setItem("loginData", JSON.stringify(userValid));
        navigate("/dashboard");
      } else {
        alert("Invalid email or password");
      }


    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // const [loginData, setLoginData] = useState("")

  useEffect(() => {
    const data = localStorage.getItem("loginData");
    const email = data && JSON.parse(data)?.email;
    if (email) {
      navigate("/dashboard");
    }
  }, [navigate]);



  return (
    <section className="flex w-full h-screen bg-white">
      {isLoading && <Loading />}
      <div className="flex flex-col w-1/2 items-center justify-center">
        <div>
          <img className="w-[290px] mx-auto" src={logo} alt="logo" />
          <form className="flex flex-col mt-24 gap-y-5">
            <input
              className="bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px]"
              name="email"
              type="email"
              placeholder="Email"
              onChange={(e) => handleChange(e)}
            />
            <input
              className="bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px]"
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => handleChange(e)}
            />
            <ActionButton
              disabled={!loginForm.email || !loginForm.password}
              onClick={handleSubmit}
            >
              Login
            </ActionButton>
          </form>
          <div className="w-full mt-4 text-black">
            Belum punya akun?{" "}
            <Link to="/register" className="text-[#19918F] text-left">
              Daftar di sini
            </Link>
          </div>
        </div>
      </div>
      <img
        src={loginBg}
        alt="login background"
        className="w-1/2 object-cover"
      />
    </section>
  );
}

export default Login;
