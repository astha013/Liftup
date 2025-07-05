import React from 'react'
import { useEffect } from 'react'
import AddButton from '../components/common/AddButton'
import CreateProject from '../components/modals/CreateProject'
import Hero from '../components/common/Hero'
import Projects from '../components/projects/Projects'
import { loadProjects } from '../services/blockchain'
import { useGlobalState } from '../store'

const Home = () => {
  const [projects] = useGlobalState('projects')
  
useEffect(() => {
  const fetchProjects = async () => {
    try {
      await loadProjects();
    } catch (err) {
      console.error("Failed to load projects:", err);
    }
  };

  fetchProjects();
}, []);


  return (
    <>
      <Hero />
      <Projects projects={projects} />
      <CreateProject />
      <AddButton />
    </>
  )
}

export default Home