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
  return (<div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 font-sans">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-3xl shadow-2xl w-full max-w-2xl flex flex-col gap-6 text-white"
      >
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wider border-b border-white/20 pb-3 mb-2">
          Reservation Details
        </h2>

        {/* Personal Details - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white/80">Full Name</label>
            <input type="text" name="name" placeholder="John Doe" required
              className="bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white/80">Email</label>
            <input type="email" name="email" placeholder="john@example.com" required
              className="bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white/80">Phone Number</label>
            <input type="tel" name="phone" placeholder="+91 9876543210" required
              className="bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white/80">Room Type</label>
            <select name="roomType" className="bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all cursor-pointer appearance-none">
              <option value="standard" className="bg-slate-800">Standard</option>
              <option value="deluxe" className="bg-slate-800">Deluxe</option>
              <option value="luxury" className="bg-slate-800">Luxury</option>
              <option value="suite" className="bg-slate-800">Suite</option>
            </select>
          </div>
        </div>

        {/* Guests - Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white/80">Adults</label>
            <select name="adults" className="bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all cursor-pointer appearance-none">
              <option value="1" className="bg-slate-800">1 Adult</option>
              <option value="2" className="bg-slate-800">2 Adults</option>
              <option value="3" className="bg-slate-800">3 Adults</option>
              <option value="4+" className="bg-slate-800">4+ Adults</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white/80">Children</label>
            <select name="children" className="bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all cursor-pointer appearance-none">
              <option value="0" className="bg-slate-800">0 Child</option>
              <option value="1" className="bg-slate-800">1 Child</option>
              <option value="2" className="bg-slate-800">2 Children</option>
              <option value="3" className="bg-slate-800">3 Children</option>
            </select>
          </div>
        </div>

        {/* File & Caption (Previous Request) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white/80">ID / Image File</label>
            <input type="file" name="image"  accept="image/*" 
              className="file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-white/20 file:text-white hover:file:bg-white/30 cursor-pointer text-sm outline-none border border-white/10 rounded-xl bg-white/5 p-1" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white/80">Image Caption</label>
            <input type="text" name="caption" placeholder="Caption..." 
              className="bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all" />
          </div>
        </div>

        {/* Suggestions */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-white/80">Suggestions / Special Requests</label>
          <textarea name="suggestions" rows="3" placeholder="Any special requests?" 
            className="bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all resize-none"></textarea>
        </div>

        <button 
          type="submit" 
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all mt-2 active:scale-95 w-full uppercase tracking-widest"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  )
}

export default photoAdd
