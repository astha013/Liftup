import React from 'react'
import { setGlobalState } from '../../store'
import { BsPlusLg } from 'react-icons/bs'

const AddButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setGlobalState('createModal', 'scale-100')}
        className="relative group bg-gradient-to-r from-green-500 to-blue-600 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
        <BsPlusLg className="relative z-10 text-xl font-bold" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
      </button>
    </div>
  )
}

export default AddButton