import React from 'react'
import Identicon from 'react-identicons'
import { useNavigate, useParams } from 'react-router-dom'
import { truncate, useGlobalState } from '../store'
import Messages from '../components/chat/Messages'

const Chat = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [connectedAccount] = useGlobalState('connectedAccount')

  const handleBackToProject = () => {
    navigate(`/projects/${id}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-6">
          <div className="flex justify-between items-center">
            {/* User Info Section */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Identicon
                  className="rounded-full shadow-md ring-2 ring-blue-100"
                  string={connectedAccount}
                  size={40}
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-700">
                  {truncate(connectedAccount, 4, 4, 11)}
                </span>
                <span className="text-xs text-slate-500">Connected Account</span>
              </div>
            </div>

            {/* Back Button */}
            <button
              type="button"
              onClick={handleBackToProject}
              className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 
                text-white font-medium text-sm rounded-xl shadow-md hover:from-blue-700 hover:to-blue-800 
                hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                transform hover:scale-105 transition-all duration-200 ease-in-out"
            >
              <svg 
                className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
              </svg>
              Back to Project
            </button>
          </div>
        </div>

        {/* Chat Messages Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-800 flex items-center">
              <svg 
                className="w-5 h-5 mr-2 text-blue-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                />
              </svg>
              Project Chat
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Real-time collaboration and discussions
            </p>
          </div>
          
          <div className="h-[calc(100vh-280px)] overflow-hidden">
            <Messages gid={`pid_${id}`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat