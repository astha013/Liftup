import React, { useEffect, useState } from 'react'
import { getGlobalState, setGlobalState, useGlobalState} from '../../store'
import ChatAuth from './ChatAuth'
import Messages from '../chat/Messages'

const ChatModal = ({ projectId, creatorId }) => {
  const [scale, setScale] = useState('scale-0')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser] = useGlobalState('currentUser')

  useEffect(() => {
    const interval = setInterval(() => {
      setScale(getGlobalState('chatModal'))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Check if user is authenticated with CometChat
    if (currentUser) {
      setIsAuthenticated(true)
    }
  }, [currentUser])

  const handleClose = () => {
    setGlobalState('chatModal', 'scale-0')
  }

  const isOpen = scale === 'scale-100'

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col transform transition-all duration-300 ${scale}`}>
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Chat with Creator</h2>
                  <p className="text-sm text-gray-600">Connect directly with the project creator</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden">
              {!isAuthenticated ? (
                <div className="h-full flex items-center justify-center">
                  <ChatAuth onAuthSuccess={() => setIsAuthenticated(true)} />
                </div>
              ) : (
                <Messages 
                  projectId={projectId} 
                  creatorId={creatorId}
                  isOpen={true}
                  onClose={handleClose}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatModal