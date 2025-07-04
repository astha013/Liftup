import React, { useEffect, useState } from 'react'
import { getGlobalState, setGlobalState } from '../../store'
import ChatAuth from './ChatAuth'
import Chat from '../../views/Chat'

const ChatModal = () => {
  const [scale, setScale] = useState('scale-0')

  useEffect(() => {
    const interval = setInterval(() => {
      setScale(getGlobalState('chatModal'))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`w-full h-full fixed bottom-4 right-4 transform transition-transform duration-300 ${scale} z-50`}>
      <div className="bg-white p-4 w-[400px] h-[550px] rounded-xl shadow-xl relative">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={() => setGlobalState('chatModal', 'scale-0')}
        >
          ✖
        </button>

        <ChatAuth />
        <Chat />
      </div>
    </div>
  )
}

export default ChatModal
