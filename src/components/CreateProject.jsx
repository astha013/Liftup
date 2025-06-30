import React from 'react'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { createProject } from '../services/blockchain'
import { useGlobalState, setGlobalState } from '../store'

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
  <div className="bg-white rounded-2xl w-[92%] max-w-md sm:w-[80%] md:w-[50%] lg:w-[40%] xl:w-[35%] p-6 shadow-2xl border border-gray-200">
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-bold text-gray-800">Add Project</p>
        <button
          onClick={onClose}
          type="button"
          className="text-gray-500 hover:text-red-600 transition"
        >
          <FaTimes size={18} />
        </button>
      </div>

      <div className="w-full flex justify-center">
        <div className="rounded-xl overflow-hidden h-32 w-32 shadow">
          <img
            src={
              imageURL ||
              'https://media.wired.com/photos/5926e64caf95806129f50fde/master/pass/AnkiHP.jpg'
            }
            alt="project"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <input
        className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-700 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
        type="text"
        name="title"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />

      <input
        className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-700 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
        type="number"
        step={0.01}
        min={0.01}
        name="cost"
        placeholder="Cost (ETH)"
        onChange={(e) => setCost(e.target.value)}
        value={cost}
        required
      />

      <input
        className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-700 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
        type="date"
        name="date"
        placeholder="Expires"
        onChange={(e) => setDate(e.target.value)}
        value={date}
        required
      />

      <input
        className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-700 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
        type="url"
        name="imageURL"
        placeholder="Image URL"
        onChange={(e) => setImageURL(e.target.value)}
        value={imageURL}
        required
      />

      <textarea
        className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-700 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none resize-none h-24"
        name="description"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        required
      ></textarea>

      <button
        type="submit"
        className="w-full py-2.5 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition shadow-md"
      >
        Submit Project
      </button>
    </form>
  </div>
</div>

) }

export default CreateProject