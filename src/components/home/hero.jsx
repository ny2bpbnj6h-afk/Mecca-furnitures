import { Link } from 'react-router'

const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuATHOKwt8Wr2bfq8bmMCS6SruxZgHFtl_6bhh0mbZhEKGIwSnAgZGzN-WHeo2ykzuGvca4-NL6CoJzTMwSY9IKKEdD7kVgPSR9O7pT6jDh5GIQzbEEHhzd2zjSmeT2yRVmYcvgsEHThtLvkya8Ko8erbJs_3h7y1U5XKglG9mDmLqAfe6GuF-DuypCjc12eJU_DSgrCOkm6lMmx49tKFgqAS3aIZeK2eAD-Jsk3q8yvrRtiuXCDYCQD=s1920'

const primaryButtonClass =
  'inline-flex items-center justify-center rounded bg-primary px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest text-on-primary transition-colors duration-300 hover:bg-tertiary'
const secondaryButtonClass =
  'inline-flex items-center justify-center rounded border border-secondary px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest text-primary transition-colors duration-300 hover:bg-secondary/5'

function Hero() {
  return (
    <section className="relative mx-auto flex h-[85vh] w-full max-w-container-max items-center justify-center px-margin-mobile pb-16 pt-8 md:px-margin-desktop">
      {/* Background image + overlay */}
      <div className="absolute inset-0 overflow-hidden rounded-xl shadow-[0_40px_100px_-20px_rgba(115,92,0,0.08)] md:inset-x-margin-desktop md:inset-y-8">
        <img
          src={heroImage}
          alt="A luxurious living room with a plush cream sofa, warm wood paneling, and soft morning light"
          className="h-full w-full object-cover object-center"
          draggable={false}
        />
        <div className="absolute inset-0 bg-linear-to-r from-background/80 via-background/40 to-transparent md:from-background/60 md:via-transparent" />
      </div>

      {/* Copy */}
      <div className="relative z-10 mx-auto mt-20 w-full max-w-2xl rounded-xl bg-surface-bright/80 p-8 text-center shadow-sm backdrop-blur-sm md:ml-0 md:mr-auto md:mt-0 md:bg-transparent md:p-12 md:text-left md:shadow-none md:backdrop-blur-none">
        <h1 className="mb-6 font-display-lg-mobile text-display-lg-mobile text-on-background md:font-display-lg md:text-display-lg">
          Transform Your Space
        </h1>
        <p className="mx-auto mb-10 max-w-lg font-body-lg text-body-lg text-on-background md:mx-0">
          Discover our curated collection of luxury furniture, designed to
          bring modern elegance and lasting comfort to your home.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
          <Link to="/shop" className={primaryButtonClass}>
            Shop Collection
          </Link>
          <Link to="/shop" className={secondaryButtonClass}>
            New Arrivals
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
