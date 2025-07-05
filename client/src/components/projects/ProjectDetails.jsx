import React from 'react'
import Jdenticons from 'react-jdenticons'
import { FaEthereum, FaUsers, FaClock, FaShare, FaHeart, FaCalendarAlt, FaChartLine } from 'react-icons/fa'
import { BiChat } from 'react-icons/bi'
import { daysRemaining, setGlobalState, truncate, useGlobalState } from '../../store'
import { payoutProject } from '../../services/blockchain'

const ProjectDetails = ({ project }) => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const expired = new Date().getTime() > Number(project?.expiresAt + '000')
  const progressPercentage = Math.min((project?.raised / project?.cost) * 100, 100)
  
  const getStatusInfo = () => {
    if (expired) return { text: 'Expired', color: 'text-red-500 bg-red-50' }
    
    switch(project?.status) {
      case 0: return { text: 'Active', color: 'text-blue-500 bg-blue-50' }
      case 1: return { text: 'Funded', color: 'text-green-500 bg-green-50' }
      case 2: return { text: 'Reverted', color: 'text-gray-500 bg-gray-50' }
      case 3: return { text: 'Deleted', color: 'text-red-500 bg-red-50' }
      case 4: return { text: 'Completed', color: 'text-orange-500 bg-orange-50' }
      default: return { text: 'Unknown', color: 'text-gray-500 bg-gray-50' }
    }
  }

  const statusInfo = getStatusInfo()

  const handleBackProject = () => {
    setGlobalState('backProject', project)
    setGlobalState('backModal', 'scale-100')
  }

  const handleUpdateProject = () => {
    setGlobalState('updateProject', project)
    setGlobalState('updateModal', 'scale-100')
  }

  const handleDeleteProject = () => {
    setGlobalState('deleteProject', project)
    setGlobalState('deleteModal', 'scale-100')
  }

  const handlePayout = async () => {
    if (connectedAccount) {
      await payoutProject(project?.id)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image and Gallery */}
          <div className="space-y-6">
            <div className="relative group">
              <img
                src={project?.imageURL}
                alt={project?.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all">
                        <FaShare className="w-4 h-4" />
                      </button>
                      <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all">
                        <FaHeart className="w-4 h-4" />
                      </button>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${statusInfo.color}`}>
                      {statusInfo.text}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Creator Info */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4">
                <Jdenticons
                  string={project?.owner}
                  size={60}
                  className="rounded-full ring-4 ring-blue-50"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Project Creator</h3>
                  <p className="text-blue-600 font-medium">{truncate(project?.owner, 4, 4, 11)}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {project?.backers?.length || 0} projects backed
                  </p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Follow
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Project Info */}
          <div className="space-y-8">
            {/* Project Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color}`}>
                  {statusInfo.text}
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <FaCalendarAlt className="w-4 h-4 mr-1" />
                  {daysRemaining(project?.expiresAt)} days left
                </div>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                {project?.title}
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {project?.description}
              </p>
            </div>

            {/* Funding Progress */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900">
                    {project?.raised?.toFixed(2)} ETH
                  </span>
                  <span className="text-lg text-gray-600">
                    of {project?.cost?.toFixed(2)} ETH
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="flex items-center justify-center text-blue-600">
                      <FaChartLine className="w-5 h-5 mr-1" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{progressPercentage.toFixed(1)}%</p>
                    <p className="text-sm text-gray-500">Funded</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-center text-green-600">
                      <FaUsers className="w-5 h-5 mr-1" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{project?.backers?.length || 0}</p>
                    <p className="text-sm text-gray-500">Backers</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-center text-purple-600">
                      <FaClock className="w-5 h-5 mr-1" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{daysRemaining(project?.expiresAt)}</p>
                    <p className="text-sm text-gray-500">Days Left</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              {!expired && project?.status === 0 && (
                <button
                  onClick={handleBackProject}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Back This Project
                </button>
              )}
              
              {connectedAccount === project?.owner && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project?.status === 0 && !expired && (
                    <button
                      onClick={handleUpdateProject}
                      className="bg-yellow-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-yellow-600 transition-all duration-300"
                    >
                      Update Project
                    </button>
                  )}
                  
                  {project?.status === 0 && (
                    <button
                      onClick={handleDeleteProject}
                      className="bg-red-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-red-600 transition-all duration-300"
                    >
                      Delete Project
                    </button>
                  )}
                  
                  {project?.status === 1 && (
                    <button
                      onClick={handlePayout}
                      className="bg-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 col-span-full"
                    >
                      Payout Project
                    </button>
                  )}
                </div>
              )}
              
              <button
                onClick={() => setGlobalState('chatModal', 'scale-100')}
                className="w-full bg-white border-2 border-gray-200 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <BiChat className="w-5 h-5" />
                <span>Chat with Creator</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails