import React from 'react'
import { FaEthereum, FaUser, FaClock, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import Identicon from 'react-identicons'
import moment from 'moment'
import { truncate } from '../../store'


const ProjectBackers = ({ backers }) => {
  return (
    <div className="flex flex-col justify-center items-start md:px-6 mx-auto">
      <div className="w-full mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <FaUser className="mr-3 text-green-600" />
          Project Backers ({backers?.length || 0})
        </h2>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-white">
              <div className="flex items-center space-x-2">
                <FaUser className="text-lg" />
                <span className="font-semibold">Backer</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEthereum className="text-lg" />
                <span className="font-semibold">Contribution</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-lg" />
                <span className="font-semibold">Status</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaClock className="text-lg" />
                <span className="font-semibold">Time</span>
              </div>
            </div>
          </div>
          
          <div className="max-h-[calc(100vh_-_25rem)] overflow-y-auto">
            {backers && backers.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {backers.map((backer, i) => (
                  <Backer key={i} backer={backer} index={i} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-gray-500">
                <FaUser className="text-6xl mb-4 opacity-20" />
                <p className="text-lg font-medium">No backers yet</p>
                <p className="text-sm">Be the first to support this project!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const Backer = ({ backer, index }) => (
  <div className="p-6 hover:bg-gray-50 transition-colors duration-200 group">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
      {/* Backer Info */}
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Identicon
            className="h-12 w-12 rounded-full shadow-md border-2 border-gray-200 group-hover:border-green-400 transition-colors duration-200"
            string={backer.owner}
            size={48}
          />
          <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
            {index + 1}
          </div>
        </div>
        <div>
          <p className="font-medium text-gray-800 group-hover:text-green-600 transition-colors duration-200">
            {truncate(backer.owner, 4, 4, 11)}
          </p>
          <p className="text-xs text-gray-500">Supporter</p>
        </div>
      </div>

      {/* Contribution */}
      <div className="flex items-center space-x-2">
        <div className="bg-gradient-to-r from-green-500 to-blue-600 p-2 rounded-full">
          <FaEthereum className="text-white text-sm" />
        </div>
        <div>
          <p className="font-bold text-gray-800 text-lg">
            {backer.contribution} ETH
          </p>
          <p className="text-xs text-gray-500">Contribution</p>
        </div>
      </div>

      {/* Refund Status */}
      <div className="flex items-center space-x-2">
        {backer.refunded ? (
          <div className="flex items-center space-x-2 text-red-600">
            <FaTimesCircle className="text-lg" />
            <span className="font-medium">Refunded</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2 text-green-600">
            <FaCheckCircle className="text-lg" />
            <span className="font-medium">Active</span>
          </div>
        )}
      </div>

      {/* Time */}
      <div className="flex items-center space-x-2">
        <div className="bg-gray-100 p-2 rounded-full">
          <FaClock className="text-gray-600 text-sm" />
        </div>
        <div>
          <p className="font-medium text-gray-800">
            {moment(Number(backer.timestamp) * 1000).fromNow()}
          </p>
          <p className="text-xs text-gray-500">
            {moment(Number(backer.timestamp) * 1000).format('MMM DD, YYYY')}
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectBackers