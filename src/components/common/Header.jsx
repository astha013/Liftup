import React from 'react'
import { TbBusinessplan } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { connectWallet } from '../../services/blockchain'
import { truncate, useGlobalState } from '../../store'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-green-500 to-blue-600 p-2 rounded-lg">
                <TbBusinessplan className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Liftup
              </span>
              <span className="text-xs text-gray-500 -mt-1">Crowdfunding</span>
            </div>
          </Link>

          {/* <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              Projects
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              About
            </Link>
          </nav> */}

          <div className="flex items-center space-x-4">
            {connectedAccount ? (
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-30"></div>
                  <button className="relative bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                    {truncate(connectedAccount, 4, 4, 11)}
                  </button>
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="relative group bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <span className="relative z-10">Connect Wallet</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header