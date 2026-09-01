const details = [
  { icon: 'mail', label: 'Email Inquiry', value: 'concierge@meccafurnitures.com' },
  { icon: 'phone', label: 'Direct Line', value: '+1 (800) 555-0199' },
  { icon: 'schedule', label: 'Hours of Operation', value: 'Mon-Fri, 9:00 AM - 6:00 PM EST' },
]

function ContactDetails() {
  return (
    <div className="flex h-full flex-col justify-center rounded-xl border border-surface-variant bg-surface-container-lowest p-8 shadow-[0_4px_40px_rgba(115,92,0,0.04)]">
      <h2 className="mb-6 font-headline-md text-headline-md text-primary">
        Concierge Desk
      </h2>
      <div className="space-y-6">
        {details.map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            <span className="material-symbols-outlined mt-1 text-secondary">
              {item.icon}
            </span>
            <div>
              <h3 className="mb-1 font-label-sm text-label-sm uppercase tracking-wider text-on-surface">
                {item.label}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContactDetails
