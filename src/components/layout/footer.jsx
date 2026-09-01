import FooterColumn from './footer-column.jsx'
import FooterBottom from './footer-bottom.jsx'
import Logo from './logo.jsx'

const linkClass =
  'text-surface-variant opacity-80 transition-colors duration-300 ease-in-out hover:text-secondary-fixed'
const socialClass =
  'flex h-8 w-8 items-center justify-center rounded-full border border-surface-variant/30 opacity-80 transition-colors hover:border-secondary-fixed hover:text-secondary-fixed'

function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant bg-primary py-section-gap font-body-md text-body-md text-on-primary">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-4 md:px-margin-desktop">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Logo size={56} variant="light" />
          <p className="mt-2 text-surface-variant opacity-80">
            Crafting timeless elegance for the modern home.
          </p>
        </div>

        <FooterColumn title="Company" links={['Brand Story', 'Quick Links']} />
        <FooterColumn title="Support" links={['Customer Service', 'FAQ']} />

        {/* Stay connected */}
        <div className="flex flex-col gap-4">
          <h4 className="mb-2 text-label-sm uppercase text-secondary-fixed">
            Stay Connected
          </h4>
          <a href="#" className={linkClass}>
            Newsletter
          </a>
          <div className="mt-2 flex gap-4">
            <a href="#" aria-label="LinkedIn" className={socialClass}>
              in
            </a>
            <a href="#" aria-label="Instagram" className={socialClass}>
              ig
            </a>
          </div>
        </div>
      </div>

      <FooterBottom />
    </footer>
  )
}

export default Footer
