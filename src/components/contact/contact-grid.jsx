import ContactDetails from './contact-details.jsx'
import ContactForm from './contact-form.jsx'

function ContactGrid() {
  return (
    <section className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
      <div className="flex flex-col gap-gutter lg:col-span-5">
        <ContactDetails />
      </div>
      <ContactForm />
    </section>
  )
}

export default ContactGrid
