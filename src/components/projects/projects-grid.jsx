import projects from './projects-data.js'
import ProjectCard from './project-card.jsx'

function ProjectsGrid() {
  return (
    <section className="mx-auto mb-section-gap grid w-full max-w-container-max grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-2 md:px-margin-desktop">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </section>
  )
}

export default ProjectsGrid
