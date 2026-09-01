import FloatingField from './floating-field.jsx'

function ContactForm() {
  return (
    <div className="rounded-xl border border-surface-variant bg-surface-container-lowest p-8 shadow-[0_4px_40px_rgba(115,92,0,0.04)] md:p-12 lg:col-span-7">
      <h2 className="mb-8 font-headline-lg text-headline-lg text-primary">
        Send an Inquiry
      </h2>
      <form className="space-y-8" onSubmit={(event) => event.preventDefault()}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <FloatingField id="first-name" label="First Name" required />
          <FloatingField id="last-name" label="Last Name" required />
        </div>
        <FloatingField id="email" label="Email Address" type="email" required />
        <div className="relative">
          <select
            id="inquiry-type"
            defaultValue=""
            className="block w-full appearance-none border-0 border-b border-outline bg-transparent px-0 py-3 font-body-md text-on-surface focus:border-secondary focus:ring-0"
          >
            <option value="" disabled>
              Select Inquiry Type
            </option>
            <option value="bespoke">Bespoke Commission</option>
            <option value="collection">Current Collection</option>
            <option value="consultation">Design Consultation</option>
            <option value="other">Other</option>
          </select>
          <span className="material-symbols-outlined pointer-events-none absolute right-0 top-4 text-on-surface-variant">
            expand_more
          </span>
        </div>
        <FloatingField id="message" label="How may we assist you?" type="textarea" required />
        <button
          type="submit"
          className="w-full rounded bg-primary px-10 py-4 font-label-sm text-label-sm uppercase tracking-wider text-on-primary transition-colors duration-300 hover:bg-tertiary md:w-auto"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  )
}

export default ContactForm
