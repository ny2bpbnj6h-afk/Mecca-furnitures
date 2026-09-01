import ImageCard from './image-card.jsx'

const tableImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDErogaw3LmjvNe03hpvOdN1KGnQymWD0vPYFQ6xEX7tFIjm3w5KKfutIFwEs3wBUvD-1cABuMwjhNMzfD4lo1tZ-4lvM3BRJl-qruP6_kY8NRRumx0Ji-vATT1N1u8GXGnIrcNy-_eTBs_r2Y5ztvxqE0Lr_RG_ZegPQwgZe1KqK1uNEyDHjLhsg3hvdt3Emmbh2bZALhwHNwY2uuxiug9CSpjOAKNwISw633kTqIL1V0n_jfiafGa=s1920'

function LongevityCard() {
  return (
    <ImageCard
      className="md:col-span-2"
      image={tableImage}
      alt="A dining table made from reclaimed stone and solid oak in a sunlit room"
      overlayClass="bg-linear-to-r from-background/90 via-background/50 to-transparent"
      contentClass="inset-y-0 left-0 flex max-w-xl flex-col justify-center gap-4 p-8 md:p-12"
    >
      <h3 className="font-headline-lg text-headline-lg text-primary">
        Built for Generations
      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
        True sustainability lies in longevity. We engineer our pieces not for
        the next season, but for the next century, utilizing joinery techniques
        proven by history.
      </p>
    </ImageCard>
  )
}

export default LongevityCard
