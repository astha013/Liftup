import React from 'react'
import { setGlobalState, useGlobalState } from '../../store'
import { motion } from 'framer-motion'

const Hero = () => {
  const [stats] = useGlobalState('stats')

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-r from-green-300 to-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-8"
          >
            <span className="block text-gray-900 mb-4">
              Bring creative projects to life
            </span>
            <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              on Liftup
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            The decentralized crowdfunding platform that empowers creators and connects them with supporters worldwide through blockchain technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <button
              onClick={() => setGlobalState('createModal', 'scale-100')}
              className="relative group bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Launch Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            </button>

            <button className="relative group bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-green-500 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <span className="relative z-10">Explore Projects</span>
            </button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative backdrop-blur-sm bg-white/70 border border-gray-200/50 rounded-2xl p-8 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent text-4xl font-bold mb-2">
                    {stats?.totalProjects || 0}
                  </div>
                </div>
                <div className="text-gray-600 font-medium">Active Projects</div>
              </div>

              <div className="text-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-4xl font-bold mb-2">
                    {stats?.totalBacking || 0}
                  </div>
                </div>
                <div className="text-gray-600 font-medium">Total Backers</div>
              </div>

              <div className="text-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-yellow-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-green-500 to-yellow-600 bg-clip-text text-transparent text-4xl font-bold mb-2">
                    {stats?.totalDonations || 0}
                  </div>
                </div>
                <div className="text-gray-600 font-medium">ETH Raised</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero