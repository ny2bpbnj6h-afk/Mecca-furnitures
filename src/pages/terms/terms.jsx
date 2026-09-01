import TermsHeader from '../../components/terms/terms-header.jsx'
import TermsToc from '../../components/terms/terms-toc.jsx'
import TermsContent from '../../components/terms/terms-content.jsx'

function Terms() {
  return (
    <div className="mx-auto w-full max-w-container-max px-margin-mobile pb-section-gap pt-24 md:px-margin-desktop">
      <TermsHeader />
      <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-gutter lg:grid-cols-12">
        <TermsToc />
        <TermsContent />
      </div>
    </div>
  )
}

export default Terms
