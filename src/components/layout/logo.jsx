const gold = '#C5A55A'
const dark = '#1a1714'
const light = '#fff8f5'

function Logo({ size = 40, variant = 'dark', className = '' }) {
  const fill = variant === 'dark' ? dark : light
  const w = size * 1.6
  return (
    <svg viewBox="0 0 200 170" width={w} height={size} className={className} aria-label="Mecca Furnitures" role="img">
      <path d="M68 52 C68 22, 132 22, 132 52" fill="none" stroke={gold} strokeWidth="5" />
      <polygon points="48,100 48,48 70,30 70,100" fill={fill} />
      <polygon points="152,100 152,48 130,30 130,100" fill={fill} />
      <rect x="70" y="55" width="60" height="45" fill={fill} />
      <polygon points="70,55 100,32 130,55" fill={fill} />
      <circle cx="100" cy="78" r="8" fill={gold} />
      <text x="100" y="128" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="30" letterSpacing="3" fill={fill}>MECCA</text>
      <text x="100" y="148" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="16" letterSpacing="6" fill={fill}>FURNITURES</text>
      <line x1="55" y1="156" x2="145" y2="156" stroke={gold} strokeWidth="1.5" />
      <text x="100" y="167" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontWeight="500" fontSize="6" letterSpacing="2" fill={fill}>EST. 1998 · PREMIUM HOME COLLECTION</text>
    </svg>
  )
}

export default Logo
