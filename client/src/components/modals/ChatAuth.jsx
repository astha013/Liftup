import React from 'react'
import { useState } from 'react'
import { FaTimes, FaComments, FaUserCircle, FaLock, FaSignInAlt, FaUserPlus } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useGlobalState, setGlobalState } from '../../store'

const ChatAuth = () => {
  const [chatAuthModal] = useGlobalState('chatAuthModal')
  const [isLogin, setIsLogin] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!username || !password) {
      toast.error('Please fill in all fields')
      return
    }

    if (!isLogin && password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    // Simulate authentication
    if (isLogin) {
      toast.success('Logged in successfully! Welcome to chat.')
    } else {
      toast.success('Account created successfully! You can now chat.')
    }
    
    onClose()
  }

  const onClose = () => {
    setGlobalState('chatAuthModal', 'scale-0')
    reset()
  }

  const reset = () => {
    setUsername('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 transform transition-transform duration-300 ${chatAuthModal}`}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-md overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <FaComments className="text-xl" />
              </div>
              <h2 className="text-xl font-bold">
                {isLogin ? 'Join Chat' : 'Create Account'}
              </h2>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors duration-200"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>
          <p className="text-white/80 text-sm mt-2">
            {isLogin 
              ? 'Sign in to join project discussions' 
              : 'Create your account to start chatting'
            }
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Auth Toggle */}
          <div className="flex bg-gray-100 rounded-2xl p-1">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
                isLogin 
                  ? 'bg-white text-purple-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
                !isLogin 
                  ? 'bg-white text-purple-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Username Input */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
              <FaUserCircle className="text-purple-600" />
              <span>Username</span>
            </label>
            <input
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              type="text"
              name="username"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
              <FaLock className="text-purple-600" />
              <span>Password</span>
            </label>
            <input
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>

          {/* Confirm Password (Sign Up Only) */}
          {!isLogin && (
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <FaLock className="text-purple-600" />
                <span>Confirm Password</span>
              </label>
              <input
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                required
              />
            </div>
          )}

          {/* Info Message */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-2xl border border-purple-200">
            <div className="flex items-center space-x-2 text-purple-700">
              <FaComments className="text-lg" />
              <p className="text-sm font-medium">
                {isLogin 
                  ? 'Connect with other project supporters!' 
                  : 'Join the community and start discussions!'
                }
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            {isLogin ? (
              <>
                <FaSignInAlt className="text-lg" />
                <span>Sign In</span>
              </>
            ) : (
              <>
                <FaUserPlus className="text-lg" />
                <span>Create Account</span>
              </>
            )}
          </button>

          {/* Alternative Action */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChatAuth