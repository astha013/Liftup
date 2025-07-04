import React from 'react'
import { useEffect, useState } from 'react'
import { isWalletConnected } from './Liftup'
import { Route, Routes } from 'react-router-dom'
import { useGlobalState } from './store'
import { checkAuthState } from './CometChat'
import Header from './components/common/Header'
import AddButton from './components/common/AddButton'
import CreateProject from './components/modals/CreateProject'
import Home from './views/Home'
import Project from './views/Project'
import Chat from './views/Chat'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const [loaded, setLoaded] = useState(false)
  const [connectedAccount] = useGlobalState('connectedAccount')

  useEffect(() => {
  const init = async () => {
    try {
      await checkAuthState();          // ✅ assume async
      await isWalletConnected();       // ✅ fix typo & assume async
      console.log("Blockchain Loaded");
      setLoaded(true);
    } catch (error) {
      console.error("Failed to init blockchain:", error);
    }
  };

  init();

  return () => {}; // ✅ returns a valid cleanup function (empty here)
}, []);


  return (
    <div className="min-h-screen relative">
      <Header />
      <div className="mt-20"></div>
      
      {loaded ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/chats/:id" element={<Chat />} />
        </Routes>

      ) : null}

      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

      {connectedAccount ? (
        <>
          <AddButton />
          <CreateProject />
        </>
      ) : null}
    </div>
  )
}

export default App