import React from 'react'
import { useState } from 'react'
import { FaTimes, FaPlus, FaImage, FaCalendarAlt, FaEthereum, FaFileAlt, FaRocket } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { createProject } from '../../services/blockchain'
import { useGlobalState, setGlobalState } from '../../store'

const CreateProject = () => {
  const [createModal] = useGlobalState('createModal')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [cost, setCost] = useState('')
  const [date, setDate] = useState('')
  const [imageURL, setImageURL] = useState('')

  const toTimestamp = (dateStr) => {
    const dateObj = Date.parse(dateStr)
    return dateObj / 1000
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title || !description || !cost || !date || !imageURL) return

    const params = {
      title,
      description,
      cost,
      expiresAt: toTimestamp(date),
      imageURL,
    }

    console.log('Creating project with params:', params)

    await createProject(params)
    toast.success('Project created successfully, will reflect in 30sec.')
    onClose()
  }

  const onClose = () => {
    setGlobalState('createModal', 'scale-0')
    reset()
  }

  const reset = () => {
    setTitle('')
    setCost('')
    setDescription('')
    setImageURL('')
    setDate('')
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 transition-transform duration-300 ${createModal}`}
    >
      <div className="bg-white rounded-2xl w-[92%] max-w-lg sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 p-6 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <FaRocket className="text-xl" />
              </div>
              <h2 className="text-xl font-bold">Launch Your Project</h2>
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
            Turn your creative vision into reality with blockchain-powered crowdfunding
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          {/* Project Image Preview */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200 group-hover:border-green-400 transition-colors duration-200">
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
              <FaFileAlt className="text-green-600" />
              <span>Project Title</span>
            </label>
            <input
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              type="text"
              name="title"
              placeholder="Enter an amazing project title..."
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </div>

          {/* Funding Goal */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
              <FaEthereum className="text-green-600" />
              <span>Funding Goal</span>
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-3 pr-12 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                type="number"
                step={0.01}
                min={0.01}
                name="cost"
                placeholder="0.00"
                onChange={(e) => setCost(e.target.value)}
                value={cost}
                required
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                ETH
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Set a realistic funding goal. ≈ ${(cost * 2000).toFixed(2)} USD
            </p>
          </div>

          {/* Campaign Duration */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
              <FaCalendarAlt className="text-green-600" />
              <span>Campaign End Date</span>
            </label>
            <input
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
              <FaImage className="text-green-600" />
              <span>Project Image URL</span>
            </label>
            <input
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
              <FaFileAlt className="text-green-600" />
              <span>Project Description</span>
            </label>
            <textarea
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none h-32"
              name="description"
              placeholder="Tell the world about your project. What makes it special? What will you create?"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
            <p className="text-xs text-gray-500">
              {description.length}/500 characters
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <FaRocket className="text-lg" />
              <span>Launch Project</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateProject