import { Link } from 'react-router'

const linkMap = {
  'Brand Story': '/brand-story',
  'Customer Service': '/contact',
}

function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="mb-2 text-label-sm uppercase text-secondary-fixed">
        {title}
      </h4>
      {links.map((label) => {
        const to = linkMap[label]
        const cls =
          'text-surface-variant opacity-80 transition-colors duration-300 ease-in-out hover:text-secondary-fixed'
        return to ? (
          <Link key={label} to={to} className={cls}>
            {label}
          </Link>
        ) : (
          <a key={label} href="#" className={cls}>
            {label}
          </a>
        )
      })}
    </div>
  )
}

export default FooterColumn
