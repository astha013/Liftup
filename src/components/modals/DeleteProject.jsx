import React from 'react'
import { FaTimes, FaExclamationTriangle, FaTrash, FaShieldAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { deleteProject } from '../../services/blockchain'
import { useGlobalState, setGlobalState } from '../../store'

const DeleteProject = ({ project }) => {
  const [deleteModal] = useGlobalState('deleteModal')
  const navigate = useNavigate()

  const handleSubmit = async () => {
    await deleteProject(project?.id)
    toast.success('Project deleted successfully, will reflect in 30sec.')
    setGlobalState('deleteModal', 'scale-0')
    navigate('/')
  }

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 transition-transform duration-300 ${deleteModal}`}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-md overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-pink-600 p-6 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <FaExclamationTriangle className="text-xl" />
              </div>
              <h2 className="text-xl font-bold">Delete Project</h2>
            </div>
            <button
              onClick={() => setGlobalState('deleteModal', 'scale-0')}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors duration-200"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>
          <p className="text-white/80 text-sm mt-2">
            This action cannot be undone. Please confirm carefully.
          </p>
        </div>

        <div className="p-6 space-y-6">
          {/* Project Info */}
          <div className="text-center space-y-4">
            <div className="relative mx-auto w-24 h-24 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={
                  project?.imageURL || 
                  'https://media.wired.com/photos/5926e64caf95806129f50fde/master/pass/AnkiHP.jpg'
                }
                alt={project?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-red-500/20 rounded-2xl"></div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{project?.title}</h3>
              <p className="text-sm text-gray-600">
                Project ID: #{project?.id}
              </p>
            </div>
          </div>

          {/* Warning Message */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 space-y-3">
            <div className="flex items-start space-x-3">
              <FaExclamationTriangle className="text-red-500 text-xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-800 mb-2">
                  Are you absolutely sure?
                </h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• This will permanently delete your project</li>
                  <li>• All project data will be lost forever</li>
                  <li>• Backers will be notified of the deletion</li>
                  <li>• This action cannot be reversed</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
            <div className="flex items-center space-x-3 text-gray-700">
              <FaShieldAlt className="text-lg" />
              <div>
                <p className="text-sm font-medium">Security Notice</p>
                <p className="text-xs text-gray-600">
                  Blockchain transactions are irreversible. Please double-check before proceeding.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={() => setGlobalState('deleteModal', 'scale-0')}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-xl transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <FaTrash className="text-sm" />
              <span>Delete Forever</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteProject