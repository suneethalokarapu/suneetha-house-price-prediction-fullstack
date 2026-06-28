import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


export default function App() {
  const [price] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">

        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white">
            🏠 House Price Prediction
          </h1>
          <p className="text-gray-300 mt-3">
            Predict California House Prices using Machine Learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            placeholder="Longitude"
            className="p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none"
          />

          <input
            placeholder="Latitude"
            className="p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none"
          />

          <input
            placeholder="Housing Median Age"
            className="p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none"
          />

          <input
            placeholder="Total Rooms"
            className="p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none"
          />

          <input
            placeholder="Total Bedrooms"
            className="p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none"
          />

          <input
            placeholder="Population"
            className="p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none"
          />

          <input
            placeholder="Households"
            className="p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none"
          />

          <input
            placeholder="Median Income"
            className="p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none"
          />

          <select className="p-4 rounded-xl bg-white/20 text-white outline-none md:col-span-2">
            <option className="text-black">INLAND</option>
            <option className="text-black">ISLAND</option>
            <option className="text-black">NEAR BAY</option>
            <option className="text-black">NEAR OCEAN</option>
          </select>
        </div>

        <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 transition-all text-white font-bold py-4 rounded-xl text-lg">
          Predict Price
        </button>

        <div className="mt-8 bg-white/10 rounded-2xl p-6 border border-white/20">
          <h2 className="text-white text-xl font-semibold mb-2">
            Estimated House Price
          </h2>

          <p className="text-4xl font-bold text-green-400">
            {price || "$0"}
          </p>
        </div>
      </div>
    </div>
  );
}