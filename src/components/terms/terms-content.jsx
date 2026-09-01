import { Fragment } from 'react'
import termsSections from './terms-data.js'
import TermsSection from './terms-section.jsx'

function TermsContent() {
  return (
    <div className="space-y-16 rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-8 shadow-sm md:p-12 lg:col-span-8">
      {termsSections.map((section, index) => (
        <Fragment key={section.id}>
          <TermsSection section={section} />
          {index < termsSections.length - 1 && (
            <hr className="border-outline-variant/30" />
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default TermsContent
