import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  subtitle, 
  children, 
  maxWidth = 'max-w-md',
  headerIcon: HeaderIcon,
  headerGradient = 'from-blue-500 to-purple-600',
  showCloseButton = true,
  closeOnOverlayClick = true,
  customHeader = null
}) => {
  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 transition-all duration-300 ${
        isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      onClick={handleOverlayClick}
    >
      <div 
        className={`bg-white rounded-2xl shadow-2xl w-11/12 ${maxWidth} overflow-hidden border border-gray-200 transform transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Custom Header or Default Header */}
        {customHeader || (
          <div className={`bg-gradient-to-r ${headerGradient} p-6 text-white`}>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                {HeaderIcon && (
                  <div className="bg-white/20 p-2 rounded-full">
                    <HeaderIcon className="text-xl" />
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-bold">{title}</h2>
                  {subtitle && (
                    <p className="text-white/80 text-sm mt-1">{subtitle}</p>
                  )}
                </div>
              </div>
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors duration-200"
                >
                  <FaTimes className="text-lg" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Modal Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

// Pre-configured modal variants
export const SuccessModal = ({ isOpen, onClose, title, children, ...props }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    title={title}
    headerGradient="from-green-500 to-emerald-600"
    {...props}
  >
    {children}
  </Modal>
)

export const ErrorModal = ({ isOpen, onClose, title, children, ...props }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    title={title}
    headerGradient="from-red-500 to-pink-600"
    {...props}
  >
    {children}
  </Modal>
)

export const WarningModal = ({ isOpen, onClose, title, children, ...props }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    title={title}
    headerGradient="from-yellow-500 to-orange-600"
    {...props}
  >
    {children}
  </Modal>
)

export const InfoModal = ({ isOpen, onClose, title, children, ...props }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    title={title}
    headerGradient="from-blue-500 to-indigo-600"
    {...props}
  >
    {children}
  </Modal>
)

export default Modal