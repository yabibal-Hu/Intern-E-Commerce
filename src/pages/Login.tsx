import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import cart from "../../public/img/cart.jpeg";

export default function Login() {
  const [userName, setUserName] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const loginUser = async (username: string, password: string) => {
    return axios.post("https://fakestoreapi.com/auth/login", {
      username,
      password,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userName || !password) {
      setError("Username and password are required.");
      return;
    }

    setLoading(true);
    try {
      const response = await loginUser(userName, password);
      sessionStorage.setItem("token", response.data.token);
      setSuccess("Login successful!");
      setError("");
      setTimeout(() => window.location.replace("/"), 1000);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        setError("Invalid username or password.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid grid-cols-4 mt-12 mb-20 mr-32">
      <div className="col-span-2">
        <img src={cart} alt="" className="" />
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <div className="flex flex-col gap-6 items-start justify-center gap-4 ml-32">
          <p className="text-4xl font-medium">Log in to Exclusive</p>
          <p className=" text-base">Enter your details below</p>
          {error && <p className="text-red-600">{error}</p>}
          {success && <p className="text-green-600">{success}</p>}
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col gap-8 w-full mt-4"
          >
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Email or Phone Number"
              className="border-b w-full focus:ring-0 focus:outline-none "
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border-b w-full focus:ring-0 focus:outline-none "
            />
            <div className="flex justify-between items-center w-full">
              <button
                type="submit"
                disabled={loading}
                className={`bg-[#DB4444] hover:bg-red-600 text-white px-10 py-4 rounded ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Logging in..." : "Log in"}
              </button>
              <p className="text-red-600">Forget Password?</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
