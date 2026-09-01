import privacySections from './privacy-data.js'

function PrivacyToc() {
  return (
    <aside className="relative hidden lg:col-span-4 lg:block">
      <nav className="sticky top-32 rounded-xl border border-outline-variant/30 bg-surface-container-low p-8">
        <h2 className="mb-6 border-b border-outline-variant/50 pb-4 font-headline-md text-headline-md text-primary">
          Contents
        </h2>
        <ul className="flex flex-col gap-4">
          {privacySections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-on-surface-variant transition-colors duration-300 hover:text-secondary"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default PrivacyToc
