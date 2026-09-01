function ProjectCard({ project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.alt}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <div className="absolute bottom-0 left-0 z-10 w-full translate-y-4 p-8 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
        <span className="mb-3 inline-block rounded bg-surface-tint/80 px-3 py-1 font-label-sm text-label-sm text-secondary-fixed backdrop-blur-sm">
          {project.category}
        </span>
        <h2 className="mb-2 font-headline-lg text-headline-lg text-on-primary">
          {project.title}
        </h2>
        <p className="font-body-md text-body-md text-surface-variant">
          {project.description}
        </p>
      </div>
    </article>
  )
}

export default ProjectCard
