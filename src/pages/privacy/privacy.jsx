import PrivacyHeader from '../../components/privacy/privacy-header.jsx'
import PrivacyToc from '../../components/privacy/privacy-toc.jsx'
import PrivacyContent from '../../components/privacy/privacy-content.jsx'

function Privacy() {
  return (
    <div className="mx-auto w-full max-w-container-max px-margin-mobile pb-section-gap pt-24 md:px-margin-desktop">
      <PrivacyHeader />
      <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-gutter lg:grid-cols-12">
        <PrivacyToc />
        <PrivacyContent />
      </div>
    </div>
  )
}

export default Privacy
