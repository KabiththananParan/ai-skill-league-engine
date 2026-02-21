import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", formData);
  };

  return (
    <div className="min-h-screen bg-[#d4ff00] flex items-center justify-center p-4 font-mono">
      {/* Import Pixel Font */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');`}
      </style>

      {/* Main Mobile Container */}
      <div className="w-full max-w-[350px] bg-[#c11d43] rounded-[40px] border-8 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]">
        
        {/* Game Icon */}
        <div className="flex justify-center mb-6">
          <div className="text-4xl">🎮</div>
        </div>

        {/* Title */}
        <h1 className="text-white text-3xl text-center mb-10 tracking-tighter" 
            style={{ fontFamily: "'Press Start 2P', cursive" }}>
          LOG IN
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username/Email Field */}
          <div>
            <label className="block text-white text-[10px] mb-2 uppercase tracking-widest font-bold">
              Log In
            </label>
            <input
              type="text"
              name="username"
              placeholder="EMAIL OR USERNAME"
              className="w-full p-3 bg-white border-4 border-black text-xs focus:outline-none"
              onChange={handleChange}
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-white text-[10px] mb-2 uppercase tracking-widest font-bold">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••"
              className="w-full p-3 bg-white border-4 border-black text-xs focus:outline-none"
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#d4ff00] border-4 border-black py-3 text-black font-bold uppercase hover:bg-yellow-300 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-1"
          >
            Log In
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-white text-[9px] cursor-pointer hover:underline">
            Forgot password?
          </p>
          <p className="text-white text-[9px] cursor-pointer hover:underline">
            Create account
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;