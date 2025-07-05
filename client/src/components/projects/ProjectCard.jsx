import React from 'react'
import Jdenticon from 'react-jdenticon'
import { Link } from 'react-router-dom'
import { FaEthereum, FaUsers, FaClock } from 'react-icons/fa'
import { daysRemaining, truncate } from '../../store'

const ProjectCard = ({ project }) => {
  const expired = new Date().getTime() > Number(project?.expiresAt + '000')
  const progressPercentage = Math.min((project.raised / project.cost) * 100, 100)

  const getStatusColor = () => {
    switch(project.status) {
      case 0: return 'text-blue-500 bg-blue-50'
      case 1: return 'text-green-500 bg-green-50'
      case 2: return 'text-gray-500 bg-gray-50'
      case 3: return 'text-red-500 bg-red-50'
      case 4: return 'text-orange-500 bg-orange-50'
      default: return 'text-gray-500 bg-gray-50'
    }
  }

  const getStatusText = () => {
    switch(project.status) {
      case 0: return 'Open'
      case 1: return 'Accepted'
      case 2: return 'Reverted'
      case 3: return 'Deleted'
      case 4: return 'Paid'
      default: return 'Unknown'
    }
  }

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      
      <Link to={`/projects/${project.id}`} className="block relative z-20">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            src={project.imageURL}
            alt={project.title}
          />
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
              {getStatusText()}
            </span>
          </div>

          {/* Progress overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
            <div className="flex items-center justify-between text-white text-sm">
              <span className="flex items-center">
                <FaEthereum className="mr-1" />
                {project.raised} ETH
              </span>
              <span className="flex items-center">
                <FaClock className="mr-1" />
                {expired ? 'Expired' : `${daysRemaining(project.expiresAt)} left`}
              </span>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
            {truncate(project.title, 50, 0, 53)}
          </h3>

          {/* Creator Info */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative">
              <Jdenticon
                className="rounded-full ring-2 ring-gray-100 group-hover:ring-green-200 transition-all duration-200"
                string={project.owner}
                size={32}
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {truncate(project.owner, 4, 4, 11)}
              </p>
              <p className="text-xs text-gray-500">Project Creator</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                {progressPercentage.toFixed(1)}% funded
              </span>
              <span className="text-sm text-gray-500">
                Goal: {project.cost} ETH
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <FaUsers className="mr-1" />
              <span>{project.backers} {project.backers === 1 ? 'Backer' : 'Backers'}</span>
            </div>
            <div className="flex items-center">
              <FaEthereum className="mr-1 text-blue-500" />
              <span className="font-medium">{project.raised} ETH raised</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProjectCard