import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://netflix-login-project.onrender.com/login",
        { email, password },
        { timeout: 15000 } // Render wakes up slow, so 15 sec timeout
      );

      setLoading(false);

      if (response?.data?.success) {
        window.location.href = "/dashboard";
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setLoading(false);

      // If Render server is sleeping
      setError("Server is waking up... Try again in 3 seconds.");
    }
  };

  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#111] text-white p-10 w-96 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>

        {error && (
          <p className="bg-red-600 text-white p-2 rounded mb-3 text-sm text-center">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 rounded bg-gray-800 focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-3 rounded bg-gray-800 focus:outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-red-600 p-3 rounded mt-3 hover:bg-red-700 transition"
          disabled={loading}
        >
          {loading ? "Processing..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
