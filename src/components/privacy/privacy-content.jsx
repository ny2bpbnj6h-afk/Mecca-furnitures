import { Fragment } from 'react'
import privacySections from './privacy-data.js'
import PrivacySection from './privacy-section.jsx'

function PrivacyContent() {
  return (
    <div className="space-y-16 rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-8 shadow-sm md:p-12 lg:col-span-8">
      {privacySections.map((section, index) => (
        <Fragment key={section.id}>
          <PrivacySection section={section} />
          {index < privacySections.length - 1 && (
            <hr className="border-outline-variant/30" />
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default PrivacyContent
