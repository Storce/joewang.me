import React, { useEffect, useState } from 'react';
import projectsData from './assets/projects.json'; // Import the JSON file
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon

function Project() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
            <h1 className="heading1" style={{ marginBottom: '2rem' }}>My Projects</h1> {/* Apply heading1 class */}
            {projects.map((project, index) => (
                <div key={index} className="project-box">
                    <h2 className="heading2" style={{ marginTop: '-0.5rem', marginBottom: '-1rem' }}>
                        <a href={project.github} target="_blank" rel="noopener noreferrer"> <b>{project.name}</b> <FaGithub /></a>
                    </h2>
                    <p className="paragraph" style={{ marginBottom: '-1rem' }}> {project.description}</p>
                    <p className="paragraph" style={{ marginBottom: '-1rem' }}><strong>Start Date:</strong> {project.date}</p>
                    <p className="paragraph" style={{ marginBottom: '0rem' }}><strong>Languages & Tools:</strong> {project.tools}</p>
                </div>
            ))}
        </div>
    );
}

export default Project;