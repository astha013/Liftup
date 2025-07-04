import React from 'react'
import { useState } from 'react'
import { FaTimes, FaEthereum, FaHeart, FaHandHoldingHeart } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { backProject } from '../../services/blockchain'
import { useGlobalState, setGlobalState } from '../../store'

const BackProject = ({ project }) => {
  const [backModal] = useGlobalState('backModal')
  const [amount, setAmount] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!amount) return

    await backProject(project?.id, amount)
    toast.success('Project backed successfully, will reflect in 30sec.')
    setGlobalState('backModal', 'scale-0')
  }

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 transition-transform duration-300 ${backModal}`}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-md p-0 overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 p-6 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <FaHandHoldingHeart className="text-xl" />
              </div>
              <h2 className="text-xl font-bold">Back This Project</h2>
            </div>
            <button
              onClick={() => setGlobalState('backModal', 'scale-0')}
              type="button"
              className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors duration-200"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Project Info */}
          <div className="text-center space-y-4">
            <div className="relative mx-auto w-24 h-24 rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={
                  project?.imageURL ||
                  'https://media.wired.com/photos/5926e64caf95806129f50fde/master/pass/AnkiHP.jpg'
                }
                alt={project?.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{project?.title}</h3>
              <p className="text-sm text-gray-600">Show your support for this amazing project!</p>
            </div>
          </div>

          {/* Amount Input */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contribution Amount
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-green-500 to-blue-600 p-2 rounded-full">
                <FaEthereum className="text-white text-sm" />
              </div>
              <input
                className="w-full pl-14 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-lg font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                type="number"
                step={0.01}
                min={0.01}
                name="amount"
                placeholder="0.00"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                required
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                ETH
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Minimum: 0.01 ETH</span>
              <span>≈ ${(amount * 2000).toFixed(2)} USD</span>
            </div>
          </div>

          {/* Quick Amount Buttons */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Quick Select
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[0.1, 0.5, 1.0, 2.0].map((quickAmount) => (
                <button
                  key={quickAmount}
                  type="button"
                  onClick={() => setAmount(quickAmount.toString())}
                  className="py-2 px-3 bg-gray-100 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 hover:text-white rounded-xl text-sm font-medium transition-all duration-200 border border-gray-200 hover:border-transparent"
                >
                  {quickAmount} ETH
                </button>
              ))}
            </div>
          </div>

          {/* Support Message */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-2xl border border-green-200">
            <div className="flex items-center space-x-2 text-green-700">
              <FaHeart className="text-lg" />
              <p className="text-sm font-medium">
                Your support helps bring creative ideas to life!
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!amount}
            className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100 transition-all duration-200"
          >
            {amount ? `Back with ${amount} ETH` : 'Enter Amount to Continue'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default BackProject