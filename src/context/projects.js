import React, { useState, useEffect, createContext } from 'react'


const defaultState = {
  projects: []
};

export const ProjectsContext = createContext(defaultState);

export function ProjectsProvider({ children }) { 
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
      './data/projects.json'
      );
      const data = await res.json();

      setProjects(data);
    }

    fetchData();
  }, []);


  return (
    <ProjectsContext.Provider
      value={{projects}}
    >
      { children }
    </ProjectsContext.Provider>
  )
 }
