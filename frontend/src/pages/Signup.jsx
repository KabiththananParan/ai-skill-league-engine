import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Account Created:", formData);
  };

  return (
    <div className="min-h-screen bg-[#d4ff00] flex items-center justify-center p-4 font-mono">
      {/* Import Pixel Font */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');`}
      </style>

      {/* Main Container */}
      <div className="w-full max-w-[380px] bg-[#c11d43] rounded-[40px] border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)]">
        
        {/* Retro Header Icon */}
        <div className="flex justify-center mb-4">
          <div className="text-4xl animate-bounce">✨</div>
        </div>

        {/* Title */}
        <h1 className="text-white text-2xl text-center mb-8 leading-tight" 
            style={{ fontFamily: "'Press Start 2P', cursive" }}>
          JOIN GAME
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-white text-[9px] mb-1 uppercase font-bold">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="PLAYER@EMAIL.COM"
              className="w-full p-2 bg-white border-4 border-black text-[10px] focus:ring-0 focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>

          {/* Username Field */}
          <div>
            <label className="block text-white text-[9px] mb-1 uppercase font-bold">Username</label>
            <input
              type="text"
              name="username"
              placeholder="PLAYER_1"
              className="w-full p-2 bg-white border-4 border-black text-[10px] focus:ring-0 focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-white text-[9px] mb-1 uppercase font-bold">Password</label>
            <input
              type="password"
              name="password"
              placeholder="******"
              className="w-full p-2 bg-white border-4 border-black text-[10px] focus:ring-0 focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-white text-[9px] mb-1 uppercase font-bold">Confirm</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="******"
              className="w-full p-2 bg-white border-4 border-black text-[10px] focus:ring-0 focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-[#d4ff00] border-4 border-black py-3 text-black font-bold uppercase hover:bg-yellow-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-1 transition-all"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '12px' }}
          >
            SIGN UP
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-6 text-center">
          <p className="text-white text-[9px] uppercase tracking-tighter">
            Already a member? <span className="underline cursor-pointer font-bold ml-1">Log In</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;