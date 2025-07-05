import React from 'react'
import { useState } from 'react'
import { FaTimes, FaEdit, FaImage, FaCalendarAlt, FaFileAlt, FaSave } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { updateProject } from '../../services/blockchain'
import { useGlobalState, setGlobalState } from '../../store'

const UpdateProject = ({ project }) => {
  const [updateModal] = useGlobalState('updateModal')
  const [connectedAccount] = useGlobalState('connectedAccount')
  const [title, setTitle] = useState(project?.title || '')
  const [description, setDescription] = useState(project?.description || '')
  const [date, setDate] = useState(project?.date || '')
  const [imageURL, setImageURL] = useState(project?.imageURL || '')

  // Check if current user is the project owner
  const isOwner = connectedAccount?.toLowerCase() === project?.owner?.toLowerCase()

  const toTimestamp = (dateStr) => {
    const dateObj = Date.parse(dateStr)
    return dateObj / 1000
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!isOwner) {
      toast.error('Only project owner can update this project')
      return
    }

    if (!title || !description || !date || !imageURL) return

    const params = {
      id: project?.id,
      title,
      description,
      expiresAt: toTimestamp(date),
      imageURL,
    }

    await updateProject(params)
    toast.success('Project updated successfully, will reflect in 30sec.')
    onClose()
  }

  const onClose = () => {
    setGlobalState('updateModal', 'scale-0')
  }

  // If user is not the owner, don't render the modal
  if (!isOwner) {
    return null
  }

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 transition-transform duration-300 ${updateModal}`}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <FaEdit className="text-xl" />
              </div>
              <h2 className="text-xl font-bold">Update Project</h2>
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
            Make changes to keep your project fresh and engaging
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          {/* Project Image Preview */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200 group-hover:border-blue-400 transition-colors duration-200">
                <img
                  src={
                    imageURL ||
                    'https://media.wired.com/photos/5926e64caf95806129f50fde/master/pass/AnkiHP.jpg'
                  }
                  alt="project preview"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                <FaImage className="text-white text-2xl" />
              </div>
            </div>
          </div>

          {/* Project Title */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
              <FaFileAlt className="text-blue-600" />
              <span>Project Title</span>
            </label>
            <input
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              type="text"
              name="title"
              placeholder="Enter project title..."
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </div>

          {/* Campaign End Date */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
              <FaCalendarAlt className="text-blue-600" />
              <span>Campaign End Date</span>
            </label>
            <input
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              type="date"
              name="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>

          {/* Project Image URL */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
              <FaImage className="text-blue-600" />
              <span>Project Image URL</span>
            </label>
            <input
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              type="url"
              name="imageURL"
              placeholder="https://example.com/your-project-image.jpg"
              onChange={(e) => setImageURL(e.target.value)}
              value={imageURL}
              required
            />
          </div>

          {/* Project Description */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
              <FaFileAlt className="text-blue-600" />
              <span>Project Description</span>
            </label>
            <textarea
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none h-32"
              name="description"
              placeholder="Update your project description..."
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
            <p className="text-xs text-gray-500">
              {description.length}/500 characters
            </p>
          </div>

          {/* Update Notice */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-2xl border border-blue-200">
            <div className="flex items-center space-x-2 text-blue-700">
              <FaEdit className="text-lg" />
              <p className="text-sm font-medium">
                Updates help keep your supporters engaged and informed!
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <FaSave className="text-lg" />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateProject