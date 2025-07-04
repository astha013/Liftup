import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BackProject from '../components/modals/BackProject'
import DeleteProject from '../components/modals/DeleteProject'
import ProjectBackers from '../components/projects/ProjectBackers'
import ProjectDetails from '../components/projects/ProjectDetails'
import UpdateProject from '../components/modals/UpdateProject'
import { getBackers, loadProject, loadProjects} from '../services/blockchain'
import { useGlobalState } from '../store'

const Project = () => {
  const { id } = useParams()
  const [loaded, setLoaded] = useState(false)
  const [project] = useGlobalState('project')
  const [backers] = useGlobalState('backers')

  useEffect(() => {
  const fetchData = async () => {
    try {
      await loadProject(id);
      await getBackers(id);
      await loadProjects();
      setLoaded(true);
    } catch (error) {
      console.error("Error loading project details:", error);
    }
  };

  fetchData();
}, [id]); 

  return loaded ? (
    <>
      <ProjectDetails project={project} />
      <UpdateProject project={project} />
      <DeleteProject project={project} />
      <BackProject project={project} />
      <ProjectBackers backers={backers} />
    </>
  ) : null
}

export default Project