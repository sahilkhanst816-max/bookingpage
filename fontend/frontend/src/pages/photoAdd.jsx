import React from 'react'
import { api } from '../api'

const photoAdd = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    api.post('/notes', formData).then((res) => {
      console.log(res.data)
      alert('Booking saved successfully')
      e.target.reset()
    }).catch((err) => {
      console.log(err)
      alert(err.response?.data?.error || err.response?.data?.message || 'Booking save nahi hui. Backend URL/check karo.')
    })
  }
  return (<div className="flex justify-center items-center min-h-screen bg-yellow-400 p-4 font-sans">
    <form
      onSubmit={handleSubmit}
      className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-2xl flex flex-col gap-6"
    >
      <h2 className="text-2xl md:text-3xl font-black uppercase border-b-4 border-black pb-2 mb-2">
        Booking Form
      </h2>

      {/* Personal Details - Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-bold text-black">Full Name</label>
          <input type="text" name="name" placeholder="John Doe" required
            className="border-2 border-black p-3 focus:outline-none focus:bg-pink-50 font-medium" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold text-black">Email</label>
          <input type="email" name="email" placeholder="john@example.com" required
            className="border-2 border-black p-3 focus:outline-none focus:bg-pink-50 font-medium" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold text-black">Phone Number</label>
          <input type="tel" name="phone" placeholder="+91 9876543210" required
            className="border-2 border-black p-3 focus:outline-none focus:bg-pink-50 font-medium" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold text-black">Room Type</label>
          <select name="roomType" className="border-2 border-black p-3 focus:outline-none focus:bg-pink-50 font-medium bg-white cursor-pointer">
            <option value="standard">Standard</option>
            <option value="deluxe">Deluxe</option>
            <option value="luxury">Luxury</option>
            <option value="suite">Suite</option>
          </select>
        </div>
      </div>

      {/* Guests - Grid */}
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-bold text-black">Adults</label>
          <select name="adults" className="border-2 border-black p-3 focus:outline-none focus:bg-pink-50 font-medium bg-white cursor-pointer">
            <option value="1">1 Adult</option>
            <option value="2">2 Adults</option>
            <option value="3">3 Adults</option>
            <option value="4+">4+ Adults</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold text-black">Children</label>
          <select name="children" className="border-2 border-black p-3 focus:outline-none focus:bg-pink-50 font-medium bg-white cursor-pointer">
            <option value="0">0 Child</option>
            <option value="1">1 Child</option>
            <option value="2">2 Children</option>
            <option value="3">3 Children</option>
          </select>
        </div>
      </div>

      {/* File & Caption (Previous Request) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-bold text-black">ID / Image File</label>
          <input type="file" name="image" accept="image/*" required
            className="file:mr-4 file:py-2 file:px-4 file:border-2 file:border-black file:font-bold file:bg-blue-300 file:text-black hover:file:bg-blue-400 cursor-pointer border-2 border-black p-1.5 bg-gray-50 outline-none w-full" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold text-black">Image Caption</label>
          <input type="text" name="caption" placeholder="Caption for image..."
            className="border-2 border-black p-3 focus:outline-none focus:bg-pink-50 font-medium" />
        </div>
      </div>

      {/* Suggestions */}
      <div className="flex flex-col gap-2">
        <label className="font-bold text-black">Suggestions / Special Requests</label>
        <textarea name="suggestions" rows="3" placeholder="Any special requests?"
          className="border-2 border-black p-3 focus:outline-none focus:bg-pink-50 font-medium resize-none"></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white font-black text-xl py-4 px-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none uppercase mt-2 w-full"
      >
        Book Now
      </button>
    </form>
  </div>
  )
}

export default photoAdd
