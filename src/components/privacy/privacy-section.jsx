function PrivacySection({ section }) {
  return (
    <section id={section.id} className="scroll-mt-32">
      <h2 className="mb-6 font-headline-lg text-headline-lg text-primary">
        {section.title}
      </h2>
      <div className="space-y-4 text-on-surface-variant">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {section.list && (
          <ul className="mt-4 list-disc space-y-2 pl-6">
            {section.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default PrivacySection
