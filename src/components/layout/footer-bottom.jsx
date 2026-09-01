import { Link } from 'react-router'

function FooterBottom() {
  return (
    <div className="mx-auto mt-16 flex max-w-container-max flex-col items-center justify-between border-t border-surface-variant/20 px-margin-mobile pt-8 text-sm text-surface-variant opacity-60 md:flex-row md:px-margin-desktop">
      <span>© 2024 Mecca Furnitures. All rights reserved.</span>
      <div className="mt-4 flex gap-6 md:mt-0">
        <Link to="/privacy" className="transition-colors hover:text-secondary-fixed">
          Privacy Policy
        </Link>
        <Link to="/terms" className="transition-colors hover:text-secondary-fixed">
          Terms of Service
        </Link>
      </div>
    </div>
  )
}

export default FooterBottom
