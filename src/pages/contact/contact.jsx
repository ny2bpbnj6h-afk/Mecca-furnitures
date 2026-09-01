import ContactHero from '../../components/contact/contact-hero.jsx'
import ContactGrid from '../../components/contact/contact-grid.jsx'

function Contact() {
  return (
    <div className="mx-auto flex w-full max-w-container-max flex-col gap-section-gap px-margin-mobile py-section-gap md:px-margin-desktop">
      <ContactHero />
      <ContactGrid />
    </div>
  )
}

export default Contact
