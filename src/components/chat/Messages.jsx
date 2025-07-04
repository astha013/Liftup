import React, { useState, useEffect, useRef } from 'react';
import { Send, User, Crown, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { getMessages, sendMessage, joinGroup } from '../../CometChat';
import { useGlobalState } from '../../store';

const Messages = ({ projectId, creatorId, isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentUser] = useGlobalState('currentUser');
  const [connectedAccount] = useGlobalState('connectedAccount');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && projectId) {
      initializeChat();
    }
  }, [isOpen, projectId]);

  const initializeChat = async () => {
    try {
      setIsLoading(true);
      setError('');
      
      // Join the project group chat
      const groupId = `project_${projectId}`;
      await joinGroup(groupId);
      
      // Load existing messages
      const chatMessages = await getMessages(groupId);
      if (chatMessages && Array.isArray(chatMessages)) {
        setMessages(chatMessages.map(msg => ({
          id: msg.id,
          sender: msg.sender.uid === creatorId ? 'creator' : 'user',
          senderName: msg.sender.name,
          senderId: msg.sender.uid,
          text: msg.text,
          timestamp: new Date(msg.sentAt * 1000),
          status: 'delivered'
        })));
      }
    } catch (err) {
      console.error('Chat initialization error:', err);
      setError('Failed to load chat. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !currentUser) return;

    const tempMessage = {
      id: `temp_${Date.now()}`,
      sender: currentUser.uid === creatorId ? 'creator' : 'user',
      senderName: currentUser.name,
      senderId: currentUser.uid,
      text: newMessage,
      timestamp: new Date(),
      status: 'sending'
    };

    setMessages(prev => [...prev, tempMessage]);
    const messageText = newMessage;
    setNewMessage('');

    try {
      const groupId = `project_${projectId}`;
      const sentMessage = await sendMessage(groupId, messageText);
      
      // Update the temporary message with the real one
      setMessages(prev => prev.map(msg => 
        msg.id === tempMessage.id 
          ? {
              ...msg,
              id: sentMessage.id,
              status: 'delivered'
            }
          : msg
      ));
    } catch (err) {
      console.error('Send message error:', err);
      // Mark message as failed
      setMessages(prev => prev.map(msg => 
        msg.id === tempMessage.id 
          ? { ...msg, status: 'failed' }
          : msg
      ));
    }
  };

  const formatTime = (timestamp) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(timestamp);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'sending':
        return <Clock className="w-3 h-3 text-gray-400 animate-spin" />;
      case 'delivered':
        return <CheckCircle className="w-3 h-3 text-blue-400" />;
      case 'read':
        return <CheckCircle className="w-3 h-3 text-green-400" />;
      case 'failed':
        return <AlertCircle className="w-3 h-3 text-red-400" />;
      default:
        return null;
    }
  };

  const isCurrentUser = (senderId) => {
    return senderId === connectedAccount || senderId === currentUser?.uid;
  };

  const isCreator = (senderId) => {
    return senderId === creatorId;
  };

  if (!isOpen) return null;

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Loading State */}
      {isLoading && (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading chat...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <p className="text-red-600">{error}</p>
            <button 
              onClick={initializeChat}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* Messages */}
      {!isLoading && !error && (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-600 text-lg font-medium">Start the conversation!</p>
                <p className="text-gray-500 text-sm mt-2">Be the first to send a message to the creator</p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${isCurrentUser(message.senderId) ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${isCurrentUser(message.senderId) ? 'order-2' : 'order-1'}`}>
                    <div className="flex items-end gap-2 mb-1">
                      {!isCurrentUser(message.senderId) && (
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isCreator(message.senderId) 
                            ? 'bg-gradient-to-br from-yellow-400 to-orange-500' 
                            : 'bg-gradient-to-br from-gray-400 to-gray-600'
                        }`}>
                          {isCreator(message.senderId) ? (
                            <Crown className="w-4 h-4 text-white" />
                          ) : (
                            <User className="w-4 h-4 text-white" />
                          )}
                        </div>
                      )}
                      
                      {isCurrentUser(message.senderId) && (
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 order-2">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      )}
                      
                      <div className="flex flex-col">
                        {!isCurrentUser(message.senderId) && (
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium text-gray-600">
                              {message.senderName}
                            </span>
                            {isCreator(message.senderId) && (
                              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-medium">
                                Creator
                              </span>
                            )}
                          </div>
                        )}
                        
                        <div
                          className={`px-4 py-3 rounded-2xl ${
                            isCurrentUser(message.senderId)
                              ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white order-1'
                              : isCreator(message.senderId)
                              ? 'bg-gradient-to-r from-yellow-50 to-orange-50 text-gray-800 border-2 border-yellow-200'
                              : 'bg-white text-gray-800 border border-gray-200'
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{message.text}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`flex items-center gap-2 px-2 ${isCurrentUser(message.senderId) ? 'justify-end' : 'justify-start'}`}>
                      <span className="text-xs text-gray-400">{formatTime(message.timestamp)}</span>
                      {isCurrentUser(message.senderId) && getStatusIcon(message.status)}
                    </div>
                  </div>
                </div>
              ))
            )}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-end gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-3">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message to the creator..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <button
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-xl text-white font-medium transition-all duration-200 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Messages;